<template>
  <div>
    <div class="map-section-sticky-container">
      <div class="map-section-wrapper-container">
        <div class="map-section-container">
          <!-- page 4 -->
          <div class="map-background-container">
            <div
              v-for="(lane, index) in lanes"
              :key="index"
              :class="[
                'map-background-lane',
                `${lane}-lane`,
                { 'is-active-lane': currentLane === index && !ClearPage4 },
              ]"
            ></div>
          </div>
          <div
            class="map-logo-lane-position top-lane"
            :class="{
              'is-active-lane': currentLane === 0 && !ClearPage4,
              active: !ClearPage4,
            }"
            @click="handleChooseLane(0)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              index="0"
              type="ICON"
              class="style__SvgIcon-mut0jx-10-SvgTop fUDCcp"
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
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              type="ICON"
              class="second-svg"
            >
              <path
                d="M96.38 46.38a46.38 46.38 0 10-56.06 45.36 9.8 9.8 0 0019.36 0 46.49 46.49 0 0036.7-45.36zM50 98.22a8 8 0 118-8 8 8 0 01-8 8zm9.58-10.13a9.81 9.81 0 00-19.16 0 42.82 42.82 0 1119.16 0z"
              ></path>
            </svg>
            <div class="logo-active-laner-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                type="ICON"
                class="logo-active-lane"
              >
                <path
                  d="M95.58 43.52A46.61 46.61 0 0059.84 7.78L50 17.63l-9.84-9.85a46.63 46.63 0 1055.42 35.74zm-3.39 20.64a43.55 43.55 0 11-53-52.95L50 22l10.82-10.79a43.52 43.52 0 0131.37 52.95z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                type="ICON"
                class="logo-active-lane"
              >
                <path
                  d="M56.87 15.14a38.86 38.86 0 11-13.74 0l-1.36-1.34a40.42 40.42 0 1016.46 0z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                type="ICON"
                class="logo-active-lane"
              >
                <path d="M55.44 5.44L50 10.88l-5.44-5.44L50 0z"></path>
              </svg>
            </div>
          </div>

          <div
            class="map-logo-lane-position jungle-lane"
            :class="{
              'is-active-lane': currentLane === 1 && !ClearPage4,
              active: !ClearPage4,
            }"
            @click="handleChooseLane(1)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              index="1"
              type="ICON"
              class="style__SvgIcon-mut0jx-10-SvgJungle fNPxmt"
            >
              <path
                d="M81.82 0a124.75 124.75 0 00-27.27 36.36 160.53 160.53 0 014.54 22.73S63.6 50 63.64 50c0-13.25 18.18-50 18.18-50zM31.82 59.09c-5.54-14.94-12.45-20-27.27-27.27C18.07 43 22.73 72.73 22.73 72.73S39.16 79.68 50 100C66 63 38.2 23.47 18.18 0c9.34 23.47 13.64 34 13.64 59.09zM63.64 72.73v13.63l18.18-18.18c0-15.1.11-29.71 13.63-40.91C77 36.33 63.64 62.09 63.64 72.73z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              type="ICON"
              class="second-svg"
            >
              <path
                d="M96.38 46.38a46.38 46.38 0 10-56.06 45.36 9.8 9.8 0 0019.36 0 46.49 46.49 0 0036.7-45.36zM50 98.22a8 8 0 118-8 8 8 0 01-8 8zm9.58-10.13a9.81 9.81 0 00-19.16 0 42.82 42.82 0 1119.16 0z"
              ></path>
            </svg>
            <div class="logo-active-laner-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                type="ICON"
                class="logo-active-lane"
              >
                <path
                  d="M95.58 43.52A46.61 46.61 0 0059.84 7.78L50 17.63l-9.84-9.85a46.63 46.63 0 1055.42 35.74zm-3.39 20.64a43.55 43.55 0 11-53-52.95L50 22l10.82-10.79a43.52 43.52 0 0131.37 52.95z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                type="ICON"
                class="logo-active-lane"
              >
                <path
                  d="M56.87 15.14a38.86 38.86 0 11-13.74 0l-1.36-1.34a40.42 40.42 0 1016.46 0z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                type="ICON"
                class="logo-active-lane"
              >
                <path d="M55.44 5.44L50 10.88l-5.44-5.44L50 0z"></path>
              </svg>
            </div>
          </div>
          <div
            class="map-logo-lane-position mid-lane"
            :class="{
              'is-active-lane': currentLane === 2 && !ClearPage4,
              active: !ClearPage4,
            }"
            @click="handleChooseLane(2)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              index="2"
              type="ICON"
              class="style__SvgIcon-mut0jx-10-SvgMid eOuOOC"
            >
              <path d="M16.67 100L100 16.67V0H83.33L0 83.33V100z"></path>
              <path
                fill-opacity="0.3"
                d="M83.33 50L100 33.33V100H33.33L50 83.33h33.33zM66.67 0L50 16.67H16.67V50L0 66.67V0z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              type="ICON"
              class="second-svg"
            >
              <path
                d="M96.38 46.38a46.38 46.38 0 10-56.06 45.36 9.8 9.8 0 0019.36 0 46.49 46.49 0 0036.7-45.36zM50 98.22a8 8 0 118-8 8 8 0 01-8 8zm9.58-10.13a9.81 9.81 0 00-19.16 0 42.82 42.82 0 1119.16 0z"
              ></path>
            </svg>
            <div class="logo-active-laner-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                type="ICON"
                class="logo-active-lane"
              >
                <path
                  d="M95.58 43.52A46.61 46.61 0 0059.84 7.78L50 17.63l-9.84-9.85a46.63 46.63 0 1055.42 35.74zm-3.39 20.64a43.55 43.55 0 11-53-52.95L50 22l10.82-10.79a43.52 43.52 0 0131.37 52.95z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                type="ICON"
                class="logo-active-lane"
              >
                <path
                  d="M56.87 15.14a38.86 38.86 0 11-13.74 0l-1.36-1.34a40.42 40.42 0 1016.46 0z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                type="ICON"
                class="logo-active-lane"
              >
                <path d="M55.44 5.44L50 10.88l-5.44-5.44L50 0z"></path>
              </svg>
            </div>
          </div>

          <div
            class="map-logo-lane-position bot-lane"
            :class="{
              'is-active-lane': currentLane === 3 && !ClearPage4,
              active: !ClearPage4,
            }"
            @click="handleChooseLane(3)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              index="3"
              type="ICON"
              class="style__SvgIcon-mut0jx-10-SvgBot fFaSrr"
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
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              type="ICON"
              class="second-svg"
            >
              <path
                d="M96.38 46.38a46.38 46.38 0 10-56.06 45.36 9.8 9.8 0 0019.36 0 46.49 46.49 0 0036.7-45.36zM50 98.22a8 8 0 118-8 8 8 0 01-8 8zm9.58-10.13a9.81 9.81 0 00-19.16 0 42.82 42.82 0 1119.16 0z"
              ></path>
            </svg>
            <div class="logo-active-laner-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                type="ICON"
                class="logo-active-lane"
              >
                <path
                  d="M95.58 43.52A46.61 46.61 0 0059.84 7.78L50 17.63l-9.84-9.85a46.63 46.63 0 1055.42 35.74zm-3.39 20.64a43.55 43.55 0 11-53-52.95L50 22l10.82-10.79a43.52 43.52 0 0131.37 52.95z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                type="ICON"
                class="logo-active-lane"
              >
                <path
                  d="M56.87 15.14a38.86 38.86 0 11-13.74 0l-1.36-1.34a40.42 40.42 0 1016.46 0z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                type="ICON"
                class="logo-active-lane"
              >
                <path d="M55.44 5.44L50 10.88l-5.44-5.44L50 0z"></path>
              </svg>
            </div>
          </div>
          <div
            class="map-logo-lane-position support-lane"
            :class="{
              'is-active-lane': currentLane === 4 && !ClearPage4,
              active: !ClearPage4,
            }"
            @click="handleChooseLane(4)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              index="4"
              type="ICON"
              class="style__SvgIcon-mut0jx-10-SvgSupport ggKQat"
            >
              <path
                d="M90.4 2.11c0 27.3-25.4 36.63-25.4 36.63L60.94 61a8.39 8.39 0 00-.48 2.39 6.95 6.95 0 0013.89 0 6.7 6.7 0 00-5.75-6.7c6.71-11.5 16.29-6 16.29-6 1.43-1.44 2.63-2.88 3.83-4.07l-7.19-2.88h9.34a38.5 38.5 0 005.75-11.25L87 28.69h10.3a33 33 0 00-6.9-26.58M35.32 38.74S9.93 29.41 9.93 2.11c0 0-9.82 10.77-7.42 26.1h10.3L3.23 32a41.09 41.09 0 004.07 8.9h11l-8.61 3.59a39.83 39.83 0 005.27 6s9.58-5.51 16.29 6a6.7 6.7 0 00-5.75 6.7 6.95 6.95 0 1013.41-2.39zM45.14 22.7l2.63-6.7h4.79l2.63 6.94-5 13.89zm-1-16l-7 16 10.15 25.38v23.71l-5 16 5 10H53l5-10-5-16V48.08L63.1 22.7l-7-16z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              type="ICON"
              class="second-svg"
            >
              <path
                d="M96.38 46.38a46.38 46.38 0 10-56.06 45.36 9.8 9.8 0 0019.36 0 46.49 46.49 0 0036.7-45.36zM50 98.22a8 8 0 118-8 8 8 0 01-8 8zm9.58-10.13a9.81 9.81 0 00-19.16 0 42.82 42.82 0 1119.16 0z"
              ></path>
            </svg>
            <div class="logo-active-laner-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                type="ICON"
                class="logo-active-lane"
              >
                <path
                  d="M95.58 43.52A46.61 46.61 0 0059.84 7.78L50 17.63l-9.84-9.85a46.63 46.63 0 1055.42 35.74zm-3.39 20.64a43.55 43.55 0 11-53-52.95L50 22l10.82-10.79a43.52 43.52 0 0131.37 52.95z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                type="ICON"
                class="logo-active-lane"
              >
                <path
                  d="M56.87 15.14a38.86 38.86 0 11-13.74 0l-1.36-1.34a40.42 40.42 0 1016.46 0z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                type="ICON"
                class="logo-active-lane"
              >
                <path d="M55.44 5.44L50 10.88l-5.44-5.44L50 0z"></path>
              </svg>
            </div>
          </div>

          <img src="/img/map-section.png" alt="map image" />
          <!-- Page 1 -->
          <div>
            <div>
              <div class="map-section-lens-container">
                <div
                  class="map-svg-zoom-blue-container"
                  :class="{ 'is-active': !currentMsg && !ClearPage1 }"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    type="ZOOM_BLUE"
                    class="style__SvgActiveRingOuter-mut0jx-7-SvgDiamondOuter eGKeXn"
                  >
                    <path
                      d="M95.58 43.52A46.61 46.61 0 0059.84 7.78L50 17.63l-9.84-9.85a46.63 46.63 0 1055.42 35.74zm-3.39 20.64a43.55 43.55 0 11-53-52.95L50 22l10.82-10.79a43.52 43.52 0 0131.37 52.95z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    type="ZOOM_BLUE"
                    class="style__SvgActiveRingInner-mut0jx-8-SvgDiamondInner gOlqxI"
                  >
                    <path
                      d="M56.87 15.14a38.86 38.86 0 11-13.74 0l-1.36-1.34a40.42 40.42 0 1016.46 0z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    type="ZOOM_BLUE"
                    class="style__SvgActiveRingAccent-mut0jx-9-SvgDiamondAccent iEUqjB"
                    style=""
                  >
                    <path d="M55.44 5.44L50 10.88l-5.44-5.44L50 0z"></path>
                  </svg>
                  <img src="/img/nexus.jpg" alt="nexus image" />
                </div>
              </div>
              <div
                class="map-svg-clickZoom-container"
                :class="{ clicked: currentMsg && !ClearPage1 }"
                @click="handlePreviousPage"
              >
                <div class="map-svg-clickZoom-inner-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    index="0"
                    type="ZOOM_BLUE"
                    class="style__SvgIcon-mut0jx-10-SvgPlus binKaM"
                    style="
                      width: 15px;
                      height: 15px;
                      position: absolute;
                      left: 50%;
                      top: 50%;
                      transform: translate(-50%, -50%);
                    "
                  >
                    <path d="M60 0H40v40H0v20h40v40h20V60h40V40H60z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    type="ZOOM_BLUE"
                    class="style__SvgInactiveRing-mut0jx-6-SvgCircleWeighted iqRmVV"
                  >
                    <path
                      d="M96.38 46.38a46.38 46.38 0 10-56.06 45.36 9.8 9.8 0 0019.36 0 46.49 46.49 0 0036.7-45.36zM50 98.22a8 8 0 118-8 8 8 0 01-8 8zm9.58-10.13a9.81 9.81 0 00-19.16 0 42.82 42.82 0 1119.16 0z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div class="map-section-lens-container enemy-teams">
              <div
                class="map-svg-zoom-blue-container"
                :class="{ 'is-active': currentMsg && !ClearPage1 }"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  type="ZOOM_BLUE"
                  class="style__SvgActiveRingOuter-mut0jx-7-SvgDiamondOuter eGKeXn"
                >
                  <path
                    d="M95.58 43.52A46.61 46.61 0 0059.84 7.78L50 17.63l-9.84-9.85a46.63 46.63 0 1055.42 35.74zm-3.39 20.64a43.55 43.55 0 11-53-52.95L50 22l10.82-10.79a43.52 43.52 0 0131.37 52.95z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  type="ZOOM_BLUE"
                  class="style__SvgActiveRingInner-mut0jx-8-SvgDiamondInner gOlqxI"
                >
                  <path
                    d="M56.87 15.14a38.86 38.86 0 11-13.74 0l-1.36-1.34a40.42 40.42 0 1016.46 0z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  type="ZOOM_BLUE"
                  class="style__SvgActiveRingAccent-mut0jx-9-SvgDiamondAccent iEUqjB"
                  style=""
                >
                  <path d="M55.44 5.44L50 10.88l-5.44-5.44L50 0z"></path>
                </svg>
                <img src="/img/enemy-nexus.jpg" alt="nexus image" />
              </div>
            </div>
            <div
              class="map-svg-clickZoom-container enemy-teams"
              :class="{ clicked: !currentMsg && !ClearPage1 }"
              @click="handleNextPage"
            >
              <div class="map-svg-clickZoom-inner-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  index="0"
                  type="ZOOM_BLUE"
                  class="style__SvgIcon-mut0jx-10-SvgPlus binKaM"
                  style="
                    width: 15px;
                    height: 15px;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                  "
                >
                  <path d="M60 0H40v40H0v20h40v40h20V60h40V40H60z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  type="ZOOM_BLUE"
                  class="style__SvgInactiveRing-mut0jx-6-SvgCircleWeighted iqRmVV"
                >
                  <path
                    d="M96.38 46.38a46.38 46.38 0 10-56.06 45.36 9.8 9.8 0 0019.36 0 46.49 46.49 0 0036.7-45.36zM50 98.22a8 8 0 118-8 8 8 0 01-8 8zm9.58-10.13a9.81 9.81 0 00-19.16 0 42.82 42.82 0 1119.16 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <!-- Page 2 -->
          <div>
            <div class="map-section-lens-2-container enemy-teams">
              <div
                class="map-svg-zoom-blue-container"
                :class="{
                  'is-active': !currentMsgRoad && !ClearPage2,
                }"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  type="ZOOM_BLUE"
                  class="style__SvgActiveRingOuter-mut0jx-7-SvgDiamondOuter eGKeXn"
                >
                  <path
                    d="M95.58 43.52A46.61 46.61 0 0059.84 7.78L50 17.63l-9.84-9.85a46.63 46.63 0 1055.42 35.74zm-3.39 20.64a43.55 43.55 0 11-53-52.95L50 22l10.82-10.79a43.52 43.52 0 0131.37 52.95z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  type="ZOOM_BLUE"
                  class="style__SvgActiveRingInner-mut0jx-8-SvgDiamondInner gOlqxI"
                >
                  <path
                    d="M56.87 15.14a38.86 38.86 0 11-13.74 0l-1.36-1.34a40.42 40.42 0 1016.46 0z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  type="ZOOM_BLUE"
                  class="style__SvgActiveRingAccent-mut0jx-9-SvgDiamondAccent iEUqjB"
                  style=""
                >
                  <path d="M55.44 5.44L50 10.88l-5.44-5.44L50 0z"></path>
                </svg>
                <img src="/img/turret.jpg" alt="nexus image" />
              </div>
            </div>
            <div
              class="map-svg-clickZoom-2-container"
              :class="{ clicked: currentMsgRoad && !ClearPage2 }"
              @click="handlePreviousRoadPage"
            >
              <div class="map-svg-clickZoom-inner-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  index="0"
                  type="ZOOM_BLUE"
                  class="style__SvgIcon-mut0jx-10-SvgPlus binKaM"
                  style="
                    width: 15px;
                    height: 15px;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                  "
                >
                  <path d="M60 0H40v40H0v20h40v40h20V60h40V40H60z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  type="ZOOM_BLUE"
                  class="style__SvgInactiveRing-mut0jx-6-SvgCircleWeighted iqRmVV"
                >
                  <path
                    d="M96.38 46.38a46.38 46.38 0 10-56.06 45.36 9.8 9.8 0 0019.36 0 46.49 46.49 0 0036.7-45.36zM50 98.22a8 8 0 118-8 8 8 0 01-8 8zm9.58-10.13a9.81 9.81 0 00-19.16 0 42.82 42.82 0 1119.16 0z"
                  ></path>
                </svg>
              </div>
            </div>

            <div class="map-section-lens-3-container enemy-teams">
              <div
                class="map-svg-zoom-blue-container"
                :class="{
                  'is-active': currentMsgRoad && !ClearPage2,
                }"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  type="ZOOM_BLUE"
                  class="style__SvgActiveRingOuter-mut0jx-7-SvgDiamondOuter eGKeXn"
                >
                  <path
                    d="M95.58 43.52A46.61 46.61 0 0059.84 7.78L50 17.63l-9.84-9.85a46.63 46.63 0 1055.42 35.74zm-3.39 20.64a43.55 43.55 0 11-53-52.95L50 22l10.82-10.79a43.52 43.52 0 0131.37 52.95z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  type="ZOOM_BLUE"
                  class="style__SvgActiveRingInner-mut0jx-8-SvgDiamondInner gOlqxI"
                >
                  <path
                    d="M56.87 15.14a38.86 38.86 0 11-13.74 0l-1.36-1.34a40.42 40.42 0 1016.46 0z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  type="ZOOM_BLUE"
                  class="style__SvgActiveRingAccent-mut0jx-9-SvgDiamondAccent iEUqjB"
                  style=""
                >
                  <path d="M55.44 5.44L50 10.88l-5.44-5.44L50 0z"></path>
                </svg>
                <img src="/img/inhibitor.jpg" alt="nexus image" />
              </div>
            </div>
            <div
              class="map-svg-clickZoom-3-container enemy-teams"
              :class="{ clicked: !currentMsgRoad && !ClearPage2 }"
              @click="handleNextRoadPage"
            >
              <div class="map-svg-clickZoom-inner-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  index="0"
                  type="ZOOM_BLUE"
                  class="style__SvgIcon-mut0jx-10-SvgPlus binKaM"
                  style="
                    width: 15px;
                    height: 15px;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                  "
                >
                  <path d="M60 0H40v40H0v20h40v40h20V60h40V40H60z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  type="ZOOM_BLUE"
                  class="style__SvgInactiveRing-mut0jx-6-SvgCircleWeighted iqRmVV"
                >
                  <path
                    d="M96.38 46.38a46.38 46.38 0 10-56.06 45.36 9.8 9.8 0 0019.36 0 46.49 46.49 0 0036.7-45.36zM50 98.22a8 8 0 118-8 8 8 0 01-8 8zm9.58-10.13a9.81 9.81 0 00-19.16 0 42.82 42.82 0 1119.16 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <!-- Page 3 -->
          <div class="page-3">
            <div class="map-section-lens-4-container enemy-teams">
              <div
                class="map-svg-zoom-blue-container"
                :class="{
                  'is-active': !currentJungle && !ClearPage3,
                }"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  type="ZOOM_BLUE"
                  class="style__SvgActiveRingOuter-mut0jx-7-SvgDiamondOuter eGKeXn"
                >
                  <path
                    d="M95.58 43.52A46.61 46.61 0 0059.84 7.78L50 17.63l-9.84-9.85a46.63 46.63 0 1055.42 35.74zm-3.39 20.64a43.55 43.55 0 11-53-52.95L50 22l10.82-10.79a43.52 43.52 0 0131.37 52.95z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  type="ZOOM_BLUE"
                  class="style__SvgActiveRingInner-mut0jx-8-SvgDiamondInner gOlqxI"
                >
                  <path
                    d="M56.87 15.14a38.86 38.86 0 11-13.74 0l-1.36-1.34a40.42 40.42 0 1016.46 0z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  type="ZOOM_BLUE"
                  class="style__SvgActiveRingAccent-mut0jx-9-SvgDiamondAccent iEUqjB"
                  style=""
                >
                  <path d="M55.44 5.44L50 10.88l-5.44-5.44L50 0z"></path>
                </svg>
                <img src="/img/baron.jpg" alt="baron image" />
              </div>
            </div>
            <div
              class="map-svg-clickZoom-4-container"
              :class="{ clicked: currentJungle && !ClearPage3 }"
              @click="handlePreviousJunglePage"
            >
              <div class="map-svg-clickZoom-inner-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  index="0"
                  type="ZOOM_BLUE"
                  class="style__SvgIcon-mut0jx-10-SvgPlus binKaM"
                  style="
                    width: 15px;
                    height: 15px;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                  "
                >
                  <path d="M60 0H40v40H0v20h40v40h20V60h40V40H60z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  type="ZOOM_BLUE"
                  class="style__SvgInactiveRing-mut0jx-6-SvgCircleWeighted iqRmVV"
                >
                  <path
                    d="M96.38 46.38a46.38 46.38 0 10-56.06 45.36 9.8 9.8 0 0019.36 0 46.49 46.49 0 0036.7-45.36zM50 98.22a8 8 0 118-8 8 8 0 01-8 8zm9.58-10.13a9.81 9.81 0 00-19.16 0 42.82 42.82 0 1119.16 0z"
                  ></path>
                </svg>
              </div>
            </div>

            <div class="map-section-lens-5-container enemy-teams">
              <div
                class="map-svg-zoom-blue-container"
                :class="{
                  'is-active': currentJungle && !ClearPage3,
                }"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  type="ZOOM_BLUE"
                  class="style__SvgActiveRingOuter-mut0jx-7-SvgDiamondOuter eGKeXn"
                >
                  <path
                    d="M95.58 43.52A46.61 46.61 0 0059.84 7.78L50 17.63l-9.84-9.85a46.63 46.63 0 1055.42 35.74zm-3.39 20.64a43.55 43.55 0 11-53-52.95L50 22l10.82-10.79a43.52 43.52 0 0131.37 52.95z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  type="ZOOM_BLUE"
                  class="style__SvgActiveRingInner-mut0jx-8-SvgDiamondInner gOlqxI"
                >
                  <path
                    d="M56.87 15.14a38.86 38.86 0 11-13.74 0l-1.36-1.34a40.42 40.42 0 1016.46 0z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  type="ZOOM_BLUE"
                  class="style__SvgActiveRingAccent-mut0jx-9-SvgDiamondAccent iEUqjB"
                  style=""
                >
                  <path d="M55.44 5.44L50 10.88l-5.44-5.44L50 0z"></path>
                </svg>
                <img src="/img/dragon.jpg" alt="nexus image" />
              </div>
            </div>
            <div
              class="map-svg-clickZoom-5-container enemy-teams"
              :class="{ clicked: !currentJungle && !ClearPage3 }"
              @click="handleNextJungPage"
            >
              <div class="map-svg-clickZoom-inner-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  index="0"
                  type="ZOOM_BLUE"
                  class="style__SvgIcon-mut0jx-10-SvgPlus binKaM"
                  style="
                    width: 15px;
                    height: 15px;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                  "
                >
                  <path d="M60 0H40v40H0v20h40v40h20V60h40V40H60z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  type="ZOOM_BLUE"
                  class="style__SvgInactiveRing-mut0jx-6-SvgCircleWeighted iqRmVV"
                >
                  <path
                    d="M96.38 46.38a46.38 46.38 0 10-56.06 45.36 9.8 9.8 0 0019.36 0 46.49 46.49 0 0036.7-45.36zM50 98.22a8 8 0 118-8 8 8 0 01-8 8zm9.58-10.13a9.81 9.81 0 00-19.16 0 42.82 42.82 0 1119.16 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <!-- Page 4 -->
        </div>
      </div>
    </div>

    <div ref="firstStack" class="map-section-stack is-first">
      <div class="map-section-purpose-container">
        <div>
          <h2 class="map-section-purpose-title">PHÁ HỦY CĂN CỨ</h2>
          <p class="map-section-purpose-msg">
            Nhà chính là trung tâm căn cứ của cả hai đội. Phá hủy Nhà chính của
            kẻ địch trước để giành chiến thắng.
          </p>
        </div>
        <div class="map-section-details-infor">
          <span class="map-section-page"
            ><span>{{ currentMsg ? 2 : 1 }}</span
            >/2</span
          >
          <ul class="map-section-purpose-msg-container">
            <li
              class="map-section-msg-item"
              :class="{ 'active-msg': currentMsg }"
            >
              <div class="map-section-details-title">NHÀ CHÍNH CỦA BẠN</div>
              Nhà Chính của bạn là nơi Lính xuất hiện. Phía sau Nhà Chính của
              bạn là Bệ Đá Cổ, nơi bạn có thể nhanh chóng hồi máu và hồi năng
              lượng cũng như mở Cửa Hàng.
            </li>
            <li
              class="map-section-msg-item"
              :class="{ 'active-msg': currentMsg }"
            >
              <div class="map-section-details-title">NHÀ CHÍNH CỦA ĐỊCH</div>

              Nằm sâu trong căn cứ của đội địch, Nhà Chính của địch cũng giống
              như của bạn. Phá hủy Nhà Chính của địch sẽ giúp đội của bạn giành
              chiến thắng.
            </li>
          </ul>

          <div class="map-section-details-btn-container">
            <button class="map-section-btn" @click="handlePreviousPage">
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
              </div>
            </button>

            <button class="map-section-btn" @click="handleNextPage">
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
    </div>

    <div ref="secondStack" class="map-section-stack">
      <div class="map-section-purpose-container">
        <div>
          <h2 class="map-section-purpose-title">DỌN ĐƯỜNG</h2>
          <p class="map-section-purpose-msg">
            Đội của bạn cần dọn được ít nhất một đường để có thể tiến tới Nhà
            Chính của địch. Trên đường sẽ có các chốt chặn phòng thủ gọi là trụ
            và nhà lính. Mỗi đường sẽ có 3 trụ và 1 nhà lính, mỗi Nhà Chính được
            bảo vệ bởi 2 trụ.
          </p>
        </div>
        <div class="map-section-details-infor">
          <span class="map-section-page"
            ><span>{{ currentMsgRoad ? 2 : 1 }}</span
            >/2</span
          >
          <ul class="map-section-purpose-msg-container">
            <li
              class="map-section-msg-item"
              :class="{ 'active-msg': currentMsgRoad }"
            >
              <div class="map-section-details-title">TRỤ</div>
              Trụ gây sát thương lên lính và tướng địch, đồng thời cung cấp tầm
              nhìn giới hạn trong Sương Mù cho đồng minh. Hãy cho lính đi vào
              trước khi tấn công các công trình này để tránh nhận sát thương và
              xông lên chiến đấu.
            </li>
            <li
              class="map-section-msg-item"
              :class="{ 'active-msg': currentMsgRoad }"
            >
              <div class="map-section-details-title">NHÀ LÍNH</div>

              Mỗi Nhà Lính đều được bảo vệ bởi 1 Trụ. Khi bị phá hủy, Lính Siêu
              Cấp sẽ xuất hiện trên đường đó trong vòng vài phút. Sau đó, Nhà
              Lính sẽ được khôi phục và Lính Siêu Cấp sẽ ngừng xuất hiện.
            </li>
          </ul>

          <div class="map-section-details-btn-container">
            <button class="map-section-btn" @click="handlePreviousRoadPage">
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
              </div>
            </button>

            <button class="map-section-btn" @click="handleNextRoadPage">
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
    </div>
    <div ref="thirdStack" class="map-section-stack">
      <div class="map-section-purpose-container">
        <div>
          <h2 class="map-section-purpose-title">KHÁI QUÁT VỀ KHU VỰC RỪNG</h2>
          <p class="map-section-purpose-msg">
            Giữa các đường là khu vực rừng, nơi sinh sống của nhiều loài quái
            rừng và cây cỏ. Hai loài quái vật quan trọng nhất là Baron Nashor và
            Rồng. Tiêu diệt những quái vật này sẽ ban cho đội bạn các bùa lợi
            độc nhất và thậm chí còn có thể xoay chuyển cục diện trận đấu.
          </p>
        </div>
        <div class="map-section-details-infor">
          <span class="map-section-page"
            ><span>{{ currentJungle ? 2 : 1 }}</span
            >/2</span
          >
          <ul class="map-section-purpose-msg-container">
            <li
              class="map-section-msg-item"
              :class="{ 'active-msg': currentJungle }"
            >
              <div class="map-section-details-title">BARON NASHOR</div>
              Baron Nashor là quái vật hùng mạnh nhất trong khu vực rừng. Đội
              tiêu diệt Baron sẽ được cộng thêm sức mạnh công kích, sức mạnh
              phép thuật, cường hóa biến về và gia tăng đáng kể sức mạnh của
              lính xung quanh.
            </li>
            <li
              class="map-section-msg-item"
              :class="{ 'active-msg': currentJungle }"
            >
              <div class="map-section-details-title">RỒNG</div>

              Rồng là những quái vật hùng mạnh với khả năng ban bùa lợi độc nhất
              tùy theo loại Rồng Nguyên Tố mà đội bạn tiêu diệt. Có 5 Rồng
              Nguyên Tố và 1 Rồng Ngàn Tuổi.
            </li>
          </ul>

          <div class="map-section-details-btn-container">
            <button class="map-section-btn" @click="handlePreviousJunglePage">
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
              </div>
            </button>

            <button class="map-section-btn" @click="handleNextJungPage">
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
    </div>

    <div ref="fourthStack" class="map-section-stack">
      <div class="map-section-purpose-container">
        <div>
          <h2 class="map-section-purpose-title">CHỌN ĐƯỜNG BẠN MUỐN</h2>
          <p class="map-section-purpose-msg">
            Có 5 vị trí tạo nên đội hình được đề xuất cho trò chơi. Mỗi đường
            phù hợp với một số tướng và vị trí nhất định—hãy thử tất cả hoặc
            chọn một đường bạn cảm thấy thích hợp nhất.
          </p>
        </div>
        <div class="map-section-details-infor">
          <span class="map-section-page"
            ><span>{{ currentLane + 1 }}</span
            >/5</span
          >
          <ul class="map-section-purpose-msg-container">
            <li
              class="map-section-msg-item"
              v-for="laner in laners"
              :key="laner.id"
              :style="{ transform: `translateX(${-currentLane * 100}%)` }"
            >
              <div class="map-section-details-title">{{ laner.name }}</div>
              {{ laner.des }}
            </li>
          </ul>

          <div class="map-section-details-btn-container">
            <button class="map-section-btn" @click="handlePreviousLane">
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
              </div>
            </button>

            <button class="map-section-btn" @click="handleNextLane">
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
    </div>
  </div>
</template>

<script setup>
const ClearPage1 = ref(true);
const ClearPage2 = ref(true);
const ClearPage3 = ref(true);
const ClearPage4 = ref(true);
const currentMsg = ref(false);
const currentMsgRoad = ref(false);
const currentJungle = ref(false);
const currentLane = ref(0);
const secondStack = ref(null);
const firstStack = ref(null);
const thirdStack = ref(null);
const fourthStack = ref(null);
const laners = reactive([
  {
    id: 1,
    name: "ĐƯỜNG TRÊN",
    des: "Các vị tướng đường trên là những đấu sĩ đơn độc ngoan cường của cả đội. Nhiệm vụ của họ là bảo vệ đường của mình và tập trung xử lý các thành viên nguy hiểm nhất của đội địch.",
  },
  {
    id: 2,
    name: "ĐI RỪNG",
    des: "Các vị tướng đi rừng rất đam mê săn mồi. Rình rập giữa các đường một cách lén lút và khéo léo, họ để mắt tới những con quái rừng quan trọng nhất và nhảy ra đoạt mạng khi kẻ địch mất cảnh giác.",
  },
  {
    id: 3,
    name: "ĐƯỜNG GIỮA",
    des: 'Các vị tướng đường giữa là những nhân tố "chẳng ngán ai" với khả năng dồn sát thương—cho dù là trong chiến đấu đơn lẻ hay giao tranh tổng. Đối với họ, giao tranh là một vũ điệu nguy hiểm, nơi họ luôn tìm kiếm sơ hở của kẻ địch để tiễn chúng lên bảng đếm số.',
  },
  {
    id: 4,
    name: "ĐƯỜNG DƯỚI",
    des: "Các vị tướng đường dưới giống như những khẩu pháo thủy tinh vậy. Vì rất mong manh, dễ vỡ nên họ cần được bảo vệ trong giai đoạn đầu trận trước khi có thể tích lũy đủ vàng và kinh nghiệm để đưa cả đội tới chiến thắng.",
  },
  {
    id: 5,
    name: "HỖ TRỢ",
    des: "Các vị tướng hỗ trợ là hộ vệ của cả đội. Họ giúp giữ cho đồng đội sống sót và tập trung vào trợ giúp kiến tạo các pha hạ gục, bảo vệ đồng đội ở đường dưới cho tới khi họ trở nên mạnh mẽ.",
  },
]);
const lanes = ["top", "jungle", "mid", "bottom", "support"];

const handleScroll = () => {
  const secondTop = secondStack.value.getBoundingClientRect().top;
  const firstStackTop = firstStack.value.getBoundingClientRect().top;
  const thirdStackTop = thirdStack.value.getBoundingClientRect().top;
  const fourthStackTop = fourthStack.value.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (firstStackTop < windowHeight) {
    ClearPage1.value = false;
    ClearPage2.value = true;
    ClearPage3.value = true;
    ClearPage4.value = true;
  }
  if (secondTop < windowHeight - 300) {
    ClearPage2.value = false;
    ClearPage1.value = true;
    ClearPage3.value = true;
    ClearPage4.value = true;
  }
  if (thirdStackTop < windowHeight - 300) {
    ClearPage3.value = false;
    ClearPage2.value = true;
    ClearPage1.value = true;
    ClearPage4.value = true;
  }
  if (fourthStackTop < windowHeight) {
    ClearPage4.value = false;
    ClearPage1.value = true;
    ClearPage2.value = true;
    ClearPage3.value = true;
  }
};

const handleNextLane = () => {
  currentLane.value = (currentLane.value + 1) % 5;
};
const handlePreviousLane = () => {
  if (currentLane.value === 0) {
    currentLane.value = 4;
  } else {
    currentLane.value--;
  }
};
const handleChooseLane = (id) => {
  currentLane.value = id || 0;
};

const handleNextJungPage = () => {
  currentJungle.value = true;
};
const handlePreviousJunglePage = () => {
  currentJungle.value = false;
};

const handleNextRoadPage = () => {
  currentMsgRoad.value = true;
};
const handlePreviousRoadPage = () => {
  currentMsgRoad.value = false;
};

const handleNextPage = () => {
  currentMsg.value = true;
};
const handlePreviousPage = () => {
  currentMsg.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
@import url("../../assets/style/howtoplay.css");
</style>
