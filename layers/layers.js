var wms_layers = [];

var format_Al_0 = new ol.format.GeoJSON();
var features_Al_0 = format_Al_0.readFeatures(json_Al_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Al_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Al_0.addFeatures(features_Al_0);
var lyr_Al_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Al_0, 
                style: style_Al_0,
                interactive: true,
    title: 'Al<br />\
    <img src="styles/legend/Al_0_0.png" /> 0<br />\
    <img src="styles/legend/Al_0_1.png" /> 0,1<br />'
        });
var format_Ca_1 = new ol.format.GeoJSON();
var features_Ca_1 = format_Ca_1.readFeatures(json_Ca_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ca_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ca_1.addFeatures(features_Ca_1);
var lyr_Ca_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ca_1, 
                style: style_Ca_1,
                interactive: true,
    title: 'Ca<br />\
    <img src="styles/legend/Ca_1_0.png" /> 2,4<br />\
    <img src="styles/legend/Ca_1_1.png" /> 3,3<br />\
    <img src="styles/legend/Ca_1_2.png" /> 3,4<br />\
    <img src="styles/legend/Ca_1_3.png" /> 3,5<br />'
        });
var format_H_2 = new ol.format.GeoJSON();
var features_H_2 = format_H_2.readFeatures(json_H_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_H_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_H_2.addFeatures(features_H_2);
var lyr_H_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_H_2, 
                style: style_H_2,
                interactive: true,
    title: 'H+<br />\
    <img src="styles/legend/H_2_0.png" /> 2,2<br />\
    <img src="styles/legend/H_2_1.png" /> 2,4<br />\
    <img src="styles/legend/H_2_2.png" /> 2,5<br />\
    <img src="styles/legend/H_2_3.png" /> 2,6<br />\
    <img src="styles/legend/H_2_4.png" /> 2,9<br />\
    <img src="styles/legend/H_2_5.png" /> 3<br />\
    <img src="styles/legend/H_2_6.png" /> 3,1<br />\
    <img src="styles/legend/H_2_7.png" /> 3,2<br />\
    <img src="styles/legend/H_2_8.png" /> 3,3<br />\
    <img src="styles/legend/H_2_9.png" /> 5,5<br />'
        });
var format_K_3 = new ol.format.GeoJSON();
var features_K_3 = format_K_3.readFeatures(json_K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_K_3.addFeatures(features_K_3);
var lyr_K_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_K_3, 
                style: style_K_3,
                interactive: true,
    title: 'K+<br />\
    <img src="styles/legend/K_3_0.png" /> 57,4<br />\
    <img src="styles/legend/K_3_1.png" /> 60,5<br />\
    <img src="styles/legend/K_3_2.png" /> 83,8<br />\
    <img src="styles/legend/K_3_3.png" /> 103,5<br />\
    <img src="styles/legend/K_3_4.png" /> 107,1<br />\
    <img src="styles/legend/K_3_5.png" /> 120,6<br />\
    <img src="styles/legend/K_3_6.png" /> 127,5<br />\
    <img src="styles/legend/K_3_7.png" /> 142<br />\
    <img src="styles/legend/K_3_8.png" /> 152,8<br />\
    <img src="styles/legend/K_3_9.png" /> 172,4<br />'
        });
var format_Mg_4 = new ol.format.GeoJSON();
var features_Mg_4 = format_Mg_4.readFeatures(json_Mg_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mg_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mg_4.addFeatures(features_Mg_4);
var lyr_Mg_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mg_4, 
                style: style_Mg_4,
                interactive: true,
    title: 'Mg<br />\
    <img src="styles/legend/Mg_4_0.png" /> 1,2<br />\
    <img src="styles/legend/Mg_4_1.png" /> 1,3<br />\
    <img src="styles/legend/Mg_4_2.png" /> 1,4<br />\
    <img src="styles/legend/Mg_4_3.png" /> 1,5<br />'
        });
var format_pH_5 = new ol.format.GeoJSON();
var features_pH_5 = format_pH_5.readFeatures(json_pH_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pH_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pH_5.addFeatures(features_pH_5);
var lyr_pH_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pH_5, 
                style: style_pH_5,
                interactive: true,
    title: 'pH<br />\
    <img src="styles/legend/pH_5_0.png" /> 5,4<br />\
    <img src="styles/legend/pH_5_1.png" /> 6<br />\
    <img src="styles/legend/pH_5_2.png" /> 6,1<br />\
    <img src="styles/legend/pH_5_3.png" /> 6,2<br />\
    <img src="styles/legend/pH_5_4.png" /> 6,3<br />\
    <img src="styles/legend/pH_5_5.png" /> 6,4<br />'
        });
var format_SALGADA_6 = new ol.format.GeoJSON();
var features_SALGADA_6 = format_SALGADA_6.readFeatures(json_SALGADA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SALGADA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SALGADA_6.addFeatures(features_SALGADA_6);
var lyr_SALGADA_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SALGADA_6, 
                style: style_SALGADA_6,
                interactive: true,
                title: '<img src="styles/legend/SALGADA_6.png" /> SALGADA'
            });
var format_AUDE_7 = new ol.format.GeoJSON();
var features_AUDE_7 = format_AUDE_7.readFeatures(json_AUDE_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AUDE_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AUDE_7.addFeatures(features_AUDE_7);
var lyr_AUDE_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AUDE_7, 
                style: style_AUDE_7,
                interactive: true,
                title: '<img src="styles/legend/AUDE_7.png" /> AÇUDE'
            });
var format_SEDE_8 = new ol.format.GeoJSON();
var features_SEDE_8 = format_SEDE_8.readFeatures(json_SEDE_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEDE_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEDE_8.addFeatures(features_SEDE_8);
var lyr_SEDE_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SEDE_8, 
                style: style_SEDE_8,
                interactive: true,
                title: '<img src="styles/legend/SEDE_8.png" /> SEDE'
            });
var format_SALGADA_9 = new ol.format.GeoJSON();
var features_SALGADA_9 = format_SALGADA_9.readFeatures(json_SALGADA_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SALGADA_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SALGADA_9.addFeatures(features_SALGADA_9);
var lyr_SALGADA_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SALGADA_9, 
                style: style_SALGADA_9,
                interactive: true,
                title: '<img src="styles/legend/SALGADA_9.png" /> SALGADA'
            });
var format_AUDE_10 = new ol.format.GeoJSON();
var features_AUDE_10 = format_AUDE_10.readFeatures(json_AUDE_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AUDE_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AUDE_10.addFeatures(features_AUDE_10);
var lyr_AUDE_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AUDE_10, 
                style: style_AUDE_10,
                interactive: true,
                title: '<img src="styles/legend/AUDE_10.png" /> AÇUDE'
            });
var format_SEDE_11 = new ol.format.GeoJSON();
var features_SEDE_11 = format_SEDE_11.readFeatures(json_SEDE_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEDE_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEDE_11.addFeatures(features_SEDE_11);
var lyr_SEDE_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SEDE_11, 
                style: style_SEDE_11,
                interactive: true,
                title: '<img src="styles/legend/SEDE_11.png" /> SEDE'
            });
var lyr_SEDE_12 = new ol.layer.Image({
                            opacity: 1,
                            title: "SEDE",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SEDE_12.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-4670948.163394, -2384394.961702, -4670201.137126, -2383681.065682]
                            })
                        });
var format_NmerodeFalhasdePalntio_13 = new ol.format.GeoJSON();
var features_NmerodeFalhasdePalntio_13 = format_NmerodeFalhasdePalntio_13.readFeatures(json_NmerodeFalhasdePalntio_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NmerodeFalhasdePalntio_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NmerodeFalhasdePalntio_13.addFeatures(features_NmerodeFalhasdePalntio_13);
var lyr_NmerodeFalhasdePalntio_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NmerodeFalhasdePalntio_13, 
                style: style_NmerodeFalhasdePalntio_13,
                interactive: true,
    title: 'Número de Falhas de Palntio<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_13_0.png" /> 2<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_13_1.png" /> 8<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_13_2.png" /> 24<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_13_3.png" /> 31<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_13_4.png" /> 75<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_13_5.png" /> 88<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_13_6.png" /> 319<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_13_7.png" /> 346<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_13_8.png" /> 367<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_13_9.png" /> 424<br />'
        });
var format_NmerodeLinhasdePlantio_14 = new ol.format.GeoJSON();
var features_NmerodeLinhasdePlantio_14 = format_NmerodeLinhasdePlantio_14.readFeatures(json_NmerodeLinhasdePlantio_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NmerodeLinhasdePlantio_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NmerodeLinhasdePlantio_14.addFeatures(features_NmerodeLinhasdePlantio_14);
var lyr_NmerodeLinhasdePlantio_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NmerodeLinhasdePlantio_14, 
                style: style_NmerodeLinhasdePlantio_14,
                interactive: true,
    title: 'Número de Linhas de Plantio<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_14_0.png" /> 22<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_14_1.png" /> 27<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_14_2.png" /> 31<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_14_3.png" /> 33<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_14_4.png" /> 46<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_14_5.png" /> 47<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_14_6.png" /> 48<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_14_7.png" /> 59<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_14_8.png" /> 65<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_14_9.png" /> 72<br />'
        });
var format_AnodePlantio_15 = new ol.format.GeoJSON();
var features_AnodePlantio_15 = format_AnodePlantio_15.readFeatures(json_AnodePlantio_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnodePlantio_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnodePlantio_15.addFeatures(features_AnodePlantio_15);
var lyr_AnodePlantio_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AnodePlantio_15, 
                style: style_AnodePlantio_15,
                interactive: true,
    title: 'Ano de Plantio<br />\
    <img src="styles/legend/AnodePlantio_15_0.png" /> 1995<br />\
    <img src="styles/legend/AnodePlantio_15_1.png" /> 2019<br />\
    <img src="styles/legend/AnodePlantio_15_2.png" /> 2019/2020<br />\
    <img src="styles/legend/AnodePlantio_15_3.png" /> 2020<br />'
        });
var format_Variedades_16 = new ol.format.GeoJSON();
var features_Variedades_16 = format_Variedades_16.readFeatures(json_Variedades_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Variedades_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Variedades_16.addFeatures(features_Variedades_16);
var lyr_Variedades_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Variedades_16, 
                style: style_Variedades_16,
                interactive: true,
    title: 'Variedades<br />\
    <img src="styles/legend/Variedades_16_0.png" /> 785-15 Verm.<br />\
    <img src="styles/legend/Variedades_16_1.png" /> Arara<br />\
    <img src="styles/legend/Variedades_16_2.png" /> Arara e Japy<br />\
    <img src="styles/legend/Variedades_16_3.png" /> Catuai<br />\
    <img src="styles/legend/Variedades_16_4.png" /> Mundo Novo<br />'
        });
var format_reaha_17 = new ol.format.GeoJSON();
var features_reaha_17 = format_reaha_17.readFeatures(json_reaha_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaha_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaha_17.addFeatures(features_reaha_17);
var lyr_reaha_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reaha_17, 
                style: style_reaha_17,
                interactive: true,
    title: 'Área ha<br />\
    <img src="styles/legend/reaha_17_0.png" /> 0,28<br />\
    <img src="styles/legend/reaha_17_1.png" /> 0,286<br />\
    <img src="styles/legend/reaha_17_2.png" /> 0,407<br />\
    <img src="styles/legend/reaha_17_3.png" /> 0,607<br />\
    <img src="styles/legend/reaha_17_4.png" /> 0,832<br />\
    <img src="styles/legend/reaha_17_5.png" /> 0,84<br />\
    <img src="styles/legend/reaha_17_6.png" /> 0,899<br />\
    <img src="styles/legend/reaha_17_7.png" /> 1,032<br />\
    <img src="styles/legend/reaha_17_8.png" /> 1,110<br />\
    <img src="styles/legend/reaha_17_9.png" /> 1,867<br />'
        });
var format_TalhesProdutivos_18 = new ol.format.GeoJSON();
var features_TalhesProdutivos_18 = format_TalhesProdutivos_18.readFeatures(json_TalhesProdutivos_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TalhesProdutivos_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TalhesProdutivos_18.addFeatures(features_TalhesProdutivos_18);
var lyr_TalhesProdutivos_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TalhesProdutivos_18, 
                style: style_TalhesProdutivos_18,
                interactive: true,
    title: 'Talhões Produtivos<br />\
    <img src="styles/legend/TalhesProdutivos_18_0.png" /> T01<br />\
    <img src="styles/legend/TalhesProdutivos_18_1.png" /> T02<br />\
    <img src="styles/legend/TalhesProdutivos_18_2.png" /> T03<br />\
    <img src="styles/legend/TalhesProdutivos_18_3.png" /> T04<br />\
    <img src="styles/legend/TalhesProdutivos_18_4.png" /> T05<br />\
    <img src="styles/legend/TalhesProdutivos_18_5.png" /> T07<br />\
    <img src="styles/legend/TalhesProdutivos_18_6.png" /> T08<br />\
    <img src="styles/legend/TalhesProdutivos_18_7.png" /> T09<br />\
    <img src="styles/legend/TalhesProdutivos_18_8.png" /> T10<br />\
    <img src="styles/legend/TalhesProdutivos_18_9.png" /> T11<br />'
        });
var format_LimiteStioIranita_19 = new ol.format.GeoJSON();
var features_LimiteStioIranita_19 = format_LimiteStioIranita_19.readFeatures(json_LimiteStioIranita_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteStioIranita_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteStioIranita_19.addFeatures(features_LimiteStioIranita_19);
var lyr_LimiteStioIranita_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteStioIranita_19, 
                style: style_LimiteStioIranita_19,
                interactive: true,
                title: '<img src="styles/legend/LimiteStioIranita_19.png" /> Limite Sítio Iranita'
            });
var group_reasProdutivas = new ol.layer.Group({
                                layers: [lyr_NmerodeFalhasdePalntio_13,lyr_NmerodeLinhasdePlantio_14,lyr_AnodePlantio_15,lyr_Variedades_16,lyr_reaha_17,lyr_TalhesProdutivos_18,],
                                title: "Áreas Produtivas"});
var group_LinhasdePlantio = new ol.layer.Group({
                                layers: [lyr_SALGADA_9,lyr_AUDE_10,lyr_SEDE_11,lyr_SEDE_12,],
                                title: "Linhas de Plantio"});
var group_FalhasdePlantio = new ol.layer.Group({
                                layers: [lyr_SALGADA_6,lyr_AUDE_7,lyr_SEDE_8,],
                                title: "Falhas de Plantio"});
var group_NutrientesdoSolo = new ol.layer.Group({
                                layers: [lyr_Al_0,lyr_Ca_1,lyr_H_2,lyr_K_3,lyr_Mg_4,lyr_pH_5,],
                                title: "Nutrientes do Solo"});

lyr_Al_0.setVisible(true);lyr_Ca_1.setVisible(true);lyr_H_2.setVisible(true);lyr_K_3.setVisible(true);lyr_Mg_4.setVisible(true);lyr_pH_5.setVisible(true);lyr_SALGADA_6.setVisible(true);lyr_AUDE_7.setVisible(true);lyr_SEDE_8.setVisible(true);lyr_SALGADA_9.setVisible(true);lyr_AUDE_10.setVisible(true);lyr_SEDE_11.setVisible(true);lyr_SEDE_12.setVisible(true);lyr_NmerodeFalhasdePalntio_13.setVisible(true);lyr_NmerodeLinhasdePlantio_14.setVisible(true);lyr_AnodePlantio_15.setVisible(true);lyr_Variedades_16.setVisible(true);lyr_reaha_17.setVisible(true);lyr_TalhesProdutivos_18.setVisible(true);lyr_LimiteStioIranita_19.setVisible(true);
var layersList = [group_NutrientesdoSolo,group_FalhasdePlantio,group_LinhasdePlantio,group_reasProdutivas,lyr_LimiteStioIranita_19];
lyr_Al_0.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'localizaç': 'localizaç', 'area_m': 'area_m', 'area_ha': 'area_ha', 'perim_m': 'perim_m', 'ph': 'ph', 'ca (cmolc)': 'ca (cmolc)', 'mg (cmolc)': 'mg (cmolc)', 'al (cmolc)': 'al (cmolc)', 'h+': 'h+', 'k+': 'k+', });
lyr_Ca_1.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'localizaç': 'localizaç', 'area_m': 'area_m', 'area_ha': 'area_ha', 'perim_m': 'perim_m', 'ph': 'ph', 'ca (cmolc)': 'ca (cmolc)', 'mg (cmolc)': 'mg (cmolc)', 'al (cmolc)': 'al (cmolc)', 'h+': 'h+', 'k+': 'k+', });
lyr_H_2.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'localizaç': 'localizaç', 'area_m': 'area_m', 'area_ha': 'area_ha', 'perim_m': 'perim_m', 'ph': 'ph', 'ca (cmolc)': 'ca (cmolc)', 'mg (cmolc)': 'mg (cmolc)', 'al (cmolc)': 'al (cmolc)', 'h+': 'h+', 'k+': 'k+', });
lyr_K_3.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'localizaç': 'localizaç', 'area_m': 'area_m', 'area_ha': 'area_ha', 'perim_m': 'perim_m', 'ph': 'ph', 'ca (cmolc)': 'ca (cmolc)', 'mg (cmolc)': 'mg (cmolc)', 'al (cmolc)': 'al (cmolc)', 'h+': 'h+', 'k+': 'k+', });
lyr_Mg_4.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'localizaç': 'localizaç', 'area_m': 'area_m', 'area_ha': 'area_ha', 'perim_m': 'perim_m', 'ph': 'ph', 'ca (cmolc)': 'ca (cmolc)', 'mg (cmolc)': 'mg (cmolc)', 'al (cmolc)': 'al (cmolc)', 'h+': 'h+', 'k+': 'k+', });
lyr_pH_5.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'localizaç': 'localizaç', 'area_m': 'area_m', 'area_ha': 'area_ha', 'perim_m': 'perim_m', 'ph': 'ph', 'ca (cmolc)': 'ca (cmolc)', 'mg (cmolc)': 'mg (cmolc)', 'al (cmolc)': 'al (cmolc)', 'h+': 'h+', 'k+': 'k+', });
lyr_SALGADA_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'falha': 'falha', 'linha': 'linha', 'talhão': 'talhão', 'compri': 'compri', });
lyr_AUDE_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Falha': 'Falha', 'Linha': 'Linha', 'Talhão': 'Talhão', 'Comprimento (m)': 'Comprimento (m)', });
lyr_SEDE_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Falha': 'Falha', 'Linha': 'Linha', 'Talhão': 'Talhão', 'Comprimento (m)': 'Comprimento (m)', });
lyr_SALGADA_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Linha': 'Linha', 'Talhão': 'Talhão', 'Comprimento (m)': 'Comprimento (m)', });
lyr_AUDE_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Linha': 'Linha', 'Talhão': 'Talhão', 'Comprimento (m)': 'Comprimento (m)', });
lyr_SEDE_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'linha': 'linha', 'talhões': 'talhões', 'medida': 'medida', });
lyr_NmerodeFalhasdePalntio_13.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_NmerodeLinhasdePlantio_14.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_AnodePlantio_15.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_Variedades_16.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_reaha_17.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_TalhesProdutivos_18.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_LimiteStioIranita_19.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Area_ha': 'Area_ha', });
lyr_Al_0.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'localizaç': 'TextEdit', 'area_m': 'TextEdit', 'area_ha': 'TextEdit', 'perim_m': 'TextEdit', 'ph': 'TextEdit', 'ca (cmolc)': 'TextEdit', 'mg (cmolc)': 'TextEdit', 'al (cmolc)': 'TextEdit', 'h+': 'TextEdit', 'k+': 'TextEdit', });
lyr_Ca_1.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'localizaç': 'TextEdit', 'area_m': 'TextEdit', 'area_ha': 'TextEdit', 'perim_m': 'TextEdit', 'ph': 'TextEdit', 'ca (cmolc)': 'TextEdit', 'mg (cmolc)': 'TextEdit', 'al (cmolc)': 'TextEdit', 'h+': 'TextEdit', 'k+': 'TextEdit', });
lyr_H_2.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'localizaç': 'TextEdit', 'area_m': 'TextEdit', 'area_ha': 'TextEdit', 'perim_m': 'TextEdit', 'ph': 'TextEdit', 'ca (cmolc)': 'TextEdit', 'mg (cmolc)': 'TextEdit', 'al (cmolc)': 'TextEdit', 'h+': 'TextEdit', 'k+': 'TextEdit', });
lyr_K_3.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'localizaç': 'TextEdit', 'area_m': 'TextEdit', 'area_ha': 'TextEdit', 'perim_m': 'TextEdit', 'ph': 'TextEdit', 'ca (cmolc)': 'TextEdit', 'mg (cmolc)': 'TextEdit', 'al (cmolc)': 'TextEdit', 'h+': 'TextEdit', 'k+': 'TextEdit', });
lyr_Mg_4.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'localizaç': 'TextEdit', 'area_m': 'TextEdit', 'area_ha': 'TextEdit', 'perim_m': 'TextEdit', 'ph': 'TextEdit', 'ca (cmolc)': 'TextEdit', 'mg (cmolc)': 'TextEdit', 'al (cmolc)': 'TextEdit', 'h+': 'TextEdit', 'k+': 'TextEdit', });
lyr_pH_5.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'localizaç': 'TextEdit', 'area_m': 'TextEdit', 'area_ha': 'TextEdit', 'perim_m': 'TextEdit', 'ph': 'TextEdit', 'ca (cmolc)': 'TextEdit', 'mg (cmolc)': 'TextEdit', 'al (cmolc)': 'TextEdit', 'h+': 'TextEdit', 'k+': 'TextEdit', });
lyr_SALGADA_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'falha': 'TextEdit', 'linha': 'TextEdit', 'talhão': 'TextEdit', 'compri': 'TextEdit', });
lyr_AUDE_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Falha': 'TextEdit', 'Linha': 'TextEdit', 'Talhão': 'TextEdit', 'Comprimento (m)': 'TextEdit', });
lyr_SEDE_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Falha': 'TextEdit', 'Linha': 'TextEdit', 'Talhão': 'TextEdit', 'Comprimento (m)': 'TextEdit', });
lyr_SALGADA_9.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Linha': '', 'Talhão': '', 'Comprimento (m)': '', });
lyr_AUDE_10.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Linha': '', 'Talhão': '', 'Comprimento (m)': 'TextEdit', });
lyr_SEDE_11.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'linha': '', 'talhões': '', 'medida': '', });
lyr_NmerodeFalhasdePalntio_13.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_NmerodeLinhasdePlantio_14.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_AnodePlantio_15.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_Variedades_16.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_reaha_17.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_TalhesProdutivos_18.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_LimiteStioIranita_19.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_Al_0.set('fieldLabels', {});
lyr_Ca_1.set('fieldLabels', {});
lyr_H_2.set('fieldLabels', {});
lyr_K_3.set('fieldLabels', {});
lyr_Mg_4.set('fieldLabels', {});
lyr_pH_5.set('fieldLabels', {});
lyr_SALGADA_6.set('fieldLabels', {});
lyr_AUDE_7.set('fieldLabels', {});
lyr_SEDE_8.set('fieldLabels', {});
lyr_SALGADA_9.set('fieldLabels', {});
lyr_AUDE_10.set('fieldLabels', {});
lyr_SEDE_11.set('fieldLabels', {});
lyr_NmerodeFalhasdePalntio_13.set('fieldLabels', {});
lyr_NmerodeLinhasdePlantio_14.set('fieldLabels', {});
lyr_AnodePlantio_15.set('fieldLabels', {});
lyr_Variedades_16.set('fieldLabels', {});
lyr_reaha_17.set('fieldLabels', {});
lyr_TalhesProdutivos_18.set('fieldLabels', {});
lyr_LimiteStioIranita_19.set('fieldLabels', {'fid': 'no label', 'Name': 'inline label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Area_ha': 'inline label', });
lyr_LimiteStioIranita_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});