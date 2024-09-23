export const color=[
    'White',
    'beige',
    'black',
    'red',
    'marun',
    'pink',
    'Green',
    'Yellow',

];
export const filters=[
    {
        id:'color',
        name:'color',
        options:[
            {value:'White',label:'White'},
            {value:'beige',label:'beige'},
            {value:'Blue',label:'blue'},
            {value:'pink',label:'pink'},
            {value:'Green',label:'Green'},
            {value:'red',label:'red'},
            {value:'marun',label:'marun'},
            {value:'Yellow',label:'Yellow'},
 
        ]
    },
    {
        id:'size',
        name:'size',
        options:[
            {value:"S",label:"S"},
            {value:"M",label:"M"},
            {value:"L",label:"L"},
        ]
    }
]

export const singleFilter = [
    {
      id: 'price',
      name: 'price',
      options: [
        { value: '199-399', label: '199 To 399' },
        { value: '399-999', label: '399 To 999' },
        { value: '999-1999', label: '999 To 1999' },
        { value: '1999-2999', label: '1999 To 2999' },
        { value: '3999-4999', label: '3999 To 4999' },
      ]
    },
    {
      id: 'discount',
      name: 'DISCOUNT RANGE',
      options: [
        { value: '10', label: '10% And Above' },
        { value: '20', label: '20% and Above' },
        { value: '30', label: '30% and Above' },
        { value: '40', label: '40% and Above' },
        { value: '50', label: '50% and Above' },
        { value: '60', label: '60% and Above' },
        { value: '70', label: '70% and Above' },
        { value: '80', label: '80% and Above' },
      ]
    },
    {
      id: 'stock',
      name: 'Availability',
      options: [  // Changed 'option' to 'options'
        { value: 'In_Stock', label: 'In Stock' },  // Changed 'lable' to 'label'
        { value: 'Out_of_Stock', label: 'Out of Stock' }  // Changed 'lable' to 'label'
      ]
    }
  ];
  