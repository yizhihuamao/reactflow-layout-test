export const initialNodes = [
  {
    id: "2",
    type: "initial",
    position: {
      x: 812,
      y: 156,
    },
    selectable: true,
    deletable: true,
    data: {
      order: 1,
    },
    width: 151,
    height: 40,
    selected: false,
    positionAbsolute: {
      x: 12,
      y: 473.5,
    },
    dragging: false,
    $H: 277,
    x: 812,
    y: 156,
    targetPosition: "top",
    sourcePosition: "bottom",
  },
  {
    id: "3",
    type: "business_hours",
    position: {
      x: 802.5,
      y: 216,
    },
    selectable: true,
    deletable: true,
    data: {
      order: 1,
    },
    width: 170,
    height: 44,
    selected: false,
    positionAbsolute: {
      x: 183,
      y: 471.5,
    },
    dragging: false,
    $H: 279,
    x: 802.5,
    y: 216,
    targetPosition: "top",
    sourcePosition: "bottom",
  },
  {
    id: "4",
    type: "branch",
    selectable: true,
    deletable: true,
    position: {
      x: 563.5,
      y: 330,
    },
    data: {
      title: "call_flow_designer.branch",
      order: 1,
      sourceNodeId: "3",
    },
    width: 96,
    height: 25,
    selected: false,
    positionAbsolute: {
      x: 424,
      y: 351,
    },
    $H: 281,
    x: 563.5,
    y: 330,
    targetPosition: "top",
    sourcePosition: "bottom",
  },
  {
    id: "5",
    type: "branch",
    selectable: true,
    deletable: true,
    position: {
      x: 837.5,
      y: 330,
    },
    data: {
      title: "call_flow_designer.branch",
      order: 2,
      sourceNodeId: "3",
    },
    width: 98,
    height: 25,
    selected: false,
    positionAbsolute: {
      x: 423,
      y: 481,
    },
    $H: 283,
    x: 837.5,
    y: 330,
    targetPosition: "top",
    sourcePosition: "bottom",
  },
  {
    id: "6",
    type: "branch",
    selectable: true,
    deletable: true,
    position: {
      x: 699.5,
      y: 330,
    },
    data: {
      title: "call_flow_designer.branch",
      order: 3,
      sourceNodeId: "3",
    },
    width: 98,
    height: 25,
    selected: false,
    positionAbsolute: {
      x: 423,
      y: 416,
    },
    $H: 285,
    x: 699.5,
    y: 330,
    targetPosition: "top",
    sourcePosition: "bottom",
  },
  {
    id: "7",
    type: "branch",
    selectable: true,
    deletable: true,
    position: {
      x: 975.5,
      y: 330,
    },
    data: {
      title: "call_flow_designer.branch",
      order: 4,
      sourceNodeId: "3",
    },
    width: 98,
    height: 25,
    selected: false,
    positionAbsolute: {
      x: 423,
      y: 546,
    },
    $H: 287,
    x: 975.5,
    y: 330,
    targetPosition: "top",
    sourcePosition: "bottom",
  },
  {
    id: "8",
    type: "branch",
    selectable: true,
    deletable: true,
    position: {
      x: 1113.5,
      y: 330,
    },
    data: {
      title: "call_flow_designer.branch",
      order: 5,
      sourceNodeId: "3",
    },
    width: 98,
    height: 25,
    selected: false,
    positionAbsolute: {
      x: 423,
      y: 611,
    },
    $H: 289,
    x: 1113.5,
    y: 330,
    targetPosition: "top",
    sourcePosition: "bottom",
  },
  {
    id: "9",
    type: "language",
    position: {
      x: 12,
      y: 12,
    },
    selectable: true,
    deletable: true,
    data: {
      order: 1,
    },
    width: 132,
    height: 44,
    selected: false,
    positionAbsolute: {
      x: 12,
      y: 12,
    },
    dragging: false,
    $H: 291,
    x: 12,
    y: 12,
    targetPosition: "top",
    sourcePosition: "bottom",
  },
  {
    id: "10",
    type: "menu",
    position: {
      x: 1128,
      y: 415,
    },
    selectable: true,
    deletable: true,
    data: {
      order: 1,
    },
    width: 103,
    height: 44,
    positionAbsolute: {
      x: 583,
      y: 639.5,
    },
    targetPosition: "top",
    sourcePosition: "bottom",
    $H: 734,
    x: 1128,
    y: 415,
    selected: false,
  },
  {
    id: "11",
    type: "branch",
    selectable: true,
    deletable: true,
    position: {
      x: 1472,
      y: 569,
    },
    data: {
      title: "call_flow_designer.invalid_input",
      sourceNodeId: "10",
      require: 503,
      isDefault: true,
    },
    width: 104,
    height: 25,
    positionAbsolute: {
      x: 777,
      y: 741,
    },
    targetPosition: "top",
    sourcePosition: "bottom",
    $H: 736,
    x: 1472,
    y: 569,
    selected: false,
  },
  {
    id: "12",
    type: "branch",
    selectable: true,
    deletable: true,
    position: {
      x: 1616,
      y: 569,
    },
    data: {
      title: "call_flow_designer.response_timeout",
      sourceNodeId: "10",
      require: 502,
      isDefault: true,
    },
    width: 147,
    height: 25,
    positionAbsolute: {
      x: 777,
      y: 806,
    },
    targetPosition: "top",
    sourcePosition: "bottom",
    $H: 738,
    x: 1616,
    y: 569,
    selected: false,
  },
  {
    id: "13",
    type: "menu",
    position: {
      x: 982,
      y: 415,
    },
    selectable: true,
    deletable: true,
    data: {
      order: 2,
    },
    width: 106,
    height: 44,
    positionAbsolute: {
      x: 581,
      y: 555.5,
    },
    targetPosition: "top",
    sourcePosition: "bottom",
    $H: 1876,
    x: 982,
    y: 415,
    selected: false,
    dragging: false,
  },
  {
    id: "14",
    type: "branch",
    selectable: true,
    deletable: true,
    position: {
      x: 1141,
      y: 569,
    },
    data: {
      title: "call_flow_designer.invalid_input",
      sourceNodeId: "13",
      require: 503,
      isDefault: true,
    },
    width: 104,
    height: 25,
    positionAbsolute: {
      x: 798.5,
      y: 611,
    },
    targetPosition: "top",
    sourcePosition: "bottom",
    $H: 1878,
    x: 1141,
    y: 569,
    selected: false,
  },
  {
    id: "15",
    type: "branch",
    selectable: true,
    deletable: true,
    position: {
      x: 1285,
      y: 569,
    },
    data: {
      title: "call_flow_designer.response_timeout",
      sourceNodeId: "13",
      require: 502,
      isDefault: true,
    },
    width: 147,
    height: 25,
    positionAbsolute: {
      x: 777,
      y: 676,
    },
    targetPosition: "top",
    sourcePosition: "bottom",
    $H: 1880,
    x: 1285,
    y: 569,
    selected: false,
  },
  {
    id: "16",
    type: "menu",
    position: {
      x: 690,
      y: 415,
    },
    selectable: true,
    deletable: true,
    data: {
      order: 3,
    },
    width: 106,
    height: 44,
    positionAbsolute: {
      x: 581,
      y: 387.5,
    },
    targetPosition: "top",
    sourcePosition: "bottom",
    $H: 2250,
    x: 690,
    y: 415,
    selected: false,
  },
  {
    id: "17",
    type: "branch",
    selectable: true,
    deletable: true,
    position: {
      x: 343,
      y: 569,
    },
    data: {
      title: "call_flow_designer.invalid_input",
      sourceNodeId: "16",
      require: 503,
      isDefault: true,
    },
    width: 104,
    height: 25,
    positionAbsolute: {
      x: 777,
      y: 286,
    },
    targetPosition: "top",
    sourcePosition: "bottom",
    $H: 2252,
    x: 343,
    y: 569,
    selected: false,
  },
  {
    id: "18",
    type: "branch",
    selectable: true,
    deletable: true,
    position: {
      x: 487,
      y: 569,
    },
    data: {
      title: "call_flow_designer.response_timeout",
      sourceNodeId: "16",
      require: 502,
      isDefault: true,
    },
    width: 147,
    height: 25,
    positionAbsolute: {
      x: 777,
      y: 351,
    },
    targetPosition: "top",
    sourcePosition: "bottom",
    $H: 2254,
    x: 487,
    y: 569,
    selected: false,
  },
  {
    id: "19",
    type: "menu",
    position: {
      x: 836,
      y: 415,
    },
    selectable: true,
    deletable: true,
    data: {
      order: 4,
    },
    width: 106,
    height: 44,
    positionAbsolute: {
      x: 581,
      y: 471.5,
    },
    targetPosition: "top",
    sourcePosition: "bottom",
    $H: 454,
    x: 836,
    y: 415,
    selected: false,
    dragging: false,
  },
  {
    id: "20",
    type: "branch",
    selectable: true,
    deletable: true,
    position: {
      x: 810,
      y: 569,
    },
    data: {
      title: "call_flow_designer.invalid_input",
      sourceNodeId: "19",
      require: 503,
      isDefault: true,
    },
    width: 104,
    height: 25,
    positionAbsolute: {
      x: 777,
      y: 481,
    },
    targetPosition: "top",
    sourcePosition: "bottom",
    $H: 456,
    x: 810,
    y: 569,
    selected: false,
  },
  {
    id: "21",
    type: "branch",
    selectable: true,
    deletable: true,
    position: {
      x: 954,
      y: 569,
    },
    data: {
      title: "call_flow_designer.response_timeout",
      sourceNodeId: "19",
      require: 502,
      isDefault: true,
    },
    width: 147,
    height: 25,
    positionAbsolute: {
      x: 777,
      y: 546,
    },
    targetPosition: "top",
    sourcePosition: "bottom",
    $H: 458,
    x: 954,
    y: 569,
    selected: false,
  },
  {
    id: "22",
    type: "menu",
    position: {
      x: 544,
      y: 415,
    },
    selectable: true,
    deletable: true,
    data: {
      order: 5,
    },
    width: 106,
    height: 44,
    positionAbsolute: {
      x: 581,
      y: 303.5,
    },
    targetPosition: "top",
    sourcePosition: "bottom",
    $H: 1668,
    x: 544,
    y: 415,
    selected: false,
  },
  {
    id: "23",
    type: "branch",
    selectable: true,
    deletable: true,
    position: {
      x: 199,
      y: 569,
    },
    data: {
      title: "call_flow_designer.invalid_input",
      sourceNodeId: "22",
      require: 503,
      isDefault: true,
    },
    width: 104,
    height: 25,
    positionAbsolute: {
      x: 777,
      y: 221,
    },
    targetPosition: "top",
    sourcePosition: "bottom",
    $H: 1670,
    x: 199,
    y: 569,
    selected: false,
  },
  {
    id: "24",
    type: "branch",
    selectable: true,
    deletable: true,
    position: {
      x: 12,
      y: 569,
    },
    data: {
      title: "call_flow_designer.response_timeout",
      sourceNodeId: "22",
      require: 502,
      isDefault: true,
    },
    width: 147,
    height: 25,
    positionAbsolute: {
      x: 777,
      y: 156,
    },
    targetPosition: "top",
    sourcePosition: "bottom",
    $H: 1672,
    x: 12,
    y: 569,
    selected: false,
  },
  {
    id: "25",
    type: "prompt",
    position: {
      x: 1043,
      y: 674,
    },
    selectable: true,
    deletable: true,
    data: {
      order: 1,
    },
    width: 115,
    height: 44,
    positionAbsolute: {
      x: 1004,
      y: 555.5,
    },
    targetPosition: "top",
    sourcePosition: "bottom",
    $H: 969,
    x: 1043,
    y: 674,
    selected: false,
  },
  {
    id: "26",
    type: "business_hours",
    position: {
      x: 617,
      y: 674,
    },
    selectable: true,
    deletable: true,
    data: {
      order: 2,
    },
    width: 173,
    height: 44,
    positionAbsolute: {
      x: 1004,
      y: 387.5,
    },
    targetPosition: "top",
    sourcePosition: "bottom",
    $H: 1619,
    x: 617,
    y: 674,
    selected: false,
  },
  {
    id: "27",
    type: "branch",
    selectable: true,
    deletable: true,
    position: {
      x: 564.5,
      y: 788,
    },
    data: {
      title: "call_flow_designer.branch",
      order: 1,
      sourceNodeId: "26",
    },
    width: 96,
    height: 25,
    positionAbsolute: {
      x: 1257,
      y: 351,
    },
    targetPosition: "top",
    sourcePosition: "bottom",
    $H: 1621,
    x: 564.5,
    y: 788,
    selected: false,
  },
  {
    id: "28",
    type: "branch",
    selectable: true,
    deletable: true,
    position: {
      x: 700.5,
      y: 788,
    },
    data: {
      title: "call_flow_designer.branch",
      order: 2,
      sourceNodeId: "26",
    },
    width: 98,
    height: 25,
    positionAbsolute: {
      x: 1257,
      y: 416,
    },
    targetPosition: "top",
    sourcePosition: "bottom",
    $H: 1623,
    x: 700.5,
    y: 788,
    selected: false,
  },
  {
    id: "29",
    type: "business_hours",
    position: {
      x: 830,
      y: 674,
    },
    selectable: true,
    deletable: true,
    data: {
      order: 3,
    },
    width: 173,
    height: 44,
    positionAbsolute: {
      x: 1004,
      y: 471.5,
    },
    targetPosition: "top",
    sourcePosition: "bottom",
    $H: 304,
    x: 830,
    y: 674,
    selected: false,
  },
  {
    id: "30",
    type: "branch",
    selectable: true,
    deletable: true,
    position: {
      x: 838.5,
      y: 788,
    },
    data: {
      title: "call_flow_designer.branch",
      order: 1,
      sourceNodeId: "29",
    },
    width: 96,
    height: 25,
    positionAbsolute: {
      x: 1257,
      y: 481,
    },
    targetPosition: "top",
    sourcePosition: "bottom",
    $H: 306,
    x: 838.5,
    y: 788,
    selected: false,
  },
  {
    id: "31",
    type: "branch",
    selectable: true,
    deletable: true,
    position: {
      x: 974.5,
      y: 788,
    },
    data: {
      title: "call_flow_designer.branch",
      order: 2,
      sourceNodeId: "29",
    },
    width: 98,
    height: 25,
    positionAbsolute: {
      x: 1257,
      y: 546,
    },
    targetPosition: "top",
    sourcePosition: "bottom",
    $H: 308,
    x: 974.5,
    y: 788,
    selected: false,
  },
  {
    id: "32",
    type: "branch",
    selectable: true,
    deletable: true,
    position: {
      x: 1112.5,
      y: 788,
    },
    data: {
      title: "call_flow_designer.branch",
      order: 3,
      sourceNodeId: "29",
    },
    width: 98,
    height: 25,
    positionAbsolute: {
      x: 1257,
      y: 611,
    },
    targetPosition: "top",
    sourcePosition: "bottom",
    $H: 310,
    x: 1112.5,
    y: 788,
    selected: false,
  },
  {
    id: "33",
    type: "branch",
    selectable: true,
    deletable: true,
    position: {
      x: 674,
      y: 569,
    },
    data: {
      title: "call_flow_designer.branch",
      order: 1,
      sourceNodeId: "19",
      require: 502,
    },
    width: 96,
    height: 25,
    positionAbsolute: {
      x: 777,
      y: 416,
    },
    targetPosition: "top",
    sourcePosition: "bottom",
    $H: 572,
    x: 674,
    y: 569,
    selected: false,
  },
];

export const initialEdges = [
  {
    id: "2-3",
    source: "2",
    target: "3",
    sourceHandle: "",
    selected: false,
  },
  {
    id: "3-4",
    source: "3",
    target: "4",
    selected: false,
  },
  {
    id: "3-5",
    source: "3",
    target: "5",
    selected: false,
  },
  {
    id: "3-6",
    source: "3",
    target: "6",
    selected: false,
  },
  {
    id: "3-7",
    source: "3",
    target: "7",
    selected: false,
  },
  {
    id: "3-8",
    source: "3",
    target: "8",
    selected: false,
  },
  {
    id: "10-11",
    source: "10",
    target: "11",
    deletable: false,
    selected: false,
  },
  {
    id: "10-12",
    source: "10",
    target: "12",
    deletable: false,
    selected: false,
  },
  {
    id: "8-10",
    source: "8",
    target: "10",
    sourceHandle: "",
    selected: false,
  },
  {
    id: "13-14",
    source: "13",
    target: "14",
    deletable: false,
    selected: false,
  },
  {
    id: "13-15",
    source: "13",
    target: "15",
    deletable: false,
    selected: false,
  },
  {
    id: "7-13",
    source: "7",
    target: "13",
    sourceHandle: "",
    selected: false,
  },
  {
    id: "16-17",
    source: "16",
    target: "17",
    deletable: false,
    selected: false,
  },
  {
    id: "16-18",
    source: "16",
    target: "18",
    deletable: false,
    selected: false,
  },
  {
    id: "6-16",
    source: "6",
    target: "16",
    sourceHandle: "",
    selected: false,
  },
  {
    id: "19-20",
    source: "19",
    target: "20",
    deletable: false,
    selected: false,
  },
  {
    id: "19-21",
    source: "19",
    target: "21",
    deletable: false,
    selected: false,
  },
  {
    id: "5-19",
    source: "5",
    target: "19",
    sourceHandle: "",
    selected: false,
  },
  {
    id: "22-23",
    source: "22",
    target: "23",
    deletable: false,
    selected: false,
  },
  {
    id: "22-24",
    source: "22",
    target: "24",
    deletable: false,
    selected: false,
  },
  {
    id: "4-22",
    source: "4",
    target: "22",
    sourceHandle: "",
    selected: false,
  },
  {
    id: "15-25",
    source: "15",
    target: "25",
    sourceHandle: "",
    selected: false,
  },
  {
    id: "21-26",
    source: "21",
    target: "26",
    sourceHandle: "",
    selected: false,
  },
  {
    id: "26-27",
    source: "26",
    target: "27",
    selected: false,
  },
  {
    id: "26-28",
    source: "26",
    target: "28",
    selected: false,
  },
  {
    id: "14-29",
    source: "14",
    target: "29",
    sourceHandle: "",
    selected: false,
  },
  {
    id: "29-30",
    source: "29",
    target: "30",
    selected: false,
  },
  {
    id: "29-31",
    source: "29",
    target: "31",
    selected: false,
  },
  {
    id: "29-32",
    source: "29",
    target: "32",
    selected: false,
  },
  {
    id: "19-33",
    source: "19",
    target: "33",
    selected: false,
  },
];
