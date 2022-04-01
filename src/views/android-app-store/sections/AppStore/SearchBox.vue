<template>
  <div class="control is-search-box has-icons-left">
    <div class="select-item has-dropdown is-hidden-tablet">
      <span class="select-link">Select app category</span
      ><span class="icon select-icon is-small"
        ><img src="/img/android-app-store/dropdown-icon.svg"
      /></span>
      <div class="select-dropdown" id="dropdown-section">
        <a class="select-link default-link category-link is-all">All Apps</a
        ><a class="select-link category-link is-use-case" id="remote"
          >Remote collaboration<span class="icon is-right"
            ><img src="/img/android-app-store/mark-icon.svg" /></span></a
        ><a class="select-link category-link is-use-case" id="presentation"
          >Presentation<span class="icon is-right"
            ><img src="/img/android-app-store/mark-icon.svg" /></span></a
        ><a class="select-link category-link is-use-case" id="project"
          >Project management<span class="icon is-right"
            ><img src="/img/android-app-store/mark-icon.svg" /></span></a
        ><a class="select-link category-link is-type" id="browser"
          >Web browser<span class="icon is-right"
            ><img src="/img/android-app-store/mark-icon.svg" /></span></a
        ><a class="select-link category-link is-type" id="productivity"
          >Productivity<span class="icon is-right"
            ><img src="/img/android-app-store/mark-icon.svg" /></span></a
        ><a class="select-link category-link is-type" id="project"
          >Project management<span class="icon is-right"
            ><img src="/img/android-app-store/mark-icon.svg" /></span></a
        ><a class="select-link category-link is-type" id="design"
          >Design and creativity<span class="icon is-right"
            ><img src="/img/android-app-store/mark-icon.svg" /></span></a
        ><a class="select-link category-link is-type" id="av"
          >Voice and video<span class="icon is-right"
            ><img src="/img/android-app-store/mark-icon.svg" /></span></a
        ><a class="select-link category-link is-type" id="communication"
          >Communication<span class="icon is-right"
            ><img src="/img/android-app-store/mark-icon.svg" /></span></a
        ><a class="select-link category-link is-type" id="file"
          >Cloud storage<span class="icon is-right"
            ><img src="/img/android-app-store/mark-icon.svg" /></span></a
        ><a class="select-link category-link is-type" id="education"
          >Education<span class="icon is-right"
            ><img src="/img/android-app-store/mark-icon.svg" /></span></a
        ><a class="select-link category-link is-type" id="data_viz"
          >Data visualization<span class="icon is-right"
            ><img src="/img/android-app-store/mark-icon.svg" /></span></a
        ><a class="select-link category-link is-type" id="construction"
          >Construction<span class="icon is-right"
            ><img src="/img/android-app-store/mark-icon.svg" /></span></a
        ><a class="select-link category-link is-type" id="vc"
          >Video conference<span class="icon is-right"
            ><img src="/img/android-app-store/mark-icon.svg" /></span
        ></a>
      </div>
    </div>
    <div class="input-box">
      <input
        class="input is-rounded"
        id="search-box"
        type="text"
        placeholder="Search your favorite apps..."
        value=""
      /><span class="icon is-left"
        ><img
          src="/mdi/svg/magnify.892b4d2b2dbb75ab3e07ce9753b2a24eedc8a8e00c19666b41a7bf2081a4122e.svg" /></span
      ><button class="clean-button is-hidden-tablet">
        <img src="/img/android-app-store/clean-input-icon.svg" />
      </button>
    </div>
  </div>
</template>
