async function initMap() {
    await ymaps3.ready;

    const LOCATION = {
        center: [37.588144, 55.733842],
        zoom: 9
    };

    const { YMap, YMapDefaultSchemeLayer } = ymaps3;

    const map = new YMap(document.getElementById('map'), { location: LOCATION });
    map.addChild(new YMapDefaultSchemeLayer({}));
}

initMap().then();