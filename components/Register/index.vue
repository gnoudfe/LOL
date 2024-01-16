<template>
  <div style="height: 100%">
    <div class="register-container">
      <div class="register-background-container">
        <img src="/img/bg-confirmation.jpg" alt="background image" />
      </div>
      <div class="homepage-container">
        <nuxt-link to="/" class="homepage">
          <img src="/img/lol-logo-vi-vn.png" alt="lien minh huyen thoai image"
        /></nuxt-link>
      </div>
      <div class="register-content-container">
        <h2 class="register-heading">Đăng ký Tài Khoản</h2>
        <p class="register-sub-heading">
          Hãy đảm bảo bạn nhớ tài khoản vừa tạo nhé.
        </p>

        <form @submit.prevent="signUp">
          <div class="input-groups">
            <div class="input-components" :class="{ error: errorMsg }">
              <label class="label-components" :class="{ 'is-focus': isFocus }"
                ><span>Email</span></label
              >
              <input
                class="input"
                type="email"
                v-model="email"
                @focus="handleInputFocus"
              />
              <span class="error-msg">{{ errorMsg }}</span>
              <div class="error-icon-container" v-if="errorMsg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 310.8 310.8"
                >
                  <path
                    fill="#be1e37"
                    d="M305.1 229.1l-119-186.5c-6.7-10.5-18.2-16.8-30.7-16.8s-23.9 6.3-30.7 16.8L5.7 229.1c-7.1 11.2-7.6 25.4-1.2 37 6.4 11.6 18.6 18.9 31.9 18.9h238.1c13.3 0 25.5-7.2 31.9-18.9 6.3-11.6 5.8-25.8-1.3-37zm-149.7 24.5c-10.9 0-19.8-8.9-19.8-19.8s8.9-19.8 19.8-19.8 19.8 8.9 19.8 19.8c0 11-8.9 19.8-19.8 19.8zm27.5-137.7l-9.8 65.7c-1.4 9.7-10.4 16.4-20.1 14.9-7.8-1.2-13.7-7.3-14.9-14.7l-10.6-65.6c-2.5-15.3 7.9-29.7 23.2-32.1s29.7 7.9 32.1 23.2c.5 2.9.5 5.9.1 8.6z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div class="input-groups">
            <div class="input-components" :class="{ error: errorMsg }">
              <label class="label-components" :class="{ 'is-focus': isFocus }"
                ><span>Password</span></label
              >
              <input
                v-model="password"
                class="input"
                @focus="handleInputFocus"
                type="password"
              />
              <span class="error-msg">{{ errorMsg }}</span>
              <div class="error-icon-container" v-if="errorMsg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 310.8 310.8"
                >
                  <path
                    fill="#be1e37"
                    d="M305.1 229.1l-119-186.5c-6.7-10.5-18.2-16.8-30.7-16.8s-23.9 6.3-30.7 16.8L5.7 229.1c-7.1 11.2-7.6 25.4-1.2 37 6.4 11.6 18.6 18.9 31.9 18.9h238.1c13.3 0 25.5-7.2 31.9-18.9 6.3-11.6 5.8-25.8-1.3-37zm-149.7 24.5c-10.9 0-19.8-8.9-19.8-19.8s8.9-19.8 19.8-19.8 19.8 8.9 19.8 19.8c0 11-8.9 19.8-19.8 19.8zm27.5-137.7l-9.8 65.7c-1.4 9.7-10.4 16.4-20.1 14.9-7.8-1.2-13.7-7.3-14.9-14.7l-10.6-65.6c-2.5-15.3 7.9-29.7 23.2-32.1s29.7 7.9 32.1 23.2c.5 2.9.5 5.9.1 8.6z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div class="btn-submit-container">
            <button class="btn-submit">ĐĂNG KÝ NGAY</button>
          </div>
        </form>
        <div class="google-sign-in-container">
          <span
            >Đã Đăng Ký?
            <nuxt-link class="download-link" to="/download"
              >Nhấp để tải về</nuxt-link
            ></span
          >
        </div>
        <div class="google-sign-in-container">
          <span>Hoặc đăng nhập với</span>
        </div>
        <button @click="signInWithGoogle" class="google-sign-in-button">
          <img src="/img/icon_google.svg" alt="google icon" />
          <span>Google</span>
        </button>
      </div>
    </div>
    <Loading v-if="isLoading" />
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const email = ref("");
const password = ref(null);
const errorMsg = ref(null);
const router = useRouter();
const user = useSupabaseUser();
const isLoading = ref(false);
const isFocus = ref(false);
const signUp = async () => {
  if (isLoading.value) return;
  isLoading.value = true;
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });
    if (!error) {
      user.value = data;
      router.push("/download");
    }

    if (error) throw error;
  } catch (error) {
    errorMsg.value = error.message;
  } finally {
    isLoading.value = false;
  }
};
const handleInputFocus = () => {
  isFocus.value = true;
};

const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });
};
</script>

<style scoped>
@import url("../../assets/style/registerPage.css");
</style>
