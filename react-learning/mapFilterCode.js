
var products=[
{  technology : "Java",price :2000,level:"Basic"},
{  technology : "Python",price :3000,level:"advance"},
{  technology : "Css",price :1000,level:"Basic"},
{  technology : "Cloud",price :2500,level:"advance"}
]

// products.forEach(product=>{
//     console.log(product.technology);
// })

var technologies=products.map(product=>{
    return product.technology
})

console.log("Mapped Data "+technologies);

var filterData=products.filter(product => product.price <= 2000);
console.log( filterData);

var sortedData=products.sort((a,b) =>{
    if(a.price > b.price)
    {
        return -1
    }
});
console.log(sortedData);