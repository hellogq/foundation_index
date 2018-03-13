$('.navParent>li').on("mouseenter", function() {
    $(this).addClass('.selLi')
    $(this).children("a").addClass('.selA')
    $(this).children(".navChildren").show()
})
$('.navParent>li').on("mouseleave", function() {
    $(this).removeClass('.selLi')
    $(this).children("a").removeClass('.selA')
    $(this).children(".navChildren").hide()
})