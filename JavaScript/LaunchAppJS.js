// To launch the app, call goToNYPGo() function like this html tag!	<a href="#" onclick="goToNYPGo()"></a>
function goToNYPGo()
{
	if (navigator.userAgent.indexOf('Android') != -1)
	{
		uriSchemeWithHyperlinkFallback('nypgo25://', 'https://play.google.com/store/apps/details?id=com.SIDM.NYP25JProto&hl=en');
		return false;
	}
	document.location.href = 'https://play.google.com/store/apps/details?id=com.SIDM.NYP25JProto&hl=en';
	return false;
}
function uriSchemeWithHyperlinkFallback(uri, href) {
	window.open(uri, "_self");
	var toOpenAppStoreIfFailedToOpenApp = setTimeout(
	function() 
	{
		document.location.href = href;
	}, 500);
}
