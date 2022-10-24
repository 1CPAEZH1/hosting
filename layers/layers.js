var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Jagueyesdeptos_1 = new ol.format.GeoJSON();
var features_Jagueyesdeptos_1 = format_Jagueyesdeptos_1.readFeatures(json_Jagueyesdeptos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jagueyesdeptos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jagueyesdeptos_1.addFeatures(features_Jagueyesdeptos_1);
var lyr_Jagueyesdeptos_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jagueyesdeptos_1, 
                style: style_Jagueyesdeptos_1,
                interactive: true,
    title: 'Jagueyes — deptos<br />\
    <img src="styles/legend/Jagueyesdeptos_1_0.png" /> CALAMAR<br />\
    <img src="styles/legend/Jagueyesdeptos_1_1.png" /> LA MACARENA<br />\
    <img src="styles/legend/Jagueyesdeptos_1_2.png" /> SAN JOSÉ DEL GUAVIARE<br />\
    <img src="styles/legend/Jagueyesdeptos_1_3.png" /> SAN VICENTE DEL CAGUÁN<br />\
    <img src="styles/legend/Jagueyesdeptos_1_4.png" /> <br />'
        });
var format_JagueyesJagueyes1_2 = new ol.format.GeoJSON();
var features_JagueyesJagueyes1_2 = format_JagueyesJagueyes1_2.readFeatures(json_JagueyesJagueyes1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JagueyesJagueyes1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JagueyesJagueyes1_2.addFeatures(features_JagueyesJagueyes1_2);
var lyr_JagueyesJagueyes1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JagueyesJagueyes1_2, 
                style: style_JagueyesJagueyes1_2,
                interactive: true,
                title: '<img src="styles/legend/JagueyesJagueyes1_2.png" /> Jagueyes — Jagueyes1'
            });
var format_JagueyesJagueyes2_3 = new ol.format.GeoJSON();
var features_JagueyesJagueyes2_3 = format_JagueyesJagueyes2_3.readFeatures(json_JagueyesJagueyes2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JagueyesJagueyes2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JagueyesJagueyes2_3.addFeatures(features_JagueyesJagueyes2_3);
var lyr_JagueyesJagueyes2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JagueyesJagueyes2_3, 
                style: style_JagueyesJagueyes2_3,
                interactive: true,
                title: '<img src="styles/legend/JagueyesJagueyes2_3.png" /> Jagueyes — Jagueyes2'
            });
var format_Area_Estudio_4 = new ol.format.GeoJSON();
var features_Area_Estudio_4 = format_Area_Estudio_4.readFeatures(json_Area_Estudio_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area_Estudio_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_Estudio_4.addFeatures(features_Area_Estudio_4);
var lyr_Area_Estudio_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Area_Estudio_4, 
                style: style_Area_Estudio_4,
                interactive: true,
                title: '<img src="styles/legend/Area_Estudio_4.png" /> Area_Estudio'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Jagueyesdeptos_1.setVisible(true);lyr_JagueyesJagueyes1_2.setVisible(true);lyr_JagueyesJagueyes2_3.setVisible(true);lyr_Area_Estudio_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Jagueyesdeptos_1,lyr_JagueyesJagueyes1_2,lyr_JagueyesJagueyes2_3,lyr_Area_Estudio_4];
lyr_Jagueyesdeptos_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'DPTOMPIO': 'DPTOMPIO', 'CODIGO_VER': 'CODIGO_VER', 'NOM_DEP': 'NOM_DEP', 'NOMB_MPIO': 'NOMB_MPIO', 'NOMBRE_VER': 'NOMBRE_VER', 'VIGENCIA': 'VIGENCIA', 'FUENTE': 'FUENTE', 'DESCRIPCIO': 'DESCRIPCIO', 'SEUDONIMOS': 'SEUDONIMOS', 'AREA_HA': 'AREA_HA', 'COD_DPTO': 'COD_DPTO', 'OBSERVACIO': 'OBSERVACIO', 'CONSEJE': 'CONSEJE', 'ORIG_FID': 'ORIG_FID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JagueyesJagueyes1_2.set('fieldAliases', {'fid': 'fid', 'Atributo': 'Atributo', });
lyr_JagueyesJagueyes2_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_Area_Estudio_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DEPTO': 'DEPTO', 'NOMBRE': 'NOMBRE', 'COD_DANE': 'COD_DANE', 'area': 'area', 'area_ha': 'area_ha', 'area_km': 'area_km', 'NOM_MUNI': 'NOM_MUNI', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'PROYECTO': 'PROYECTO', });
lyr_Jagueyesdeptos_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'DPTOMPIO': 'TextEdit', 'CODIGO_VER': 'TextEdit', 'NOM_DEP': 'TextEdit', 'NOMB_MPIO': 'TextEdit', 'NOMBRE_VER': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FUENTE': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'SEUDONIMOS': 'TextEdit', 'AREA_HA': 'TextEdit', 'COD_DPTO': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'CONSEJE': 'TextEdit', 'ORIG_FID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_JagueyesJagueyes1_2.set('fieldImages', {'fid': 'TextEdit', 'Atributo': 'TextEdit', });
lyr_JagueyesJagueyes2_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_Area_Estudio_4.set('fieldImages', {'OBJECTID': 'Range', 'DEPTO': 'TextEdit', 'NOMBRE': 'TextEdit', 'COD_DANE': 'TextEdit', 'area': 'TextEdit', 'area_ha': 'TextEdit', 'area_km': 'TextEdit', 'NOM_MUNI': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'PROYECTO': 'TextEdit', });
lyr_Jagueyesdeptos_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'DPTOMPIO': 'no label', 'CODIGO_VER': 'no label', 'NOM_DEP': 'no label', 'NOMB_MPIO': 'no label', 'NOMBRE_VER': 'no label', 'VIGENCIA': 'no label', 'FUENTE': 'no label', 'DESCRIPCIO': 'no label', 'SEUDONIMOS': 'no label', 'AREA_HA': 'no label', 'COD_DPTO': 'no label', 'OBSERVACIO': 'no label', 'CONSEJE': 'no label', 'ORIG_FID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_JagueyesJagueyes1_2.set('fieldLabels', {'fid': 'no label', 'Atributo': 'no label', });
lyr_JagueyesJagueyes2_3.set('fieldLabels', {'fid': 'no label', 'id': 'inline label', });
lyr_Area_Estudio_4.set('fieldLabels', {'OBJECTID': 'no label', 'DEPTO': 'no label', 'NOMBRE': 'inline label', 'COD_DANE': 'no label', 'area': 'no label', 'area_ha': 'no label', 'area_km': 'no label', 'NOM_MUNI': 'inline label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'PROYECTO': 'no label', });
lyr_Area_Estudio_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});