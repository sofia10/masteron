$(function(){

    // Symbols Array

    var lang_ka = {a : 'ა',A : 'ა',b : 'ბ',B : 'ბ',g : 'გ',G : 'გ',d : 'დ',D : 'დ',e : 'ე',E : 'ე',v : 'ვ',V : 'ვ',z : 'ზ',T : 'თ',i : 'ი',I : 'ი',k : 'კ',K : 'კ',l : 'ლ',L : 'ლ',m : 'მ',M : 'მ',n : 'ნ',N : 'ნ',o : 'ო',O : 'ო',p : 'პ',P : 'პ',J : 'ჟ',r : 'რ',s : 'ს',S : 'ს',t : 'ტ',u : 'უ',U : 'უ',f : 'ფ',F : 'ფ',q : 'ქ',Q : 'ქ',R : 'ღ',y : 'ყ',Y : 'ყ',S : 'შ',C : 'ჩ',c : 'ც',Z : 'ძ',w : 'წ',W : 'ჭ',x : 'ხ',X : 'ხ',j : 'ჯ',h : 'ჰ',H : 'ჰ'
    };

    // Russian Keyboard
    // https://www.branah.com/russian
    var lang_ru = {
        a : 'ф',
        A : 'Ф',
        b : 'и',
        B : 'И',
        g : 'п',
        G : 'П',
        d : 'в',
        D : 'В',
        e : 'у',
        E : 'У',
        v : 'м',
        V : 'М',
        z : 'я',
        Z : 'Я',
        t : 'е',
        T : 'Е',
        i : 'ш',
        I : 'Ш',
        k : 'л',
        K : 'Л',
        l : 'д',
        L : 'Д',
        m : 'ь',
        M : 'Ь',
        n : 'т',
        N : 'Т',
        o : 'щ',
        O : 'Щ',
        p : 'з',
        P : 'З',
        j : 'о',
        J : 'О',
        r : 'к',
        R : 'К',
        s : 'ы',
        S : 'Ы',
        u : 'г',
        U : 'Г',
        f : 'а',
        F : 'А',
        q : 'й',
        Q : 'Й',
        y : 'н',
        Y : 'Н',
        c : 'с',
        C : 'С',
        w : 'ц',
        W : 'Ц',
        x : 'ч',
        X : 'Ч',
        h : 'р',
        H : 'Р'
    };

    var symbols = lang_ka;
    var clickCounter = 0;

    $(".searchi-b .flags").click(function(){
        flags(clickCounter);

        if(clickCounter == 2)
            clickCounter = 0;
        else
            clickCounter++;
    });

    function flags () {
        if(clickCounter == 0){
            var marginer = 0;
            $(".form-control.s").removeClass("og-symbols");
        }
        else if(clickCounter == 1){
            var marginer = 40;
            symbols = lang_ru;
            $(".form-control.s").addClass("og-symbols");
        }
        else{
            var marginer = 20;
            symbols = lang_ka;
            $(".form-control.s").addClass("og-symbols");
        }
        $('.flags-l').animate({
            "margin-left" : "-"+marginer+"px"
        });
        console.log(marginer);

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

            flags(clickCounter);

            if(clickCounter == 2)
                clickCounter = 0;
            else
                clickCounter++;
            return false;
        }
    });

});