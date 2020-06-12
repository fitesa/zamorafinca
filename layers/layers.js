var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_FincaVecino_1 = new ol.format.GeoJSON();
var features_FincaVecino_1 = format_FincaVecino_1.readFeatures(json_FincaVecino_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FincaVecino_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FincaVecino_1.addFeatures(features_FincaVecino_1);
var lyr_FincaVecino_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FincaVecino_1, 
                style: style_FincaVecino_1,
                interactive: true,
    title: 'Finca Vecino<br />\
    <img src="styles/legend/FincaVecino_1_0.png" /> TA - 26,4 has<br />'
        });
var format_FincaZamora_2 = new ol.format.GeoJSON();
var features_FincaZamora_2 = format_FincaZamora_2.readFeatures(json_FincaZamora_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FincaZamora_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FincaZamora_2.addFeatures(features_FincaZamora_2);
var lyr_FincaZamora_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FincaZamora_2, 
                style: style_FincaZamora_2,
                interactive: true,
    title: 'Finca Zamora<br />\
    <img src="styles/legend/FincaZamora_2_0.png" /> CASA - 0,8 has<br />\
    <img src="styles/legend/FincaZamora_2_1.png" /> NARANJOS - 23,9 has<br />\
    <img src="styles/legend/FincaZamora_2_2.png" /> TA - 93,3 has<br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_FincaVecino_1.setVisible(true);lyr_FincaZamora_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_FincaVecino_1,lyr_FincaZamora_2];
lyr_FincaVecino_1.set('fieldAliases', {'TIPO': 'TIPO', 'SUPERFICIE': 'SUPERFICIE', 'IMAGEN': 'IMAGEN', });
lyr_FincaZamora_2.set('fieldAliases', {'TIPO': 'TIPO', 'SUPERFICIE': 'SUPERFICIE', 'IMAGEN': 'IMAGEN', });
lyr_FincaVecino_1.set('fieldImages', {'TIPO': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'IMAGEN': 'ExternalResource', });
lyr_FincaZamora_2.set('fieldImages', {'TIPO': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'IMAGEN': 'ExternalResource', });
lyr_FincaVecino_1.set('fieldLabels', {'TIPO': 'header label', 'SUPERFICIE': 'header label', 'IMAGEN': 'header label', });
lyr_FincaZamora_2.set('fieldLabels', {'TIPO': 'header label', 'SUPERFICIE': 'header label', 'IMAGEN': 'header label', });
lyr_FincaZamora_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});