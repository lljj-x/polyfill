/* IE10等部分浏览器获取window.location.origin为undefined */
if (!window.location.origin) {
    const winlocation = window.location;
    const locationPort = winlocation.port ? `:${winlocation.port}` : '';
    winlocation.origin = `${winlocation.protocol}//${winlocation.hostname}${locationPort}`;
}