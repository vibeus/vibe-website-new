/* eslint-disable */
export function iframeLoad() {
  popupLoading(false);
}

function popupScheduleModal(fields) {
  if (fields[6].name === 'number_of_boards' && Number(fields[6].value) > 0) {
    document.getElementsByClassName('form-box')[0].remove();
    popupLoading(true);
    const reqFormModal = document.getElementById('req-form-modal');
    reqFormModal.classList.remove('is-active');
    reqFormModal.classList.add('schedule-modal');
    openDemoScheduler(
      null,
      'req-form-modal',
      'https://meetings.hubspot.com/jian-zhao/vibe-follow-up'
    );
    const iframe = document.getElementById('req-form-modal-iframe')
      .firstElementChild;
    iframe.tagName === 'IFRAME' &&
      iframe.addEventListener('load', iframeLoad, true);
  }
}

export function setDemoPageStorage(form, fields) {
  sessionStorage.demoNumberOfBoards = fields[6].value;
  const body = getHubspotBody(form, fields);
  sessionStorage.formBody = JSON.stringify(body);
}

export async function dealSpecificForm(action, fields, form) {
  const formId = action.substring(action.lastIndexOf('/'));
  try {
    switch (formId) {
    // case '/3d6ae527-ade1-410d-91e7-c2f576b231f5': // education webinar form
    case '/51ee84a3-44d7-4371-a486-a4787edd9b66': // business webinar form
      const res1 = setHubspotOriginProperty(form, fields);
      await res1.then(async (r) => {
        if (r.ok) {
          const busWebinarDateObj = await submitWebinarDate(fields);
          if (busWebinarDateObj) {
            fields.push({
              name: 'webinar_date___time',
              value: busWebinarDateObj['webinarDate'],
            });
            fields.push({
              name: 'zoom_webinar_time',
              value: busWebinarDateObj['webinarTimestamp'],
            });
            fields.push({
              name: 'zoom_webinar_join_link',
              value: busWebinarDateObj['webinarJoinLink'],
            });
          }
        }
      });
      break;
    case '/329029b1-7b5a-4456-b026-d5da315297ea': // onboarding webinar 55 form
      const res2 = setHubspotOriginProperty(form, fields);
      await res2.then(async (r) => {
        if (r.ok) {
          const onboardWebinarDateObj = await submitWebinarDate(fields);
          if (onboardWebinarDateObj) {
            fields.push({
              name: 'onboarding_webinar_date___time__text_',
              value: onboardWebinarDateObj['webinarDate'],
            });
            fields.push({
              name: 'onboarding_webinar_date___time__date_',
              value: onboardWebinarDateObj['webinarTimestamp'],
            });
            fields.push({
              name: 'onboarding_webinar_link',
              value: onboardWebinarDateObj['webinarJoinLink'],
            });
          }
        }
      });
      break;

    case '/7b639ff5-82c0-49e5-9652-8309efc6282e': // onboarding webinar 75 form
      const res3 = setHubspotOriginProperty(form, fields);
      await res3.then(async (r) => {
        if (r.ok) {
          const onboard75WebinarDateObj = await submitWebinarDate(fields);
          console.log(onboard75WebinarDateObj);
          if (onboard75WebinarDateObj) {
            fields.push({
              name: 'onboarding_webinar_date___time__text_',
              value: onboard75WebinarDateObj['webinarDate'],
            });
            fields.push({
              name: 'onboarding_webinar_date___time__date_',
              value: onboard75WebinarDateObj['webinarTimestamp'],
            });
            fields.push({
              name: 'onboarding_webinar_link',
              value: onboard75WebinarDateObj['webinarJoinLink'],
            });
          }
        }
      });
      break;
    case '/302a67c7-967f-461f-aa0d-356076c974bc': // staples webinar form
      const staples = getHubspotBody(form, fields);
      const staplesWebinarsDateObj = await submitWebinarDate(fields);
      if (staplesWebinarsDateObj) {
        staples.fields.push({
          name: 'staples_webinar_date',
          value: staplesWebinarsDateObj['webinarTimestamp'],
        });
      }
      break;
    case '/9cafe0a9-b62b-446d-bbd8-e68e8b9b0467': // request a quote form
      const numberOf55Board = document.getElementById('number-of-55-board');
      if (isNotEmpty(numberOf55Board)) {
        const outField = getOutFields(numberOf55Board);
        fields = fields.concat(outField);
        return fields;
      }
      break;
    case '/e140e53a-3124-4c31-ba7f-a5ce2db40eaf':
      setSpinWheelStorage(form, fields);
      break;
    case '/1270333f-4cc2-4450-901d-d4f9b29fed58':
      if (window.location.pathname === '/demo/') {
        setDemoPageStorage(form, fields);
        popupLoading(true);
      }
      break;
    case '/f46de797-344a-4c92-b0d3-3555e229394f': // request a live demo form
      const pathname = window.location.pathname;
      if (pathname === '/demo/' || pathname === '/demo/live-demo-form/') {
        setDemoPageStorage(form, fields);
      }
      popupScheduleModal(fields); // request a live demo 表单弹出calendar
      break;
    }
    return false;
  } catch (err) {
    console.log('err: ', err);
  }
}

export function getHubspotUtk() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)hubspotutk\s*\=\s*([^;]*).*$)|^.*$/,
    '$1'
  );
}

export function getHubspotBody(form, fields) {
  console.log('fields: ', fields);
  const hutk = getHubspotUtk();
  const body = { fields };

  if (hutk)
    body.context = { hutk };

  // add legalConsentOptions for gdpr
  const consentToProcessElt = form.querySelector('.consent-to-process');
  const consentToCommunicateElt = form.querySelector('.consent-to-communicate');
  if (consentToProcessElt && consentToCommunicateElt) {
    body.legalConsentOptions = {
      consent: {
        consentToProcess: true,
        text: consentToProcessElt.dataset.text,
        communications: [
          {
            value: true,
            subscriptionTypeId: parseInt(
              consentToCommunicateElt.dataset.subscriptionTypeId
            ),
            text: consentToCommunicateElt.dataset.text,
          },
        ],
      },
    };
  }

  return body;
}
