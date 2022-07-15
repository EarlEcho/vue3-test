import { ref, unref } from 'vue';
export const addFunc = (newA = 0) => {
    let a = ref(0)
    let b = ref(2)

    let result = ref(a.value + newA + b.value);
    a.value = a.value + 10;
    b.value = b.value + 22;

    return unref(result)
}

let imgList = [];
for (let i = 0; i < 4; i++) {
    let imgUrl = new URL(`/src/assets/testImage/chart${i}.png`, import.meta.url).href
    console.log(imgUrl);
    imgList.push(imgUrl);
}
export const IMG_LIST = imgList