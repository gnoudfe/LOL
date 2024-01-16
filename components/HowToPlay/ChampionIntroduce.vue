<template>
  <div class="champion-introduce-container">
    <div class="champion-introduce-content-container">
      <div
        class="champion-introduce-img-container"
        v-for="champ in champions"
        :key="champ.id"
        :class="{ 'active-champ': currentActiveChamp === champ.id }"
      >
        <img :src="champ.src" alt="champion background image" />
      </div>

      <div class="champion-introduce-content-inner-wrapper">
        <div class="champion-introduce-text-container">
          <div
            ref="championHeadContainer"
            class="champion-introduce-head-container"
            :class="{ 'first-show': isAccess }"
          >
            <h3 class="champion-introduce-heading">HÃY CÙNG GẶP GỠ</h3>
            <h2 class="champion-introduce-title">CÁC VỊ TƯỚNG</h2>
          </div>

          <div
            class="mode-video-thumbnail-container"
            :class="{ 'first-show': isAccess }"
          >
            <div ref="canvasContainer" class="canvas-circle-container">
              <canvas
                ref="canvasCircle"
                class="canvas-circle"
                :width="canvasSize.width"
                :height="canvasSize.height"
              ></canvas>
            </div>
            <div class="mode-svg-outsite-container">
              <svg class="mode-svg-outsite" viewBox="0 0 100 100" style="">
                <path
                  d="M49.22,100l0-1h.08l0,1Zm1.51-1h.09v1h-.08Zm-3,1,0-1h.08l0,1Zm4.52-1h.09l0,1h-.08Zm-6,.91.07-1h.09l-.08,1Zm7.54-1h.08l.07,1h-.08Zm-9.06.86.11-1h.08l-.11,1Zm10.55-1h.08l.11,1h-.09Zm-12.06.82.13-1h.09l-.14,1Zm13.54-1h.08l.14,1h-.08Zm-15,.77.16-1h.09l-.17,1Zm16.53-1h.08l.17,1h-.09Zm-18,.71.2-1,.08,0-.2,1Zm19.5-1,.08,0,.19,1-.08,0Zm-21,.66.23-1,.08,0-.23,1Zm22.45-1,.08,0,.22,1-.07,0Zm-23.93.6.26-1,.07,0-.25,1Zm25.38-1,.08,0,.25,1-.07,0Zm-26.85.55L36,97l.08,0-.29,1ZM64,97l.08,0,.28,1-.08,0Zm-29.75.5.32-1,.08,0-.31,1Zm31.17-1,.08,0,.32,1-.08,0ZM32.8,97l.35-1,.08,0-.34,1Zm34-.94.08,0,.34,1-.08,0Zm-35.45.39.38-.93.07,0-.37.93Zm36.85-.92.08,0,.37.94-.08,0ZM30,95.84l.4-.93.08,0-.4.92Zm39.63-.92.08,0,.4.93-.08,0Zm-41,.28.43-.9.07,0-.43.91ZM71,94.29l.08,0,.43.91-.08,0Zm-43.74.24.46-.89.07,0-.45.9Zm45.09-.9.07,0,.46.9-.08,0Zm-46.43.19.48-.88.08,0-.49.88Zm47.76-.9.06,0,.48.88-.07,0Zm-49.08.14.51-.86.07,0-.51.87Zm50.37-.87.07,0,.51.87-.07,0Zm-51.67.08.54-.85.07,0-.54.85Zm52.94-.87.07,0,.54.85-.07,0ZM22,91.43l.56-.83.07.05-.57.83Zm55.46-.85.07,0,.57.83-.07,0Zm-56.71,0,.59-.82.06.05-.58.82Zm57.94-.83.06,0,.6.81-.07.05Zm-59.16-.08.61-.8.07.05-.62.8Zm60.36-.82.06,0,.62.8-.07,0ZM18.33,88.7l.64-.78L19,88l-.64.77Zm62.73-.8.06-.05.64.77-.07.06Zm-63.89-.18.66-.76.06.06-.66.75Zm65-.79.06-.05.66.76-.06,0ZM16,86.7l.69-.74.06.06-.68.74Zm67.28-.77.06-.05.69.74-.07,0Zm-68.38-.28.71-.72.06.06-.71.72Zm69.46-.75.06-.06.71.72-.06.06Zm-70.53-.34.73-.7.06.07-.73.69Zm71.58-.72,0-.06.73.69-.06.06Zm-72.62-.4.75-.67.06.06-.75.68Zm73.63-.7.06-.06.75.67-.06.06Zm-74.63-.45.77-.65.05.07-.76.65Zm75.61-.67.06-.07.77.65-.06.07Zm-76.58-.51.79-.62,0,.06-.78.63Zm77.53-.65.05-.06.79.62,0,.07ZM9.92,79.91l.81-.61,0,.07L10,80Zm79.37-.63,0-.07.81.6-.05.07ZM9,78.67l.82-.58.05.07-.83.58Zm81.14-.6,0-.07.83.58-.05.06Zm-82-.66L9,76.85l.05.08-.85.55ZM91,76.83l0-.07.84.55,0,.08ZM7.35,76.12l.86-.53,0,.07-.86.53Zm84.45-.55,0-.07.86.53,0,.07ZM6.57,74.8l.87-.5,0,.08-.88.5Zm86-.51,0-.07.88.5,0,.07ZM5.83,73.47,6.72,73l0,.08-.89.47ZM93.28,73l0-.07.89.47,0,.08ZM5.14,72.11l.9-.45,0,.08-.91.44ZM94,71.66l0-.08.9.45,0,.07ZM4.48,70.73l.92-.42,0,.07-.92.42Zm90.12-.42,0-.07.91.41,0,.08Zm-90.73-1,.92-.38,0,.07-.93.39ZM95.2,69l0-.08.93.39,0,.08Zm-91.9-1,.94-.35,0,.07L3.33,68Zm92.45-.33,0-.08.94.36,0,.08Zm-93-1.1,1-.33,0,.08-1,.33Zm93.5-.31,0-.07,1,.33,0,.08ZM2.29,65l1-.29,0,.08-1,.3Zm94.45-.26,0-.08,1,.3,0,.08ZM1.85,63.55l1-.27,0,.08-1,.28Zm95.32-.24,0-.08,1,.27,0,.09ZM1.46,62.08l1-.24,0,.08-1,.24Zm96.09-.21,0-.08,1,.24,0,.08ZM1.12,60.59l1-.21,0,.08-1,.22Zm96.77-.18,0-.08,1,.22,0,.08ZM.82,59.1l1-.18,0,.08-1,.18ZM98.18,59l0-.08,1,.18,0,.08ZM.57,57.6l1-.16,0,.09-1,.15Zm97.86-.12v-.09l1,.15v.09ZM.36,56.09l1-.13v.09l-1,.12ZM98.63,56v-.09l1,.12v.09ZM.2,54.57l1-.09v.08l-1,.09Zm98.59-.06v-.08l1,.09v.08ZM.09,53.05l1-.06v.08l-1,.06Zm98.82,0v-.08l1,.06v.08ZM0,51.52l1,0v.09l-1,0Zm99,0v-.09l1,0v.09Zm0-3.07,1,0v.09l-1,0ZM0,48.49v-.08l1,0v.09ZM98.9,47l1-.06V47l-1,0ZM.09,47v-.08l1,.06V47Zm98.7-1.5,1-.09v.08l-1,.1ZM.2,45.45v-.09l1,.1v.08ZM98.63,44l1-.13V44l-1,.12ZM.36,43.94v-.09l1,.12v.08Zm98.07-1.43,1-.16,0,.09-1,.15ZM.57,42.42v-.08l1,.15v.09ZM98.18,41l1-.18v.08l-1,.18ZM.82,40.92v-.08l1,.18v.08Zm97.06-1.35,1-.22,0,.09-1,.21ZM1.12,39.42v-.08l1,.22,0,.08Zm96.43-1.31,1-.24,0,.08-1,.24ZM1.46,37.94l0-.08,1,.24,0,.08Zm95.7-1.27,1-.28,0,.09-1,.27ZM1.85,36.46l0-.08,1,.28,0,.08Zm94.88-1.22,1-.31,0,.08-1,.31ZM2.28,35l0-.08,1,.31,0,.08Zm94-1.19.95-.33,0,.08-.95.33Zm-93.5-.26,0-.08,1,.33,0,.09Zm93-1.14.94-.37,0,.08-.94.36ZM3.29,32.12l0-.08.94.36,0,.08Zm.56-1.41,0-.08.93.39,0,.08ZM95.18,31l.93-.39,0,.07-.93.39ZM4.46,29.31l0-.07.91.42,0,.07Zm90.12.33.92-.41,0,.07-.91.42ZM5.11,27.94l0-.07.9.44,0,.08Zm88.83.35.9-.44,0,.07-.9.45ZM5.8,26.59l0-.08.89.48,0,.07ZM93.25,27l.89-.47,0,.07-.89.47ZM6.54,25.25l0-.07.87.5,0,.07Zm86,.4.87-.5,0,.07-.87.5ZM7.31,23.94l.05-.07.85.53,0,.07Zm84.45.42.86-.52,0,.07-.86.53ZM8.13,22.66l0-.07.84.55,0,.07ZM91,23.1l.84-.55,0,.07-.84.55ZM9,21.4l0-.07.82.58,0,.06Zm81.14.47.82-.58,0,.07-.82.57ZM9.87,20.16l.05-.07.81.61-.05.06Zm79.37.5.81-.61,0,.07-.81.6ZM10.8,19l0-.06.79.62-.05.07Zm77.53.52.78-.63.06.07-.79.63Zm-76.57-1.7.06-.06.77.65-.06.06Zm75.62.55.76-.66.06.07-.77.65Zm-74.62-1.7.06-.06.75.67-.06.07Zm73.63.57.75-.67.06.06-.75.67ZM13.8,15.5l.06-.06.72.7-.05.06Zm71.58.6.72-.7.06.06-.73.7ZM14.87,14.42l.06-.06.7.72-.06.05ZM84.33,15l.7-.71.06,0-.71.72ZM16,13.36,16,13.3l.68.74-.06.06ZM83.24,14l.69-.74.06.06-.69.74ZM17.1,12.34l.06-.06.66.76-.06.06Zm65,.67.66-.76.06.05-.66.76ZM18.26,11.35l.07,0,.64.78-.07.05ZM81,12l.64-.78.06.06-.64.78ZM19.46,10.4l.06-.05.62.8-.07,0Zm60.36.72.61-.8.07,0-.62.8ZM20.68,9.49l.07-.05.59.81-.07.05Zm57.94.74.59-.82.07.05-.59.81ZM21.93,8.61l.07,0,.56.84-.07,0Zm55.47.76L78,8.54l.07,0-.56.84ZM23.2,7.77l.08,0,.54.85-.08,0Zm53,.78.54-.85.07,0-.54.85ZM24.51,7l.07,0,.51.87-.07,0Zm50.37.81.51-.87.07,0L75,7.82Zm-49-1.57.08,0,.48.88-.07,0ZM73.58,7l.49-.88.07,0-.49.88ZM27.18,5.49l.07,0,.46.89-.07,0Zm45.08.85.46-.9.08,0-.46.9ZM28.55,4.82l.08,0,.43.91-.08,0Zm42.38.86.43-.91.07,0L71,5.72Zm-41-1.5.08,0,.4.92-.08,0Zm39.63.89.4-.93.08,0-.4.92ZM31.35,3.59l.08,0,.37.93-.08,0Zm36.85.9.37-.93.08,0-.38.93ZM66.8,4l.35-1,.08,0-.35,1ZM32.78,3l.08,0,.34,1-.08,0Zm32.61.43.31-1,.09,0-.32,1ZM34.22,2.54l.08,0,.32,1-.08,0ZM64,3l.29-1,.08,0L64,3ZM35.68,2.08l.08,0L36,3,36,3Zm26.84.54.26-1,.08,0-.26,1Zm-25.38-1,.09,0,.25,1-.08,0Zm23.93.6.23-1,.08,0-.22,1Zm-22.44-1h.08l.22,1-.08,0Zm21,.65.2-1h.08l-.2,1ZM40.12,1h.08l.2,1-.09,0Zm18,.71.17-1,.08,0-.16,1ZM41.61.69h.09l.16,1-.08,0Zm15.06.76.13-1,.09,0-.14,1ZM43.12.46h.09l.13,1h-.08Zm12.06.81.11-1h.08l-.1,1ZM44.64.28h.08l.11,1h-.09Zm9,.86.08-1h.08l-.07,1Zm-7.52-1h.07l.07,1h-.08Zm6,.91,0-1h.08l0,1Zm-4.52-1h.08l.05,1h-.09ZM49.2,0h.08l0,1h-.08Zm1.51,1,0-1h.08l0,1Z"
                ></path>
              </svg>
            </div>
            <div
              class="mode-video-wrapper"
              v-for="champ in champions"
              :key="champ.id"
              :class="{ 'active-champ': currentActiveChamp === champ.id }"
            >
              <img :src="champ.src" alt="champion thumbnail" />
            </div>
          </div>
          <div
            class="champion-introduce-champion-des-container"
            v-for="data in championsDetail"
            :key="data.id"
            :class="{ 'active-champ': currentActiveChamp === data.id }"
          >
            <h4 class="champion-introduce-name">{{ data.name }}</h4>
            <p class="champion-introduce-champ-des">{{ data.des }}</p>
            <div class="champion-introduce-level-container">
              <span class="champion-introduce-hard-level">ĐỘ KHÓ</span>

              <div class="details-level-flex">
                <span
                  class="details-infor-diff-level"
                  :class="{
                    active:
                      data.diff === 1 || data.diff === 2 || data.diff === 3,
                  }"
                ></span>
                <span
                  class="details-infor-diff-level"
                  :class="{ active: data.diff === 2 || data.diff === 3 }"
                ></span>
                <span
                  class="details-infor-diff-level"
                  :class="{ active: data.diff === 3 }"
                ></span>
              </div>
            </div>
            <div class="champion-introduce-position-container">
              <div class="champion-introduce-position">
                <span>VỊ TRÍ</span>
                <svg
                  v-if="data.position === 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  class="style__Icon-sc-1ritve6-8-c bUZgdd is-active"
                  aria-label="Xạ Thủ"
                  data-testid="meetchampions:specs:roleicon-0"
                >
                  <path
                    d="M28.69 27.25h6.94l1.92-6.94-13.41-7.91zM71.31 27.25l4.55-14.85-13.41 7.91 1.92 6.94zM71.31 35.39c-1.43 0-12.21-3.83-12.21-3.83L50 42.34l-9.1-10.78s-10.54 3.83-12.21 3.83c-7.67 0-4.79-7.18-4.79-7.18S4.26 48.32 2.11 64.13c0 0 5.74-8.86 24.42-13.17a26.22 26.22 0 0013.89 12.93c-.72-3.11-1.44-6.71-2.15-10.06a22.36 22.36 0 01-3.84-4.31c.72 0 7.19-.72 8.15-.72.71 2.64 4.55 28.74 4.55 28.74l-7 10.3v10L50 93.82l9.82 4.07V87.6l-7-10.3s3.84-26.1 4.55-28.74c.72 0 7.19.72 8.15.72a16.52 16.52 0 01-3.84 4.31 98.08 98.08 0 00-2.15 10.06 25.33 25.33 0 0013.94-12.93c18.68 4.55 24.42 13.17 24.42 13.17C95.74 48.32 76.1 28 76.1 28s2.88 7.42-4.79 7.42"
                  ></path>
                  <path
                    d="M50 2.11l-7.66 21.31h.24L50 33.24l7.42-9.82h.24z"
                  ></path>
                </svg>
                <svg
                  v-if="data.position === 3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  class="style__Icon-sc-1ritve6-8-c bUZgdd is-active"
                  aria-label="Pháp Sư"
                  data-testid="meetchampions:specs:roleicon-1"
                >
                  <path
                    d="M84.48 77.3h13.41l-3.83-12.93h-9.58a36.73 36.73 0 00-27.54 12.45L50 85l-6.94-8.14a36.73 36.73 0 00-27.54-12.49H5.94L2.11 77.3h13.41a36.73 36.73 0 0127.54 12.45l.71.72h-9.1v7.42h30.9v-7.42h-9.1l.71-.72a35.85 35.85 0 0127.3-12.45"
                  ></path>
                  <path
                    d="M56.23 54.31L50 62.21l-6.23-7.9a5.42 5.42 0 01-.24-6.47L50 37.31l6.47 10.53a5.42 5.42 0 01-.24 6.47M42.58 28.93l-7.91 12.69a13.37 13.37 0 00.72 15.09L50 75.14l14.61-18.43a13 13 0 00.72-15.09L50 17l-.48.72a5.58 5.58 0 01-4.31 1.68c-4.07 0-7.18-8.62 4.55-17.24 0 0-28.74 5.5-14.85 30.41z"
                  ></path>
                </svg>
                <svg
                  v-if="data.position === 5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  class="style__Icon-sc-1ritve6-8-c bUZgdd is-active"
                  aria-label="Đấu Sĩ"
                  data-testid="meetchampions:specs:roleicon-2"
                >
                  <path
                    d="M67.84 56.35v5.5c8.62-8.62 14.37 0 14.37 0C112.14 40.78 90.35 2 90.35 2s-.72 17.24-15.08 27.77v16.52c-.24 4.79-3.84 7.9-7.43 10.06M17.79 62.09s4.07-6.46 10.78-2.63L20.91 48.2l6.7-16c-17.24-10.54-18-29.93-18-29.93S-12.14 41 17.79 62.09M26.89 83.89l5.51-18.68-.24-.48L19.23 77.9A17.78 17.78 0 017.5 83.17H3l-1 2.39 12 11.5zM92.27 83.89a16.24 16.24 0 01-11.74-5.27L68.8 66.88l3.83 17.72L85.8 98l12-11.49-1-2.4zM55.87 42.7c0 .24-.24.48-.24.71h.72c5.75.48 7.66 2.64 9.1 7.67a9.35 9.35 0 002.39-1.92c1-1 1.68-1.67 1.68-2.63V28.09a2 2 0 00-1.68-1.92l-31.37-5.74H36a2.39 2.39 0 00-2.39 2.39v6.71l24.9 3.35z"
                  ></path>
                  <path
                    d="M60.18 54c-1.2-5.27-1.44-4.55-5.75-4.79L40.78 48v-3.87h5.51A4.09 4.09 0 0050.36 41l1-3.35L32.4 35l-5 12.22 11.74 17-5.54 18.47L49.88 98l16.53-15.07s-6.23-28.5-6.23-29M49.88 2.23l-4.79 10.29 4.79 3.83 4.79-3.83zM62.1 9.41l1.43 6h6l2.87-11zM30.25 15.4h6l.24-.72 1.2-5.27-10.3-5z"
                  ></path>
                </svg>
                <svg
                  v-if="data.position === 4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  class="style__Icon-sc-1ritve6-8-c bUZgdd is-active"
                  aria-label="Sát Thủ"
                  data-testid="meetchampions:specs:roleicon-4"
                >
                  <path
                    d="M56.59 73.71l1.67-2.88c5.75-9.34 5.51-16 3.83-20.59a39.78 39.78 0 01-9.1 16 2 2 0 01-1.43.48H48.2a2.17 2.17 0 01-1.67-.72 39.78 39.78 0 01-9.1-16c-1.68 4.55-1.68 11.26 3.83 20.59l1.68 2.88-3.36 5.75 10.06 17.72L59.7 79.22z"
                  ></path>
                  <path
                    d="M73.11 38.74c-3.35-4.31-6-10-6-18.91 0-4.07-3.59-8.15-7.66-12-4.79-4.31-5.75-5.74-9.58-5.74s-4.79 1.43-9.34 5.74c-4.07 3.83-7.66 7.91-7.66 12 0 8.86-2.88 14.6-6 18.68L12.76 52.87 2.23 45.69v12.93S2.47 84 39.58 97.89c0 0-14.13-7.18-16.28-31.13-.24-1.67-.24-9.1-.24-10.29A119.77 119.77 0 0036.71 74c-.72-1.2-1.44-2.64-2.16-3.83-5-10.54-4.07-18.2-1.67-23.47a22.77 22.77 0 017.42-8.86l9.58 9.58 9.58-9.58a22.77 22.77 0 017.42 8.86c2.4 5.27 3.59 12.93-1.43 23.23-.72 1.38-1.45 2.58-2.16 4.07a119.77 119.77 0 0013.65-17.53c0 1.19 0 8.62-.24 10.29-2.39 23.95-16.28 31.13-16.28 31.13C97.53 84 97.77 58.62 97.77 58.62V45.69l-10.53 7.18z"
                  ></path>
                </svg>
                <svg
                  v-if="data.position === 2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  class="style__Icon-sc-1ritve6-8-r keFxRI is-active"
                  aria-label="Hỗ Trợ"
                  data-testid="meetchampions:specs:roleicon-6"
                >
                  <path
                    d="M90.4 2.11c0 27.3-25.4 36.63-25.4 36.63L60.94 61a8.39 8.39 0 00-.48 2.39 6.95 6.95 0 0013.89 0 6.7 6.7 0 00-5.75-6.7c6.71-11.5 16.29-6 16.29-6 1.43-1.44 2.63-2.88 3.83-4.07l-7.19-2.88h9.34a38.5 38.5 0 005.75-11.25L87 28.69h10.3a33 33 0 00-6.9-26.58M35.32 38.74S9.93 29.41 9.93 2.11c0 0-9.82 10.77-7.42 26.1h10.3L3.23 32a41.09 41.09 0 004.07 8.9h11l-8.61 3.59a39.83 39.83 0 005.27 6s9.58-5.51 16.29 6a6.7 6.7 0 00-5.75 6.7 6.95 6.95 0 1013.41-2.39zM45.14 22.7l2.63-6.7h4.79l2.63 6.94-5 13.89zm-1-16l-7 16 10.15 25.38v23.71l-5 16 5 10H53l5-10-5-16V48.08L63.1 22.7l-7-16z"
                  ></path>
                </svg>
              </div>
              <div class="champion-introduce-position">
                <span class="champion-introduce-recommend">ĐƯỜNG ĐỀ XUẤT</span>
                <svg
                  v-if="data.lane === 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  class="style__Icon-sc-1ritve6-8-v hvcqLg is-active"
                  aria-label="Đường Dưới"
                  data-testid="meetchampions:specs:laneicon-0"
                >
                  <path
                    d="M11.11 100l16.67-16.67h55.55V27.78L100 11.11V100z"
                  ></path>
                  <path
                    fill-opacity="0.3"
                    d="M38.94 38.94v22.24h22.24V38.94z"
                  ></path>
                  <path
                    fill-opacity="0.3"
                    d="M0 0v88.89l16.67-16.67V16.67h55.55L88.89 0z"
                  ></path>
                </svg>
                <svg
                  v-if="data.lane === 3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  class="style__Icon-sc-1ritve6-8-f cJLUoI is-active"
                  aria-label="Đường Giữa"
                  data-testid="meetchampions:specs:laneicon-1"
                >
                  <path d="M16.67 100L100 16.67V0H83.33L0 83.33V100z"></path>
                  <path
                    fill-opacity="0.3"
                    d="M83.33 50L100 33.33V100H33.33L50 83.33h33.33zM66.67 0L50 16.67H16.67V50L0 66.67V0z"
                  ></path>
                </svg>
                <svg
                  v-if="data.lane === 5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  class="style__Icon-sc-1ritve6-8-l eXrkjC is-active"
                  aria-label="Đường Trên"
                  data-testid="meetchampions:specs:laneicon-2"
                >
                  <path
                    fill-opacity="0.3"
                    d="M11.11 100l16.67-16.67h55.55V27.78L100 11.11V100z"
                  ></path>
                  <path
                    fill-opacity="0.3"
                    d="M38.94 38.94v22.24h22.24V38.94z"
                  ></path>
                  <path d="M0 0v88.89l16.67-16.67V16.67h55.55L88.89 0z"></path>
                </svg>
                <svg
                  v-if="data.lane === 4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  class="style__Icon-sc-1ritve6-8-y iGJnqv is-active"
                  aria-label="Đi Rừng"
                  data-testid="meetchampions:specs:laneicon-4"
                >
                  <path
                    d="M81.82 0a124.75 124.75 0 00-27.27 36.36 160.53 160.53 0 014.54 22.73S63.6 50 63.64 50c0-13.25 18.18-50 18.18-50zM31.82 59.09c-5.54-14.94-12.45-20-27.27-27.27C18.07 43 22.73 72.73 22.73 72.73S39.16 79.68 50 100C66 63 38.2 23.47 18.18 0c9.34 23.47 13.64 34 13.64 59.09zM63.64 72.73v13.63l18.18-18.18c0-15.1.11-29.71 13.63-40.91C77 36.33 63.64 62.09 63.64 72.73z"
                  ></path>
                </svg>
              </div>
            </div>
            <p class="champion-introduce-des-champ">
              {{ data.desChamp }}
            </p>
            <nuxt-link to="/champions">
              <button class="champion-introduce-button">
                <span>KHÁM PHÁ THÊM CÁC VỊ TƯỚNG</span>
              </button>
            </nuxt-link>
          </div>

          <ul class="champion-introduce-list-champ-container">
            <div class="champion-line-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 11.48 16.45"
                class="style__HighlightDiamond-sc-163hjsr-6 PmXKm"
              >
                <path
                  style="fill: none; stroke: rgb(208, 168, 92)"
                  d="M.733 5.726l4.999-5 5 5-5 5z"
                ></path>
                <path
                  style="fill: none; stroke: rgb(208, 168, 92)"
                  d="M3.236 8.226l2.503-2.503 2.503 2.503L5.74 10.73z"
                ></path>
                <path
                  style="fill: none; stroke: rgb(208, 168, 92)"
                  d="M2.23 9.23l-1.5 1.5 5 5 5-5-1.5-1.5"
                ></path>
              </svg>
            </div>
            <li
              class="champion-introduce-champ"
              v-for="champion in champions"
              :key="champion.id"
              :class="{
                'active-champ': currentActiveChamp === champion.id,
              }"
              @click="handleSelectChamp(champion.id)"
              :style="{ transform: calculateTransform(champion.id) }"
            >
              <div class="champion-introduce-champ-image-container">
                <img
                  :src="champion.src"
                  alt="champ image"
                  class="champion-introduce-champ-image"
                />
              </div>
              <span class="champion-introduce-name-champ">
                {{ champion.name }}</span
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="map-section-details-btn-container">
        <button class="map-section-btn" @click="handlePrevChampButton">
          <div>
            <svg
              class="style__Arrow-sc-wb6pjz-8-Left jeqfkJ"
              viewBox="0 0 100 100"
            >
              <path
                d="M96.53,46.53A3.47,3.47,0,1,1,93.06,50,3.47,3.47,0,0,1,96.53,46.53Z"
              ></path>
              <path
                d="M73.76,53.47H13.29l23,23-4.91,4.91L0,50,31.38,18.62l4.91,4.91-23,23H73.76Z"
              ></path>
            </svg>
          </div></button
        ><button class="map-section-btn" @click="handleNextChampButton">
          <div>
            <svg
              class="style__Arrow-sc-wb6pjz-8-Right dFWRIO"
              viewBox="0 0 100 100"
            >
              <path
                d="M3.47 53.47A3.47 3.47 0 116.94 50a3.47 3.47 0 01-3.47 3.47zM26.24 46.53h60.47l-23-23 4.91-4.91L100 50 68.62 81.38l-4.91-4.91 23-23H26.24z"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { handleAccess } from "../../utils/handleAccess";
const championHeadContainer = ref(null);
const isAccess = ref(false);
const currentActiveChamp = ref(0);
const championsDetail = reactive([
  {
    id: 0,
    name: "MISS FORTUNE",
    des: "thợ săn tiền thưởng",
    diff: 2,
    desChamp:
      "Miss Fortune hạ gục kẻ địch bằng những đòn đánh với sức công phá chẳng khác gì đại bác. Cô có thể bắn lẻ từng phát hoặc tung ra một cơn mưa đạn trong giao tranh tổng.",
    position: 1,
    lane: 1,
  },
  {
    id: 1,
    name: "LUX",
    des: "tiểu thư ánh sáng",
    diff: 2,
    desChamp:
      "Lux tấn công kẻ địch từ xa, trói chân kẻ địch tại chỗ để tung ra những đòn đánh chói lòa. Chiêu cuối trong kho tàng phép thuật của cô là tuyệt chiêu bắn ra một dải ánh sáng khổng lồ.",
    position: 3,
    lane: 3,
  },
  {
    id: 2,
    name: "DARIUS",
    des: "Đại Tướng Noxus",
    diff: 1,
    desChamp:
      "Darius tàn sát kẻ địch với sự tàn bạo hiếm ai sánh bằng. Hắn chém xuyên qua cùng lúc nhiều kẻ địch, rồi kết liễu chúng một cách không thương tiếc.",
    position: 5,
    lane: 5,
  },
  {
    id: 3,
    name: "ahri",
    des: "hồ li chín đuôi",
    diff: 1,
    desChamp:
      "Ahri qua mặt kẻ địch bằng những pha lả lướt và bứt tốc. Phép thuật mê hoặc của cô thu hút kẻ địch, khiến chúng đuổi quá sâu và để lộ sơ hở.",
    position: 3,
    lane: 3,
  },
  {
    id: 4,
    name: "master yi",
    des: "kiếm sư wuju",
    diff: 2,
    desChamp:
      "Master Yi tấn công nhanh gọn và quyết liệt. Anh lao vào giữa cuộc giao tranh với tốc độ chóng mặt để tấn công mục tiêu hoặc để khéo léo né tránh đòn phản công của kẻ địch.",
    position: 4,
    lane: 4,
  },
  {
    id: 5,
    name: "garen ",
    des: "sức mạnh của demacia",
    diff: 2,
    desChamp:
      "Garen tiêu diệt đối thủ với thanh kiếm siêu to khổng lồ xoay vần. Anh ta thực thi công lý bằng cách triệu hồi một lưỡi kiếm thần thánh để kết liễu kẻ địch.",
    position: 5,
    lane: 5,
  },
  {
    id: 6,
    name: "sona",
    des: "đại cầm nữ",
    diff: 2,
    desChamp:
      "Sona tấu lên một khúc nhạc đầy mê hoặc, biến đổi giai điệu để cường hóa đồng minh và kiểm soát kẻ địch. Khúc cao trào của cô có thể khiến cả đội địch choáng váng",
    position: 2,
    lane: 1,
  },
  {
    id: 7,
    name: "TRISTANA",
    des: "TAY SÚNG YORDLE",
    diff: 2,
    desChamp:
      "Với những khối thuốc nổ trong tay, Tristana có thể đánh sập trụ địch chỉ trong nháy mắt. Cô ấy phóng nhảy bằng khẩu đại bác của mình để tham gia hoặc thoát khỏi giao tranh, chiêu này hồi lại sau mỗi lần cô bắn nổ tung kẻ địch.",
    position: 1,
    lane: 1,
  },
  {
    id: 8,
    name: "BRAND",
    des: "THẦN LỬA",
    diff: 2,
    desChamp:
      "Brand thiêu rụi kẻ địch bằng những đòn đánh liên hoàn bùng nổ. Cầu lửa của hắn thiêu đốt kẻ địch theo thời gian và hắn có thể phóng ra một luồng lửa hủy diệt, gây sát thương chí mạng.",
    position: 3,
    lane: 3,
  },
  {
    id: 9,
    name: "EKKO",
    des: "CẬU BÉ ĐẢO LỘN THỜI GIAN",
    diff: 3,
    desChamp:
      "Ekko đảo lộn thời gian để giao tranh với kẻ địch. Cậu có thể quay ngược về một vị trí trước đó để chạy thoát hoặc đảo ngược thời gian để tạo đột phá khi tái đấu.",
    position: 4,
    lane: 4,
  },
]);
const champions = reactive([
  {
    id: 0,
    name: "MISS FORTUNE",
    src: "/img/MissFortune.jpg",
  },
  {
    id: 1,
    name: "LUX",
    src: "/img/luxx.jpg",
  },
  {
    id: 2,
    name: "DARIUS",
    src: "/img/darius.jpg",
  },
  {
    id: 3,
    name: "AHRI",
    src: "/img/ahir.jpg",
  },
  {
    id: 4,
    name: "MASTER YI",
    src: "/img/yi.jpg",
  },
  {
    id: 5,
    name: "GAREN",
    src: "/img/garen.jpg",
  },
  {
    id: 6,
    name: "SONA",
    src: "/img/sona.jpg",
  },
  {
    id: 7,
    name: "TRISTANA",
    src: "/img/tris.jpg",
  },
  {
    id: 8,
    name: "BRAND",
    src: "/img/brand.jpg",
  },
  {
    id: 9,
    name: "EKKO",
    src: "/img/ekko.jpg",
  },
]);
const isDisableAutoSelect = ref(false);
const autoSelectChamp = () => {
  setInterval(() => {
    if (isDisableAutoSelect.value) return;
    currentActiveChamp.value = (currentActiveChamp.value + 1) % 10;
  }, 2000);
};

const handleSelectChamp = (id) => {
  isDisableAutoSelect.value = true;
  currentActiveChamp.value = id;
};
const handleNextChampButton = () => {
  currentActiveChamp.value = (currentActiveChamp.value + 1) % 10;
};
const handlePrevChampButton = () => {
  if (currentActiveChamp.value === 0) {
    currentActiveChamp.value = championsDetail.length - 1;
  } else {
    currentActiveChamp.value--;
  }
};

const calculateTransform = (id) => {
  const distance = currentActiveChamp.value - id;

  if (distance === 0) {
    return `translate3d(0px, -50%, 0px)`; // Item đang active
  }

  const translateValue = -50 - distance * 100;
  return `translate3d(0px, ${translateValue}%, 0px)`;
};

onMounted(() => {
  calculateTransform();
});

const canvasCircle = ref(null);
const canvasContainer = ref(null);
let resizeObserver;

const canvasSize = reactive({ width: 0, height: 0 });

const calculateCanvasSize = () => {
  if (!canvasContainer.value) return;

  const width = canvasContainer.value.offsetWidth;
  const height = canvasContainer.value.offsetHeight;
  // Ensure the canvas maintains a square aspect ratio
  const size = Math.min(width, height);
  canvasSize.width = size;
  canvasSize.height = size;
};
const resizeCanvas = () => {
  calculateCanvasSize();
  if (!canvasCircle.value) return;

  const ctx = canvasCircle.value.getContext("2d");
  if (!ctx) return;

  const { width, height } = canvasSize;
  const centerX = width / 2;
  const centerY = height / 2;
  const mainRadius = width / 2 - 10; // Main circle radius

  ctx.clearRect(0, 0, width, height);

  // Draw main circle
  ctx.beginPath();
  ctx.arc(centerX, centerY, mainRadius, 0, 2 * Math.PI);
  ctx.fillStyle = "rgba(0, 0, 0, 0)";
  ctx.fill();
  ctx.strokeStyle = "rgb(186, 194, 204)";
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.closePath();

  // Draw red lines around the main circle
  const numLines = 3; // Number of lines
  const lineRadius = mainRadius; // Radius for the lines around the main circle

  for (let i = 0; i < numLines; i++) {
    const angle = (i * (2 * Math.PI)) / numLines + performance.now() / 1000; // Adding time-based animation
    ctx.beginPath();
    ctx.arc(centerX, centerY, lineRadius, angle, angle + 1.2); // Adjust the angle to draw a small arc
    ctx.lineWidth = 3; // Adjust line width as desired
    ctx.strokeStyle = "#C9A45F"; // Set line color to red
    ctx.stroke();
    ctx.closePath();
  }

  requestAnimationFrame(resizeCanvas); // Loop the animation
};

onMounted(() => {
  calculateCanvasSize();
  autoSelectChamp();
  resizeCanvas();
  resizeObserver = new ResizeObserver(resizeCanvas);
  resizeObserver.observe(canvasContainer.value);
  window.addEventListener("resize", resizeCanvas);
  handleAccess(championHeadContainer.value, isAccess);
});

onUnmounted(() => {
  if (resizeObserver) {
    resizeObserver.disconnect();
  }
  window.removeEventListener("resize", resizeCanvas);
});
</script>

<style scoped>
@import url("../../assets/style/ChampionIntroduce.css");
</style>
