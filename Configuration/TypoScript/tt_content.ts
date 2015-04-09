# responsive images
tt_content.image.20.1.layout.default.element = <img src="###SRC###" ###PARAMS######ALTPARAMS######BORDER######SELFCLOSINGTAGSLASH###>
tt_content.image.20.1.params = class="img-responsive"

# setting height and with using registers from fluid
tt_content.image.20.1.file.width.override.data = register:fixedWidth
tt_content.image.20.1.file.height.ifEmpty.data = register:fixedHeight

# bullet lists
tt_content.text.20.HTMLparser = 1
tt_content.text.20.HTMLparser.keepNonMatchedTags = 1
tt_content.text.20.HTMLparser.tags.ul.fixAttrib.class.set = bulletsLists

tt_content.menu.20.1.stdWrap.outerWrap = <ul class="csc-menu csc-menu-1 bulletsLists">|</ul>
tt_content.menu.20.3.stdWrap.outerWrap = <ul class="csc-menu csc-menu-3 bulletsLists">|</ul>
tt_content.menu.20.5.stdWrap.outerWrap = <ul class="csc-menu csc-menu-5 bulletsLists">|</ul>
tt_content.menu.20.6.stdWrap.outerWrap = <ul class="csc-menu csc-menu-6 bulletsLists">|</ul>
tt_content.menu.20.7.stdWrap.outerWrap = <ul class="csc-menu csc-menu-7 bulletsLists">|</ul>
tt_content.menu.20.default.stdWrap.outerWrap = <ul class="csc-menu csc-menu-def bulletsLists">|</ul>
tt_content.menu.20.categorized_pages.stdWrap.outerWrap = <ul class="csc-menu csc-menu-categorized-pages bulletsLists">|</ul>

# ordered lists
tt_content.text.20.HTMLparser = 1
tt_content.text.20.HTMLparser.keepNonMatchedTags = 1
tt_content.text.20.HTMLparser.tags.ol.fixAttrib.class.set = numberedLists


# extra header layout
lib.stdheader.10.99 < lib.stdheader.10.2
lib.stdheader.10.99.dataWrap = <h2{register:headerClass}><span class="proximaLight">|</span></h2>
