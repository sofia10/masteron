$(function(){

    // Symbols Array
    var symbols = {
        a : 'ა',
        A : 'ა',
        b : 'ბ',
        B : 'ბ',
        g : 'გ',
        G : 'გ',
        d : 'დ',
        D : 'დ',
        e : 'ე',
        E : 'ე',
        v : 'ვ',
        V : 'ვ',
        z : 'ზ',
        T : 'თ',
        i : 'ი',
        I : 'ი',
        k : 'კ',
        K : 'კ',
        l : 'ლ',
        L : 'ლ',
        m : 'მ',
        M : 'მ',
        n : 'ნ',
        N : 'ნ',
        o : 'ო',
        O : 'ო',
        p : 'პ',
        P : 'პ',
        J : 'ჟ',
        r : 'რ',
        s : 'ს',
        S : 'ს',
        t : 'ტ',
        u : 'უ',
        U : 'უ',
        f : 'ფ',
        F : 'ფ',
        q : 'ქ',
        Q : 'ქ',
        R : 'ღ',
        y : 'ყ',
        Y : 'ყ',
        S : 'შ',
        C : 'ჩ',
        c : 'ც',
        Z : 'ძ',
        w : 'წ',
        W : 'ჭ',
        x : 'ხ',
        X : 'ხ',
        j : 'ჯ',
        h : 'ჰ',
        H : 'ჰ'
    };

    $(".searchi-b .flags").click(function(){
        flags();
    });

    function flags () {
        var self = $(".searchi-b .flags");
        if(self.hasClass("active")){
            self.removeClass("active");
            self.find("ul.flags-l").animate({
                "margin-left" : "0"
            });
            $(".form-control.s").removeClass("og-symbols");
        } else{
            self.addClass("active");
            self.find("ul.flags-l").animate({
                "margin-left" : "-20px"
            });
            $(".form-control.s").addClass("og-symbols");
        }  
    }

    $(document).on("keypress",'.og-symbols', function(e){
        var s = String.fromCharCode(e.which);
        var cv = $(this).val();
        var ss = symbols[s];
        var n = doGetCaretPosition(this);
        if(ss != undefined && e.ctrlKey == false){

            cv = cv.substring(0, n) + ss + cv.substring(n);
            $(this).val(cv);
            setCaretPosition(this, n+1);

            return false;

        }
    });

    $(".form-control.s").on('keypress', function(e) {
        if(e.keyCode === 96) {
            flags();
            return false;   
        }
    });

});