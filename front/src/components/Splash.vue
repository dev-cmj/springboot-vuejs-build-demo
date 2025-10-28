<template>
  <div class="splash-wrapper">
    <div class="logo">
      xLink
    </div>
    <div class="loader"></div>
    <p class="subtitle">서비스 검증 중...</p>
  </div>
</template>

<style scoped>
.splash-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%);
}

.logo {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2563eb;
  display: flex;
  align-items: center;
  margin-bottom: 34px;
  text-shadow: 0 2px 12px rgba(37,99,235,0.13);
}
.icon {
  font-size: 2.6rem;
  margin-right: 12px;
}

.loader {
  border: 6px solid #e0e7ef;
  border-top: 6px solid #2563eb;
  border-bottom: 6px solid #10b981;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  box-shadow: 0 0 14px 2px rgba(37,99,235,0.11);
  animation: spin 1s cubic-bezier(.68,-0.55,.27,1.55) infinite;
  margin-bottom: 22px;
}

@keyframes spin {
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
}

.subtitle {
  font-size: 1.13rem;
  color: #334155;
  letter-spacing: 0.03em;
  margin-top: 0;
}
</style>
