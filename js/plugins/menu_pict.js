//=============================================================================
// menu_pict.js
//=============================================================================
/*:
@plugindesc メニューに画像を表示するプラグイン 
@author 

@param PICTNAME
@text 画像名
@desc 表示する画像の名前
@default girl1

@param x
@desc 画像のＸ座標
@default 100

@param y
@desc 画像のＹ座標
@default 200

@param scale_x
@desc Ｘ方向のスケール
@default 1

@param scale_y
@desc Ｙ方向のスケール
@default 1

@help 画像名に任意の画像名を入れてください。
x / yで座標を指定できます。
scaleで縮尺の指定ができます。（1が１００％。2だと２００％）

※入力チェックなどはしていません。
※ご自由にお使いください。

*/
(function() {
    var parameters = PluginManager.parameters('menu_pict'),
		PICTNAME = parameters['PICTNAME'] || "girl1",
		x = +parameters['x'] || 100,
		y = +parameters['y'] || 200,
		scale_x = +parameters['scale_x'] || 1,
		scale_y = +parameters['scale_y'] || 1; 

	var _Window_MenuStatus_initialize = Window_MenuStatus.prototype.initialize;
	Window_MenuStatus.prototype.initialize = function() {
		_Window_MenuStatus_initialize.apply(this, arguments);
	
		// var pictname = "girl1", x = 100, y = 200;	
		var bitmap = ImageManager.loadPicture(PICTNAME);
		var sprite = new Sprite(bitmap);
		sprite.x = x;
		sprite.y = y;
		sprite.scale.x = scale_x;
		sprite.scale.y = scale_y;
		this.addChild(sprite);	
	};
})();