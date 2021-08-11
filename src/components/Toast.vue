<template>
    <div class="toast">{{msg}}</div>
</template>

<script>
import { reactive } from 'vue'
export default {
    props:['msg']
}
export const showToastEffect=()=>{
  const toastData = reactive({
    showToast:false,
    msg:'11'
  })
  const showToast=(msg)=>{      
    toastData.showToast=true
    toastData.msg=msg
    setTimeout(() => {
      toastData.showToast=false
      toastData.msg='1'
    }, 2000);
  }

  return {toastData,showToast}
}
</script>

<style lang="scss" scoped>
.toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 0.1rem;
    background: rgba(0, 0, 0, .35);
    color: #FFF;
}
</style>