<template>
  <div>
    <div class="sponsor-card clickable" @click="handleClick">
      <img :src="avatar" :alt="name" class="avatar" />
      <h3>{{ name }}</h3>
      <p>{{ role }}</p>
      <span v-if="link" class="link-text">{{ linkText }}</span>
      <span v-else class="link-text">点击查看二维码</span>
    </div>
    <a
      v-if="actionLink"
      class="sponsor-action"
      :href="actionLink"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ actionText }}
    </a>

    <Teleport to="body">
      <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
        <div class="modal-content">
          <button class="modal-close" @click="showModal = false">&times;</button>
          <h3>{{ name }} 的二维码</h3>
          <div class="qr-grid">
            <div v-if="qrcodes.alipay">
              <img :src="qrcodes.alipay" alt="支付宝" />
              <span>支付宝</span>
            </div>
            <div v-if="qrcodes.wechat">
              <img :src="qrcodes.wechat" alt="微信" />
              <span>微信</span>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  name: String,
  role: String,
  avatar: String,
  link: String,
  linkText: String,
  qrcodes: Object,
  actionLink: String,
  actionText: String,
})

const showModal = ref(false)

function handleClick() {
  if (props.link) {
    window.open(props.link, '_blank')
  } else if (props.qrcodes) {
    showModal.value = true
  }
}
</script>

<style scoped>
.sponsor-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 32px 24px;
  text-align: center;
  transition: all 0.2s;
}
.clickable { cursor: pointer; }
.clickable:hover {
  border-color: var(--vp-c-brand);
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}
.sponsor-card .avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin: 0 auto 12px;
  object-fit: cover;
}
.sponsor-card h3 { font-size: 18px; font-weight: 600; margin: 0 0 4px; }
.sponsor-card p { color: var(--vp-c-text-2); font-size: 14px; margin: 0 0 12px; }
.link-text { color: var(--vp-c-brand); font-size: 14px; font-weight: 500; }
.sponsor-action {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  margin-top: 10px;
  padding: 8px 16px;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 12px;
  color: var(--vp-c-brand-1);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s, background-color 0.2s;
}
.sponsor-action:hover {
  color: var(--vp-c-white);
  background: var(--vp-c-brand-1);
}
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  z-index: 1000;
}
.modal-content {
  background: var(--vp-c-bg);
  border-radius: 16px;
  padding: 32px;
  max-width: 480px;
  width: 100%;
  max-height: calc(100dvh - 32px);
  overflow-y: auto;
  box-sizing: border-box;
  text-align: center;
  position: relative;
}
.modal-content h3 { margin: 0 0 20px; font-size: 18px; }
.modal-close {
  position: absolute;
  top: 12px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--vp-c-text-2);
}
.qr-grid {
  display: grid;
  grid-template-columns: repeat(2, 160px);
  gap: 24px;
  justify-content: center;
}
.qr-grid img {
  width: 160px;
  height: 160px;
  max-width: none;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  object-fit: contain;
}
.qr-grid span { display: block; margin-top: 8px; font-size: 13px; color: var(--vp-c-text-2); }

@media (max-width: 460px) {
  .modal-content {
    padding: 28px 20px 24px;
  }

  .qr-grid {
    grid-template-columns: 160px;
  }
}
</style>
