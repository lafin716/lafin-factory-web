// 메뉴 아이콘의 크기차이 때문에 모든 아이콘의 prefix는 material-symbols 으로 고정
const menuItems = [
  {
    title: "대시보드",
    icon: "dashboard",
    loggedin: true,
    to: "/",
  },
  {
    title: "정렬",
    icon: "sort-by-alpha",
    children: [
      {
        title: "JSON",
        icon: "data-object-rounded",
        to: "/sort/json",
      },
      {
        title: "SQL",
        icon: "data-object-rounded",
        to: "/sort/sql",
      },
      {
        title: "HTML",
        icon: "data-object-rounded",
        to: "/sort/html",
      },
      {
        title: "CSS",
        icon: "data-object-rounded",
        to: "/sort/css",
      },
      {
        title: "JS",
        icon: "data-object-rounded",
        to: "/sort/js",
      },
    ],
  },
];

export default menuItems;
