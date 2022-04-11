var ExtendShopifyBuy = {
  getTerm: function (planDetails) {
    var planId = planDetails.planId;
    var planTerm = planId.split('-')[planId.split('-').length - 1];
    var textMatching = {
      '1y': '1 year - sold by Extend',
      '2y': '2 years - sold by Extend',
      '3y': '3 years - sold by Extend',
    };
    return textMatching[planTerm];
  },

  insertDecimal: function (num) {
    return (num / 100).toFixed(2);
  },

  getCustomAttribute: function (customAttributes, attributeToFind) {
    if (!customAttributes) return false;
    var attribute = customAttributes.find(function (attribute) {
      return attribute.key === attributeToFind;
    });
    return attribute ? attribute.value : null;
  },

  warrantyAlreadyInCheckout: function (variantId, checkoutItems) {
    const extendWarranties = checkoutItems.filter(function (lineItem) {
      //filter through the customAttributes and grab the referenceId
      var customAttributes = lineItem.customAttributes;
      if (customAttributes && customAttributes.find)
        var referenceId = ExtendShopifyBuy.getCustomAttribute(
          customAttributes,
          'Ref'
        );
      return (
        customAttributes &&
        !ExtendShopifyBuy.getCustomAttribute(
          customAttributes,
          'Extend.LeadToken'
        ) &&
        referenceId &&
        referenceId.toString() === variantId
      );
    });
    return extendWarranties.length > 0;
  },

  leadTokenAlreadyInCheckout: function (leadToken, checkoutItems) {
    const extendWarranties = checkoutItems.filter(function (lineItem) {
      //filter through the customAttributes and grab the referenceId
      var customAttributes = lineItem.customAttributes;
      if (customAttributes && customAttributes.find)
        var refToken = ExtendShopifyBuy.getCustomAttribute(
          customAttributes,
          'Extend.LeadToken'
        );
      return customAttributes && refToken && refToken.toString() === leadToken;
    });
    return extendWarranties.length > 0;
  },

  isWarranty: function (item) {
    return (
      item.customAttributes &&
      ExtendShopifyBuy.getCustomAttribute(item.customAttributes, 'Vendor') ===
        'Extend'
    );
  },
};

window.ExtendShopifyBuy = ExtendShopifyBuy;
