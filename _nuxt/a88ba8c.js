(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{249:function(t,o,e){var content=e(253);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(131).default)("ced296c6",content,!0,{sourceMap:!1})},252:function(t,o,e){"use strict";e(249)},253:function(t,o,e){var l=e(130)(!1);l.push([t.i,'.login{display:grid;grid-template-columns:1fr;grid-template-rows:12vh 16vh 18vh 6.5vh 28.5vh 19vh;padding:0 4vw;justify-items:center;background-color:#fff}.riot-logo{width:170px}.riot-logo,.title{align-self:flex-end}.title{font-size:23pt;color:#000}.form,.i-login{width:100%}.i-login{border:0;border-radius:3pt;margin:0 0 2vh;height:6vh;background-color:#f4f4f4;font-size:8pt;font-weight:800}.i-login::-moz-placeholder{padding:8pt}.i-login::placeholder{padding:8pt}.alt-login{width:100%}.alt-login-container{width:100%;display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-areas:"f g a" "s s s";height:4rem}.alt-login-item{border-radius:4pt;display:flex;justify-content:center;align-content:center}.al-facebook{background-color:#296cd6;grid-area:f}.img-facebook{width:11pt;align-self:center}.al-google{background-color:#fff;grid-area:g}.img-google{width:11pt;align-self:center}.al-apple{background-color:#141414;grid-area:a}.img-apple{width:11pt;filter:contrast(0) brightness(2);align-self:center}.signedin{align-self:flex-start;justify-self:self-start;grid-area:s}.container-cb{display:flex;position:relative;cursor:pointer;font-size:11.5pt;font-weight:200;color:#838383;align-items:center}.container-cb input{position:absolute;opacity:0;cursor:pointer;height:0;width:0;background-color:#ededed}.checkmark{top:0;left:0;height:1.4rem;width:1.4rem;background-color:#ececec;border-radius:3pt;margin-right:.5rem}.container-cb:hover input~.checkmark{background-color:#ddd}.container-cb input:checked~.checkmark{background-color:#3180da}.btn-area{justify-content:center;align-content:center;display:flex}.btn-signin{width:60pt;height:60pt;border-radius:30%;border:1px solid #e7e7e7;align-self:center;background-color:#f2f2f2;cursor:pointer;transition:.3s}.btn-signin span{color:#e7e7e7}.btn-signin:hover{background-color:#f6f6f6;padding:1px}.more{display:grid;justify-items:center;align-content:flex-end;flex-direction:row;align-self:center}.help{font-size:8pt;font-weight:800;text-decoration:none;color:#bbb}.version{display:block;position:absolute;justify-self:flex-end;top:90vh}',""]),t.exports=l},258:function(t,o,e){"use strict";e.r(o);var l={name:"Login",data:function(){return{version:"v01.00.0",logosAltLogin:{facebook:"https://pnggrid.com/wp-content/uploads/2021/04/facebook-white-circle-1024x1024.png",google:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png",apple:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png"}}}},n=(e(252),e(42)),component=Object(n.a)(l,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"login"},[o("link",{attrs:{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}}),t._v(" "),o("img",{staticClass:"riot-logo",attrs:{width:"100px",src:"https://cdn1.dotesports.com/wp-content/uploads/sites/3/2022/02/21162720/riot-games-new-logo.jpg",alt:""}}),t._v(" "),o("h2",{staticClass:"title"},[t._v("Sing in")]),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"alt-login"},[o("div",{staticClass:"alt-login-container"},[o("div",{staticClass:"alt-login-item al-facebook"},[o("img",{staticClass:"img-facebook",attrs:{src:t.logosAltLogin.facebook,alt:""}})]),t._v(" "),o("div",{staticClass:"alt-login-item al-google"},[o("img",{staticClass:"img-google",attrs:{src:t.logosAltLogin.google,alt:""}})]),t._v(" "),o("div",{staticClass:"alt-login-item al-apple"},[o("img",{staticClass:"img-apple",attrs:{src:t.logosAltLogin.apple,alt:""}})])]),t._v(" "),t._m(1)]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),o("p",{staticClass:"version"},[t._v(t._s(t.version))])])}),[function(){var t=this._self._c;return t("form",{staticClass:"form",attrs:{action:""}},[t("input",{staticClass:"i-login",attrs:{type:"text",placeholder:"USERNAME"}}),this._v(" "),t("input",{staticClass:"i-login",attrs:{type:"text",placeholder:"PASSWORD"}})])},function(){var t=this,o=t._self._c;return o("div",{staticClass:"signedin"},[o("label",{staticClass:"container-cb"},[o("input",{staticClass:"checkbox",attrs:{type:"checkbox"}}),t._v(" "),o("span",{staticClass:"checkmark"}),t._v("\n                Stay signed in\n            ")])])},function(){var t=this._self._c;return t("div",{staticClass:"btn-area"},[t("button",{staticClass:"btn-signin",attrs:{type:"button",href:"http://google.com"}},[t("span",{staticClass:"material-icons"},[this._v("arrow_forward")])])])},function(){var t=this,o=t._self._c;return o("div",{staticClass:"more"},[o("a",{staticClass:"help",attrs:{href:""}},[t._v("CAN'T SING IN")]),t._v(" "),o("a",{staticClass:"help",attrs:{href:"http://a.com"}},[t._v("CREATE ACCOUNT")])])}],!1,null,null,null);o.default=component.exports}}]);