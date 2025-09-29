var emails=[
    'email1','email2','email3','email4','email5'
];

var k=0;
while(k<emails.length){

    console.log(emails[k]);
    if(emails[k]=="email2")
    {
        console.log("Breaking at email2");
        break;
    }
    console.log("Printing as there is no Break: " + emails[k]);
    k++;
}