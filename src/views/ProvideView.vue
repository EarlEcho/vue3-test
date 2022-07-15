<template>
  <p>{{ addResult }}</p>
  <!-- {{ imessage }} -->
  <!-- <Button type="primary" @click="showMessage">showMessage</Button>
  <div class="focus-class" :tabindex="0" ref="focusRef" @click="changeResult">___Click me change</div> -->

  {{ imgList }}
  <br>
  <br>

  <Button type="primary" @click="reset">重置</Button>
  <br>
  <br>

  <Table border @on-filter-change="changeFilter" ref="tableRef" :columns="columns" :data="tableData"></Table>

  <!-- <img style="width: 200px; height: 200px" v-for="k in 3" :src="getImageUrl(k)" alt="" /> -->
  <!-- <img style="width: 200px; height: 200px" v-for="k in imgList" :src="k" alt="" /> -->
</template>
<script setup lang="ts">
import { provide, ref, onMounted, unref, inject, getCurrentInstance, toRaw } from "vue";
import { addFunc, IMG_LIST } from "./fetch/fetch.js";
const imgList = ref(IMG_LIST);
const getImageUrl = (k) => {
  return new URL(`/src/assets/testImage/chart${k}.png`, import.meta.url).href; //本地文件路径
};
const tableRef = ref(null);
const filterIndex = [2, 3];
const columns = ref([
  {
    title: "Date",
    key: "date",
  },
  {
    title: "Name",
    key: "name",
  },
  {
    title: "Age",
    key: "age",
    filters: [
      {
        label: "Greater than 25",
        value: 1,
      },
      {
        label: "Less than 25",
        value: 2,
      },
    ],
    filterMultiple: false,
    filterMethod(value, row) {
      if (value === 1) {
        return row.age > 25;
      } else if (value === 2) {
        return row.age < 25;
      }
    },
  },
  {
    title: "Address",
    key: "address",
    filters: [
      {
        label: "New York",
        value: "New York",
      },
      {
        label: "London",
        value: "London",
      },
      {
        label: "Sydney",
        value: "Sydney",
      },
    ],
    __id: '1111',
    filteredValue: ['London'],
    filterMethod(value, row) {
      console.log(value);
      return row.address.indexOf(value) > -1;
    },
  },
]);
const tableData = ref([
  {
    name: "John Brown",
    age: 18,
    address: "New York No. 1 Lake Park",
    date: "2016-10-03",
  },
  {
    name: "Jim Green",
    age: 24,
    address: "London No. 1 Lake Park",
    date: "2016-10-01",
  },
  {
    name: "Joe Black",
    age: 30,
    address: "Sydney No. 1 Lake Park",
    date: "2016-10-02",
  },
  {
    name: "Jon Snow",
    age: 26,
    address: "Ottawa No. 2 Lake Park",
    date: "2016-10-04",
  },
]);
const reset = () => {
  filterIndex.forEach((column) => {
    tableRef.value.handleFilterReset(column)
  });
};
const changeFilter = (row) => {
  console.log("row", row);
};
const addResult = addFunc();
const focusRef = ref(null);
const changeResult = () => {
  addResult.value = addFunc(addResult.value);
};
let { proxy } = getCurrentInstance();
const showMessage = () => {
  proxy.$tips.info("yes");
};

const datas = ref({
  a: "is Provide Infos",
});

const changeProvideData = () => {
  datas.value = {
    b: "new Value",
  };
};

let func: Function = (a: number, b: string, radio?: number) => {
  // ？ 说明是可选参数，不传的时候打印出来值是 undefined
};
// provide 不建议在值在 inject 内被更改，需要更改可以提供修改方法
provide("isPrivideInfos", {
  datas,
  changeProvideData,
});

let arr = [
  {
    device_ip: "10.0.54.1",
    mac: "6891-d0dd-ecf9",
    port: "GA1-1",
    vlan: 1,
  },
  {
    device_ip: "10.0.54.1",
    mac: "6891-d0dd-2233",
    port: "GA1-2",
  },
  {
    device_ip: "10.0.54.1",
    mac: "6891-d0dd-ecf9",
    port: "GA1-1",
    vlan: 1,
  },
];
let res = new Map();
let newArr = arr.filter((item) => {
  let uniId = `${item["device_ip"] || ""}-${item["mac"] || ""}-${item["port"] || ""}-${item["vlan"] || ""}}`;
  return !res.has(uniId) && res.set(uniId, 1);
});
console.log(newArr);

// onMounted(() => {
//   let dom = unref(focusRef);
//   dom.focus();
// });
</script>
<style>
.focus-class {
  border: 1px solid yellow;
  padding: 10px;
  outline: 0;
}
.focus-class:focus,
.focus-class:hover {
  background-color: pink;
}
</style>
