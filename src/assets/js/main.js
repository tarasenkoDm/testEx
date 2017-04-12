$(".tab").click(function (e) {
    $(".tab").removeClass("active");
    $(e.currentTarget).addClass("active");

    var $currentTabContent = $(".tabs-content").find("[data-name = " + $(e.currentTarget).data("name") + "]");

    $currentTabContent.removeClass("hide");
    $currentTabContent.siblings().addClass("hide");
});