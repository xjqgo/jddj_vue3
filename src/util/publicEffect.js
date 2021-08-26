import { useRouter } from "vue-router";
export const publicEffect = () => {
    const router = useRouter();
    const toBack = () => {
        router.back();
    };

    return {toBack};
};