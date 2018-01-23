/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * extensions: https://github.com/kayalshri/tableExport.jquery.plugin
 */

(function ($) {
    'use strict';
    $.extend($.fn.bootstrapTable.defaults, {
        // 默认不显示
        paginationShowPageGo: false
    });

    $.extend($.fn.bootstrapTable.locales, {
        pageGo: function () {
            return 'Page Jump';
        }
    });
    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales);

    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _initPagination = BootstrapTable.prototype.initPagination;

    BootstrapTable.prototype.initPagination = function() {
        _initPagination.apply(this, Array.prototype.slice.apply(arguments));
        if(this.options.paginationShowPageGo){
            this.initPaginationPageGo();
        }
    };

    BootstrapTable.prototype.initPaginationPageGo = function () {
        if (!this.options.pagination) {
            return;
        }

        var html = [],
            $pagego, $ulPagination, $pageInput;

        if (!this.options.onlyInfoPagination) {

            var html = [];
            html.push(
                '<ul class="pagination-jump">',
                '<li class=""><span>' + this.options.pageGo() + ':</span></li>',
                '<li class=""><input type="text" class="page-input" value="' + this.options.pageNumber + '"   /></li>',
                '<li class="page-go"><a class="jump-go" href="">GO</a></li>',
                '</ul>');

            $ulPagination = this.$pagination.find('ul.pagination');
            $ulPagination.after(html.join(''));

            $pagego = this.$pagination.find('.page-go');
            $pageInput = this.$pagination.find('.page-input');

            $pagego.off('click').on('click', $.proxy(this.onPageGo, this));
            $pageInput.off('keyup').on('keyup', function(){
                if(this.value.length==1){
                    this.value=this.value.replace(/[^1-9]/g,'')
                }else{
                    this.value=this.value.replace(/\D/g,'')
                }
            });

        }

    };


    BootstrapTable.prototype.onPageGo = function (event) {
        // var $this = $(event.currentTarget);
        var $toPage=this.$pagination.find('.page-input');

        if (this.options.pageNumber === +$toPage.val() || +$toPage.val() <= 0) {
            return false;
        }
        this.options.pageNumber = +$toPage.val();

        this.updatePagination(event);
        // $this.prev().find('input').val(this.options.pageNumber);
        return false;
    };
})(jQuery);
