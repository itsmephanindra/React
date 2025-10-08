class portalManagement
    {
     
            constructor(user,address,profile){
            this.userName=user;
            this.addressData=address;
            this.profileData=profile;

        }

    orderManage(){
        console.log('Hello '+ this.userName+'!! Welcome to Order management Section');
        var orderNo=123;


        console.log('Order is '+orderNo);
       

    }

    addressManage(){


        console.log('Hello', this.userName,'!! Welcome to Address management Section');
        console.log(this.addressData);

    }

    profileManage(){
        console.log('Hello', this.userName,'!! Welcome to Profile management Section');

        console.log(this.profileData);

    }
}

var portal=new portalManagement('Phanindra','Bangalore','Male');
portal.orderManage();
portal.addressManage();
portal.profileManage();

