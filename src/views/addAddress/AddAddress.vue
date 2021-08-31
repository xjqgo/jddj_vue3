<template>
  <div class="wrapper">
    <div class="wrapper__hander">
      <Back />
      <div class="wrapper__hander__title">新建收货地址</div>
      <div class="wrapper__hander__add" @click="getRequest()">保存</div>
    </div>
    <div class="wrapper__info">
      <div class="wrapper__info__item">
        所在城市：<input v-model="requestData.city" placeholder="如北京" />
      </div>
      <div class="wrapper__info__item">
        小区/大厦/学校：<input
          v-model="requestData.department"
          placeholder="如理工大学国防科技园"
        />
      </div>
      <div class="wrapper__info__item">
        楼号-门牌号：<input
          v-model="requestData.houseNumber"
          placeholder="如A号楼B层"
        />
      </div>
      <div class="wrapper__info__item">
        收货人：<input
          v-model="requestData.name"
          placeholder="请填写收货人的姓名"
        />
      </div>
      <div class="wrapper__info__item zh">
        联系电话：<input
          v-model="requestData.phone"
          placeholder="请填写收货手机号"
        />
      </div>
    </div>
    {{ requestData.city }}
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { post } from "../../util/request";
import Back from "../../components/back.vue";
//
const getAddressEffect = () => {
    const requestData = reactive({city: "", department: "", houseNumber: "", name: "", phone: ""});
  const getRequest = async () => {
    try {
      const result = await post(`/api/user/address`,{data:requestData});
      console.log("返回结果address", result);
      if (result?.errno === 0 && result?.data) {
          console.log('ok');
      }
    } catch (e) {
      alert("请求失败:" + e);
    }
  };
  return { requestData,getRequest };
};

export default {
  components: { Back },
  setup() {
    const { requestData,getRequest } = getAddressEffect();

    return {  requestData,getRequest };
  },
};
</script>

<style lang="scss" scoped>
@import "./style/mixins.scss";
.wrapper {
  @include wrapper;
  bottom: 0;
  padding: 0.65rem 0 0.3rem;
  &__hander {
    @include hander;
  }
  &__info {
    margin-top: 0.12rem;
    padding: 0 0.18rem;
    background: #fff;
    &__item {
      line-height: 0.2rem;
      font-size: 0.14rem;
      padding: 0.12rem 0;
      color: #666;
      border-bottom: 1px solid #f1f1f1;
      white-space: nowrap;
      input {
        width: 66%;
        border: none;
        outline: none;
      }
      input::placeholder {
        color: #999;
      }
    }
    &__item:last-child {
      border: none;
    }
  }
}
</style>