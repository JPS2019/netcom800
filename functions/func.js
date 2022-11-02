module.exports = function(){
  //data atual
  this.hoje = function(f){
    var g = new Date();
    var d = g.getDate();
    d = pad(d, 2);
    var m = g.getMonth()+1;
    m = pad(m, 2);
    var y = g.getFullYear();
    if(f=='aa'){
      return d + '/' + m + '/' + y.toString().substring(2,4); //  31/12/19
    }else if(f=='aaaa'){
      return d + '/' + m + '/' + y;  //  31/12/2019
    }else if(f=='mda'){
      return m + '/' + d + '/' + y;  //  12/31/2019
    }else{
      return '' + y + m + d;  // 20191231
    }
  };

  //formata data
  this.fdata = function(v,f){    
    if(v != '' && v != undefined){
      var d = v.substring(8,6);
      d = pad(d, 2);
      var m = v.substring(6,4);
      m = pad(m, 2);
      var y = v.substring(0,4);
      if(f != undefined){
        if(f.toLowerCase() == 'aa'){
          return d + '/' + m + '/' + y.toString().substring(2,4); // 01/12/19
        }else if(f.toLowerCase() == 'aaaa'){
          return d + '/' + m + '/' + y;  // 01/12/2019
        }else if(f.toLowerCase() == 'mmm/aaaa'){
          var mes = nomemes(m);
          mes = mes.substring(0,3);  // Jan/2019
          return mes + '/' + y;
        }else if(f.toLowerCase() == 'mmm/aa'){
          var mes = nomemes(m);
          mes = mes.substring(0,3);
          return mes + '/' + y.substring(2,4);
        }else{
          return '' + y + m + d;  // 20191201
        }
      }else{
        if(v.search("/") >= 0){
          var arr = v.split('/');
          return '' + ( arr[2].length == '4' ? arr[2] : '20' + arr[2] ) + arr[1] + arr[0];  // 20191201
        } else {
          return '';
        }
      }
    }else{
      return '';
    }
  };

  //primeiro dia mês atual
  this.mesini = function(f){
    var g = new Date();
    var d = '01';
    var m = g.getMonth()+1;
    m = pad(m, 2);
    var y = g.getFullYear();
    if(f=='aa'){
      return d + '/' + m + '/' + y.toString().substring(2,4); //  31/12/19
    }else if(f=='aaaa'){
      return d + '/' + m + '/' + y;  //  31/12/2019
    }else if(f=='mda'){
      return m + '/' + d + '/' + y;  //  12/31/2019
    }else{
      return '' + y + m + d;  // 20191231
    }
  };

  //último dia mês atual
  this.mesfim = function(f){
    var g = new Date();
    var d;
    var m = g.getMonth()+1;
    m = pad(m, 2);
    var y = g.getFullYear();
    if(m == '01' || m == '03' || m == '05' || m == '07' || m == '08' || m == '10' || m == '12'){
      d = '31';
    }else if(m == '04' || m == '06' || m == '09' || m == '11'){
      d = '30';
    }else if(m == '02'){
      d = (y % 4 == 0) ? '29' : '28';
    }
    if(f=='aa'){
      return d + '/' + m + '/' + y.toString().substring(2,4); //  31/12/19
    }else if(f=='aaaa'){
      return d + '/' + m + '/' + y;  //  31/12/2019
    }else if(f=='mda'){
      return m + '/' + d + '/' + y;  //  12/31/2019
    }else{
      return '' + y + m + d;  // 20191231
    }
  };

  //hora atual
  this.agora = function(f){
    Date.prototype.addHours= function(h){
      this.setHours(this.getHours()+h);
      return this;
    }
    //var d = new Date().addHours(4);  // somente na SmarterAsp devido ao fuso
    var d = new Date();
    var h = d.getHours();
    h = pad(h, 2);
    var m = d.getMinutes();
    m = pad(m, 2);
    var s = d.getSeconds();
    s = pad(s, 2);
    if (f == ':') {
      return h + ':' + m + ':' + s;
    } else {
      return '' + h + m + s;
    }
  };

  //dia da semana
  this.semana = function(){
    switch (new Date().getDay()) {
      case 0:
        day = "Domingo";
        break;
      case 1:
        day = "Segunda";
        break;
      case 2:
        day = "Terça";
        break;
      case 3:
        day = "Quarta";
        break;
      case 4:
        day = "Quinta";
        break;
      case 5:
        day = "Sexta";
        break;
      case 6:
        day = "Sábado";
    }
    return day;
  };

  //nome mes
  this.nomemes = function(m){
    var mes = 'Janeiro';
    if(m == undefined){
      m = new Date().getMonth()+1;
    }
    switch (parseInt(m)) {
      case 1:
        mes = "Janeiro";
        break;
      case 2:
        mes = "Fevereiro";
        break;
      case 3:
        mes = "Março";
        break;
      case 4:
        mes = "Abril";
        break;
      case 5:
        mes = "Maio";
        break;
      case 6:
        mes = "Junho";
        break;
      case 7:
        mes = "Julho";
        break;
      case 8:
        mes = "Agosto";
        break;
      case 9:
        mes = "Setembro";
        break;
      case 10:
        mes = "Outubro";
        break;
      case 11:
        mes = "Novembro";
        break;
      case 12:
        mes = "Dezembro";
        break;
    }
    return mes;
  };

  //completa zero a direita
  this.pad = function(number, length){
    var str = '' + number;
    while (str.length < length) {
      str = '0' + str;
    }
    return str;
  };

  //gerachave
  this.gerachave = function(length,dt,usr){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    text += usr;

    if (dt == 1){
      text += hoje().substr(2,8) + agora();
    }
    return text;
  };

  this.tact = function(v){
    if(v == 'ALT'){
      return 'GRA-Alterar';
    }else if(v == 'EXC'){
      return 'GRE-Excluir';
    }    
  };

  this.rediobj = function(o,e){
    res.redirect('/'+o+'?msgact=Erro. '+e);
  };

  this.merr = function(c){
    switch(c) {
      case 'einc':
        return 'Não foi possível incluir'
      case 'ealt':
        return 'Não foi possível alterar'
      default:
        return 'Operação inválida'
    }
  };

  this.genRandomString = function(length){
    var crypto = require('crypto');
    return crypto.randomBytes(Math.ceil(length/2))
      .toString('hex')
      .slice(0,length);
  };
  
  this.sha512 = function(password, salt){
    var crypto = require('crypto');
    var hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    var value = hash.digest('hex');
    return {
      salt:salt,
      passwordHash:value
    };
  };

  this.fil = function(c){
    if (c == '0') {
      return '';
    } else {
      return c;
    }
  };

  this.ffrm = function(crud,obj){
    var frm = false;
    for(x in crud){
      if(crud[x].MNU_SIGLA == obj){
        frm = crud[x].PRM_FRM;
        break;
      }
    }
    return frm;
  }

  this.fgri = function(crud,obj){
    var gri = false;
    for(x in crud){
      if(crud[x].MNU_SIGLA == obj){
        gri = crud[x].PRM_GRI;
        break;
      }
    }
    return gri;
  }

  this.fgra = function(crud,obj){
    var gra = false;
    for(x in crud){
      if(crud[x].MNU_SIGLA == obj){
        gra = crud[x].PRM_GRA;
        break;
      }
    }
    return gra;
  }
  
  this.fgre = function(crud,obj){
    var gre = false;
    for(x in crud){
      if(crud[x].MNU_SIGLA == obj){
        gre = crud[x].PRM_GRE;
        break;
      }
    }
    return gre;
  }
  
  this.rp = function(t,n){
    if (t == undefined) return '';
    var { trim } = require('express-validator').validator;
    t = t.replace(/\|/g,' ');
    t = t.replace(/select|insert|update|drop|delete|--|xp_|'/gi,'');
    t = trim(t);
    if(n == '1'){
      t = t.replace(/select|insert|update|drop|delete|--|xp_|;|'/gi,'');
    }else if(n == '2'){
      return t;
    }else{
      t = t.toUpperCase();
    }
    return t;
  }

  this.rc = function(t){
    if (t == undefined) return '';
    var { trim } = require('express-validator').validator;
    t = t.replace(/\|/g,' ');
    t = t.replace(/["']/g, " ");
    t = t.replace(/select|insert|update|drop|delete|--|xp_|;|'/gi,'');
    t = trim(t);
    return t;
  }

  this.limpacnpj = function(c){
    if (!c) return '';
    c = c.replace(/\D/g, '');    
    return c;
  }

  this.sonum = function(c){
    if (!c) return '';
    c = c.replace(/\D/g, '');    
    return c;
  }

  this.fcep = function(v){
    if (!v) return '';
    v = v.substring(0,2) +'.'+ v.substring(2,5) +'-'+ v.substring(5,8);
    return v;
  }

  this.fcnpj = function(v) {
    if (!v) return '';
    if (v.length == 14)
      v = v.substring(0,2) +'.'+ v.substring(2,5) +'.'+ v.substring(5,8) +'/'+ v.substring(8,12) +'-'+ v.substring(12,14);
    else
      v = v.substring(0,3) +'.'+ v.substring(3,6) +'.'+ v.substring(6,9) +'-'+ v.substring(9,11);
    return v;
  }

  this.cbit = function(c){
    return c == true ? 'Sim' : 'Não'
  }

  this.cbit2 = function(c){
    return c == true ? 'Ativo' : 'Inativo'
  }

  this.eof = function(obj) {
    for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
        return false;
    }
    return true;
  }

  this.noteof = function(obj) {
    for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
        return true;
    }
    return false;
  }

  this.contem = function(q) {
    if(q != '' && q != undefined){
      return true;
    }
    return false;
  }

  // O retorno da transaction traz um array true ou false para cada instrução, no primeiro erro ele já pára,
  // portanto, deve usar este método dados[[dados.length-1 para pegar a última posição de retorno [ 0 = erro E 1 = ok ]
  
  // var SQL = "Begin Try Begin Transaction INSERT INTO TESTE2 (COD) VALUES ('1'); INSERT INTO TESTE2 (COD) VALUES ('12'); INSERT INTO TESTE2 (COD) VALUES ('1') Commit End Try Begin Catch If @@TRANCOUNT > 0 Rollback End Catch"
  // con2.query(SQL, rows => {
  //   console.log(rows[[rows.length - 1]]); 
  // });
  this.respact = function(act,dados,msg) {
    if(dados.err){
      return dados.err;
    }else if(dados[[dados.length-1]] == 0){
      return 'Erro. Não foi possível concluir a operação. Aguarde alguns instantes e tente novamente';
    }else if(msg == undefined || msg == ''){
      if(act == 'GRI'){
        return 's|Incluído com sucesso';
      }else if(act == 'GRA'){
        return 's|Alterado com sucesso';
      }else if(act == 'GRE'){
        return 's|Excluido com sucesso';
      }
    }else{
      return msg;
    }
  }

  this.errordb = function(dados) {
    if(dados.err)
      return true;
    if(dados[[dados.length-1]] == 0)
      return true;
      
    return false;
  }

  this.successdb = function(dados) {
    if(dados.err)
      return false;
    if(dados[[dados.length-1]] == 0)
      return false;
      
    return true;
  }

  this.fnumber = function(n,d) {
    if(!(typeof d == 'string' || typeof d == 'number'))
      d = 2;
    if(n == '' || n == undefined)
      n = 0;
    if(typeof n == 'string'){
      n = parseFloat(n);
    }else if(typeof n == 'number'){
      n = n.toFixed(d);
      n = parseFloat(n);
    }else{
      n = 0;
    }
    var v = n.toLocaleString('pt-BR', { minimumFractionDigits: d });
    // node support only en-US locale (em js remover tratamento abaixo)  <<== Nao precisou mais pq alterei as configuracoes regionais na Umbler
    // v = v.replace('.','|');
    // v = v.replace(/,/g,'.');
    // v = v.replace('|',',');
    return v;
  }

  this.xnumber = function(n) {
    if (!n) return '';
    if (typeof n == 'number') return n;
    n = n.replace(/\./g,'');
    n = n.replace(/,/,'.');
    n = n.replace(/select|insert|update|drop|delete|--|xp_|;|'/gi,'');
    return n;
  }

  this.adddate = function(tip,qtd,mov) {
    var newdate = new Date();
    if(tip == 'dia'){
      if(mov == '+'){
        newdate.setDate(newdate.getDate() + parseInt(qtd) );
      }else{
        newdate.setDate(newdate.getDate() - parseInt(qtd) );
      }
    }else if(tip == 'mes'){
      if(mov == '+'){
        newdate.setMonth(newdate.getMonth() + parseInt(qtd) );
      }else{
        newdate.setMonth(newdate.getMonth() - parseInt(qtd) );
      }
    }
    data = new Date(newdate)
    dw = data.getDay();
    dd = data.getDate();
    dd = pad(dd,2);
    mm = data.getMonth() + 1;
    mm = pad(mm,2);
    y = data.getFullYear();
    novadata = y + mm + dd;

    return novadata;
  }

  this.diasmes = function(m) {
    if(m == '01' || m == '03' || m == '05' || m == '07' || m == '08' || m == '10' || m == '12'){
      d = '31';
    }else if(m == '04' || m == '06' || m == '09' || m == '11'){
      d = '30';
    }else if(m == '02'){
      d = (y % 4 == 0) ? '29' : '28';
    }
    return d;
  }

  this.mid = function(str,i,f){
    if(str != undefined){
      str = str.substring(i,f);
      return str;
    }else{
      return '';
    }
  }

  this.setores = function(n){
    var s = [];
    s[0] = '';
    s[1] = 'Administração';
    s[2] = 'Comercial';
    s[3] = 'Marketing';
    s[4] = 'Financeiro';
    s[5] = 'Suprimento';
    s[6] = 'Operação';
    s[7] = 'Produção';
    s[8] = 'Logística';
    s[9] = 'Indústria';
    s[10] = 'Vendas';
    s[11] = 'Geral';
    s[12] = 'Tecnologia da Informação';
    s[13] = 'Recursos Humanos';
    return s;
  }

  this.cargos = function(n) {
    var c = [];
    c['']  = '';
    c['1'] = 'Auxiliar';
    c['2'] = 'Analista';
    c['3'] = 'Técnico';
    c['4'] = 'Coordenador';
    c['5'] = 'Supervisor';
    c['6'] = 'Gerente';
    c['7'] = 'Diretor';
    c['8'] = 'Presidente';
    return c;
  }

  this.parente = function(n) {
    var c = [];
    c[0]  = '';
    c[1] = 'Pai';
    c[2] = 'Mãe';
    c[3] = 'Filho(a)';
    c[4] = 'Irmão/Irmã';
    c[5] = 'Cônjuge';
    c[6] = 'Companheiro(a)';
    c[7] = 'Avô/Avó';
    c[9] = 'Neto(a)';
    c[8] = 'Bisavô/Bisavó';
    c[10] = 'Bisneto(a)';
    c[11] = 'Primo(a)';
    c[12] = 'Tio(a)';
    c[13] = 'Sobrinho(a)';
    return c;
  }

  this.logcad = function(v) {
    if(v == '' || v == null || v == undefined){
      return '';
    }else{
      var d = '';
      var h = '';
      var n = '';
      if(v.length >= 8){
        d = v.substring(0,8);
        d = fdata(d,'aa');
      }
      if(v.length > 8){
        h = v.substring(8,12);
        h = h.substring(0,2) +':'+ h.substring(2,4);
        h = ' às '+ h;
      }
      if(v.length > 14){
        var u = v.substring(14,21);
        u = parseFloat(u);
        for(var x in dadosusr){
          if(dadosusr[x].USR_ID == u){
            n = dadosusr[x].USR_NOME.substring(0,15);
            n = n + ' em ';
            break;
          }
        }
      }
    }
    return n + d + h;
  }

  this.remace = function(v) {
    if (!v) 
      return '';
    v = v.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // remove acentos
    return v;
  }

  this.remacecrt = function(v) {
    if (!v) 
      return '';
    v = v.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // remove acentos
    v = v.replace(/[^\w\s]/gi, ''); // remove caracteres especiais
    return v;
  }

  this.toHex = function(str,hex) {
    try {
      hex = encodeURIComponent(str)
      .split('').map(function(v){
        return v.charCodeAt(0).toString(16)
      }).join('');
    } catch(e) {
      hex = str;
      console.log('invalid text input: ' + str);
    }
    return hex;
  }

  this.fromHex = function(hex,str) {
    try {
      str = decodeURIComponent(hex.replace(/(..)/g,'%$1'));
    } catch(e) {
      str = hex;
      console.log('invalid hex input: ' + hex);
    }
    return str;
  }

  this.ValidateEmail = function(v) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v))
      return true;
    return false;
  }
  
  this.roughSizeOfObject = function(object) { // tamanho do objeto em bytes
    var objectList = [];
    var stack = [object];
    var bytes = 0;
    while (stack.length) {
      var value = stack.pop();
      if (typeof value === 'boolean') {
        bytes += 4;
      } else if (typeof value === 'string') {
        bytes += value.length * 2;
      } else if (typeof value === 'number') {
        bytes += 8;
      } else if (typeof value === 'object' && objectList.indexOf(value) === -1) {
        objectList.push(value);
        for (var i in value) {
          stack.push(value[i]);
        }
      }
    }
    return bytes;
  }

  this.nomeparaurl = function(v) {
    v = remacecrt(v);
    v = v.replace(/ /g,'_');
    return v;
  }


  
  return this;
};