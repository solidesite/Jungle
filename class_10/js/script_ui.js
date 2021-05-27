$(function(){
    init(); //초기함수 호출(임시)
});

function init(){
    //풀페이지 세팅
    $(".fullpage").fullpage({
        sectionsColor:["", "#eaeef2", "#b6e4fe", "#e2dcd4", "fff"], //배경색 설정
        navigation:true, //메뉴 유무
        navigationTooltips:["MAIN", "PROFILE", "SKILL", "PORTFOLIO", "CONTACT"] //메뉴명
    });
}