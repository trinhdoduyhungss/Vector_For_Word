var data = require('./Vocabulary.json')
var text = 'ban' // bạn : 11000000010001001000000000 ; ban : 11000000000001001000000000
var sum = 0

//Giải telex
function change_alias(alias) {
    var str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,function(x){
        if(x == 'à'){
            return 'af'
        }
        else if(x == 'á'){
            return 'as'
        }
        else if(x == 'ạ'){
            return 'aj'
        }
        else if(x == 'ả'){
            return 'ar'
        }
        else if(x == 'ã'){
            return 'ax'
        }
        else if(x == 'â'){
            return 'aa'
        }
        else if(x == 'ầ'){
            return 'aaf'
        }
        else if(x == 'ấ'){
            return 'aas'
        }
        else if(x == 'ẫ'){
            return 'aax'
        }
        else if(x == 'ẩ'){
            return 'aar'
        }
        else if(x == 'ậ'){
            return 'aaj'
        }
        else if(x == 'ă'){
            return 'aw'
        }
        else if(x == 'ằ'){
            return 'awf'
        }
        else if(x == 'ẳ'){
            return 'awr'
        }
        else if(x == 'ắ'){
            return 'aws'
        }
        else if(x == 'ặ'){
            return 'awj'
        }
        else if(x == 'ẵ'){
            return 'awx'
        }
    }); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,function(x){
        if(x == 'è'){
            return 'ef'
        }
        else if(x == 'é'){
            return 'es'
        }
        else if(x == 'ẹ'){
            return 'ej'
        }
        else if(x == 'ẻ'){
            return 'er'
        }
        else if(x == 'ẽ'){
            return 'ex'
        }
        else if(x == 'ê'){
            return 'ee'
        }
        else if(x == 'ề'){
            return 'eef'
        }
        else if(x == 'ế'){
            return 'ees'
        }
        else if(x == 'ễ'){
            return 'eex'
        }
        else if(x == 'ể'){
            return 'eer'
        }
        else if(x == 'ệ'){
            return 'eej'
        }
    }); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,function(x){
        if(x == 'ì'){
            return 'if'
        }
        else if(x == 'í'){
            return 'is'
        }
        else if(x == 'ị'){
            return 'ij'
        }
        else if(x == 'ỉ'){
            return 'ir'
        }
        else if(x == 'ĩ'){
            return 'ix'
        }        
    }); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,function(x){
        if(x == 'ò'){
            return 'of'
        }
        else if(x == 'ó'){
            return 'os'
        }
        else if(x == 'ọ'){
            return 'oj'
        }
        else if(x == 'ỏ'){
            return 'or'
        }
        else if(x == 'õ'){
            return 'ox'
        }
        else if(x == 'ô'){
            return 'oo'
        }
        else if(x == 'ồ'){
            return 'oof'
        }
        else if(x == 'ố'){
            return 'oos'
        }
        else if(x == 'ỗ'){
            return 'oox'
        }
        else if(x == 'ổ'){
            return 'oor'
        }
        else if(x == 'ộ'){
            return 'ooj'
        }
        else if(x == 'ơ'){
            return 'ow'
        }
        else if(x == 'ờ'){
            return 'owf'
        }
        else if(x == 'ở'){
            return 'owr'
        }
        else if(x == 'ớ'){
            return 'ows'
        }
        else if(x == 'ợ'){
            return 'owj'
        }
        else if(x == 'ỡ'){
            return 'owx'
        }
    }); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,function(x){
        if(x == 'ù'){
            return 'uf'
        }
        else if(x == 'ú'){
            return 'us'
        }
        else if(x == 'ụ'){
            return 'uj'
        }
        else if(x == 'ủ'){
            return 'ur'
        }
        else if(x == 'ũ'){
            return 'ux'
        }
        else if(x == 'ư'){
            return 'uw'
        }
        else if(x == 'ừ'){
            return 'uwf'
        }
        else if(x == 'ứ'){
            return 'uws'
        }
        else if(x == 'ự'){
            return 'uwj'
        }
        else if(x == 'ữ'){
            return 'aar'
        }
    }); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,function(x){
        if(x == 'ỳ'){
            return 'yf'
        }
        else if(x == 'ý'){
            return 'ys'
        }
        else if(x == 'ỵ'){
            return 'yj'
        }
        else if(x == 'ỷ'){
            return 'yr'
        }
        else if(x == 'ỹ'){
            return 'yx'
        }
    }); 
    str = str.replace(/đ/g,"dd");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    str = str.replace(/ + /g," ");
    str = str.trim(); 
    return str;
}

//Chuyển đổi số mũ thành số
Number.prototype.noExponents= function(){
    var data= String(this).split(/[eE]/);
    if(data.length== 1) return data[0]; 

    var  z= '', sign= this<0? '-':'',
    str= data[0].replace('.', ''),
    mag= Number(data[1])+ 1;

    if(mag<0){
        z= sign + '0.';
        while(mag++) z += '0';
        return z + str.replace(/^\-/,'');
    }
    mag -= str.length;  
    while(mag--) z += '0';
    return str + z;
}

text = change_alias(text)
for(var word in data){
    var test_text = text.indexOf(word)
    if(test_text != -1){
        sum += parseInt(data[word], 10)
    }
}

// Result
if(sum != 0){
    console.log('result: ', sum.noExponents())
}