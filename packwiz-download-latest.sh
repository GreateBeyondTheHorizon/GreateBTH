OS_TYPE=$(uname -s)

OS_NAME=""
case "$OS_TYPE" in
	"Linux")
		OS_NAME="Linux"
		;;
	"Darwin")
		OS_NAME="macOS"
		;;
esac

if [[ "$OS_NAME" == "" ]]; then
	echo "Error: Cannot determine operating system."
else
	printf -v DOWNLOAD_LINK 'https://nightly.link/packwiz/packwiz/workflows/go/main/%s%%2064-bit%%20x86.zip' "$OS_NAME"
	wget -O "packwiz.zip" "$DOWNLOAD_LINK"
	unzip "packwiz.zip"
	rm "packwiz.zip"
fi
