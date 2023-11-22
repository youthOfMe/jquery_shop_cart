
//点击选择框后 选择框会改变
var imgCount=$(".chose").length
var productCount=$(".intr").length
goodsCount()
$(".both").children("span").css("display","none")
//判断是否是全选 选择时调用一次 全选时调用一次
function allselect () {
    imgCount=$(".chose").length
    productCount=$(".intr").length
    $(".both").children("span").css("display",imgCount===productCount?"block":"none")
    // $(".both").children("span").css("display",productCount===0&&$(".all").children().attr("src")==="choose.png"?"none":"block")
}

$(".intr_choose").children("img").click(function () {
    $(this).attr({"src":$(this).attr("src")==="choose.png"?"chose.png":"choose.png","class":$(this).attr("class")==="choose"?"chose":"choose"})
    productCount=$(".intr").length
    imgCount=$(".chose").length
    $(".all").children().attr({"src":imgCount===productCount?"chose.png":"choose.png","class":imgCount===productCount?"aselected":"aselect",})
    goodsCount()
    moneyCount()
    allselect()
})
//全选功能
$(".aselect").click(function () {
    $(this).attr({"src":$(this).attr("src")==="choose.png"?"chose.png":"choose.png","class": $(this).attr("class")==="aselect"?"aselected":"aselect"})
    $(".intr_choose img:first-child").attr({src:$(this).attr("src")==="chose.png"?"chose.png":"choose.png",class:$(this).attr("class")==="aselected"?"chose":"choose"})
    goodsCount()
    moneyCount()
    allselect()
})
//计算选择后的件数 选一个计算一次 全算的时候计算一次 删除的时候计算一次 封装
function goodsCount () {
    imgCount=$(".chose").length
    $(".both p:eq(0)").text(imgCount)
}
//商品加减号功能 
$(".minus").click(function () {
    var costCount=$(this).next().text()
    $(this).next().text(costCount>1?costCount-1:1)
    moneyCount()
})
$(".plus").click(function () {
    var costCount=Number($(this).prev().text())
    $(this).prev().text(costCount+1)
    moneyCount()
})
//计算价格 选一个计算一次 全选的时候激素按一次 删除的时候计算一次 改商品个数的时候计算一次 封装
function moneyCount () {
    var allMoney=0
    $(".chose").parent().siblings(".intr_money").children().each(function () {
        var aMoney=Number($(this).text().substring(1))
        var aCount=Number($(this).parent().prev().find("p").text())
        var goodsMoney=aCount*aMoney
        $(this).parent().next().children().text("￥"+goodsMoney)
        allMoney+=goodsMoney
    })
    $(".both p:last-child").text("￥"+allMoney)
}
//删除功能
$(".intr_operation").children().click(function () {
    $(this).parents(".intr").remove()
    goodsCount()
    moneyCount()
})
//删除所选功能
$(".feature").children("p").click(function () {
    $(".chose").parents(".intr").remove()
    goodsCount()
    moneyCount()
})
$(".pay").click(function () {
    alert("服务器报废了")
})