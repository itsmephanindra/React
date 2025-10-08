var followCount=0;
var cart=[];
var wishlist=[];

        function followAction(status)
        {
            if(status==="Yes")
                followCount=followCount+1;
            else
                followCount=followCount-1;
        }
            while (followCount<5)
                followAction("Yes");

            console.log(followCount);

            followAction("No");
            console.log(followCount);

        function addCart(item)
        {
            cart.push(item);
        }

            addCart('Phone');
            console.log(cart);

        var addWishList=(item)=>{
            wishlist.push(item);
        }
        addWishList('Mobile');
        console.log(wishlist);