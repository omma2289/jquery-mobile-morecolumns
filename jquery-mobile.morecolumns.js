(function( $, undefined ) {
	$(document).on("mobileinit", function(){
		$.fn.grid = function( options ) {
			return this.each(function() {
		
				var $this = $( this ),
					o = $.extend({
						grid: null
					}, options ),
					$kids = $this.children(),
					gridCols = { solo:1, a:2, b:3, c:4, d:5, e:6, f:7, g:8 },
					grid = o.grid,
					iterator,
					letter;
		
					if ( !grid ) {
						if ( $kids.length <= 8 ) {
							for ( letter in gridCols ) {
								if ( gridCols[ letter ] === $kids.length ) {
									grid = letter;
								}
							}
						} else {
							grid = "a";
							$this.addClass( "ui-grid-duo" );
						}
					}
					iterator = gridCols[grid];
		
				$this.addClass( "ui-grid-" + grid );
		
				$kids.filter( ":nth-child(" + iterator + "n+1)" ).addClass( "ui-block-a" );
		
				if ( iterator > 1 ) {
					$kids.filter( ":nth-child(" + iterator + "n+2)" ).addClass( "ui-block-b" );
				}
				if ( iterator > 2 ) {
					$kids.filter( ":nth-child(" + iterator + "n+3)" ).addClass( "ui-block-c" );
				}
				if ( iterator > 3 ) {
					$kids.filter( ":nth-child(" + iterator + "n+4)" ).addClass( "ui-block-d" );
				}
				if ( iterator > 4 ) {
					$kids.filter( ":nth-child(" + iterator + "n+5)" ).addClass( "ui-block-e" );
				}
				if ( iterator > 5 ) {
					$kids.filter( ":nth-child(" + iterator + "n+6)" ).addClass( "ui-block-f" );
				}
				if ( iterator > 6 ) {
					$kids.filter( ":nth-child(" + iterator + "n+7)" ).addClass( "ui-block-g" );
				}
				if ( iterator > 7 ) {
					$kids.filter( ":nth-child(" + iterator + "n+8)" ).addClass( "ui-block-h" );
				}
				
			});
		};
	});
})( jQuery );
