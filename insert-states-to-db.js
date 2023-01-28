const states = `01        ALABAMA
02        ALASKA
04        ARIZONA
05        ARKANSAS
06        CALIFORNIA
08        COLORADO
09        CONNECTICUT
10        DELAWARE
11        DISTRICT OF COLUMBIA
12        FLORIDA
13        GEORGIA
15        HAWAII
16        IDAHO
17        ILLINOIS
18        INDIANA
19        IOWA
20        KANSAS
21        KENTUCKY
22        LOUISIANA
23        MAINE
24        MARYLAND
25        MASSACHUSETTS
26        MICHIGAN
27        MINNESOTA
28        MISSISSIPPI
29        MISSOURI
30        MONTANA
31        NEBRASKA
32        NEVADA
33        NEW HAMPSHIRE
34        NEW JERSEY
35        NEW MEXICO
36        NEW YORK
37        NORTH CAROLINA
38        NORTH DAKOTA
39        OHIO
40        OKLAHOMA
41        OREGON
42        PENNSYLVANIA
44        RHODE ISLAND
45        SOUTH CAROLINA
46        SOUTH DAKOTA
47        TENNESSEE
48        TEXAS
49        UTAH
50        VERMONT
51        VIRGINIA
53        WASHINGTON
54        WEST VIRGINIA
55        WISCONSIN
56        WYOMING`;

// confirm them into an array of object

const statesStrArr = states.split("\n");
const statesObjARr = statesStrArr.map((stateStr) => {
  const stateFips = +stateStr.trim().substring(0, 2);
  const stateLong = stateStr.trim().substring(2).trim();
  return {
    stateFips,
    stateLong,
  };
});
console.log(statesObjARr, "from ");
