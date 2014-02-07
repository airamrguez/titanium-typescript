declare module Titanium {
	export var bubbleParent : boolean;
	export var buildDate : string;
	export var buildHash : string;
	export var userAgent : string;
	export var version : number;
	export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
	export function applyProperties (props: Dictionary<Object>) : void;
	export function createBuffer (params: CreateBufferArgs) : Titanium.Buffer;
	export function fireEvent (name: string, event: Dictionary<Object>) : void;
	export function getBubbleParent () : boolean;
	export function getBuildDate () : string;
	export function getBuildHash () : string;
	export function getUserAgent () : string;
	export function getVersion () : number;
	export function include (name: string) : void;
	export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
	export function setBubbleParent (bubbleParent: boolean) : void;
	export function setUserAgent (userAgent: string) : void;
	export module XML {
		export var bubbleParent : boolean;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function getBubbleParent () : boolean;
		export function parseString (xml: string) : Titanium.XML.Document;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function serializeToString (node: Titanium.XML.Node) : string;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export interface Entity extends Titanium.XML.Node {
			notationName : string;
			publicId : string;
			systemId : string;
			getNotationName () : string;
			getPublicId () : string;
			getSystemId () : string;
		}
		export interface Node extends Titanium.Proxy {
			ATTRIBUTE_NODE : number;
			CDATA_SECTION_NODE : number;
			COMMENT_NODE : number;
			DOCUMENT_FRAGMENT_NODE : number;
			DOCUMENT_NODE : number;
			DOCUMENT_TYPE_NODE : number;
			ELEMENT_NODE : number;
			ENTITY_NODE : number;
			ENTITY_REFERENCE_NODE : number;
			NOTATION_NODE : number;
			PROCESSING_INSTRUCTION_NODE : number;
			TEXT_NODE : number;
			attributes : Titanium.XML.NamedNodeMap;
			childNodes : Titanium.XML.NodeList;
			firstChild : Titanium.XML.Node;
			lastChild : Titanium.XML.Node;
			localName : string;
			namespaceURI : string;
			nextSibling : Titanium.XML.Node;
			nodeName : string;
			nodeType : number;
			nodeValue : string;
			ownerDocument : Titanium.XML.Document;
			parentNode : Titanium.XML.Node;
			prefix : string;
			previousSibling : Titanium.XML.Node;
			text : string;
			textContent : string;
			appendChild (newChild: Titanium.XML.Node) : Titanium.XML.Node;
			cloneNode (deep: boolean) : Titanium.XML.Node;
			getAttributes () : Titanium.XML.NamedNodeMap;
			getChildNodes () : Titanium.XML.NodeList;
			getFirstChild () : Titanium.XML.Node;
			getLastChild () : Titanium.XML.Node;
			getLocalName () : string;
			getNamespaceURI () : string;
			getNextSibling () : Titanium.XML.Node;
			getNodeName () : string;
			getNodeType () : number;
			getNodeValue () : string;
			getOwnerDocument () : Titanium.XML.Document;
			getParentNode () : Titanium.XML.Node;
			getPrefix () : string;
			getPreviousSibling () : Titanium.XML.Node;
			getText () : string;
			getTextContent () : string;
			hasAttributes () : boolean;
			hasChildNodes () : boolean;
			insertBefore (newChild: Titanium.XML.Node, refChild: Titanium.XML.Node) : Titanium.XML.Node;
			isSupported (feature: string, version: string) : boolean;
			normalize () : void;
			removeChild (oldChild: Titanium.XML.Node) : Titanium.XML.Node;
			replaceChild (newChild: Titanium.XML.Node, oldChild: Titanium.XML.Node) : Titanium.XML.Node;
			setLocalName (localName: string) : void;
			setNodeValue (nodeValue: string) : void;
			setPrefix (prefix: string) : void;
		}
		export enum EntityReference {

		}
		export interface CharacterData extends Titanium.XML.Node {
			data : string;
			length : number;
			appendData (arg: string) : void;
			deleteData (offset: number, count: number) : void;
			getData () : string;
			getLength () : number;
			insertData (offset: number, arg: string) : void;
			replaceData (offset: number, count: number, arg: string) : void;
			setData (data: string) : void;
			substringData (offset: number, count: number) : string;
		}
		export interface DOMImplementation extends Titanium.Proxy {
			createDocument (namespaceURI: string, qualifiedName: string, doctype: Titanium.XML.DocumentType) : Titanium.XML.Document;
			createDocumentType (qualifiedName: string, publicId: string, systemId: string) : Titanium.XML.DocumentType;
			hasFeature (feature: string, version: string) : boolean;
		}
		export interface Document extends Titanium.XML.Node {
			doctype : Titanium.XML.DocumentType;
			documentElement : Titanium.XML.Element;
			implementation : Titanium.XML.DOMImplementation;
			createAttribute (name: string) : Titanium.XML.Attr;
			createAttributeNS (namespaceURI: string, name: string) : Titanium.XML.Attr;
			createCDATASection (data: string) : Titanium.XML.CDATASection;
			createComment (data: string) : Titanium.XML.Comment;
			createDocumentFragment () : Titanium.XML.DocumentFragment;
			createElement (tagName: string) : Titanium.XML.Element;
			createElementNS (namespaceURI: string, name: string) : Titanium.XML.Element;
			createEntityReference (name: string) : Titanium.XML.EntityReference;
			createProcessingInstruction (target: string, data: string) : Titanium.XML.ProcessingInstruction;
			createTextNode (data: string) : Titanium.XML.Text;
			getDoctype () : Titanium.XML.DocumentType;
			getDocumentElement () : Titanium.XML.Element;
			getElementById (elementId: string) : Titanium.XML.Element;
			getElementsByTagName (tagname: string) : Titanium.XML.NodeList;
			getElementsByTagNameNS (namespaceURI: string, localname: string) : Titanium.XML.NodeList;
			getImplementation () : Titanium.XML.DOMImplementation;
			importNode (importedNode: Titanium.XML.Node, deep: boolean) : Titanium.XML.Node;
		}
		export interface Attr extends Titanium.XML.Node {
			name : string;
			ownerElement : Titanium.XML.Element;
			specified : boolean;
			value : string;
			getName () : string;
			getOwnerElement () : Titanium.XML.Element;
			getSpecified () : boolean;
			getValue () : string;
			setValue (value: string) : void;
		}
		export interface ProcessingInstruction extends Titanium.Proxy {
			data : string;
			target : string;
			getData () : string;
			getTarget () : string;
			setData (data: string) : void;
		}
		export interface NamedNodeMap extends Titanium.Proxy {
			length : number;
			getLength () : number;
			getNamedItem (name: string) : Titanium.XML.Node;
			getNamedItemNS (namespaceURI: string, localName: string) : Titanium.XML.Node;
			item (index: number) : Titanium.XML.Node;
			removeNamedItem (name: string) : Titanium.XML.Node;
			removeNamedItemNS (namespaceURI: string, localName: string) : Titanium.XML.Node;
			setNamedItem (node: Titanium.XML.Node) : Titanium.XML.Node;
			setNamedItemNS (node: Titanium.XML.Node) : Titanium.XML.Node;
		}
		export enum CDATASection {

		}
		export interface Text extends Titanium.XML.CharacterData {
			splitText (offset: number) : Titanium.XML.Text;
		}
		export enum DocumentFragment {

		}
		export interface Notation extends Titanium.Proxy {
			publicId : string;
			systemId : string;
			getPublicId () : string;
			getSystemId () : string;
		}
		export enum Comment {

		}
		export interface NodeList extends Titanium.Proxy {
			length : number;
			getLength () : number;
			item (index: number) : Titanium.XML.Node;
		}
		export interface DocumentType extends Titanium.XML.Node {
			entities : Titanium.XML.NamedNodeMap;
			internalSubset : string;
			name : string;
			notations : Titanium.XML.NamedNodeMap;
			publicId : string;
			systemId : string;
			getEntities () : Titanium.XML.NamedNodeMap;
			getInternalSubset () : string;
			getName () : string;
			getNotations () : Titanium.XML.NamedNodeMap;
			getPublicId () : string;
			getSystemId () : string;
		}
		export interface Element extends Titanium.XML.Node {
			tagName : string;
			getAttribute (name: string) : string;
			getAttributeNS (namespaceURI: string, localName: string) : string;
			getAttributeNode (name: string) : Titanium.XML.Attr;
			getAttributeNodeNS (namespaceURI: string, localName: string) : Titanium.XML.Attr;
			getElementsByTagName (name: string) : Titanium.XML.NodeList;
			getElementsByTagNameNS (namespaceURI: string, localName: string) : Titanium.XML.NodeList;
			getTagName () : string;
			hasAttribute (name: string) : boolean;
			hasAttributeNS (namespaceURI: string, localName: string) : boolean;
			removeAttribute (name: string) : void;
			removeAttributeNS (namespaceURI: string, localName: string) : void;
			removeAttributeNode (oldAttr: Titanium.XML.Attr) : void;
			setAttribute (name: string, value: string) : void;
			setAttributeNS (namespaceURI: string, qualifiedName: string, value: string) : void;
			setAttributeNode (newAttr: Titanium.XML.Attr) : Titanium.XML.Attr;
			setAttributeNodeNS (newAttr: Titanium.XML.Attr) : Titanium.XML.Attr;
		}
	}
	export enum BlobStream {

	}
	export interface IOStream extends Titanium.Proxy {
		close () : void;
		isReadable () : boolean;
		isWriteable () : boolean;
		read (buffer: Titanium.Buffer, offset?: number, length?: number) : number;
		write (buffer: Titanium.Buffer, offset?: number, length?: number) : number;
	}
	export module UI {
		export var ANIMATION_CURVE_EASE_IN : number;
		export var ANIMATION_CURVE_EASE_IN_OUT : number;
		export var ANIMATION_CURVE_EASE_OUT : number;
		export var ANIMATION_CURVE_LINEAR : number;
		export var AUTODETECT_ADDRESS : number;
		export var AUTODETECT_ALL : number;
		export var AUTODETECT_CALENDAR : number;
		export var AUTODETECT_LINK : number;
		export var AUTODETECT_NONE : number;
		export var AUTODETECT_PHONE : number;
		export var AUTOLINK_ALL : number;
		export var AUTOLINK_CALENDAR : number;
		export var AUTOLINK_EMAIL_ADDRESSES : number;
		export var AUTOLINK_MAP_ADDRESSES : number;
		export var AUTOLINK_NONE : number;
		export var AUTOLINK_PHONE_NUMBERS : number;
		export var AUTOLINK_URLS : number;
		export var BLEND_MODE_CLEAR : number;
		export var BLEND_MODE_COLOR : number;
		export var BLEND_MODE_COLOR_BURN : number;
		export var BLEND_MODE_COLOR_DODGE : number;
		export var BLEND_MODE_COPY : number;
		export var BLEND_MODE_DARKEN : number;
		export var BLEND_MODE_DESTINATION_ATOP : number;
		export var BLEND_MODE_DESTINATION_IN : number;
		export var BLEND_MODE_DESTINATION_OUT : number;
		export var BLEND_MODE_DESTINATION_OVER : number;
		export var BLEND_MODE_DIFFERENCE : number;
		export var BLEND_MODE_EXCLUSION : number;
		export var BLEND_MODE_HARD_LIGHT : number;
		export var BLEND_MODE_HUE : number;
		export var BLEND_MODE_LIGHTEN : number;
		export var BLEND_MODE_LUMINOSITY : number;
		export var BLEND_MODE_MULTIPLY : number;
		export var BLEND_MODE_NORMAL : number;
		export var BLEND_MODE_OVERLAY : number;
		export var BLEND_MODE_PLUS_DARKER : number;
		export var BLEND_MODE_PLUS_LIGHTER : number;
		export var BLEND_MODE_SATURATION : number;
		export var BLEND_MODE_SCREEN : number;
		export var BLEND_MODE_SOFT_LIGHT : number;
		export var BLEND_MODE_SOURCE_ATOP : number;
		export var BLEND_MODE_SOURCE_IN : number;
		export var BLEND_MODE_SOURCE_OUT : number;
		export var BLEND_MODE_XOR : number;
		export var EXTEND_EDGE_ALL : number;
		export var EXTEND_EDGE_BOTTOM : number;
		export var EXTEND_EDGE_LEFT : number;
		export var EXTEND_EDGE_NONE : number;
		export var EXTEND_EDGE_RIGHT : number;
		export var EXTEND_EDGE_TOP : number;
		export var FACE_DOWN : number;
		export var FACE_UP : number;
		export var FILL : string;
		export var INHERIT : string;
		export var INPUT_BORDERSTYLE_BEZEL : number;
		export var INPUT_BORDERSTYLE_LINE : number;
		export var INPUT_BORDERSTYLE_NONE : number;
		export var INPUT_BORDERSTYLE_ROUNDED : number;
		export var INPUT_BUTTONMODE_ALWAYS : number;
		export var INPUT_BUTTONMODE_NEVER : number;
		export var INPUT_BUTTONMODE_ONBLUR : number;
		export var INPUT_BUTTONMODE_ONFOCUS : number;
		export var KEYBOARD_APPEARANCE_ALERT : number;
		export var KEYBOARD_APPEARANCE_DEFAULT : number;
		export var KEYBOARD_ASCII : number;
		export var KEYBOARD_DECIMAL_PAD : number;
		export var KEYBOARD_DEFAULT : number;
		export var KEYBOARD_EMAIL : number;
		export var KEYBOARD_NAMEPHONE_PAD : number;
		export var KEYBOARD_NUMBERS_PUNCTUATION : number;
		export var KEYBOARD_NUMBER_PAD : number;
		export var KEYBOARD_PHONE_PAD : number;
		export var KEYBOARD_URL : number;
		export var LANDSCAPE_LEFT : number;
		export var LANDSCAPE_RIGHT : number;
		export var LIST_ACCESSORY_TYPE_CHECKMARK : number;
		export var LIST_ACCESSORY_TYPE_DETAIL : number;
		export var LIST_ACCESSORY_TYPE_DISCLOSURE : number;
		export var LIST_ACCESSORY_TYPE_NONE : number;
		export var LIST_ITEM_TEMPLATE_CONTACTS : number;
		export var LIST_ITEM_TEMPLATE_DEFAULT : number;
		export var LIST_ITEM_TEMPLATE_SETTINGS : number;
		export var LIST_ITEM_TEMPLATE_SUBTITLE : number;
		export var NOTIFICATION_DURATION_LONG : number;
		export var NOTIFICATION_DURATION_SHORT : number;
		export var PICKER_TYPE_COUNT_DOWN_TIMER : number;
		export var PICKER_TYPE_DATE : number;
		export var PICKER_TYPE_DATE_AND_TIME : number;
		export var PICKER_TYPE_PLAIN : number;
		export var PICKER_TYPE_TIME : number;
		export var PORTRAIT : number;
		export var RETURNKEY_DEFAULT : number;
		export var RETURNKEY_DONE : number;
		export var RETURNKEY_EMERGENCY_CALL : number;
		export var RETURNKEY_GO : number;
		export var RETURNKEY_GOOGLE : number;
		export var RETURNKEY_JOIN : number;
		export var RETURNKEY_NEXT : number;
		export var RETURNKEY_ROUTE : number;
		export var RETURNKEY_SEARCH : number;
		export var RETURNKEY_SEND : number;
		export var RETURNKEY_YAHOO : number;
		export var SIZE : string;
		export var TEXT_ALIGNMENT_CENTER : any;
		export var TEXT_ALIGNMENT_LEFT : any;
		export var TEXT_ALIGNMENT_RIGHT : any;
		export var TEXT_AUTOCAPITALIZATION_ALL : number;
		export var TEXT_AUTOCAPITALIZATION_NONE : number;
		export var TEXT_AUTOCAPITALIZATION_SENTENCES : number;
		export var TEXT_AUTOCAPITALIZATION_WORDS : number;
		export var TEXT_VERTICAL_ALIGNMENT_BOTTOM : any;
		export var TEXT_VERTICAL_ALIGNMENT_CENTER : any;
		export var TEXT_VERTICAL_ALIGNMENT_TOP : any;
		export var UNIT_CM : string;
		export var UNIT_DIP : string;
		export var UNIT_IN : string;
		export var UNIT_MM : string;
		export var UNIT_PX : string;
		export var UNKNOWN : number;
		export var UPSIDE_PORTRAIT : number;
		export var URL_ERROR_AUTHENTICATION : number;
		export var URL_ERROR_BAD_URL : number;
		export var URL_ERROR_CONNECT : number;
		export var URL_ERROR_FILE : number;
		export var URL_ERROR_FILE_NOT_FOUND : number;
		export var URL_ERROR_HOST_LOOKUP : number;
		export var URL_ERROR_REDIRECT_LOOP : number;
		export var URL_ERROR_SSL_FAILED : number;
		export var URL_ERROR_TIMEOUT : number;
		export var URL_ERROR_UNKNOWN : number;
		export var URL_ERROR_UNSUPPORTED_SCHEME : number;
		export var backgroundColor : string;
		export var backgroundImage : string;
		export var bubbleParent : boolean;
		export var currentTab : Titanium.UI.Tab;
		export var currentWindow : Titanium.UI.Window;
		export var orientation : number;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function convertUnits (convertFromValue: string, convertToUnits: string) : number;
		export function create2DMatrix (parameters?: MatrixCreationDict) : Titanium.UI._2DMatrix;
		export function create3DMatrix (parameters?: Dictionary<Titanium.UI._3DMatrix>) : Titanium.UI._3DMatrix;
		export function createActivityIndicator (parameters?: Dictionary<Titanium.UI.ActivityIndicator>) : Titanium.UI.ActivityIndicator;
		export function createAlertDialog (parameters?: Dictionary<Titanium.UI.AlertDialog>) : Titanium.UI.AlertDialog;
		export function createAnimation (parameters?: Dictionary<Titanium.UI.Animation>) : Titanium.UI.Animation;
		export function createButton (parameters?: Dictionary<Titanium.UI.Button>) : Titanium.UI.Button;
		export function createButtonBar (parameters?: Dictionary<Titanium.UI.ButtonBar>) : Titanium.UI.ButtonBar;
		export function createCoverFlowView (parameters?: Dictionary<Titanium.UI.CoverFlowView>) : Titanium.UI.CoverFlowView;
		export function createDashboardItem (parameters?: Dictionary<Titanium.UI.DashboardItem>) : Titanium.UI.DashboardItem;
		export function createDashboardView (parameters?: Dictionary<Titanium.UI.DashboardView>) : Titanium.UI.DashboardView;
		export function createEmailDialog (parameters?: Dictionary<Titanium.UI.EmailDialog>) : Titanium.UI.EmailDialog;
		export function createImageView (parameters?: Dictionary<Titanium.UI.ImageView>) : Titanium.UI.ImageView;
		export function createLabel (parameters?: Dictionary<Titanium.UI.Label>) : Titanium.UI.Label;
		export function createListSection (parameters?: Dictionary<Titanium.UI.ListSection>) : Titanium.UI.ListSection;
		export function createListView (parameters?: Dictionary<Titanium.UI.ListView>) : Titanium.UI.ListView;
		export function createMaskedImage (parameters?: Dictionary<Titanium.UI.MaskedImage>) : Titanium.UI.MaskedImage;
		export function createNotification (parameters?: Dictionary<Titanium.UI.Notification>) : Titanium.UI.Notification;
		export function createOptionDialog (parameters?: Dictionary<Titanium.UI.OptionDialog>) : Titanium.UI.OptionDialog;
		export function createPicker (parameters?: Dictionary<Titanium.UI.Picker>) : Titanium.UI.Picker;
		export function createPickerColumn (parameters?: Dictionary<Titanium.UI.PickerColumn>) : Titanium.UI.PickerColumn;
		export function createPickerRow (parameters?: Dictionary<Titanium.UI.PickerRow>) : Titanium.UI.PickerRow;
		export function createProgressBar (parameters?: Dictionary<Titanium.UI.ProgressBar>) : Titanium.UI.ProgressBar;
		export function createSMSDialog (parameters?: Dictionary<Titanium.UI.SMSDialog>) : Titanium.UI.SMSDialog;
		export function createScrollView (parameters?: Dictionary<Titanium.UI.ScrollView>) : Titanium.UI.ScrollView;
		export function createScrollableView (parameters?: Dictionary<Titanium.UI.ScrollableView>) : Titanium.UI.ScrollableView;
		export function createSearchBar (parameters?: Dictionary<Titanium.UI.SearchBar>) : Titanium.UI.SearchBar;
		export function createSlider (parameters?: Dictionary<Titanium.UI.Slider>) : Titanium.UI.Slider;
		export function createSwitch (parameters?: Dictionary<Titanium.UI.Switch>) : Titanium.UI.Switch;
		export function createTab (parameters?: Dictionary<Titanium.UI.Tab>) : Titanium.UI.Tab;
		export function createTabGroup (parameters?: Dictionary<Titanium.UI.TabGroup>) : Titanium.UI.TabGroup;
		export function createTabbedBar (parameters?: Dictionary<Titanium.UI.TabbedBar>) : Titanium.UI.TabbedBar;
		export function createTableView (parameters?: Dictionary<Titanium.UI.TableView>) : Titanium.UI.TableView;
		export function createTableViewRow (parameters?: Dictionary<Titanium.UI.TableViewRow>) : Titanium.UI.TableViewRow;
		export function createTableViewSection (parameters?: Dictionary<Titanium.UI.TableViewSection>) : Titanium.UI.TableViewSection;
		export function createTextArea (parameters?: Dictionary<Titanium.UI.TextArea>) : Titanium.UI.TextArea;
		export function createTextField (parameters?: Dictionary<Titanium.UI.TextField>) : Titanium.UI.TextField;
		export function createToolbar (parameters?: Dictionary<Titanium.UI.Toolbar>) : Titanium.UI.Toolbar;
		export function createView (parameters?: Dictionary<Titanium.UI.View>) : Titanium.UI.View;
		export function createWebView (parameters?: Dictionary<Titanium.UI.WebView>) : Titanium.UI.WebView;
		export function createWindow (parameters?: Dictionary<Titanium.UI.Window>) : Titanium.UI.Window;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function getBackgroundColor () : string;
		export function getBackgroundImage () : string;
		export function getBubbleParent () : boolean;
		export function getCurrentTab () : Titanium.UI.Tab;
		export function getCurrentWindow () : Titanium.UI.Window;
		export function getOrientation () : number;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function setBackgroundColor (backgroundColor: string) : void;
		export function setBackgroundImage (backgroundImage: string) : void;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export function setCurrentTab (currentTab: Titanium.UI.Tab) : void;
		export function setOrientation (orientation: number) : void;
		export module iPad {
			export var POPOVER_ARROW_DIRECTION_ANY : number;
			export var POPOVER_ARROW_DIRECTION_DOWN : number;
			export var POPOVER_ARROW_DIRECTION_LEFT : number;
			export var POPOVER_ARROW_DIRECTION_RIGHT : number;
			export var POPOVER_ARROW_DIRECTION_UNKNOWN : number;
			export var POPOVER_ARROW_DIRECTION_UP : number;
			export var bubbleParent : boolean;
			export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function applyProperties (props: Dictionary<Object>) : void;
			export function createDocumentViewer (parameters?: Dictionary<Titanium.UI.iPad.DocumentViewer>) : Titanium.UI.iPad.DocumentViewer;
			export function createPopover (parameters?: Dictionary<Titanium.UI.iPad.Popover>) : Titanium.UI.iPad.Popover;
			export function createSplitWindow (parameters?: Dictionary<Titanium.UI.iPad.SplitWindow>) : Titanium.UI.iPad.SplitWindow;
			export function fireEvent (name: string, event: Dictionary<Object>) : void;
			export function getBubbleParent () : boolean;
			export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function setBubbleParent (bubbleParent: boolean) : void;
			export interface SplitWindow extends Titanium.UI.Window {
				detailView : Titanium.UI.View;
				masterView : Titanium.UI.View;
				showMasterInPortrait : boolean;
				getDetailView () : Titanium.UI.View;
				getMasterView () : Titanium.UI.View;
				getShowMasterInPortrait () : boolean;
				setShowMasterInPortrait (showMasterInPortrait: boolean) : void;
			}
			export interface DocumentViewer extends Titanium.UI.View {
				setUrl (url: string) : void;
				show (animated: boolean, view: any) : void;
			}
			export interface Popover extends Titanium.UI.View {
				arrowDirection : number;
				leftNavButton : any;
				rightNavButton : any;
				title : string;
				getArrowDirection () : number;
				getLeftNavButton () : any;
				getRightNavButton () : any;
				getTitle () : string;
				setLeftNavButton (leftNavButton: any) : void;
				setPassthroughViews (passthroughViews: Array<Titanium.UI.View>) : void;
				setRightNavButton (rightNavButton: any) : void;
				setTitle (title: string) : void;
			}
		}
		export interface ScrollableView extends Titanium.UI.View {
			cacheSize : number;
			clipViews : boolean;
			currentPage : number;
			disableBounce : boolean;
			hitRect : Dimension;
			overScrollMode : number;
			overlayEnabled : boolean;
			pagingControlAlpha : number;
			pagingControlColor : string;
			pagingControlHeight : number;
			pagingControlOnTop : boolean;
			pagingControlTimeout : number;
			scrollingEnabled : boolean;
			showPagingControl : boolean;
			views : Array<Titanium.UI.View>;
			addView (view: Titanium.UI.View) : void;
			getCacheSize () : number;
			getClipViews () : boolean;
			getCurrentPage () : number;
			getDisableBounce () : boolean;
			getHitRect () : Dimension;
			getOverScrollMode () : number;
			getOverlayEnabled () : boolean;
			getPagingControlAlpha () : number;
			getPagingControlColor () : string;
			getPagingControlHeight () : number;
			getPagingControlOnTop () : boolean;
			getPagingControlTimeout () : number;
			getScrollingEnabled () : boolean;
			getShowPagingControl () : boolean;
			getViews () : Array<Titanium.UI.View>;
			moveNext () : void;
			movePrevious () : void;
			removeView (view: number) : void;
			removeView (view: Titanium.UI.View) : void;
			scrollToView (view: number) : void;
			scrollToView (view: Titanium.UI.View) : void;
			setCacheSize (cacheSize: number) : void;
			setCurrentPage (currentPage: number) : void;
			setDisableBounce (disableBounce: boolean) : void;
			setHitRect (hitRect: Dimension) : void;
			setOverScrollMode (overScrollMode: number) : void;
			setOverlayEnabled (overlayEnabled: boolean) : void;
			setPagingControlAlpha (pagingControlAlpha: number) : void;
			setPagingControlColor (pagingControlColor: string) : void;
			setPagingControlHeight (pagingControlHeight: number) : void;
			setPagingControlOnTop (pagingControlOnTop: boolean) : void;
			setScrollingEnabled (scrollingEnabled: boolean) : void;
			setShowPagingControl (showPagingControl: boolean) : void;
			setViews (views: Array<Titanium.UI.View>) : void;
		}
		export interface View extends Titanium.Proxy {
			accessibilityHidden : boolean;
			accessibilityHint : string;
			accessibilityLabel : string;
			accessibilityValue : string;
			anchorPoint : Point;
			animatedCenter : Point;
			backgroundColor : string;
			backgroundDisabledColor : string;
			backgroundDisabledImage : string;
			backgroundFocusedColor : string;
			backgroundFocusedImage : string;
			backgroundGradient : Gradient;
			backgroundImage : string;
			backgroundLeftCap : number;
			backgroundRepeat : boolean;
			backgroundSelectedColor : string;
			backgroundSelectedImage : string;
			backgroundTopCap : number;
			borderColor : string;
			borderRadius : number;
			borderWidth : number;
			bottom : any;
			center : Point;
			children : Array<Titanium.UI.View>;
			enabled : boolean;
			focusable : boolean;
			height : any;
			horizontalWrap : boolean;
			keepScreenOn : boolean;
			layout : string;
			left : any;
			opacity : number;
			rect : Dimension;
			right : any;
			size : Dimension;
			softKeyboardOnFocus : number;
			tintColor : any;
			top : any;
			touchEnabled : boolean;
			transform : any;
			visible : boolean;
			width : any;
			zIndex : number;
			add (view: Titanium.UI.View) : void;
			animate (animation: Titanium.UI.Animation, callback: (...args : any[]) => any) : void;
			animate (animation: Dictionary<Titanium.UI.Animation>, callback: (...args : any[]) => any) : void;
			convertPointToView (point: Point, destinationView: Titanium.UI.View) : Point;
			finishLayout () : void;
			getAccessibilityHidden () : boolean;
			getAccessibilityHint () : string;
			getAccessibilityLabel () : string;
			getAccessibilityValue () : string;
			getAnchorPoint () : Point;
			getAnimatedCenter () : Point;
			getBackgroundColor () : string;
			getBackgroundDisabledColor () : string;
			getBackgroundDisabledImage () : string;
			getBackgroundFocusedColor () : string;
			getBackgroundFocusedImage () : string;
			getBackgroundGradient () : Gradient;
			getBackgroundImage () : string;
			getBackgroundLeftCap () : number;
			getBackgroundRepeat () : boolean;
			getBackgroundSelectedColor () : string;
			getBackgroundSelectedImage () : string;
			getBackgroundTopCap () : number;
			getBorderColor () : string;
			getBorderRadius () : number;
			getBorderWidth () : number;
			getBottom () : any;
			getCenter () : Point;
			getChildren () : Array<Titanium.UI.View>;
			getEnabled () : boolean;
			getFocusable () : boolean;
			getHeight () : any;
			getHorizontalWrap () : boolean;
			getKeepScreenOn () : boolean;
			getLayout () : string;
			getLeft () : any;
			getOpacity () : number;
			getRect () : Dimension;
			getRight () : any;
			getSize () : Dimension;
			getSoftKeyboardOnFocus () : number;
			getTintColor () : string;
			getTop () : any;
			getTouchEnabled () : boolean;
			getTransform () : any;
			getVisible () : boolean;
			getWidth () : any;
			getZIndex () : number;
			hide () : void;
			remove (view: Titanium.UI.View) : void;
			removeAllChildren () : void;
			setAccessibilityHidden (accessibilityHidden: boolean) : void;
			setAccessibilityHint (accessibilityHint: string) : void;
			setAccessibilityLabel (accessibilityLabel: string) : void;
			setAccessibilityValue (accessibilityValue: string) : void;
			setAnchorPoint (anchorPoint: Point) : void;
			setBackgroundColor (backgroundColor: string) : void;
			setBackgroundDisabledColor (backgroundDisabledColor: string) : void;
			setBackgroundDisabledImage (backgroundDisabledImage: string) : void;
			setBackgroundFocusedColor (backgroundFocusedColor: string) : void;
			setBackgroundFocusedImage (backgroundFocusedImage: string) : void;
			setBackgroundGradient (backgroundGradient: Gradient) : void;
			setBackgroundImage (backgroundImage: string) : void;
			setBackgroundLeftCap (backgroundLeftCap: number) : void;
			setBackgroundRepeat (backgroundRepeat: boolean) : void;
			setBackgroundSelectedColor (backgroundSelectedColor: string) : void;
			setBackgroundSelectedImage (backgroundSelectedImage: string) : void;
			setBackgroundTopCap (backgroundTopCap: number) : void;
			setBorderColor (borderColor: string) : void;
			setBorderRadius (borderRadius: number) : void;
			setBorderWidth (borderWidth: number) : void;
			setBottom (bottom: number) : void;
			setBottom (bottom: string) : void;
			setCenter (center: Point) : void;
			setEnabled (enabled: boolean) : void;
			setFocusable (focusable: boolean) : void;
			setHeight (height: number) : void;
			setHeight (height: string) : void;
			setHorizontalWrap (horizontalWrap: boolean) : void;
			setKeepScreenOn (keepScreenOn: boolean) : void;
			setLayout (layout: string) : void;
			setLeft (left: number) : void;
			setLeft (left: string) : void;
			setOpacity (opacity: number) : void;
			setRight (right: number) : void;
			setRight (right: string) : void;
			setSoftKeyboardOnFocus (softKeyboardOnFocus: number) : void;
			setTintColor (tintColor: string) : void;
			setTop (top: number) : void;
			setTop (top: string) : void;
			setTouchEnabled (touchEnabled: boolean) : void;
			setTransform (transform: Titanium.UI._2DMatrix) : void;
			setTransform (transform: Titanium.UI._3DMatrix) : void;
			setVisible (visible: boolean) : void;
			setWidth (width: number) : void;
			setWidth (width: string) : void;
			setZIndex (zIndex: number) : void;
			show () : void;
			startLayout () : void;
			toImage (callback?: (...args : any[]) => any, honorScaleFactor?: boolean) : Titanium.Blob;
			updateLayout (params: Dictionary<Object>) : void;
		}
		export module iPhone {
			export var MODAL_PRESENTATION_CURRENT_CONTEXT : number;
			export var MODAL_PRESENTATION_FORMSHEET : number;
			export var MODAL_PRESENTATION_FULLSCREEN : number;
			export var MODAL_PRESENTATION_PAGESHEET : number;
			export var MODAL_TRANSITION_STYLE_COVER_VERTICAL : number;
			export var MODAL_TRANSITION_STYLE_CROSS_DISSOLVE : number;
			export var MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL : number;
			export var MODAL_TRANSITION_STYLE_PARTIAL_CURL : number;
			export var appBadge : number;
			export var appSupportsShakeToEdit : boolean;
			export var bubbleParent : boolean;
			export var statusBarHidden : boolean;
			export var statusBarStyle : number;
			export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function applyProperties (props: Dictionary<Object>) : void;
			export function createNavigationGroup (parameters?: Dictionary<Titanium.UI.iPhone.NavigationGroup>) : Titanium.UI.iPhone.NavigationGroup;
			export function fireEvent (name: string, event: Dictionary<Object>) : void;
			export function getAppBadge () : number;
			export function getAppSupportsShakeToEdit () : boolean;
			export function getBubbleParent () : boolean;
			export function getStatusBarHidden () : boolean;
			export function getStatusBarStyle () : number;
			export function hideStatusBar (params?: hideStatusBarParams) : void;
			export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function setAppBadge (appBadge: number) : void;
			export function setAppSupportsShakeToEdit (appSupportsShakeToEdit: boolean) : void;
			export function setBubbleParent (bubbleParent: boolean) : void;
			export function setStatusBarHidden (statusBarHidden: boolean) : void;
			export function setStatusBarStyle (statusBarStyle: number) : void;
			export function showStatusBar (params?: showStatusBarParams) : void;
			export enum ScrollIndicatorStyle {
				BLACK,
				DEFAULT,
				WHITE
			}
			export enum SystemButtonStyle {
				BAR,
				BORDERED,
				DONE,
				PLAIN
			}
			export enum ListViewStyle {
				GROUPED,
				PLAIN
			}
			export enum StatusBar {
				ANIMATION_STYLE_FADE,
				ANIMATION_STYLE_NONE,
				ANIMATION_STYLE_SLIDE,
				DEFAULT,
				GRAY,
				GREY,
				LIGHT_CONTENT,
				OPAQUE_BLACK,
				TRANSLUCENT_BLACK
			}
			export enum SystemButton {
				ACTION,
				ACTIVITY,
				ADD,
				BOOKMARKS,
				CAMERA,
				CANCEL,
				COMPOSE,
				CONTACT_ADD,
				DISCLOSURE,
				DONE,
				EDIT,
				FAST_FORWARD,
				FIXED_SPACE,
				FLEXIBLE_SPACE,
				INFO_DARK,
				INFO_LIGHT,
				ORGANIZE,
				PAUSE,
				PLAY,
				REFRESH,
				REPLY,
				REWIND,
				SAVE,
				SPINNER,
				STOP,
				TRASH
			}
			export enum TableViewStyle {
				GROUPED,
				PLAIN
			}
			export enum SystemIcon {
				BOOKMARKS,
				CONTACTS,
				DOWNLOADS,
				FAVORITES,
				FEATURED,
				HISTORY,
				MORE,
				MOST_RECENT,
				MOST_VIEWED,
				RECENTS,
				SEARCH,
				TOP_RATED
			}
			export enum ActivityIndicatorStyle {
				BIG,
				DARK,
				PLAIN
			}
			export enum ProgressBarStyle {
				BAR,
				DEFAULT,
				PLAIN
			}
			export enum ListViewSeparatorStyle {
				NONE,
				SINGLE_LINE
			}
			export enum RowAnimationStyle {
				BOTTOM,
				FADE,
				LEFT,
				NONE,
				RIGHT,
				TOP
			}
			export enum AnimationStyle {
				CURL_DOWN,
				CURL_UP,
				FLIP_FROM_LEFT,
				FLIP_FROM_RIGHT,
				NONE
			}
			export interface NavigationGroup extends Titanium.UI.View {
				window : Titanium.UI.Window;
				close (window: Titanium.UI.Window, options: Dictionary<Object>) : void;
				getWindow () : Titanium.UI.Window;
				open (window: Titanium.UI.Window, options: Dictionary<Object>) : void;
			}
			export enum TableViewScrollPosition {
				BOTTOM,
				MIDDLE,
				NONE,
				TOP
			}
			export enum AlertDialogStyle {
				DEFAULT,
				LOGIN_AND_PASSWORD_INPUT,
				PLAIN_TEXT_INPUT,
				SECURE_TEXT_INPUT
			}
			export enum ListViewScrollPosition {
				BOTTOM,
				MIDDLE,
				NONE,
				TOP
			}
			export enum TableViewCellSelectionStyle {
				BLUE,
				GRAY,
				NONE
			}
			export enum ListViewCellSelectionStyle {
				BLUE,
				GRAY,
				NONE
			}
			export enum TableViewSeparatorStyle {
				NONE,
				SINGLE_LINE
			}
		}
		export interface TextArea extends Titanium.UI.View {
			appearance : number;
			autoLink : number;
			autocapitalization : number;
			autocorrect : boolean;
			clearOnEdit : boolean;
			color : string;
			editable : boolean;
			ellipsize : boolean;
			enableReturnKey : boolean;
			font : Font;
			hintText : string;
			keyboardToolbar : any;
			keyboardToolbarColor : string;
			keyboardToolbarHeight : number;
			keyboardType : number;
			maxLength : number;
			returnKeyType : number;
			scrollable : boolean;
			scrollsToTop : boolean;
			suppressReturn : boolean;
			textAlign : any;
			value : string;
			verticalAlign : any;
			blur () : void;
			focus () : void;
			getAppearance () : number;
			getAutoLink () : number;
			getAutocapitalization () : number;
			getAutocorrect () : boolean;
			getClearOnEdit () : boolean;
			getColor () : string;
			getEditable () : boolean;
			getEllipsize () : boolean;
			getEnableReturnKey () : boolean;
			getFont () : Font;
			getHintText () : string;
			getKeyboardToolbar () : any;
			getKeyboardToolbarColor () : string;
			getKeyboardToolbarHeight () : number;
			getKeyboardType () : number;
			getMaxLength () : number;
			getReturnKeyType () : number;
			getScrollable () : boolean;
			getScrollsToTop () : boolean;
			getSuppressReturn () : boolean;
			getTextAlign () : any;
			getValue () : string;
			getVerticalAlign () : any;
			hasText () : boolean;
			setAppearance (appearance: number) : void;
			setAutoLink (autoLink: number) : void;
			setAutocapitalization (autocapitalization: number) : void;
			setAutocorrect (autocorrect: boolean) : void;
			setClearOnEdit (clearOnEdit: boolean) : void;
			setColor (color: string) : void;
			setEditable (editable: boolean) : void;
			setEllipsize (ellipsize: boolean) : void;
			setEnableReturnKey (enableReturnKey: boolean) : void;
			setFont (font: Font) : void;
			setHintText (hintText: string) : void;
			setKeyboardToolbar (keyboardToolbar: Array<Titanium.UI.View>) : void;
			setKeyboardToolbar (keyboardToolbar: Titanium.UI.iOS.Toolbar) : void;
			setKeyboardToolbarColor (keyboardToolbarColor: string) : void;
			setKeyboardToolbarHeight (keyboardToolbarHeight: number) : void;
			setKeyboardType (keyboardType: number) : void;
			setMaxLength (maxLength: number) : void;
			setReturnKeyType (returnKeyType: number) : void;
			setScrollable (scrollable: boolean) : void;
			setScrollsToTop (scrollsToTop: boolean) : void;
			setSelection (start: number, end: number) : void;
			setSuppressReturn (suppressReturn: boolean) : void;
			setTextAlign (textAlign: string) : void;
			setTextAlign (textAlign: number) : void;
			setValue (value: string) : void;
			setVerticalAlign (verticalAlign: number) : void;
			setVerticalAlign (verticalAlign: string) : void;
		}
		export enum ActivityIndicatorStyle {
			BIG,
			BIG_DARK,
			DARK,
			PLAIN
		}
		export interface Switch extends Titanium.UI.View {
			color : string;
			font : Font;
			style : number;
			textAlign : any;
			title : string;
			titleOff : string;
			titleOn : string;
			value : boolean;
			verticalAlign : any;
			getColor () : string;
			getFont () : Font;
			getStyle () : number;
			getTextAlign () : any;
			getTitle () : string;
			getTitleOff () : string;
			getTitleOn () : string;
			getValue () : boolean;
			getVerticalAlign () : any;
			setColor (color: string) : void;
			setFont (font: Font) : void;
			setStyle (style: number) : void;
			setTextAlign (textAlign: string) : void;
			setTextAlign (textAlign: number) : void;
			setTitle (title: string) : void;
			setTitleOff (titleOff: string) : void;
			setTitleOn (titleOn: string) : void;
			setValue (value: boolean) : void;
			setVerticalAlign (verticalAlign: number) : void;
			setVerticalAlign (verticalAlign: string) : void;
		}
		export interface Tab extends Titanium.UI.View {
			active : boolean;
			activeIcon : string;
			activeIconIsMask : any;
			badge : string;
			icon : string;
			iconIsmask : any;
			title : string;
			titleid : string;
			window : Titanium.UI.Window;
			close (window: Titanium.UI.Window, options?: any) : void;
			getActive () : boolean;
			getActiveIcon () : string;
			getActiveIconIsMask () : boolean;
			getBadge () : string;
			getIcon () : string;
			getIconIsmask () : boolean;
			getTitle () : string;
			getTitleid () : string;
			getWindow () : Titanium.UI.Window;
			open (window: Titanium.UI.Window, options: any) : void;
			setActive (active: boolean) : void;
			setActiveIcon (activeIcon: string) : void;
			setActiveIconIsMask (activeIconIsMask: boolean) : void;
			setBadge (badge: string) : void;
			setIcon (icon: string) : void;
			setIconIsmask (iconIsmask: boolean) : void;
			setTitle (title: string) : void;
			setTitleid (titleid: string) : void;
			setWindow (window: Titanium.UI.Window) : void;
		}
		export interface TableViewRow extends Titanium.UI.View {
			className : string;
			color : string;
			editable : boolean;
			font : Font;
			hasCheck : boolean;
			hasChild : boolean;
			hasDetail : boolean;
			indentionLevel : number;
			leftImage : string;
			moveable : boolean;
			rightImage : string;
			selectedBackgroundColor : string;
			selectedBackgroundImage : string;
			selectedColor : string;
			selectionStyle : number;
			title : string;
			getClassName () : string;
			getColor () : string;
			getEditable () : boolean;
			getFont () : Font;
			getHasCheck () : boolean;
			getHasChild () : boolean;
			getHasDetail () : boolean;
			getIndentionLevel () : number;
			getLeftImage () : string;
			getMoveable () : boolean;
			getRightImage () : string;
			getSelectedBackgroundColor () : string;
			getSelectedBackgroundImage () : string;
			getSelectedColor () : string;
			getSelectionStyle () : number;
			getTitle () : string;
			setClassName (className: string) : void;
			setColor (color: string) : void;
			setEditable (editable: boolean) : void;
			setFont (font: Font) : void;
			setHasCheck (hasCheck: boolean) : void;
			setHasChild (hasChild: boolean) : void;
			setHasDetail (hasDetail: boolean) : void;
			setIndentionLevel (indentionLevel: number) : void;
			setLeftImage (leftImage: string) : void;
			setMoveable (moveable: boolean) : void;
			setRightImage (rightImage: string) : void;
			setSelectedBackgroundColor (selectedBackgroundColor: string) : void;
			setSelectedBackgroundImage (selectedBackgroundImage: string) : void;
			setSelectedColor (selectedColor: string) : void;
			setSelectionStyle (selectionStyle: number) : void;
			setTitle (title: string) : void;
		}
		export interface PickerRow extends Titanium.UI.View {
			color : string;
			font : Font;
			fontSize : number;
			title : string;
			getColor () : string;
			getFont () : Font;
			getFontSize () : number;
			getTitle () : string;
			setColor (color: string) : void;
			setFont (font: Font) : void;
			setFontSize (fontSize: number) : void;
			setTitle (title: string) : void;
		}
		export interface Slider extends Titanium.UI.View {
			disabledLeftTrackImage : string;
			disabledRightTrackImage : string;
			disabledThumbImage : string;
			highlightedLeftTrackImage : string;
			highlightedRightTrackImage : string;
			highlightedThumbImage : string;
			leftTrackImage : string;
			leftTrackLeftCap : number;
			leftTrackTopCap : number;
			max : number;
			maxRange : number;
			min : number;
			minRange : number;
			rightTrackImage : string;
			rightTrackLeftCap : number;
			rightTrackTopCap : number;
			selectedLeftTrackImage : string;
			selectedRightTrackImage : string;
			selectedThumbImage : string;
			thumbImage : any;
			value : string;
			getDisabledLeftTrackImage () : string;
			getDisabledRightTrackImage () : string;
			getDisabledThumbImage () : string;
			getHighlightedLeftTrackImage () : string;
			getHighlightedRightTrackImage () : string;
			getHighlightedThumbImage () : string;
			getLeftTrackImage () : string;
			getLeftTrackLeftCap () : number;
			getLeftTrackTopCap () : number;
			getMax () : number;
			getMaxRange () : number;
			getMin () : number;
			getMinRange () : number;
			getRightTrackImage () : string;
			getRightTrackLeftCap () : number;
			getRightTrackTopCap () : number;
			getSelectedLeftTrackImage () : string;
			getSelectedRightTrackImage () : string;
			getSelectedThumbImage () : string;
			getThumbImage () : any;
			getValue () : string;
			setDisabledLeftTrackImage (disabledLeftTrackImage: string) : void;
			setDisabledRightTrackImage (disabledRightTrackImage: string) : void;
			setDisabledThumbImage (disabledThumbImage: string) : void;
			setHighlightedLeftTrackImage (highlightedLeftTrackImage: string) : void;
			setHighlightedRightTrackImage (highlightedRightTrackImage: string) : void;
			setHighlightedThumbImage (highlightedThumbImage: string) : void;
			setLeftTrackImage (leftTrackImage: string) : void;
			setLeftTrackLeftCap (leftTrackLeftCap: number) : void;
			setLeftTrackTopCap (leftTrackTopCap: number) : void;
			setMax (max: number) : void;
			setMaxRange (maxRange: number) : void;
			setMin (min: number) : void;
			setMinRange (minRange: number) : void;
			setRightTrackImage (rightTrackImage: string) : void;
			setRightTrackLeftCap (rightTrackLeftCap: number) : void;
			setRightTrackTopCap (rightTrackTopCap: number) : void;
			setSelectedLeftTrackImage (selectedLeftTrackImage: string) : void;
			setSelectedRightTrackImage (selectedRightTrackImage: string) : void;
			setSelectedThumbImage (selectedThumbImage: string) : void;
			setThumbImage (thumbImage: string) : void;
			setThumbImage (thumbImage: Titanium.Blob) : void;
			setValue (value: number, options?: Dictionary<Object>) : void;
		}
		export module Android {
			export var LINKIFY_ALL : number;
			export var LINKIFY_EMAIL_ADDRESSES : number;
			export var LINKIFY_MAP_ADDRESSES : number;
			export var LINKIFY_PHONE_NUMBERS : number;
			export var LINKIFY_WEB_URLS : number;
			export var OVER_SCROLL_ALWAYS : number;
			export var OVER_SCROLL_IF_CONTENT_SCROLLS : number;
			export var OVER_SCROLL_NEVER : number;
			export var PIXEL_FORMAT_A_8 : number;
			export var PIXEL_FORMAT_LA_88 : number;
			export var PIXEL_FORMAT_L_8 : number;
			export var PIXEL_FORMAT_OPAQUE : number;
			export var PIXEL_FORMAT_RGBA_4444 : number;
			export var PIXEL_FORMAT_RGBA_5551 : number;
			export var PIXEL_FORMAT_RGBA_8888 : number;
			export var PIXEL_FORMAT_RGBX_8888 : number;
			export var PIXEL_FORMAT_RGB_332 : number;
			export var PIXEL_FORMAT_RGB_565 : number;
			export var PIXEL_FORMAT_RGB_888 : number;
			export var PIXEL_FORMAT_TRANSLUCENT : number;
			export var PIXEL_FORMAT_TRANSPARENT : number;
			export var PIXEL_FORMAT_UNKNOWN : number;
			export var PROGRESS_INDICATOR_DETERMINANT : number;
			export var PROGRESS_INDICATOR_DIALOG : number;
			export var PROGRESS_INDICATOR_INDETERMINANT : number;
			export var PROGRESS_INDICATOR_STATUS_BAR : number;
			export var SOFT_INPUT_ADJUST_PAN : number;
			export var SOFT_INPUT_ADJUST_RESIZE : number;
			export var SOFT_INPUT_ADJUST_UNSPECIFIED : number;
			export var SOFT_INPUT_STATE_ALWAYS_HIDDEN : number;
			export var SOFT_INPUT_STATE_ALWAYS_VISIBLE : number;
			export var SOFT_INPUT_STATE_HIDDEN : number;
			export var SOFT_INPUT_STATE_UNSPECIFIED : number;
			export var SOFT_INPUT_STATE_VISIBLE : number;
			export var SOFT_KEYBOARD_DEFAULT_ON_FOCUS : number;
			export var SOFT_KEYBOARD_HIDE_ON_FOCUS : number;
			export var SOFT_KEYBOARD_SHOW_ON_FOCUS : number;
			export var SWITCH_STYLE_CHECKBOX : number;
			export var SWITCH_STYLE_TOGGLEBUTTON : number;
			export var WEBVIEW_LOAD_CACHE_ELSE_NETWORK : number;
			export var WEBVIEW_LOAD_CACHE_ONLY : number;
			export var WEBVIEW_LOAD_DEFAULT : number;
			export var WEBVIEW_LOAD_NO_CACHE : number;
			export var WEBVIEW_PLUGINS_OFF : number;
			export var WEBVIEW_PLUGINS_ON : number;
			export var WEBVIEW_PLUGINS_ON_DEMAND : number;
			export var bubbleParent : boolean;
			export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function applyProperties (props: Dictionary<Object>) : void;
			export function createProgressIndicator (parameters?: Dictionary<Titanium.UI.Android.ProgressIndicator>) : Titanium.UI.Android.ProgressIndicator;
			export function createSearchView (parameters?: Dictionary<Titanium.UI.Android.SearchView>) : Titanium.UI.Android.SearchView;
			export function fireEvent (name: string, event: Dictionary<Object>) : void;
			export function getBubbleParent () : boolean;
			export function hideSoftKeyboard () : void;
			export function openPreferences () : void;
			export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function setBubbleParent (bubbleParent: boolean) : void;
			export interface SearchView extends Titanium.UI.View {
				hintText : string;
				iconified : boolean;
				iconifiedByDefault : boolean;
				submitEnabled : boolean;
				value : string;
				blur () : void;
				focus () : void;
				getHintText () : string;
				getIconified () : boolean;
				getIconifiedByDefault () : boolean;
				getSubmitEnabled () : boolean;
				getValue () : string;
				setHintText (hintText: string) : void;
				setIconified (iconified: boolean) : void;
				setIconifiedByDefault (iconifiedByDefault: boolean) : void;
				setSubmitEnabled (submitEnabled: boolean) : void;
				setValue (value: string) : void;
			}
			export interface ProgressIndicator extends Titanium.Proxy {
				cancelable : boolean;
				location : number;
				max : number;
				message : string;
				messageid : string;
				min : number;
				type : number;
				getCancelable () : boolean;
				getLocation () : number;
				getMax () : number;
				getMessage () : string;
				getMessageid () : string;
				getMin () : number;
				getType () : number;
				hide () : void;
				setCancelable (cancelable: boolean) : void;
				setLocation (location: number) : void;
				setMax (max: number) : void;
				setMessage (message: string) : void;
				setMessageid (messageid: string) : void;
				setMin (min: number) : void;
				setType (type: number) : void;
				show () : void;
			}
		}
		export interface DashboardItem extends Titanium.Proxy {
			badge : number;
			canDelete : boolean;
			image : any;
			selectedImage : any;
			getBadge () : number;
			getCanDelete () : boolean;
			getImage () : any;
			getSelectedImage () : any;
			setBadge (badge: number) : void;
			setCanDelete (canDelete: boolean) : void;
			setImage (image: string) : void;
			setImage (image: Titanium.Blob) : void;
			setSelectedImage (selectedImage: string) : void;
			setSelectedImage (selectedImage: Titanium.Blob) : void;
		}
		export interface DashboardView extends Titanium.UI.View {
			columnCount : number;
			data : Array<Titanium.UI.DashboardItem>;
			editable : boolean;
			rowCount : number;
			wobble : boolean;
			getColumnCount () : number;
			getData () : Array<Titanium.UI.DashboardItem>;
			getEditable () : boolean;
			getRowCount () : number;
			getWobble () : boolean;
			setData (data: Array<Titanium.UI.DashboardItem>) : void;
			setEditable (editable: boolean) : void;
			setWobble (wobble: boolean) : void;
			startEditing () : void;
			stopEditing () : void;
		}
		export interface ListItem extends Titanium.Proxy {
			accessoryType : number;
			backgroundColor : string;
			backgroundGradient : Gradient;
			backgroundImage : string;
			canEdit : boolean;
			canMove : boolean;
			color : string;
			font : Font;
			height : any;
			image : string;
			itemId : string;
			searchableText : string;
			selectedBackgroundColor : string;
			selectedBackgroundGradient : Gradient;
			selectedBackgroundImage : string;
			selectionStyle : number;
			subtitle : string;
			title : string;
		}
		export interface AlertDialog extends Titanium.Proxy {
			androidView : Titanium.UI.View;
			buttonNames : Array<String>;
			cancel : number;
			message : string;
			messageid : string;
			ok : string;
			okid : string;
			persistent : boolean;
			style : number;
			title : string;
			titleid : string;
			getAndroidView () : Titanium.UI.View;
			getButtonNames () : Array<String>;
			getCancel () : number;
			getMessage () : string;
			getOk () : string;
			getPersistent () : boolean;
			getStyle () : number;
			getTitle () : string;
			hide () : void;
			setAndroidView (androidView: Titanium.UI.View) : void;
			setCancel (cancel: number) : void;
			setMessage (message: string) : void;
			setOk (ok: string) : void;
			setPersistent (persistent: boolean) : void;
			setStyle (style: number) : void;
			setTitle (title: string) : void;
			show () : void;
		}
		export module iOS {
			export var AD_SIZE_LANDSCAPE : string;
			export var AD_SIZE_PORTRAIT : string;
			export var ANIMATION_CURVE_EASE_IN : number;
			export var ANIMATION_CURVE_EASE_IN_OUT : number;
			export var ANIMATION_CURVE_EASE_OUT : number;
			export var ANIMATION_CURVE_LINEAR : number;
			export var AUTODETECT_ADDRESS : number;
			export var AUTODETECT_ALL : number;
			export var AUTODETECT_CALENDAR : number;
			export var AUTODETECT_LINK : number;
			export var AUTODETECT_NONE : number;
			export var AUTODETECT_PHONE : number;
			export var BLEND_MODE_CLEAR : number;
			export var BLEND_MODE_COLOR : number;
			export var BLEND_MODE_COLOR_BURN : number;
			export var BLEND_MODE_COLOR_DODGE : number;
			export var BLEND_MODE_COPY : number;
			export var BLEND_MODE_DARKEN : number;
			export var BLEND_MODE_DESTINATION_ATOP : number;
			export var BLEND_MODE_DESTINATION_IN : number;
			export var BLEND_MODE_DESTINATION_OUT : number;
			export var BLEND_MODE_DESTINATION_OVER : number;
			export var BLEND_MODE_DIFFERENCE : number;
			export var BLEND_MODE_EXCLUSION : number;
			export var BLEND_MODE_HARD_LIGHT : number;
			export var BLEND_MODE_HUE : number;
			export var BLEND_MODE_LIGHTEN : number;
			export var BLEND_MODE_LUMINOSITY : number;
			export var BLEND_MODE_MULTIPLY : number;
			export var BLEND_MODE_NORMAL : number;
			export var BLEND_MODE_OVERLAY : number;
			export var BLEND_MODE_PLUS_DARKER : number;
			export var BLEND_MODE_PLUS_LIGHTER : number;
			export var BLEND_MODE_SATURATION : number;
			export var BLEND_MODE_SCREEN : number;
			export var BLEND_MODE_SOFT_LIGHT : number;
			export var BLEND_MODE_SOURCE_ATOP : number;
			export var BLEND_MODE_SOURCE_IN : number;
			export var BLEND_MODE_SOURCE_OUT : number;
			export var BLEND_MODE_XOR : number;
			export var COLOR_GROUP_TABLEVIEW_BACKGROUND : string;
			export var COLOR_SCROLLVIEW_BACKGROUND : string;
			export var COLOR_UNDER_PAGE_BACKGROUND : string;
			export var COLOR_VIEW_FLIPSIDE_BACKGROUND : string;
			export var WEBVIEW_NAVIGATIONTYPE_BACK_FORWARD : number;
			export var WEBVIEW_NAVIGATIONTYPE_FORM_RESUBMITTED : number;
			export var WEBVIEW_NAVIGATIONTYPE_FORM_SUBMITTED : number;
			export var WEBVIEW_NAVIGATIONTYPE_LINK_CLICKED : number;
			export var WEBVIEW_NAVIGATIONTYPE_OTHER : number;
			export var WEBVIEW_NAVIGATIONTYPE_RELOAD : number;
			export var bubbleParent : boolean;
			export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function applyProperties (props: Dictionary<Object>) : void;
			export function create3DMatrix (parameters?: Dictionary<Titanium.UI.iOS._3DMatrix>) : Titanium.UI.iOS._3DMatrix;
			export function createAdView (parameters?: Dictionary<Titanium.UI.iOS.AdView>) : Titanium.UI.iOS.AdView;
			export function createCoverFlowView (parameters?: Dictionary<Titanium.UI.iOS.CoverFlowView>) : Titanium.UI.iOS.CoverFlowView;
			export function createDocumentViewer (parameters?: Dictionary<Titanium.UI.iOS.DocumentViewer>) : Titanium.UI.iOS.DocumentViewer;
			export function createNavigationWindow (parameters?: Dictionary<Titanium.UI.iOS.NavigationWindow>) : Titanium.UI.iOS.NavigationWindow;
			export function createTabbedBar (parameters?: Dictionary<Titanium.UI.iOS.TabbedBar>) : Titanium.UI.iOS.TabbedBar;
			export function createToolbar (parameters?: Dictionary<Titanium.UI.iOS.Toolbar>) : Titanium.UI.iOS.Toolbar;
			export function fireEvent (name: string, event: Dictionary<Object>) : void;
			export function getBubbleParent () : boolean;
			export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function setBubbleParent (bubbleParent: boolean) : void;
			export interface Toolbar extends Titanium.UI.View {
				barColor : string;
				borderBottom : boolean;
				borderTop : boolean;
				items : Array<Titanium.UI.View>;
				translucent : boolean;
				getBarColor () : string;
				getBorderBottom () : boolean;
				getBorderTop () : boolean;
				getItems () : Array<Titanium.UI.View>;
				getTranslucent () : boolean;
				setBarColor (barColor: string) : void;
				setBorderBottom (borderBottom: boolean) : void;
				setBorderTop (borderTop: boolean) : void;
				setItems (items: Array<Titanium.UI.View>) : void;
				setTranslucent (translucent: boolean) : void;
			}
			export interface CoverFlowView extends Titanium.UI.View {
				images : any;
				selected : number;
				getImages () : any;
				getSelected () : number;
				setImage (index: number, image: string) : void;
				setImage (image: Titanium.Blob) : void;
				setImage (image: Titanium.Filesystem.File) : void;
				setImage (index: number, image: CoverFlowImageType) : void;
				setImages (images: Array<String>) : void;
				setImages (images: Array<Titanium.Blob>) : void;
				setImages (images: Array<Titanium.Filesystem.File>) : void;
				setImages (images: Array<CoverFlowImageType>) : void;
				setSelected (selected: number) : void;
			}
			export interface DocumentViewer extends Titanium.UI.View {
				name : string;
				url : string;
				getName () : string;
				getUrl () : string;
				hide (options?: DocumentViewerOptions) : void;
				setUrl (url: string) : void;
				show (options?: DocumentViewerOptions) : void;
			}
			export interface NavigationWindow extends Titanium.UI.Window {
				window : Titanium.UI.Window;
				closeWindow (window: Titanium.UI.Window, options: Dictionary<Object>) : void;
				getWindow () : Titanium.UI.Window;
				openWindow (window: Titanium.UI.Window, options: Dictionary<Object>) : void;
			}
			export interface TabbedBar extends Titanium.UI.View {
				index : number;
				labels : any;
				style : number;
				getIndex () : number;
				getLabels () : any;
				getStyle () : number;
				setIndex (index: number) : void;
				setLabels (labels: Array<String>) : void;
				setLabels (labels: Array<BarItemType>) : void;
				setStyle (style: number) : void;
			}
			export interface _3DMatrix extends Titanium.Proxy {
				m11 : number;
				m12 : number;
				m13 : number;
				m14 : number;
				m21 : number;
				m22 : number;
				m23 : number;
				m24 : number;
				m31 : number;
				m32 : number;
				m33 : number;
				m34 : number;
				m41 : number;
				m42 : number;
				m43 : number;
				m44 : number;
				getM11 () : number;
				getM12 () : number;
				getM13 () : number;
				getM14 () : number;
				getM21 () : number;
				getM22 () : number;
				getM23 () : number;
				getM24 () : number;
				getM31 () : number;
				getM32 () : number;
				getM33 () : number;
				getM34 () : number;
				getM41 () : number;
				getM42 () : number;
				getM43 () : number;
				getM44 () : number;
				invert () : Titanium.UI._3DMatrix;
				multiply (t2: Titanium.UI._3DMatrix) : Titanium.UI._3DMatrix;
				rotate (angle: number, x: number, y: number, z: number) : Titanium.UI._3DMatrix;
				scale (sx: number, sy: number, sz: number) : Titanium.UI._3DMatrix;
				setM11 (m11: number) : void;
				setM12 (m12: number) : void;
				setM13 (m13: number) : void;
				setM14 (m14: number) : void;
				setM21 (m21: number) : void;
				setM22 (m22: number) : void;
				setM23 (m23: number) : void;
				setM24 (m24: number) : void;
				setM31 (m31: number) : void;
				setM32 (m32: number) : void;
				setM33 (m33: number) : void;
				setM34 (m34: number) : void;
				setM41 (m41: number) : void;
				setM42 (m42: number) : void;
				setM43 (m43: number) : void;
				setM44 (m44: number) : void;
				translate (tx: number, ty: number, tz: number) : Titanium.UI._3DMatrix;
			}
			export interface AdView extends Titanium.UI.View {
				adSize : string;
				cancelAction () : void;
				getAdSize () : string;
				setAdSize (adSize: string) : void;
			}
		}
		export interface _2DMatrix extends Titanium.Proxy {
			a : number;
			b : number;
			c : number;
			d : number;
			tx : number;
			ty : number;
			getA () : number;
			getB () : number;
			getC () : number;
			getD () : number;
			getTx () : number;
			getTy () : number;
			invert () : Titanium.UI._2DMatrix;
			multiply (t2: Titanium.UI._2DMatrix) : Titanium.UI._2DMatrix;
			rotate (angle: number, toAngle?: number) : Titanium.UI._2DMatrix;
			scale (sx: number, sy: number, toSx?: number, toSy?: number) : Titanium.UI._2DMatrix;
			setA (a: number) : void;
			setB (b: number) : void;
			setC (c: number) : void;
			setD (d: number) : void;
			setTx (tx: number) : void;
			setTy (ty: number) : void;
			translate (tx: number, ty: number) : Titanium.UI._2DMatrix;
		}
		export interface TabbedBar extends Titanium.UI.View {
			index : number;
			labels : any;
			style : number;
			getIndex () : number;
			getLabels () : any;
			getStyle () : number;
			setIndex (index: number) : void;
			setLabels (labels: Array<String>) : void;
			setLabels (labels: Array<BarItemType>) : void;
			setStyle (style: number) : void;
		}
		export interface Window extends Titanium.UI.View {
			activity : Titanium.Android.Activity;
			autoAdjustScrollViewInsets : boolean;
			backButtonTitle : string;
			backButtonTitleImage : any;
			barColor : string;
			barImage : string;
			exitOnClose : boolean;
			extendEdges : Array<Number>;
			fullscreen : boolean;
			includeOpaqueBars : boolean;
			leftNavButton : Titanium.UI.View;
			modal : boolean;
			navBarHidden : boolean;
			navTintColor : any;
			orientation : number;
			orientationModes : Array<Number>;
			rightNavButton : Titanium.UI.View;
			statusBarStyle : any;
			tabBarHidden : boolean;
			title : string;
			titleControl : Titanium.UI.View;
			titleImage : string;
			titlePrompt : string;
			titleid : string;
			titlepromptid : string;
			toolbar : Array<Object>;
			translucent : boolean;
			url : string;
			windowPixelFormat : number;
			windowSoftInputMode : number;
			close (params?: Dictionary<Titanium.UI.Animation>) : void;
			close (params?: closeWindowParams) : void;
			getActivity () : Titanium.Android.Activity;
			getAutoAdjustScrollViewInsets () : boolean;
			getBackButtonTitle () : string;
			getBackButtonTitleImage () : any;
			getBarColor () : string;
			getBarImage () : string;
			getExitOnClose () : boolean;
			getExtendEdges () : Array<Number>;
			getFullscreen () : boolean;
			getIncludeOpaqueBars () : boolean;
			getLeftNavButton () : Titanium.UI.View;
			getModal () : boolean;
			getNavBarHidden () : boolean;
			getNavTintColor () : string;
			getOrientation () : number;
			getOrientationModes () : Array<Number>;
			getRightNavButton () : Titanium.UI.View;
			getStatusBarStyle () : number;
			getTabBarHidden () : boolean;
			getTitle () : string;
			getTitleControl () : Titanium.UI.View;
			getTitleImage () : string;
			getTitlePrompt () : string;
			getTitleid () : string;
			getTitlepromptid () : string;
			getToolbar () : Array<Object>;
			getTranslucent () : boolean;
			getUrl () : string;
			getWindowPixelFormat () : number;
			getWindowSoftInputMode () : number;
			hideTabBar () : void;
			open (params?: openWindowParams) : void;
			setAutoAdjustScrollViewInsets (autoAdjustScrollViewInsets: boolean) : void;
			setBackButtonTitle (backButtonTitle: string) : void;
			setBackButtonTitleImage (backButtonTitleImage: string) : void;
			setBackButtonTitleImage (backButtonTitleImage: Titanium.Blob) : void;
			setBarColor (barColor: string) : void;
			setBarImage (barImage: string) : void;
			setExtendEdges (extendEdges: Array<Number>) : void;
			setFullscreen (fullscreen: boolean) : void;
			setIncludeOpaqueBars (includeOpaqueBars: boolean) : void;
			setLeftNavButton (leftNavButton: Titanium.UI.View) : void;
			setModal (modal: boolean) : void;
			setNavBarHidden (navBarHidden: boolean) : void;
			setNavTintColor (navTintColor: string) : void;
			setOrientationModes (orientationModes: Array<Number>) : void;
			setRightNavButton (rightNavButton: Titanium.UI.View) : void;
			setStatusBarStyle (statusBarStyle: number) : void;
			setTabBarHidden (tabBarHidden: boolean) : void;
			setTitle (title: string) : void;
			setTitleControl (titleControl: Titanium.UI.View) : void;
			setTitleImage (titleImage: string) : void;
			setTitlePrompt (titlePrompt: string) : void;
			setTitleid (titleid: string) : void;
			setTitlepromptid (titlepromptid: string) : void;
			setToolbar (items: Array<Object>, params?: windowToolbarParam) : void;
			setTranslucent (translucent: boolean) : void;
			setWindowPixelFormat (windowPixelFormat: number) : void;
		}
		export interface TextField extends Titanium.UI.View {
			appearance : number;
			autoLink : number;
			autocapitalization : number;
			autocorrect : boolean;
			borderStyle : number;
			clearButtonMode : number;
			clearOnEdit : boolean;
			color : string;
			editable : boolean;
			ellipsize : boolean;
			enableReturnKey : boolean;
			font : Font;
			hintText : string;
			keyboardToolbar : any;
			keyboardToolbarColor : string;
			keyboardToolbarHeight : number;
			keyboardType : number;
			leftButton : any;
			leftButtonMode : number;
			leftButtonPadding : number;
			maxLength : number;
			minimumFontSize : number;
			paddingLeft : number;
			paddingRight : number;
			passwordMask : boolean;
			returnKeyType : number;
			rightButton : any;
			rightButtonMode : number;
			rightButtonPadding : number;
			suppressReturn : boolean;
			textAlign : any;
			value : string;
			verticalAlign : any;
			blur () : void;
			focus () : void;
			getAppearance () : number;
			getAutoLink () : number;
			getAutocapitalization () : number;
			getAutocorrect () : boolean;
			getBorderStyle () : number;
			getClearButtonMode () : number;
			getClearOnEdit () : boolean;
			getColor () : string;
			getEditable () : boolean;
			getEllipsize () : boolean;
			getEnableReturnKey () : boolean;
			getFont () : Font;
			getHintText () : string;
			getKeyboardToolbar () : any;
			getKeyboardToolbarColor () : string;
			getKeyboardToolbarHeight () : number;
			getKeyboardType () : number;
			getLeftButton () : any;
			getLeftButtonMode () : number;
			getLeftButtonPadding () : number;
			getMaxLength () : number;
			getMinimumFontSize () : number;
			getPaddingLeft () : number;
			getPaddingRight () : number;
			getPasswordMask () : boolean;
			getReturnKeyType () : number;
			getRightButton () : any;
			getRightButtonMode () : number;
			getRightButtonPadding () : number;
			getSuppressReturn () : boolean;
			getTextAlign () : any;
			getValue () : string;
			getVerticalAlign () : any;
			hasText () : boolean;
			setAppearance (appearance: number) : void;
			setAutoLink (autoLink: number) : void;
			setAutocapitalization (autocapitalization: number) : void;
			setAutocorrect (autocorrect: boolean) : void;
			setBorderStyle (borderStyle: number) : void;
			setClearButtonMode (clearButtonMode: number) : void;
			setClearOnEdit (clearOnEdit: boolean) : void;
			setColor (color: string) : void;
			setEditable (editable: boolean) : void;
			setEllipsize (ellipsize: boolean) : void;
			setEnableReturnKey (enableReturnKey: boolean) : void;
			setFont (font: Font) : void;
			setHintText (hintText: string) : void;
			setKeyboardToolbar (keyboardToolbar: Array<Titanium.UI.View>) : void;
			setKeyboardToolbar (keyboardToolbar: Titanium.UI.iOS.Toolbar) : void;
			setKeyboardToolbarColor (keyboardToolbarColor: string) : void;
			setKeyboardToolbarHeight (keyboardToolbarHeight: number) : void;
			setKeyboardType (keyboardType: number) : void;
			setLeftButton (leftButton: any) : void;
			setLeftButtonMode (leftButtonMode: number) : void;
			setLeftButtonPadding (leftButtonPadding: number) : void;
			setMaxLength (maxLength: number) : void;
			setMinimumFontSize (minimumFontSize: number) : void;
			setPaddingLeft (paddingLeft: number) : void;
			setPaddingRight (paddingRight: number) : void;
			setPasswordMask (passwordMask: boolean) : void;
			setReturnKeyType (returnKeyType: number) : void;
			setRightButton (rightButton: any) : void;
			setRightButtonMode (rightButtonMode: number) : void;
			setRightButtonPadding (rightButtonPadding: number) : void;
			setSelection (start: number, end: number) : void;
			setSuppressReturn (suppressReturn: boolean) : void;
			setTextAlign (textAlign: string) : void;
			setTextAlign (textAlign: number) : void;
			setValue (value: string) : void;
			setVerticalAlign (verticalAlign: number) : void;
			setVerticalAlign (verticalAlign: string) : void;
		}
		export interface _3DMatrix extends Titanium.Proxy {
			m11 : number;
			m12 : number;
			m13 : number;
			m14 : number;
			m21 : number;
			m22 : number;
			m23 : number;
			m24 : number;
			m31 : number;
			m32 : number;
			m33 : number;
			m34 : number;
			m41 : number;
			m42 : number;
			m43 : number;
			m44 : number;
			getM11 () : number;
			getM12 () : number;
			getM13 () : number;
			getM14 () : number;
			getM21 () : number;
			getM22 () : number;
			getM23 () : number;
			getM24 () : number;
			getM31 () : number;
			getM32 () : number;
			getM33 () : number;
			getM34 () : number;
			getM41 () : number;
			getM42 () : number;
			getM43 () : number;
			getM44 () : number;
			invert () : Titanium.UI._3DMatrix;
			multiply (t2: Titanium.UI._3DMatrix) : Titanium.UI._3DMatrix;
			rotate (angle: number, x: number, y: number, z: number) : Titanium.UI._3DMatrix;
			scale (sx: number, sy: number, sz: number) : Titanium.UI._3DMatrix;
			setM11 (m11: number) : void;
			setM12 (m12: number) : void;
			setM13 (m13: number) : void;
			setM14 (m14: number) : void;
			setM21 (m21: number) : void;
			setM22 (m22: number) : void;
			setM23 (m23: number) : void;
			setM24 (m24: number) : void;
			setM31 (m31: number) : void;
			setM32 (m32: number) : void;
			setM33 (m33: number) : void;
			setM34 (m34: number) : void;
			setM41 (m41: number) : void;
			setM42 (m42: number) : void;
			setM43 (m43: number) : void;
			setM44 (m44: number) : void;
			translate (tx: number, ty: number, tz: number) : Titanium.UI._3DMatrix;
		}
		export interface WebView extends Titanium.UI.View {
			cacheMode : number;
			data : any;
			disableBounce : boolean;
			enableZoomControls : boolean;
			hideLoadIndicator : boolean;
			html : string;
			ignoreSslError : boolean;
			lightTouchEnabled : boolean;
			loading : boolean;
			overScrollMode : number;
			pluginState : number;
			scalesPageToFit : boolean;
			scrollsToTop : boolean;
			showScrollbars : boolean;
			url : string;
			userAgent : string;
			willHandleTouches : boolean;
			canGoBack () : boolean;
			canGoForward () : boolean;
			evalJS (code: string) : string;
			getCacheMode () : number;
			getData () : any;
			getDisableBounce () : boolean;
			getEnableZoomControls () : boolean;
			getHideLoadIndicator () : boolean;
			getHtml () : string;
			getIgnoreSslError () : boolean;
			getLightTouchEnabled () : boolean;
			getLoading () : boolean;
			getOverScrollMode () : number;
			getPluginState () : number;
			getScalesPageToFit () : boolean;
			getScrollsToTop () : boolean;
			getShowScrollbars () : boolean;
			getUrl () : string;
			getUserAgent () : string;
			getWillHandleTouches () : boolean;
			goBack () : void;
			goForward () : void;
			pause () : void;
			release () : void;
			reload () : void;
			repaint () : void;
			resume () : void;
			setBasicAuthentication (username: string, password: string) : void;
			setCacheMode (cacheMode: number) : void;
			setData (data: Titanium.Blob) : void;
			setData (data: Titanium.Filesystem.File) : void;
			setDisableBounce (disableBounce: boolean) : void;
			setEnableZoomControls (enableZoomControls: boolean) : void;
			setHideLoadIndicator (hideLoadIndicator: boolean) : void;
			setHtml (html: any, options?: Dictionary<Object>) : void;
			setIgnoreSslError (ignoreSslError: boolean) : void;
			setLightTouchEnabled (lightTouchEnabled: boolean) : void;
			setLoading (loading: boolean) : void;
			setOverScrollMode (overScrollMode: number) : void;
			setPluginState (pluginState: number) : void;
			setScalesPageToFit (scalesPageToFit: boolean) : void;
			setScrollsToTop (scrollsToTop: boolean) : void;
			setShowScrollbars (showScrollbars: boolean) : void;
			setUrl (url: string) : void;
			setUserAgent (userAgent: string) : void;
			setWillHandleTouches (willHandleTouches: boolean) : void;
			stopLoading (hardStop: boolean) : void;
		}
		export interface Clipboard  {
			clearData (type?: string) : void;
			clearText () : void;
			getData (type: string) : any;
			getText () : string;
			hasData (type: string) : boolean;
			hasText () : any;
			setData (type: string, data: any) : void;
			setText (text: string) : void;
		}
		export interface ListSection extends Titanium.Proxy {
			footerTitle : string;
			footerView : Titanium.UI.View;
			headerTitle : string;
			headerView : Titanium.UI.View;
			items : Array<ListDataItem>;
			appendItems (dataItems: Array<ListDataItem>, animation?: ListViewAnimationProperties) : void;
			deleteItemsAt (itemIndex: number, count: number, animation?: ListViewAnimationProperties) : void;
			getFooterTitle () : string;
			getFooterView () : Titanium.UI.View;
			getHeaderTitle () : string;
			getHeaderView () : Titanium.UI.View;
			getItemAt (itemIndex: number) : ListDataItem;
			getItems () : Array<ListDataItem>;
			insertItemsAt (itemIndex: number, dataItems: Array<ListDataItem>, animation?: ListViewAnimationProperties) : void;
			replaceItemsAt (index: number, count: number, dataItems: Array<ListDataItem>, animation?: ListViewAnimationProperties) : void;
			setFooterTitle (footerTitle: string) : void;
			setFooterView (footerView: Titanium.UI.View) : void;
			setHeaderTitle (headerTitle: string) : void;
			setHeaderView (headerView: Titanium.UI.View) : void;
			setItems (dataItems: Array<ListDataItem>, animation?: ListViewAnimationProperties) : void;
			updateItemAt (index: number, dataItem: ListDataItem, animation?: ListViewAnimationProperties) : void;
		}
		export interface ScrollView extends Titanium.UI.View {
			canCancelEvents : boolean;
			contentHeight : any;
			contentOffset : Dictionary<Object>;
			contentWidth : any;
			disableBounce : boolean;
			horizontalBounce : boolean;
			maxZoomScale : number;
			minZoomScale : number;
			overScrollMode : number;
			scrollIndicatorStyle : number;
			scrollType : string;
			scrollingEnabled : boolean;
			scrollsToTop : boolean;
			showHorizontalScrollIndicator : boolean;
			showVerticalScrollIndicator : boolean;
			verticalBounce : boolean;
			zoomScale : number;
			getCanCancelEvents () : boolean;
			getContentHeight () : any;
			getContentOffset () : Dictionary<Object>;
			getContentWidth () : any;
			getDisableBounce () : boolean;
			getHorizontalBounce () : boolean;
			getMaxZoomScale () : number;
			getMinZoomScale () : number;
			getOverScrollMode () : number;
			getScrollIndicatorStyle () : number;
			getScrollType () : string;
			getScrollingEnabled () : boolean;
			getScrollsToTop () : boolean;
			getShowHorizontalScrollIndicator () : boolean;
			getShowVerticalScrollIndicator () : boolean;
			getVerticalBounce () : boolean;
			getZoomScale () : number;
			scrollTo (x: number, y: number) : void;
			scrollToBottom () : void;
			setCanCancelEvents (canCancelEvents: boolean) : void;
			setContentHeight (contentHeight: number) : void;
			setContentHeight (contentHeight: string) : void;
			setContentOffset (contentOffset: Dictionary<Object>, animated?: contentOffsetOption) : void;
			setContentWidth (contentWidth: number) : void;
			setContentWidth (contentWidth: string) : void;
			setDisableBounce (disableBounce: boolean) : void;
			setHorizontalBounce (horizontalBounce: boolean) : void;
			setMaxZoomScale (maxZoomScale: number) : void;
			setMinZoomScale (minZoomScale: number) : void;
			setOverScrollMode (overScrollMode: number) : void;
			setScrollIndicatorStyle (scrollIndicatorStyle: number) : void;
			setScrollingEnabled (scrollingEnabled: boolean) : void;
			setScrollsToTop (scrollsToTop: boolean) : void;
			setShowHorizontalScrollIndicator (showHorizontalScrollIndicator: boolean) : void;
			setShowVerticalScrollIndicator (showVerticalScrollIndicator: boolean) : void;
			setVerticalBounce (verticalBounce: boolean) : void;
			setZoomScale (zoomScale: number, animated?: zoomScaleOption) : void;
		}
		export interface ListView extends Titanium.UI.View {
			allowsSelection : boolean;
			canScroll : boolean;
			caseInsensitiveSearch : boolean;
			defaultItemTemplate : any;
			editing : boolean;
			footerTitle : string;
			footerView : Titanium.UI.View;
			headerTitle : string;
			headerView : Titanium.UI.View;
			keepSectionsInSearch : boolean;
			pruneSectionsOnEdit : boolean;
			pullView : Titanium.UI.View;
			scrollIndicatorStyle : number;
			searchText : string;
			searchView : any;
			sectionCount : number;
			sectionIndexTitles : Array<ListViewIndexEntry>;
			sections : Array<Titanium.UI.ListSection>;
			separatorColor : string;
			separatorStyle : number;
			showVerticalScrollIndicator : boolean;
			style : number;
			templates : Dictionary<Object>;
			willScrollOnStatusTap : boolean;
			appendSection (section: Titanium.UI.ListSection, animation?: ListViewAnimationProperties) : void;
			appendSection (section: Array<Titanium.UI.ListSection>, animation?: ListViewAnimationProperties) : void;
			deleteSectionAt (sectionIndex: number, animation?: ListViewAnimationProperties) : void;
			deselectItem (sectionIndex: number, itemIndex: number) : void;
			getAllowsSelection () : boolean;
			getCanScroll () : boolean;
			getCaseInsensitiveSearch () : boolean;
			getDefaultItemTemplate () : any;
			getEditing () : boolean;
			getFooterTitle () : string;
			getFooterView () : Titanium.UI.View;
			getHeaderTitle () : string;
			getHeaderView () : Titanium.UI.View;
			getKeepSectionsInSearch () : boolean;
			getPruneSectionsOnEdit () : boolean;
			getPullView () : Titanium.UI.View;
			getScrollIndicatorStyle () : number;
			getSearchText () : string;
			getSearchView () : Titanium.UI.SearchBar;
			getSectionCount () : number;
			getSectionIndexTitles () : Array<ListViewIndexEntry>;
			getSections () : Array<Titanium.UI.ListSection>;
			getSeparatorColor () : string;
			getSeparatorStyle () : number;
			getShowVerticalScrollIndicator () : boolean;
			getStyle () : number;
			getTemplates () : Dictionary<Object>;
			getWillScrollOnStatusTap () : boolean;
			insertSectionAt (sectionIndex: number, section: Titanium.UI.ListSection, animation?: ListViewAnimationProperties) : void;
			insertSectionAt (sectionIndex: number, section: Array<Titanium.UI.ListSection>, animation?: ListViewAnimationProperties) : void;
			replaceSectionAt (sectionIndex: number, section: Titanium.UI.ListSection, animation: ListViewAnimationProperties) : void;
			scrollToItem (sectionIndex: number, itemIndex: number, animation?: ListViewAnimationProperties) : void;
			selectItem (sectionIndex: number, itemIndex: number) : void;
			setAllowsSelection (allowsSelection: boolean) : void;
			setCanScroll (canScroll: boolean) : void;
			setCaseInsensitiveSearch (caseInsensitiveSearch: boolean) : void;
			setContentInsets (edgeInsets: ListViewEdgeInsets, animated?: ListViewContentInsetOption) : void;
			setDefaultItemTemplate (defaultItemTemplate: string) : void;
			setDefaultItemTemplate (defaultItemTemplate: number) : void;
			setEditing (editing: boolean) : void;
			setFooterTitle (footerTitle: string) : void;
			setFooterView (footerView: Titanium.UI.View) : void;
			setHeaderTitle (headerTitle: string) : void;
			setHeaderView (headerView: Titanium.UI.View) : void;
			setKeepSectionsInSearch (keepSectionsInSearch: boolean) : void;
			setMarker (markerProps: ListViewMarkerProps) : void;
			setPruneSectionsOnEdit (pruneSectionsOnEdit: boolean) : void;
			setPullView (pullView: Titanium.UI.View) : void;
			setScrollIndicatorStyle (scrollIndicatorStyle: number) : void;
			setSearchText (searchText: string) : void;
			setSearchView (searchView: Titanium.UI.SearchBar) : void;
			setSectionIndexTitles (sectionIndexTitles: Array<ListViewIndexEntry>) : void;
			setSections (sections: Array<Titanium.UI.ListSection>) : void;
			setSeparatorColor (separatorColor: string) : void;
			setSeparatorStyle (separatorStyle: number) : void;
			setShowVerticalScrollIndicator (showVerticalScrollIndicator: boolean) : void;
			setWillScrollOnStatusTap (willScrollOnStatusTap: boolean) : void;
		}
		export interface TabGroup extends Titanium.UI.View {
			activeTab : Titanium.UI.Tab;
			activeTabBackgroundColor : string;
			activeTabBackgroundDisabledColor : string;
			activeTabBackgroundDisabledImage : string;
			activeTabBackgroundFocusedColor : string;
			activeTabBackgroundFocusedImage : string;
			activeTabBackgroundImage : string;
			activeTabBackgroundSelectedColor : string;
			activeTabBackgroundSelectedImage : string;
			activeTabIconTint : string;
			activity : Titanium.Android.Activity;
			allowUserCustomization : boolean;
			barColor : string;
			editButtonTitle : string;
			exitOnClose : boolean;
			navBarHidden : boolean;
			shadowImage : string;
			tabDividerColor : string;
			tabDividerWidth : any;
			tabHeight : any;
			tabs : Array<Titanium.UI.Tab>;
			tabsAtBottom : boolean;
			tabsBackgroundColor : string;
			tabsBackgroundDisabledColor : string;
			tabsBackgroundDisabledImage : string;
			tabsBackgroundFocusedColor : string;
			tabsBackgroundFocusedImage : string;
			tabsBackgroundImage : string;
			tabsBackgroundSelectedColor : string;
			tabsBackgroundSelectedImage : string;
			tabsTintColor : any;
			windowSoftInputMode : number;
			addTab (tab: Titanium.UI.Tab) : void;
			close () : void;
			getActiveTab () : Titanium.UI.Tab;
			getActiveTabBackgroundColor () : string;
			getActiveTabBackgroundDisabledColor () : string;
			getActiveTabBackgroundDisabledImage () : string;
			getActiveTabBackgroundFocusedColor () : string;
			getActiveTabBackgroundFocusedImage () : string;
			getActiveTabBackgroundImage () : string;
			getActiveTabBackgroundSelectedColor () : string;
			getActiveTabBackgroundSelectedImage () : string;
			getActiveTabIconTint () : string;
			getActivity () : Titanium.Android.Activity;
			getAllowUserCustomization () : boolean;
			getBarColor () : string;
			getEditButtonTitle () : string;
			getExitOnClose () : boolean;
			getNavBarHidden () : boolean;
			getShadowImage () : string;
			getTabDividerColor () : string;
			getTabDividerWidth () : any;
			getTabHeight () : any;
			getTabs () : Array<Titanium.UI.Tab>;
			getTabsAtBottom () : boolean;
			getTabsBackgroundColor () : string;
			getTabsBackgroundDisabledColor () : string;
			getTabsBackgroundDisabledImage () : string;
			getTabsBackgroundFocusedColor () : string;
			getTabsBackgroundFocusedImage () : string;
			getTabsBackgroundImage () : string;
			getTabsBackgroundSelectedColor () : string;
			getTabsBackgroundSelectedImage () : string;
			getTabsTintColor () : string;
			getWindowSoftInputMode () : number;
			open () : void;
			removeTab (tab: Titanium.UI.Tab) : void;
			setActiveTab (indexOrObject: number) : void;
			setActiveTab (indexOrObject: Titanium.UI.Tab) : void;
			setActiveTabBackgroundColor (activeTabBackgroundColor: string) : void;
			setActiveTabBackgroundDisabledColor (activeTabBackgroundDisabledColor: string) : void;
			setActiveTabBackgroundDisabledImage (activeTabBackgroundDisabledImage: string) : void;
			setActiveTabBackgroundFocusedColor (activeTabBackgroundFocusedColor: string) : void;
			setActiveTabBackgroundFocusedImage (activeTabBackgroundFocusedImage: string) : void;
			setActiveTabBackgroundImage (activeTabBackgroundImage: string) : void;
			setActiveTabBackgroundSelectedColor (activeTabBackgroundSelectedColor: string) : void;
			setActiveTabBackgroundSelectedImage (activeTabBackgroundSelectedImage: string) : void;
			setActiveTabIconTint (activeTabIconTint: string) : void;
			setAllowUserCustomization (allowUserCustomization: boolean) : void;
			setBarColor (barColor: string) : void;
			setEditButtonTitle (editButtonTitle: string) : void;
			setNavBarHidden (navBarHidden: boolean) : void;
			setShadowImage (shadowImage: string) : void;
			setTabDividerColor (tabDividerColor: string) : void;
			setTabDividerWidth (tabDividerWidth: number) : void;
			setTabDividerWidth (tabDividerWidth: string) : void;
			setTabHeight (tabHeight: number) : void;
			setTabHeight (tabHeight: string) : void;
			setTabs (tabs: Array<Titanium.UI.Tab>) : void;
			setTabsAtBottom (tabsAtBottom: boolean) : void;
			setTabsBackgroundColor (tabsBackgroundColor: string) : void;
			setTabsBackgroundDisabledColor (tabsBackgroundDisabledColor: string) : void;
			setTabsBackgroundDisabledImage (tabsBackgroundDisabledImage: string) : void;
			setTabsBackgroundFocusedColor (tabsBackgroundFocusedColor: string) : void;
			setTabsBackgroundFocusedImage (tabsBackgroundFocusedImage: string) : void;
			setTabsBackgroundImage (tabsBackgroundImage: string) : void;
			setTabsBackgroundSelectedColor (tabsBackgroundSelectedColor: string) : void;
			setTabsBackgroundSelectedImage (tabsBackgroundSelectedImage: string) : void;
			setTabsTintColor (tabsTintColor: string) : void;
		}
		export interface TableView extends Titanium.UI.View {
			allowsSelection : boolean;
			allowsSelectionDuringEditing : boolean;
			data : any;
			editable : boolean;
			editing : boolean;
			filterAttribute : string;
			filterCaseInsensitive : boolean;
			footerTitle : string;
			footerView : Titanium.UI.View;
			headerPullView : Titanium.UI.View;
			headerTitle : string;
			headerView : Titanium.UI.View;
			hideSearchOnSelection : boolean;
			index : Array<TableViewIndexEntry>;
			maxRowHeight : number;
			minRowHeight : number;
			moveable : boolean;
			moving : boolean;
			overScrollMode : number;
			rowHeight : number;
			scrollIndicatorStyle : number;
			scrollable : boolean;
			scrollsToTop : boolean;
			search : any;
			searchAsChild : boolean;
			searchHidden : boolean;
			sectionCount : number;
			sections : Array<Titanium.UI.TableViewSection>;
			separatorColor : string;
			separatorStyle : number;
			showVerticalScrollIndicator : boolean;
			style : number;
			appendRow (row: Titanium.UI.TableViewRow, animation?: TableViewAnimationProperties) : void;
			appendRow (row: Dictionary<Titanium.UI.TableViewRow>, animation?: TableViewAnimationProperties) : void;
			appendRow (row: Array<Titanium.UI.TableViewRow>, animation?: TableViewAnimationProperties) : void;
			appendRow (row: Array<Dictionary<Titanium.UI.TableViewRow>>, animation?: TableViewAnimationProperties) : void;
			appendSection (section: Titanium.UI.TableViewSection, animation?: TableViewAnimationProperties) : void;
			appendSection (section: Dictionary<Titanium.UI.TableViewSection>, animation?: TableViewAnimationProperties) : void;
			appendSection (section: Array<Titanium.UI.TableViewSection>, animation?: TableViewAnimationProperties) : void;
			appendSection (section: Array<Dictionary<Titanium.UI.TableViewSection>>, animation?: TableViewAnimationProperties) : void;
			deleteRow (row: number, animation?: TableViewAnimationProperties) : void;
			deleteRow (row: Titanium.UI.TableViewRow, animation?: TableViewAnimationProperties) : void;
			deleteSection (section: number, animation?: TableViewAnimationProperties) : void;
			deselectRow (row: number) : void;
			getAllowsSelection () : boolean;
			getAllowsSelectionDuringEditing () : boolean;
			getData () : any;
			getEditable () : boolean;
			getEditing () : boolean;
			getFilterAttribute () : string;
			getFilterCaseInsensitive () : boolean;
			getFooterTitle () : string;
			getFooterView () : Titanium.UI.View;
			getHeaderPullView () : Titanium.UI.View;
			getHeaderTitle () : string;
			getHeaderView () : Titanium.UI.View;
			getHideSearchOnSelection () : boolean;
			getIndex () : Array<TableViewIndexEntry>;
			getMaxRowHeight () : number;
			getMinRowHeight () : number;
			getMoveable () : boolean;
			getMoving () : boolean;
			getOverScrollMode () : number;
			getRowHeight () : number;
			getScrollIndicatorStyle () : number;
			getScrollable () : boolean;
			getScrollsToTop () : boolean;
			getSearch () : any;
			getSearchAsChild () : boolean;
			getSearchHidden () : boolean;
			getSectionCount () : number;
			getSections () : Array<Titanium.UI.TableViewSection>;
			getSeparatorColor () : string;
			getSeparatorStyle () : number;
			getShowVerticalScrollIndicator () : boolean;
			getStyle () : number;
			insertRowAfter (index: number, row: Titanium.UI.TableViewRow, animation?: TableViewAnimationProperties) : void;
			insertRowAfter (index: number, row: Dictionary<Titanium.UI.TableViewRow>, animation?: TableViewAnimationProperties) : void;
			insertRowBefore (index: number, row: Titanium.UI.TableViewRow, animation?: TableViewAnimationProperties) : void;
			insertRowBefore (index: number, row: Dictionary<Titanium.UI.TableViewRow>, animation?: TableViewAnimationProperties) : void;
			insertSectionAfter (index: number, section: Titanium.UI.TableViewSection, animation?: TableViewAnimationProperties) : void;
			insertSectionAfter (index: number, section: Dictionary<Titanium.UI.TableViewSection>, animation?: TableViewAnimationProperties) : void;
			insertSectionBefore (index: number, section: Titanium.UI.TableViewSection, animation?: TableViewAnimationProperties) : void;
			insertSectionBefore (index: number, section: Dictionary<Titanium.UI.TableViewSection>, animation?: TableViewAnimationProperties) : void;
			scrollToIndex (index: number, animation?: TableViewAnimationProperties) : void;
			scrollToTop (top: number, animation?: TableViewAnimationProperties) : void;
			selectRow (row: number) : void;
			setAllowsSelection (allowsSelection: boolean) : void;
			setAllowsSelectionDuringEditing (allowsSelectionDuringEditing: boolean) : void;
			setContentInsets (edgeInsets: TableViewEdgeInsets, animated?: TableViewContentInsetOption) : void;
			setData (data: Array<Titanium.UI.TableViewRow>, animation: TableViewAnimationProperties) : void;
			setData (data: Array<Dictionary<Titanium.UI.TableViewRow>>, animation: TableViewAnimationProperties) : void;
			setData (data: Array<Titanium.UI.TableViewSection>, animation: TableViewAnimationProperties) : void;
			setEditable (editable: boolean) : void;
			setEditing (editing: boolean) : void;
			setFilterAttribute (filterAttribute: string) : void;
			setFilterCaseInsensitive (filterCaseInsensitive: boolean) : void;
			setFooterTitle (footerTitle: string) : void;
			setFooterView (footerView: Titanium.UI.View) : void;
			setHeaderPullView (view: Titanium.UI.View) : void;
			setHeaderTitle (headerTitle: string) : void;
			setHeaderView (headerView: Titanium.UI.View) : void;
			setHideSearchOnSelection (hideSearchOnSelection: boolean) : void;
			setIndex (index: Array<TableViewIndexEntry>) : void;
			setMaxRowHeight (maxRowHeight: number) : void;
			setMinRowHeight (minRowHeight: number) : void;
			setMoveable (moveable: boolean) : void;
			setMoving (moving: boolean) : void;
			setOverScrollMode (overScrollMode: number) : void;
			setRowHeight (rowHeight: number) : void;
			setScrollIndicatorStyle (scrollIndicatorStyle: number) : void;
			setScrollable (scrollable: boolean) : void;
			setScrollsToTop (scrollsToTop: boolean) : void;
			setSearch (search: Titanium.UI.SearchBar) : void;
			setSearch (search: Titanium.UI.Android.SearchView) : void;
			setSearchAsChild (searchAsChild: boolean) : void;
			setSearchHidden (searchHidden: boolean) : void;
			setSections (sections: Array<Titanium.UI.TableViewSection>) : void;
			setSeparatorColor (separatorColor: string) : void;
			setSeparatorStyle (separatorStyle: number) : void;
			setShowVerticalScrollIndicator (showVerticalScrollIndicator: boolean) : void;
			setStyle (style: number) : void;
			updateRow (index: number, row: Titanium.UI.TableViewRow, animation: TableViewAnimationProperties) : void;
			updateSection (index: number, section: Titanium.UI.TableViewSection, animation: TableViewAnimationProperties) : void;
		}
		export interface Button extends Titanium.UI.View {
			color : string;
			font : Font;
			image : any;
			selectedColor : string;
			style : number;
			systemButton : number;
			textAlign : any;
			title : string;
			titleid : string;
			verticalAlign : any;
			getColor () : string;
			getFont () : Font;
			getImage () : any;
			getSelectedColor () : string;
			getStyle () : number;
			getSystemButton () : number;
			getTextAlign () : any;
			getTitle () : string;
			getTitleid () : string;
			getVerticalAlign () : any;
			setColor (color: string) : void;
			setFont (font: Font) : void;
			setImage (image: string) : void;
			setImage (image: Titanium.Blob) : void;
			setSelectedColor (selectedColor: string) : void;
			setStyle (style: number) : void;
			setSystemButton (systemButton: number) : void;
			setTextAlign (textAlign: string) : void;
			setTextAlign (textAlign: number) : void;
			setTitle (title: string) : void;
			setTitleid (titleid: string) : void;
			setVerticalAlign (verticalAlign: number) : void;
			setVerticalAlign (verticalAlign: string) : void;
		}
		export interface OptionDialog extends Titanium.Proxy {
			androidView : Titanium.UI.View;
			buttonNames : Array<String>;
			cancel : number;
			destructive : number;
			options : Array<String>;
			persistent : boolean;
			selectedIndex : number;
			title : string;
			titleid : string;
			getAndroidView () : Titanium.UI.View;
			getButtonNames () : Array<String>;
			getCancel () : number;
			getDestructive () : number;
			getOptions () : Array<String>;
			getPersistent () : boolean;
			getSelectedIndex () : number;
			getTitle () : string;
			getTitleid () : string;
			hide (params?: hideParams) : void;
			setAndroidView (androidView: Titanium.UI.View) : void;
			setCancel (cancel: number) : void;
			setPersistent (persistent: boolean) : void;
			setTitle (title: string) : void;
			setTitleid (titleid: string) : void;
			show (params?: showParams) : void;
		}
		export interface ButtonBar extends Titanium.UI.View {
			index : number;
			labels : any;
			style : number;
			getIndex () : number;
			getLabels () : any;
			getStyle () : number;
			setIndex (index: number) : void;
			setLabels (labels: Array<String>) : void;
			setLabels (labels: Array<BarItemType>) : void;
			setStyle (style: number) : void;
		}
		export interface EmailDialog extends Titanium.Proxy {
			CANCELLED : number;
			FAILED : number;
			SAVED : number;
			SENT : number;
			barColor : string;
			bccRecipients : Array<String>;
			ccRecipients : Array<String>;
			html : boolean;
			messageBody : string;
			subject : string;
			toRecipients : Array<String>;
			addAttachment (attachment: Titanium.Blob) : void;
			addAttachment (attachment: Titanium.Filesystem.File) : void;
			getBarColor () : string;
			getBccRecipients () : Array<String>;
			getCcRecipients () : Array<String>;
			getHtml () : boolean;
			getMessageBody () : string;
			getSubject () : string;
			getToRecipients () : Array<String>;
			isSupported () : boolean;
			open (properties: any) : void;
			setBarColor (barColor: string) : void;
			setBccRecipients (bccRecipients: Array<String>) : void;
			setCcRecipients (ccRecipients: Array<String>) : void;
			setHtml (html: boolean) : void;
			setMessageBody (messageBody: string) : void;
			setSubject (subject: string) : void;
			setToRecipients (toRecipients: Array<String>) : void;
		}
		export interface CoverFlowView extends Titanium.UI.View {
			images : any;
			selected : number;
			getImages () : any;
			getSelected () : number;
			setImage (index: number, image: string) : void;
			setImage (image: Titanium.Blob) : void;
			setImage (image: Titanium.Filesystem.File) : void;
			setImage (index: number, image: CoverFlowImageType) : void;
			setImages (images: Array<String>) : void;
			setImages (images: Array<Titanium.Blob>) : void;
			setImages (images: Array<Titanium.Filesystem.File>) : void;
			setImages (images: Array<CoverFlowImageType>) : void;
			setSelected (selected: number) : void;
		}
		export interface ImageView extends Titanium.UI.View {
			animating : boolean;
			autorotate : boolean;
			decodeRetries : number;
			defaultImage : string;
			duration : number;
			enableZoomControls : boolean;
			hires : boolean;
			image : any;
			images : any;
			paused : boolean;
			preventDefaultImage : boolean;
			repeatCount : number;
			reverse : boolean;
			url : string;
			getAnimating () : boolean;
			getAutorotate () : boolean;
			getDecodeRetries () : number;
			getDefaultImage () : string;
			getDuration () : number;
			getEnableZoomControls () : boolean;
			getHires () : boolean;
			getImage () : any;
			getImages () : any;
			getPaused () : boolean;
			getPreventDefaultImage () : boolean;
			getRepeatCount () : number;
			getReverse () : boolean;
			getUrl () : string;
			pause () : void;
			resume () : void;
			setDecodeRetries (decodeRetries: number) : void;
			setDefaultImage (defaultImage: string) : void;
			setDuration (duration: number) : void;
			setEnableZoomControls (enableZoomControls: boolean) : void;
			setHires (hires: boolean) : void;
			setImage (image: string) : void;
			setImage (image: Titanium.Blob) : void;
			setImage (image: Titanium.Filesystem.File) : void;
			setImages (images: Array<String>) : void;
			setImages (images: Array<Titanium.Blob>) : void;
			setImages (images: Array<Titanium.Filesystem.File>) : void;
			setPreventDefaultImage (preventDefaultImage: boolean) : void;
			setRepeatCount (repeatCount: number) : void;
			setReverse (reverse: boolean) : void;
			setUrl (url: string) : void;
			start () : void;
			stop () : void;
			toBlob () : void;
		}
		export interface MaskedImage extends Titanium.UI.View {
			image : string;
			mask : string;
			mode : number;
			tint : string;
			getImage () : string;
			getMask () : string;
			getMode () : number;
			getTint () : string;
			setImage (image: string) : void;
			setMask (mask: string) : void;
			setMode (mode: number) : void;
			setTint (tint: string) : void;
		}
		export interface ProgressBar extends Titanium.UI.View {
			color : string;
			font : Font;
			max : number;
			message : string;
			min : number;
			style : number;
			value : number;
			getColor () : string;
			getFont () : Font;
			getMax () : number;
			getMessage () : string;
			getMin () : number;
			getStyle () : number;
			getValue () : number;
			setColor (color: string) : void;
			setFont (font: Font) : void;
			setMax (max: number) : void;
			setMessage (message: string) : void;
			setMin (min: number) : void;
			setStyle (style: number) : void;
			setValue (value: number) : void;
		}
		export module MobileWeb {
			export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function applyProperties (props: Dictionary<Object>) : void;
			export function createNavigationGroup (parameters?: Dictionary<Titanium.UI.MobileWeb.NavigationGroup>) : Titanium.UI.MobileWeb.NavigationGroup;
			export function fireEvent (name: string, event: Dictionary<Object>) : void;
			export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
			export enum TableViewSeparatorStyle {
				NONE,
				SINGLE_LINE
			}
			export interface NavigationGroup extends Titanium.UI.View {
				navBarAtTop : boolean;
				window : Titanium.UI.Window;
				close (window: Titanium.UI.Window, options: Dictionary<Object>) : void;
				getNavBarAtTop () : boolean;
				getWindow () : Titanium.UI.Window;
				open (window: Titanium.UI.Window, options: Dictionary<Object>) : void;
				setNavBarAtTop (navBarAtTop: boolean) : void;
			}
		}
		export interface Label extends Titanium.UI.View {
			autoLink : number;
			backgroundPaddingBottom : number;
			backgroundPaddingLeft : number;
			backgroundPaddingRight : number;
			backgroundPaddingTop : number;
			color : string;
			ellipsize : boolean;
			font : Font;
			highlightedColor : string;
			html : string;
			minimumFontSize : number;
			shadowColor : string;
			shadowOffset : any;
			text : string;
			textAlign : any;
			textid : string;
			verticalAlign : any;
			wordWrap : boolean;
			getAutoLink () : number;
			getBackgroundPaddingBottom () : number;
			getBackgroundPaddingLeft () : number;
			getBackgroundPaddingRight () : number;
			getBackgroundPaddingTop () : number;
			getColor () : string;
			getEllipsize () : boolean;
			getFont () : Font;
			getHighlightedColor () : string;
			getHtml () : string;
			getMinimumFontSize () : number;
			getShadowColor () : string;
			getShadowOffset () : any;
			getText () : string;
			getTextAlign () : any;
			getTextid () : string;
			getVerticalAlign () : any;
			getWordWrap () : boolean;
			setAutoLink (autoLink: number) : void;
			setBackgroundPaddingBottom (backgroundPaddingBottom: number) : void;
			setBackgroundPaddingLeft (backgroundPaddingLeft: number) : void;
			setBackgroundPaddingRight (backgroundPaddingRight: number) : void;
			setBackgroundPaddingTop (backgroundPaddingTop: number) : void;
			setColor (color: string) : void;
			setEllipsize (ellipsize: boolean) : void;
			setFont (font: Font) : void;
			setHighlightedColor (highlightedColor: string) : void;
			setHtml (html: string) : void;
			setMinimumFontSize (minimumFontSize: number) : void;
			setShadowColor (shadowColor: string) : void;
			setShadowOffset (shadowOffset: any) : void;
			setText (text: string) : void;
			setTextAlign (textAlign: string) : void;
			setTextAlign (textAlign: number) : void;
			setTextid (textid: string) : void;
			setVerticalAlign (verticalAlign: number) : void;
			setVerticalAlign (verticalAlign: string) : void;
			setWordWrap (wordWrap: boolean) : void;
		}
		export interface SearchBar extends Titanium.UI.View {
			autocapitalization : number;
			autocorrect : boolean;
			barColor : string;
			hintText : string;
			hinttextid : string;
			keyboardType : number;
			prompt : string;
			promptid : string;
			showBookmark : boolean;
			showCancel : boolean;
			value : string;
			blur () : void;
			focus () : void;
			getAutocapitalization () : number;
			getAutocorrect () : boolean;
			getBarColor () : string;
			getHintText () : string;
			getHinttextid () : string;
			getKeyboardType () : number;
			getPrompt () : string;
			getPromptid () : string;
			getShowBookmark () : boolean;
			getShowCancel () : boolean;
			getValue () : string;
			setAutocapitalization (autocapitalization: number) : void;
			setAutocorrect (autocorrect: boolean) : void;
			setBarColor (barColor: string) : void;
			setHintText (hintText: string) : void;
			setHinttextid (hinttextid: string) : void;
			setKeyboardType (keyboardType: number) : void;
			setPrompt (prompt: string) : void;
			setPromptid (promptid: string) : void;
			setShowBookmark (showBookmark: boolean) : void;
			setShowCancel (showCancel: boolean, animated?: Dictionary<Object>) : void;
			setValue (value: string) : void;
		}
		export interface SMSDialog extends Titanium.Proxy {
			CANCELLED : number;
			FAILED : number;
			SENT : number;
			messageBody : string;
			toRecipients : Array<String>;
			getMessageBody () : string;
			getToRecipients () : Array<String>;
			isSupported () : boolean;
			open () : void;
			setMessageBody (messageBody: string) : void;
			setToRecipients (toRecipients: Array<String>) : void;
		}
		export interface TableViewSection extends Titanium.Proxy {
			footerTitle : string;
			footerView : Titanium.UI.View;
			headerTitle : string;
			headerView : Titanium.UI.View;
			rowCount : number;
			rows : Array<Titanium.UI.TableViewRow>;
			add (row: Titanium.UI.TableViewRow) : void;
			getFooterTitle () : string;
			getFooterView () : Titanium.UI.View;
			getHeaderTitle () : string;
			getHeaderView () : Titanium.UI.View;
			getRowCount () : number;
			getRows () : Array<Titanium.UI.TableViewRow>;
			remove (row: Titanium.UI.TableViewRow) : void;
			rowAtIndex (index: number) : Titanium.UI.TableViewRow;
			setFooterTitle (footerTitle: string) : void;
			setFooterView (footerView: Titanium.UI.View) : void;
			setHeaderTitle (headerTitle: string) : void;
			setHeaderView (headerView: Titanium.UI.View) : void;
		}
		export interface ActivityIndicator extends Titanium.Proxy {
			bottom : any;
			color : string;
			font : Font;
			height : string;
			indicatorColor : string;
			indicatorDiameter : string;
			left : any;
			message : string;
			messageid : string;
			right : any;
			style : number;
			top : any;
			width : string;
			add () : void;
			getBottom () : any;
			getColor () : string;
			getFont () : Font;
			getHeight () : string;
			getIndicatorColor () : string;
			getIndicatorDiameter () : string;
			getLeft () : any;
			getMessage () : string;
			getMessageid () : string;
			getRight () : any;
			getStyle () : number;
			getTop () : any;
			getWidth () : string;
			hide () : void;
			remove () : void;
			setBottom (bottom: number) : void;
			setBottom (bottom: string) : void;
			setColor (color: string) : void;
			setFont (font: Font) : void;
			setHeight (height: string) : void;
			setIndicatorColor (indicatorColor: string) : void;
			setIndicatorDiameter (indicatorDiameter: string) : void;
			setLeft (left: number) : void;
			setLeft (left: string) : void;
			setMessage (message: string) : void;
			setMessageid (messageid: string) : void;
			setRight (right: number) : void;
			setRight (right: string) : void;
			setStyle (style: number) : void;
			setTop (top: number) : void;
			setTop (top: string) : void;
			setWidth (width: string) : void;
			show () : void;
		}
		export interface Animation extends Titanium.Proxy {
			anchorPoint : Point;
			autoreverse : boolean;
			backgroundColor : string;
			bottom : number;
			center : any;
			color : string;
			curve : number;
			delay : number;
			duration : number;
			height : number;
			left : number;
			opacity : number;
			opaque : boolean;
			repeat : number;
			right : number;
			top : number;
			transform : any;
			transition : number;
			view : Titanium.UI.View;
			visible : boolean;
			width : number;
			zIndex : number;
			getAnchorPoint () : Point;
			getAutoreverse () : boolean;
			getBackgroundColor () : string;
			getBottom () : number;
			getCenter () : any;
			getColor () : string;
			getCurve () : number;
			getDelay () : number;
			getDuration () : number;
			getHeight () : number;
			getLeft () : number;
			getOpacity () : number;
			getOpaque () : boolean;
			getRepeat () : number;
			getRight () : number;
			getTop () : number;
			getTransform () : any;
			getTransition () : number;
			getView () : Titanium.UI.View;
			getVisible () : boolean;
			getWidth () : number;
			getZIndex () : number;
			setAnchorPoint (anchorPoint: Point) : void;
			setAutoreverse (autoreverse: boolean) : void;
			setBackgroundColor (backgroundColor: string) : void;
			setBottom (bottom: number) : void;
			setCenter (center: any) : void;
			setColor (color: string) : void;
			setCurve (curve: number) : void;
			setDelay (delay: number) : void;
			setDuration (duration: number) : void;
			setHeight (height: number) : void;
			setLeft (left: number) : void;
			setOpacity (opacity: number) : void;
			setOpaque (opaque: boolean) : void;
			setRepeat (repeat: number) : void;
			setRight (right: number) : void;
			setTop (top: number) : void;
			setTransform (transform: Titanium.UI._2DMatrix) : void;
			setTransform (transform: Titanium.UI._3DMatrix) : void;
			setTransition (transition: number) : void;
			setView (view: Titanium.UI.View) : void;
			setVisible (visible: boolean) : void;
			setWidth (width: number) : void;
			setZIndex (zIndex: number) : void;
		}
		export interface Toolbar extends Titanium.UI.View {
			barColor : string;
			borderBottom : boolean;
			borderTop : boolean;
			items : Array<Titanium.UI.View>;
			translucent : boolean;
			getBarColor () : string;
			getBorderBottom () : boolean;
			getBorderTop () : boolean;
			getItems () : Array<Titanium.UI.View>;
			getTranslucent () : boolean;
			setBarColor (barColor: string) : void;
			setBorderBottom (borderBottom: boolean) : void;
			setBorderTop (borderTop: boolean) : void;
			setItems (items: Array<Titanium.UI.View>) : void;
			setTranslucent (translucent: boolean) : void;
		}
		export interface Notification extends Titanium.UI.View {
			duration : number;
			horizontalMargin : number;
			message : string;
			verticalMargin : number;
			xOffset : number;
			yOffset : number;
			getDuration () : number;
			getHorizontalMargin () : number;
			getMessage () : string;
			getVerticalMargin () : number;
			getXOffset () : number;
			getYOffset () : number;
			setDuration (duration: number) : void;
			setHorizontalMargin (horizontalMargin: number) : void;
			setMessage (message: string) : void;
			setVerticalMargin (verticalMargin: number) : void;
			setXOffset (xOffset: number) : void;
			setYOffset (yOffset: number) : void;
		}
		export interface PickerColumn extends Titanium.UI.View {
			rowCount : number;
			rows : Array<Titanium.UI.PickerRow>;
			selectedRow : Titanium.UI.PickerRow;
			addRow (row: Titanium.UI.PickerRow) : void;
			getRowCount () : number;
			getRows () : Array<Titanium.UI.PickerRow>;
			getSelectedRow () : Titanium.UI.PickerRow;
			removeRow (row: Titanium.UI.PickerRow) : void;
			setSelectedRow (selectedRow: Titanium.UI.PickerRow) : void;
		}
		export interface Picker extends Titanium.Proxy {
			calendarViewShown : boolean;
			columns : Array<Titanium.UI.PickerColumn>;
			countDownDuration : number;
			format24 : boolean;
			locale : string;
			maxDate : Date;
			minDate : Date;
			minuteInterval : number;
			selectionIndicator : boolean;
			type : number;
			useSpinner : boolean;
			value : Date;
			visibleItems : number;
			add (data: Array<Titanium.UI.PickerRow>) : void;
			add (data: Titanium.UI.PickerRow) : void;
			add (data: Array<Titanium.UI.PickerColumn>) : void;
			add (data: Titanium.UI.PickerColumn) : void;
			getCalendarViewShown () : boolean;
			getColumns () : Array<Titanium.UI.PickerColumn>;
			getCountDownDuration () : number;
			getFormat24 () : boolean;
			getLocale () : string;
			getMaxDate () : Date;
			getMinDate () : Date;
			getMinuteInterval () : number;
			getSelectedRow (index: number) : Titanium.UI.PickerRow;
			getSelectionIndicator () : boolean;
			getType () : number;
			getUseSpinner () : boolean;
			getValue () : Date;
			getVisibleItems () : number;
			reloadColumn (column: Titanium.UI.PickerColumn) : void;
			setCalendarViewShown (calendarViewShown: boolean) : void;
			setColumns (columns: Array<Titanium.UI.PickerColumn>) : void;
			setCountDownDuration (countDownDuration: number) : void;
			setFormat24 (format24: boolean) : void;
			setLocale (locale: string) : void;
			setMaxDate (maxDate: Date) : void;
			setMinDate (minDate: Date) : void;
			setMinuteInterval (minuteInterval: number) : void;
			setSelectedRow (column: number, row: number, animated?: boolean) : void;
			setSelectionIndicator (selectionIndicator: boolean) : void;
			setType (type: number) : void;
			setUseSpinner (useSpinner: boolean) : void;
			setValue (date: any, suppressEvent: boolean) : Titanium.UI.PickerRow;
			setVisibleItems (visibleItems: number) : void;
			showDatePickerDialog (dictObj: any) : void;
			showTimePickerDialog (dictObj: any) : void;
		}
	}
	export enum Module {

	}
	export interface API  {
		debug (message: Array<String>) : void;
		debug (message: string) : void;
		error (message: Array<String>) : void;
		error (message: string) : void;
		info (message: Array<String>) : void;
		info (message: string) : void;
		log (level: string, message: Array<String>) : void;
		log (level: string, message: string) : void;
		timestamp (message: Array<String>) : void;
		timestamp (message: string) : void;
		trace (message: Array<String>) : void;
		trace (message: string) : void;
		warn (message: Array<String>) : void;
		warn (message: string) : void;
	}
	export module Geolocation {
		export var ACCURACY_BEST : number;
		export var ACCURACY_BEST_FOR_NAVIGATION : number;
		export var ACCURACY_HIGH : number;
		export var ACCURACY_HUNDRED_METERS : number;
		export var ACCURACY_KILOMETER : number;
		export var ACCURACY_LOW : number;
		export var ACCURACY_NEAREST_TEN_METERS : number;
		export var ACCURACY_THREE_KILOMETERS : number;
		export var ACTIVITYTYPE_AUTOMOTIVE_NAVIGATION : string;
		export var ACTIVITYTYPE_FITNESS : string;
		export var ACTIVITYTYPE_OTHER : string;
		export var ACTIVITYTYPE_OTHER_NAVIGATION : string;
		export var AUTHORIZATION_AUTHORIZED : number;
		export var AUTHORIZATION_DENIED : number;
		export var AUTHORIZATION_RESTRICTED : number;
		export var AUTHORIZATION_UNKNOWN : number;
		export var ERROR_DENIED : number;
		export var ERROR_HEADING_FAILURE : number;
		export var ERROR_LOCATION_UNKNOWN : number;
		export var ERROR_NETWORK : number;
		export var ERROR_REGION_MONITORING_DELAYED : number;
		export var ERROR_REGION_MONITORING_DENIED : number;
		export var ERROR_REGION_MONITORING_FAILURE : number;
		export var ERROR_TIMEOUT : number;
		export var PROVIDER_GPS : string;
		export var PROVIDER_NETWORK : string;
		export var PROVIDER_PASSIVE : string;
		export var accuracy : number;
		export var activityType : number;
		export var bubbleParent : boolean;
		export var distanceFilter : number;
		export var frequency : number;
		export var hasCompass : boolean;
		export var headingFilter : number;
		export var lastGeolocation : string;
		export var locationServicesAuthorization : number;
		export var locationServicesEnabled : boolean;
		export var pauseLocationUpdateAutomatically : boolean;
		export var preferredProvider : string;
		export var purpose : string;
		export var showCalibration : boolean;
		export var trackSignificantLocationChange : boolean;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function forwardGeocoder (address: string, callback: (...args : any[]) => any) : void;
		export function getAccuracy () : number;
		export function getActivityType () : number;
		export function getBubbleParent () : boolean;
		export function getCurrentHeading (callback: (...args : any[]) => any) : void;
		export function getCurrentPosition (callback: (...args : any[]) => any) : void;
		export function getDistanceFilter () : number;
		export function getFrequency () : number;
		export function getHasCompass () : boolean;
		export function getHeadingFilter () : number;
		export function getLastGeolocation () : string;
		export function getLocationServicesAuthorization () : number;
		export function getLocationServicesEnabled () : boolean;
		export function getPauseLocationUpdateAutomatically () : boolean;
		export function getPreferredProvider () : string;
		export function getPurpose () : string;
		export function getShowCalibration () : boolean;
		export function getTrackSignificantLocationChange () : boolean;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function reverseGeocoder (latitude: number, longitude: number, callback: (...args : any[]) => any) : void;
		export function setAccuracy (accuracy: number) : void;
		export function setActivityType (activityType: number) : void;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export function setDistanceFilter (distanceFilter: number) : void;
		export function setFrequency (frequency: number) : void;
		export function setHeadingFilter (headingFilter: number) : void;
		export function setLocationServicesAuthorization (locationServicesAuthorization: number) : void;
		export function setPauseLocationUpdateAutomatically (pauseLocationUpdateAutomatically: boolean) : void;
		export function setPreferredProvider (preferredProvider: string) : void;
		export function setPurpose (purpose: string) : void;
		export function setShowCalibration (showCalibration: boolean) : void;
		export function setTrackSignificantLocationChange (trackSignificantLocationChange: boolean) : void;
		export module Android {
			export var bubbleParent : boolean;
			export var manualMode : boolean;
			export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function addLocationProvider (provider: Titanium.Geolocation.Android.LocationProvider) : void;
			export function addLocationRule (rule: Titanium.Geolocation.Android.LocationRule) : void;
			export function applyProperties (props: Dictionary<Object>) : void;
			export function createLocationProvider (parameters?: Dictionary<Titanium.Geolocation.Android.LocationProvider>) : Titanium.Geolocation.Android.LocationProvider;
			export function createLocationRule (parameters?: Dictionary<Titanium.Geolocation.Android.LocationRule>) : Titanium.Geolocation.Android.LocationRule;
			export function fireEvent (name: string, event: Dictionary<Object>) : void;
			export function getBubbleParent () : boolean;
			export function getManualMode () : boolean;
			export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function removeLocationProvider (provider: Titanium.Geolocation.Android.LocationProvider) : void;
			export function removeLocationRule (rule: Titanium.Geolocation.Android.LocationRule) : void;
			export function setBubbleParent (bubbleParent: boolean) : void;
			export function setManualMode (manualMode: boolean) : void;
			export interface LocationProvider extends Titanium.Proxy {
				minUpdateDistance : number;
				minUpdateTime : number;
				name : string;
				getMinUpdateDistance () : number;
				getMinUpdateTime () : number;
				getName () : string;
				setMinUpdateDistance (minUpdateDistance: number) : void;
				setMinUpdateTime (minUpdateTime: number) : void;
				setName (name: string) : void;
			}
			export interface LocationRule extends Titanium.Proxy {
				accuracy : number;
				maxAge : number;
				minAge : number;
				name : string;
				getAccuracy () : number;
				getMaxAge () : number;
				getMinAge () : number;
				getName () : string;
				setAccuracy (accuracy: number) : void;
				setMaxAge (maxAge: number) : void;
				setMinAge (minAge: number) : void;
				setName (name: string) : void;
			}
		}
		export interface MobileWeb  {
			forwardGeocoderTimeout : number;
			locationTimeout : number;
			maximumHeadingAge : number;
			maximumLocationAge : number;
			reverseGeocoderTimeout : number;
			getForwardGeocoderTimeout () : number;
			getLocationTimeout () : number;
			getMaximumHeadingAge () : number;
			getMaximumLocationAge () : number;
			getReverseGeocoderTimeout () : number;
			setForwardGeocoderTimeout (forwardGeocoderTimeout: number) : void;
			setLocationTimeout (locationTimeout: number) : void;
			setMaximumHeadingAge (maximumHeadingAge: number) : void;
			setMaximumLocationAge (maximumLocationAge: number) : void;
			setReverseGeocoderTimeout (reverseGeocoderTimeout: number) : void;
		}
	}
	export interface Proxy  {
		bubbleParent : boolean;
		addEventListener (name: string, callback: (...args : any[]) => any) : void;
		applyProperties (props: Dictionary<Object>) : void;
		fireEvent (name: string, event: Dictionary<Object>) : void;
		getBubbleParent () : boolean;
		removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		setBubbleParent (bubbleParent: boolean) : void;
	}
	export module Cloud {
		export var accessToken : string;
		export var bubbleParent : boolean;
		export var debug : boolean;
		export var expiresIn : number;
		export var ondatastream : (...args : any[]) => any;
		export var onsendstream : (...args : any[]) => any;
		export var sessionId : string;
		export var useSecure : boolean;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function getAccessToken () : string;
		export function getBubbleParent () : boolean;
		export function getDebug () : boolean;
		export function getExpiresIn () : number;
		export function getOndatastream () : (...args : any[]) => any;
		export function getOnsendstream () : (...args : any[]) => any;
		export function getSessionId () : string;
		export function getUseSecure () : boolean;
		export function hasStoredSession () : boolean;
		export function retrieveStoredSession () : string;
		export function setAccessToken (accessToken: string) : void;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export function setDebug (debug: boolean) : void;
		export function setOndatastream (ondatastream: (...args : any[]) => any) : void;
		export function setOnsendstream (onsendstream: (...args : any[]) => any) : void;
		export function setSessionId (sessionId: string) : void;
		export function setUseSecure (useSecure: boolean) : void;
		export interface Objects  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			query (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			show (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			update (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Files  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			query (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			show (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			update (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface SocialIntegrations  {
			externalAccountLink (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			externalAccountLogin (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			externalAccountUnlink (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			searchFacebookFriends (callback: (...args : any[]) => any) : void;
		}
		export interface PushNotifications  {
			notify (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			notifyTokens (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			subscribe (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			subscribeToken (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			unsubscribe (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			unsubscribeToken (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Clients  {
			geolocate (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
		}
		export interface ACLs  {
			addUser (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			checkUser (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			removeUser (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			show (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			update (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
		}
		export interface Users  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			login (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			logout (callback: (...args : any[]) => any) : void;
			query (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			requestResetPassword (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			search (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			secureCreate (parameters?: Dictionary<CloudUsersSecureDialog>, callback?: (...args : any[]) => any) : void;
			secureLogin (parameters?: Dictionary<CloudUsersSecureDialog>, callback?: (...args : any[]) => any) : void;
			secureStatus () : boolean;
			show (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			showMe (callback: (...args : any[]) => any) : void;
			update (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Messages  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			removeThread (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			reply (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			show (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			showInbox (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			showSent (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			showThread (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			showThreads (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Events  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			query (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			queryOccurrences (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			search (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			searchOccurrences (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			show (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			showOccurrences (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			update (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Reviews  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			query (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			show (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			update (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Chats  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			getChatGroups (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			query (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface KeyValues  {
			append (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			get (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			increment (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			set (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Checkins  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			query (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			show (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Friends  {
			add (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			approve (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			requests (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			search (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Photos  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			query (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			search (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			show (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			update (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Statuses  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			query (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			search (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface PhotoCollections  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			search (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			show (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			showPhotos (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			showSubCollections (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			update (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Posts  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			query (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			show (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			update (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Emails  {
			send (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Places  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			query (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			search (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			show (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			update (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
	}
	export interface Blob extends Titanium.Proxy {
		file : Titanium.Filesystem.File;
		height : number;
		length : number;
		mimeType : string;
		nativePath : string;
		size : number;
		text : string;
		width : number;
		append (blob: Titanium.Blob) : void;
		getFile () : Titanium.Filesystem.File;
		getHeight () : number;
		getLength () : number;
		getMimeType () : string;
		getNativePath () : string;
		getSize () : number;
		getText () : string;
		getWidth () : number;
		imageAsCropped (options: Dictionary<ImageAsCroppedDict>) : Titanium.Blob;
		imageAsResized (width: number, height: number) : Titanium.Blob;
		imageAsThumbnail (size: number, borderSize?: number, cornerRadius?: number) : Titanium.Blob;
		imageWithAlpha () : Titanium.Blob;
		imageWithRoundedCorner (cornerSize: number, borderSize?: number) : Titanium.Blob;
		imageWithTransparentBorder (size: number) : Titanium.Blob;
		toString () : string;
	}
	export interface Codec  {
		BIG_ENDIAN : number;
		CHARSET_ASCII : string;
		CHARSET_ISO_LATIN_1 : string;
		CHARSET_UTF16 : string;
		CHARSET_UTF16BE : string;
		CHARSET_UTF16LE : string;
		CHARSET_UTF8 : string;
		LITTLE_ENDIAN : number;
		TYPE_BYTE : string;
		TYPE_DOUBLE : string;
		TYPE_FLOAT : string;
		TYPE_INT : string;
		TYPE_LONG : string;
		TYPE_SHORT : string;
		decodeNumber (options: DecodeNumberDict) : number;
		decodeString (options: DecodeStringDict) : string;
		encodeNumber (options: EncodeNumberDict) : number;
		encodeString (options: Dictionary<EncodeStringDict>) : number;
		getNativeByteOrder () : number;
	}
	export interface Locale  {
		currentCountry : string;
		currentLanguage : string;
		currentLocale : string;
		formatTelephoneNumber (number: string) : string;
		getCurrencyCode (locale: string) : string;
		getCurrencySymbol (currencyCode: string) : string;
		getCurrentCountry () : string;
		getCurrentLanguage () : string;
		getCurrentLocale () : string;
		getLocaleCurrencySymbol (locale: string) : string;
		getString (key: string, hint?: string) : string;
	}
	export module App {
		export var EVENT_ACCESSIBILITY_ANNOUNCEMENT : string;
		export var EVENT_ACCESSIBILITY_CHANGED : string;
		export var accessibilityEnabled : boolean;
		export var analytics : boolean;
		export var bubbleParent : boolean;
		export var copyright : string;
		export var deployType : string;
		export var description : string;
		export var disableNetworkActivityIndicator : boolean;
		export var guid : string;
		export var id : string;
		export var idleTimerDisabled : boolean;
		export var installId : string;
		export var keyboardVisible : boolean;
		export var name : string;
		export var proximityDetection : boolean;
		export var proximityState : boolean;
		export var publisher : string;
		export var sessionId : string;
		export var url : string;
		export var version : string;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function fireSystemEvent (eventName: string, param?: any) : void;
		export function getAccessibilityEnabled () : boolean;
		export function getAnalytics () : boolean;
		export function getArguments () : launchOptions;
		export function getBubbleParent () : boolean;
		export function getCopyright () : string;
		export function getDeployType () : string;
		export function getDescription () : string;
		export function getDisableNetworkActivityIndicator () : boolean;
		export function getGuid () : string;
		export function getId () : string;
		export function getIdleTimerDisabled () : boolean;
		export function getInstallId () : string;
		export function getKeyboardVisible () : boolean;
		export function getName () : string;
		export function getProximityDetection () : boolean;
		export function getProximityState () : boolean;
		export function getPublisher () : string;
		export function getSessionId () : string;
		export function getUrl () : string;
		export function getVersion () : string;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export function setDisableNetworkActivityIndicator (disableNetworkActivityIndicator: boolean) : void;
		export function setIdleTimerDisabled (idleTimerDisabled: boolean) : void;
		export function setProximityDetection (proximityDetection: boolean) : void;
		export enum Android {
			R
		}
		export module iOS {
			export var EVENT_ACCESSIBILITY_LAYOUT_CHANGED : string;
			export var EVENT_ACCESSIBILITY_SCREEN_CHANGED : string;
			export var bubbleParent : boolean;
			export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function applyProperties (props: Dictionary<Object>) : void;
			export function cancelAllLocalNotifications () : void;
			export function cancelLocalNotification (id: number) : void;
			export function createLocalNotification (parameters?: Dictionary<Titanium.App.iOS.LocalNotification>) : Titanium.App.iOS.LocalNotification;
			export function fireEvent (name: string, event: Dictionary<Object>) : void;
			export function getBubbleParent () : boolean;
			export function registerBackgroundService (params: Dictionary<Object>) : Titanium.App.iOS.BackgroundService;
			export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function scheduleLocalNotification (params: Dictionary<NotificationParams>) : Titanium.App.iOS.LocalNotification;
			export function setBubbleParent (bubbleParent: boolean) : void;
			export interface LocalNotification extends Titanium.Proxy {
				cancel () : void;
			}
			export interface BackgroundService extends Titanium.Proxy {
				url : string;
				getUrl () : string;
				stop () : void;
				unregister () : void;
			}
		}
		export interface Properties  {
			getBool (property: string, _default?: boolean) : boolean;
			getDouble (property: string, _default?: number) : number;
			getInt (property: string, _default?: number) : number;
			getList (property: string, _default?: Array<Object>) : Array<Object>;
			getObject (property: string, _default?: any) : any;
			getString (property: string, _default?: string) : string;
			hasProperty (property: string) : boolean;
			listProperties () : Array<Object>;
			removeProperty (property: string) : void;
			setBool (property: string, value: boolean) : void;
			setDouble (property: string, value: number) : void;
			setInt (property: string, value: number) : void;
			setList (property: string, value: Array<Object>) : void;
			setObject (property: string, value: any) : void;
			setString (property: string, value: string) : void;
		}
		export interface Tizen  {
			categories : Array<String>;
			iconPath : string;
			id : string;
			installDate : Date;
			name : string;
			show : boolean;
			size : number;
			exit () : void;
			getCategories () : Array<String>;
			getIconPath () : string;
			getId () : string;
			getInstallDate () : Date;
			getName () : string;
			getShow () : boolean;
			getSize () : number;
			hide () : void;
		}
	}
	export module Android {
		export var ACTION_AIRPLANE_MODE_CHANGED : string;
		export var ACTION_ALL_APPS : string;
		export var ACTION_ANSWER : string;
		export var ACTION_ATTACH_DATA : string;
		export var ACTION_BATTERY_CHANGED : string;
		export var ACTION_BATTERY_LOW : string;
		export var ACTION_BATTERY_OKAY : string;
		export var ACTION_BOOT_COMPLETED : string;
		export var ACTION_BUG_REPORT : string;
		export var ACTION_CALL : string;
		export var ACTION_CALL_BUTTON : string;
		export var ACTION_CAMERA_BUTTON : string;
		export var ACTION_CHOOSER : string;
		export var ACTION_CLOSE_SYSTEM_DIALOGS : string;
		export var ACTION_CONFIGURATION_CHANGED : string;
		export var ACTION_CREATE_SHORTCUT : string;
		export var ACTION_DATE_CHANGED : string;
		export var ACTION_DEFAULT : string;
		export var ACTION_DELETE : string;
		export var ACTION_DEVICE_STORAGE_LOW : string;
		export var ACTION_DIAL : string;
		export var ACTION_EDIT : string;
		export var ACTION_GET_CONTENT : string;
		export var ACTION_GTALK_SERVICE_CONNECTED : string;
		export var ACTION_GTALK_SERVICE_DISCONNECTED : string;
		export var ACTION_HEADSET_PLUG : string;
		export var ACTION_INPUT_METHOD_CHANGED : string;
		export var ACTION_INSERT : string;
		export var ACTION_INSERT_OR_EDIT : string;
		export var ACTION_MAIN : string;
		export var ACTION_MANAGE_PACKAGE_STORAGE : string;
		export var ACTION_MEDIA_BAD_REMOVAL : string;
		export var ACTION_MEDIA_BUTTON : string;
		export var ACTION_MEDIA_CHECKING : string;
		export var ACTION_MEDIA_EJECT : string;
		export var ACTION_MEDIA_MOUNTED : string;
		export var ACTION_MEDIA_NOFS : string;
		export var ACTION_MEDIA_REMOVED : string;
		export var ACTION_MEDIA_SCANNER_FINISHED : string;
		export var ACTION_MEDIA_SCANNER_SCAN_FILE : string;
		export var ACTION_MEDIA_SCANNER_STARTED : string;
		export var ACTION_MEDIA_SHARED : string;
		export var ACTION_MEDIA_UNMOUNTABLE : string;
		export var ACTION_MEDIA_UNMOUNTED : string;
		export var ACTION_NEW_OUTGOING_CALL : string;
		export var ACTION_PACKAGE_ADDED : string;
		export var ACTION_PACKAGE_CHANGED : string;
		export var ACTION_PACKAGE_DATA_CLEARED : string;
		export var ACTION_PACKAGE_INSTALL : string;
		export var ACTION_PACKAGE_REMOVED : string;
		export var ACTION_PACKAGE_REPLACED : string;
		export var ACTION_PACKAGE_RESTARTED : string;
		export var ACTION_PICK : string;
		export var ACTION_PICK_ACTIVITY : string;
		export var ACTION_POWER_CONNECTED : string;
		export var ACTION_POWER_DISCONNECTED : string;
		export var ACTION_POWER_USAGE_SUMMARY : string;
		export var ACTION_PROVIDER_CHANGED : string;
		export var ACTION_REBOOT : string;
		export var ACTION_RUN : string;
		export var ACTION_SCREEN_OFF : string;
		export var ACTION_SCREEN_ON : string;
		export var ACTION_SEARCH : string;
		export var ACTION_SEARCH_LONG_PRESS : string;
		export var ACTION_SEND : string;
		export var ACTION_SENDTO : string;
		export var ACTION_SEND_MULTIPLE : string;
		export var ACTION_SET_WALLPAPER : string;
		export var ACTION_SHUTDOWN : string;
		export var ACTION_SYNC : string;
		export var ACTION_SYSTEM_TUTORIAL : string;
		export var ACTION_TIME_CHANGED : string;
		export var ACTION_TIME_TICK : string;
		export var ACTION_UID_REMOVED : string;
		export var ACTION_UMS_CONNECTED : string;
		export var ACTION_UMS_DISCONNECTED : string;
		export var ACTION_USER_PRESENT : string;
		export var ACTION_VIEW : string;
		export var ACTION_VOICE_COMMAND : string;
		export var ACTION_WALLPAPER_CHANGED : string;
		export var ACTION_WEB_SEARCH : string;
		export var CATEGORY_ALTERNATIVE : string;
		export var CATEGORY_BROWSABLE : string;
		export var CATEGORY_DEFAULT : string;
		export var CATEGORY_DEVELOPMENT_PREFERENCE : string;
		export var CATEGORY_EMBED : string;
		export var CATEGORY_FRAMEWORK_INSTRUMENTATION_TEST : string;
		export var CATEGORY_HOME : string;
		export var CATEGORY_INFO : string;
		export var CATEGORY_LAUNCHER : string;
		export var CATEGORY_MONKEY : string;
		export var CATEGORY_OPENABLE : string;
		export var CATEGORY_PREFERENCE : string;
		export var CATEGORY_SAMPLE_CODE : string;
		export var CATEGORY_SELECTED_ALTERNATIVE : string;
		export var CATEGORY_TAB : string;
		export var CATEGORY_TEST : string;
		export var CATEGORY_UNIT_TEST : string;
		export var DEFAULT_ALL : number;
		export var DEFAULT_LIGHTS : number;
		export var DEFAULT_SOUND : number;
		export var DEFAULT_VIBRATE : number;
		export var EXTRA_ALARM_COUNT : string;
		export var EXTRA_BCC : string;
		export var EXTRA_CC : string;
		export var EXTRA_DATA_REMOVED : string;
		export var EXTRA_DONT_KILL_APP : string;
		export var EXTRA_EMAIL : string;
		export var EXTRA_INTENT : string;
		export var EXTRA_KEY_EVENT : string;
		export var EXTRA_PHONE_NUMBER : string;
		export var EXTRA_REPLACING : string;
		export var EXTRA_SHORTCUT_ICON : string;
		export var EXTRA_SHORTCUT_ICON_RESOURCE : string;
		export var EXTRA_SHORTCUT_INTENT : string;
		export var EXTRA_SHORTCUT_NAME : string;
		export var EXTRA_STREAM : string;
		export var EXTRA_SUBJECT : string;
		export var EXTRA_TEMPLATE : string;
		export var EXTRA_TEXT : string;
		export var EXTRA_TITLE : string;
		export var EXTRA_UID : string;
		export var FILL_IN_ACTION : number;
		export var FILL_IN_CATEGORIES : number;
		export var FILL_IN_COMPONENT : number;
		export var FILL_IN_DATA : number;
		export var FILL_IN_PACKAGE : number;
		export var FLAG_ACTIVITY_BROUGHT_TO_FRONT : number;
		export var FLAG_ACTIVITY_CLEAR_TOP : number;
		export var FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET : number;
		export var FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS : number;
		export var FLAG_ACTIVITY_FORWARD_RESULT : number;
		export var FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY : number;
		export var FLAG_ACTIVITY_MULTIPLE_TASK : number;
		export var FLAG_ACTIVITY_NEW_TASK : number;
		export var FLAG_ACTIVITY_NO_ANIMATION : number;
		export var FLAG_ACTIVITY_NO_HISTORY : number;
		export var FLAG_ACTIVITY_NO_USER_ACTION : number;
		export var FLAG_ACTIVITY_PREVIOUS_IS_TOP : number;
		export var FLAG_ACTIVITY_REORDER_TO_FRONT : number;
		export var FLAG_ACTIVITY_RESET_TASK_IF_NEEDED : number;
		export var FLAG_ACTIVITY_SINGLE_TOP : number;
		export var FLAG_AUTO_CANCEL : number;
		export var FLAG_CANCEL_CURRENT : number;
		export var FLAG_DEBUG_LOG_RESOLUTION : number;
		export var FLAG_FROM_BACKGROUND : number;
		export var FLAG_GRANT_READ_URI_PERMISSION : number;
		export var FLAG_GRANT_WRITE_URI_PERMISSION : number;
		export var FLAG_INSISTENT : number;
		export var FLAG_NO_CLEAR : number;
		export var FLAG_NO_CREATE : number;
		export var FLAG_ONE_SHOT : number;
		export var FLAG_ONGOING_EVENT : number;
		export var FLAG_ONLY_ALERT_ONCE : number;
		export var FLAG_RECEIVER_REGISTERED_ONLY : number;
		export var FLAG_SHOW_LIGHTS : number;
		export var FLAG_UPDATE_CURRENT : number;
		export var NAVIGATION_MODE_STANDARD : number;
		export var NAVIGATION_MODE_TABS : number;
		export var PENDING_INTENT_FOR_ACTIVITY : number;
		export var PENDING_INTENT_FOR_BROADCAST : number;
		export var PENDING_INTENT_FOR_SERVICE : number;
		export var PENDING_INTENT_MAX_VALUE : number;
		export var R : Titanium.Android.R;
		export var RESULT_CANCELED : number;
		export var RESULT_FIRST_USER : number;
		export var RESULT_OK : number;
		export var SCREEN_ORIENTATION_BEHIND : number;
		export var SCREEN_ORIENTATION_LANDSCAPE : number;
		export var SCREEN_ORIENTATION_NOSENSOR : number;
		export var SCREEN_ORIENTATION_PORTRAIT : number;
		export var SCREEN_ORIENTATION_SENSOR : number;
		export var SCREEN_ORIENTATION_UNSPECIFIED : number;
		export var SCREEN_ORIENTATION_USER : number;
		export var SHOW_AS_ACTION_ALWAYS : number;
		export var SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW : number;
		export var SHOW_AS_ACTION_IF_ROOM : number;
		export var SHOW_AS_ACTION_NEVER : number;
		export var SHOW_AS_ACTION_WITH_TEXT : number;
		export var START_NOT_STICKY : number;
		export var START_REDELIVER_INTENT : number;
		export var STREAM_ALARM : number;
		export var STREAM_DEFAULT : number;
		export var STREAM_MUSIC : number;
		export var STREAM_NOTIFICATION : number;
		export var STREAM_RING : number;
		export var STREAM_SYSTEM : number;
		export var STREAM_VOICE_CALL : number;
		export var URI_INTENT_SCHEME : number;
		export var bubbleParent : boolean;
		export var currentActivity : Titanium.Android.Activity;
		export var currentService : Titanium.Android.Service;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function createBroadcastIntent (options: BroadcastIntentOptions) : Titanium.Android.Intent;
		export function createBroadcastReceiver (parameters?: Dictionary<Titanium.Android.BroadcastReceiver>) : Titanium.Android.BroadcastReceiver;
		export function createIntent (parameters?: Dictionary<Titanium.Android.Intent>) : Titanium.Android.Intent;
		export function createIntentChooser (intent: Titanium.Android.Intent, title: string) : Titanium.Android.Intent;
		export function createNotification (parameters?: Dictionary<Titanium.Android.Notification>) : Titanium.Android.Notification;
		export function createPendingIntent (parameters?: Dictionary<Titanium.Android.PendingIntent>) : Titanium.Android.PendingIntent;
		export function createRemoteViews (parameters?: Dictionary<Titanium.Android.RemoteViews>) : Titanium.Android.RemoteViews;
		export function createService (intent: Titanium.Android.Intent) : Titanium.Android.Service;
		export function createServiceIntent (options: ServiceIntentOptions) : Titanium.Android.Intent;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function getBubbleParent () : boolean;
		export function getCurrentActivity () : Titanium.Android.Activity;
		export function getCurrentService () : Titanium.Android.Service;
		export function isServiceRunning (intent: Titanium.Android.Intent) : boolean;
		export function registerBroadcastReceiver (broadcastReceiver: Titanium.Android.BroadcastReceiver, actions: Array<String>) : void;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export function startService (intent: Titanium.Android.Intent) : void;
		export function stopService (intent: Titanium.Android.Intent) : void;
		export function unregisterBroadcastReceiver (broadcastReceiver: Titanium.Android.BroadcastReceiver) : void;
		export interface Intent extends Titanium.Proxy {
			action : string;
			className : string;
			data : string;
			flags : number;
			packageName : string;
			type : string;
			url : string;
			addCategory (name: string) : void;
			addFlags (flags: number) : void;
			getAction () : string;
			getBlobExtra (name: string) : Titanium.Blob;
			getBooleanExtra (name: string) : boolean;
			getClassName () : string;
			getData () : string;
			getDoubleExtra (name: string) : number;
			getFlags () : number;
			getIntExtra (name: string) : number;
			getLongExtra (name: string) : number;
			getPackageName () : string;
			getStringExtra (name: string) : string;
			getType () : string;
			getUrl () : string;
			hasExtra (name: string) : boolean;
			putExtra (name: string, value: any) : void;
			putExtraUri (name: string, value: string) : void;
			setFlags (flags: number) : void;
		}
		export interface Activity extends Titanium.Proxy {
			actionBar : Titanium.Android.ActionBar;
			intent : Titanium.Android.Intent;
			onCreateOptionsMenu : (...args : any[]) => any;
			onPrepareOptionsMenu : (...args : any[]) => any;
			requestedOrientation : number;
			finish () : void;
			getActionBar () : Titanium.Android.ActionBar;
			getIntent () : Titanium.Android.Intent;
			getOnCreateOptionsMenu () : (...args : any[]) => any;
			getOnPrepareOptionsMenu () : (...args : any[]) => any;
			getString (resourceId: number, format: any) : string;
			invalidateOptionsMenu () : void;
			openOptionsMenu () : void;
			sendBroadcast (intent: Titanium.Android.Intent) : void;
			sendBroadcastWithPermission (intent: Titanium.Android.Intent, receiverPermission?: string) : void;
			setOnCreateOptionsMenu (onCreateOptionsMenu: (...args : any[]) => any) : void;
			setOnPrepareOptionsMenu (onPrepareOptionsMenu: (...args : any[]) => any) : void;
			setRequestedOrientation (orientation: number) : void;
			setResult (resultCode: number, intent?: Titanium.Android.Intent) : void;
			startActivity (intent: Titanium.Android.Intent) : void;
			startActivityForResult (intent: Titanium.Android.Intent, callback: (...args : any[]) => any) : void;
		}
		export interface Notification extends Titanium.Proxy {
			audioStreamType : number;
			contentIntent : Titanium.Android.PendingIntent;
			contentText : string;
			contentTitle : string;
			contentView : Titanium.Android.RemoteViews;
			defaults : number;
			deleteIntent : Titanium.Android.PendingIntent;
			flags : number;
			icon : any;
			ledARGB : number;
			ledOffMS : number;
			ledOnMS : number;
			number : number;
			sound : string;
			tickerText : string;
			when : any;
			getAudioStreamType () : number;
			getContentIntent () : Titanium.Android.PendingIntent;
			getContentText () : string;
			getContentTitle () : string;
			getDefaults () : number;
			getDeleteIntent () : Titanium.Android.PendingIntent;
			getFlags () : number;
			getIcon () : any;
			getLedARGB () : number;
			getLedOffMS () : number;
			getLedOnMS () : number;
			getNumber () : number;
			getSound () : string;
			getTickerText () : string;
			getWhen () : any;
			setAudioStreamType (audioStreamType: number) : void;
			setContentIntent (contentIntent: Titanium.Android.PendingIntent) : void;
			setContentText (contentText: string) : void;
			setContentTitle (contentTitle: string) : void;
			setContentView (contentView: Titanium.Android.RemoteViews) : void;
			setDefaults (defaults: number) : void;
			setDeleteIntent (deleteIntent: Titanium.Android.PendingIntent) : void;
			setFlags (flags: number) : void;
			setIcon (icon: number) : void;
			setIcon (icon: string) : void;
			setLatestEventInfo (contentTitle: string, contentText: string, contentIntent: Titanium.Android.PendingIntent) : void;
			setLedARGB (ledARGB: number) : void;
			setLedOffMS (ledOffMS: number) : void;
			setLedOnMS (ledOnMS: number) : void;
			setNumber (number: number) : void;
			setSound (sound: string) : void;
			setTickerText (tickerText: string) : void;
			setWhen (when: Date) : void;
			setWhen (when: number) : void;
		}
		export module Calendar {
			export var METHOD_ALERT : number;
			export var METHOD_DEFAULT : number;
			export var METHOD_EMAIL : number;
			export var METHOD_SMS : number;
			export var STATE_DISMISSED : number;
			export var STATE_FIRED : number;
			export var STATE_SCHEDULED : number;
			export var STATUS_CANCELED : number;
			export var STATUS_CONFIRMED : number;
			export var STATUS_TENTATIVE : number;
			export var VISIBILITY_CONFIDENTIAL : number;
			export var VISIBILITY_DEFAULT : number;
			export var VISIBILITY_PRIVATE : number;
			export var VISIBILITY_PUBLIC : number;
			export var allAlerts : Array<Titanium.Android.Calendar.Alert>;
			export var allCalendars : Array<Titanium.Android.Calendar.Calendar>;
			export var bubbleParent : boolean;
			export var selectableCalendars : Array<Titanium.Android.Calendar.Calendar>;
			export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function applyProperties (props: Dictionary<Object>) : void;
			export function fireEvent (name: string, event: Dictionary<Object>) : void;
			export function getAllAlerts () : Array<Titanium.Android.Calendar.Alert>;
			export function getAllCalendars () : Array<Titanium.Android.Calendar.Calendar>;
			export function getBubbleParent () : boolean;
			export function getCalendarById (id: number) : Titanium.Android.Calendar.Calendar;
			export function getSelectableCalendars () : Array<Titanium.Android.Calendar.Calendar>;
			export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function setBubbleParent (bubbleParent: boolean) : void;
			export interface Event extends Titanium.Proxy {
				alerts : Array<Titanium.Android.Calendar.Alert>;
				allDay : boolean;
				begin : Date;
				description : string;
				end : Date;
				extendedProperties : Dictionary<Object>;
				hasAlarm : boolean;
				hasExtendedProperties : boolean;
				id : string;
				location : string;
				reminders : Array<Titanium.Android.Calendar.Reminder>;
				status : number;
				title : string;
				visibility : number;
				createAlert (data: Dictionary<Titanium.Android.Calendar.Alert>) : Titanium.Android.Calendar.Alert;
				createReminder (data: Dictionary<Titanium.Android.Calendar.Reminder>) : Titanium.Android.Calendar.Reminder;
				getAlerts () : Array<Titanium.Android.Calendar.Alert>;
				getAllDay () : boolean;
				getBegin () : Date;
				getDescription () : string;
				getEnd () : Date;
				getExtendedProperties () : Dictionary<Object>;
				getExtendedProperty (name: string) : string;
				getHasAlarm () : boolean;
				getHasExtendedProperties () : boolean;
				getId () : string;
				getLocation () : string;
				getReminders () : Array<Titanium.Android.Calendar.Reminder>;
				getStatus () : number;
				getTitle () : string;
				getVisibility () : number;
				setExtendedProperty (name: string, value: string) : void;
			}
			export interface Reminder extends Titanium.Proxy {
				id : string;
				method : number;
				minutes : number;
				getId () : string;
				getMethod () : number;
				getMinutes () : number;
			}
			export interface Calendar extends Titanium.Proxy {
				hidden : boolean;
				id : string;
				name : string;
				selected : boolean;
				createEvent (properties: Dictionary<Titanium.Android.Calendar.Event>) : Titanium.Android.Calendar.Event;
				getEventById (id: number) : Titanium.Android.Calendar.Event;
				getEventsBetweenDates (date1: Date, date2: Date) : Array<Titanium.Android.Calendar.Event>;
				getEventsInDate (year: number, month: number, day: number) : Array<Titanium.Android.Calendar.Event>;
				getEventsInMonth (year: number, month: number) : Array<Titanium.Android.Calendar.Event>;
				getEventsInYear (year: number) : Array<Titanium.Android.Calendar.Event>;
				getHidden () : boolean;
				getId () : string;
				getName () : string;
				getSelected () : boolean;
			}
			export interface Alert extends Titanium.Proxy {
				alarmTime : Date;
				begin : Date;
				end : Date;
				eventId : number;
				id : string;
				minutes : number;
				state : number;
				getAlarmTime () : Date;
				getBegin () : Date;
				getEnd () : Date;
				getEventId () : number;
				getId () : string;
				getMinutes () : number;
				getState () : number;
			}
		}
		export interface MenuItem extends Titanium.Proxy {
			actionView : Titanium.UI.View;
			actionViewExpanded : boolean;
			checkable : boolean;
			checked : boolean;
			enabled : boolean;
			groupId : number;
			icon : any;
			itemId : number;
			order : number;
			showAsAction : number;
			title : string;
			titleCondensed : string;
			visible : boolean;
			collapseActionView () : void;
			expandActionView () : void;
			getActionView () : Titanium.UI.View;
			getGroupId () : number;
			getItemId () : number;
			getOrder () : number;
			getTitle () : string;
			getTitleCondensed () : string;
			isActionViewExpanded () : boolean;
			isCheckable () : boolean;
			isChecked () : boolean;
			isEnabled () : boolean;
			isVisible () : boolean;
			setActionView (actionView: Titanium.UI.View) : void;
			setCheckable (checkable: boolean) : void;
			setChecked (enabled: boolean) : void;
			setEnabled (enabled: boolean) : void;
			setIcon (icon: number) : void;
			setIcon (icon: string) : void;
			setShowAsAction (showAsAction: number) : void;
			setTitle (title: string) : void;
			setTitleCondensed (titleCondensed: string) : void;
			setVisible (visible: boolean) : void;
		}
		export interface NotificationManager  {
			DEFAULT_ALL : number;
			DEFAULT_LIGHTS : number;
			DEFAULT_SOUND : number;
			DEFAULT_VIBRATE : number;
			FLAG_AUTO_CANCEL : number;
			FLAG_INSISTENT : number;
			FLAG_NO_CLEAR : number;
			FLAG_ONGOING_EVENT : number;
			FLAG_ONLY_ALERT_ONCE : number;
			FLAG_SHOW_LIGHTS : number;
			STREAM_DEFAULT : number;
			cancel (id: number) : void;
			cancelAll () : void;
			notify (id: number, notification: Titanium.Android.Notification) : void;
		}
		export interface R extends Titanium.Proxy {
			anim : any;
			array : any;
			attr : any;
			color : any;
			dimen : any;
			drawable : any;
			id : any;
			integer : any;
			layout : any;
			string : any;
			style : any;
			styleable : any;
		}
		export interface ActionBar extends Titanium.Proxy {
			backgroundImage : string;
			displayHomeAsUp : boolean;
			icon : string;
			logo : string;
			navigationMode : number;
			onHomeIconItemSelected : (...args : any[]) => any;
			title : string;
			getNavigationMode () : number;
			getTitle () : string;
			hide () : void;
			setBackgroundImage (backgroundImage: string) : void;
			setDisplayHomeAsUp (displayHomeAsUp: boolean) : void;
			setIcon (icon: string) : void;
			setLogo (logo: string) : void;
			setNavigationMode (navigationMode: number) : void;
			setOnHomeIconItemSelected (onHomeIconItemSelected: (...args : any[]) => any) : void;
			setTitle (title: string) : void;
			show () : void;
		}
		export interface BroadcastReceiver extends Titanium.Proxy {
			onReceived : (...args : any[]) => any;
			url : string;
			getOnReceived () : (...args : any[]) => any;
			getUrl () : string;
			setOnReceived (onReceived: (...args : any[]) => any) : void;
			setUrl (url: string) : void;
		}
		export interface Menu extends Titanium.Proxy {
			items : Array<Titanium.Android.MenuItem>;
			add (options: any) : Titanium.Android.MenuItem;
			clear () : void;
			close () : void;
			findItem (item: number) : Titanium.Android.MenuItem;
			findItem (item: Titanium.Android.MenuItem) : Titanium.Android.MenuItem;
			getItem (index: number) : Titanium.Android.MenuItem;
			getItems () : Array<Titanium.Android.MenuItem>;
			hasVisibleItems () : boolean;
			removeGroup (groupId: number) : void;
			removeItem (itemId: number) : void;
			setGroupEnabled (groupId: number, enabled: boolean) : void;
			setGroupVisible (groupId: number, visible: boolean) : void;
			size () : number;
		}
		export interface Service extends Titanium.Proxy {
			intent : Titanium.Android.Intent;
			serviceInstanceId : number;
			getIntent () : Titanium.Android.Intent;
			getServiceInstanceId () : number;
			start () : void;
			stop () : void;
		}
		export interface RemoteViews extends Titanium.Proxy {
			layoutId : number;
			packageName : string;
			getLayoutId () : number;
			getPackageName () : string;
			setBoolean (viewId: number, methodName: string, value: boolean) : void;
			setChronometer (viewId: number, base: Date, format: string, started: boolean) : void;
			setDouble (viewId: number, methodName: string, value: number) : void;
			setImageViewResource (viewId: number, srcId: number) : void;
			setImageViewUri (viewId: number, uri: string) : void;
			setInt (viewId: number, methodName: string, value: number) : void;
			setOnClickPendingIntent (viewId: number, pendingIntent: Titanium.Android.PendingIntent) : void;
			setProgressBar (viewId: number, max: number, progress: number, indeterminate: boolean) : void;
			setString (viewId: number, methodName: string, value: string) : void;
			setTextColor (viewId: number, color: number) : void;
			setTextViewText (viewId: number, text: string) : void;
			setUri (viewId: number, methodName: string, value: string) : void;
			setViewVisibility (viewId: number, visibility: number) : void;
		}
		export interface PendingIntent extends Titanium.Proxy {
			flags : number;
			intent : Titanium.Android.Intent;
			updateCurrentIntent : boolean;
			getFlags () : number;
			getIntent () : Titanium.Android.Intent;
			getUpdateCurrentIntent () : boolean;
		}
	}
	export module Database {
		export var FIELD_TYPE_DOUBLE : number;
		export var FIELD_TYPE_FLOAT : number;
		export var FIELD_TYPE_INT : number;
		export var FIELD_TYPE_STRING : number;
		export var bubbleParent : boolean;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function getBubbleParent () : boolean;
		export function install (path: string, dbName: string) : Titanium.Database.DB;
		export function open (dbName: string) : Titanium.Database.DB;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export interface ResultSet extends Titanium.Proxy {
			rowCount : number;
			validRow : boolean;
			close () : void;
			field (index: number, type?: number) : any;
			fieldByName (name: string, type?: number) : any;
			fieldCount () : number;
			fieldName (index: number) : string;
			getFieldCount () : number;
			getFieldName (index: number) : string;
			getRowCount () : number;
			getValidRow () : boolean;
			isValidRow () : boolean;
			next () : boolean;
		}
		export interface DB extends Titanium.Proxy {
			file : Titanium.Filesystem.File;
			lastInsertRowId : number;
			name : string;
			rowsAffected : number;
			close () : void;
			execute (sql: string, vararg?: string) : Titanium.Database.ResultSet;
			execute (vararg?: Array<String>) : Titanium.Database.ResultSet;
			execute (vararg?: any) : Titanium.Database.ResultSet;
			execute (sql: string, vararg?: Array<Object>) : Titanium.Database.ResultSet;
			getFile () : Titanium.Filesystem.File;
			getLastInsertRowId () : number;
			getName () : string;
			getRowsAffected () : number;
			remove () : void;
			setLastInsertRowId (lastInsertRowId: number) : void;
			setName (name: string) : void;
			setRowsAffected (rowsAffected: number) : void;
		}
	}
	export module Contacts {
		export var AUTHORIZATION_AUTHORIZED : number;
		export var AUTHORIZATION_DENIED : number;
		export var AUTHORIZATION_RESTRICTED : number;
		export var AUTHORIZATION_UNKNOWN : number;
		export var CONTACTS_KIND_ORGANIZATION : number;
		export var CONTACTS_KIND_PERSON : number;
		export var CONTACTS_SORT_FIRST_NAME : number;
		export var CONTACTS_SORT_LAST_NAME : number;
		export var bubbleParent : boolean;
		export var contactsAuthorization : number;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function createGroup (parameters?: Dictionary<Titanium.Contacts.Group>) : Titanium.Contacts.Group;
		export function createPerson (parameters?: Dictionary<Titanium.Contacts.Person>) : Titanium.Contacts.Person;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function getAllGroups () : Array<Titanium.Contacts.Group>;
		export function getAllPeople (limit: number) : Array<Titanium.Contacts.Person>;
		export function getBubbleParent () : boolean;
		export function getContactsAuthorization () : number;
		export function getGroupByID (id: number) : Titanium.Contacts.Group;
		export function getPeopleWithName (name: string) : Array<Titanium.Contacts.Person>;
		export function getPersonByID (id: number) : Titanium.Contacts.Person;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function removeGroup (group: Titanium.Contacts.Group) : void;
		export function removePerson (person: Titanium.Contacts.Person) : void;
		export function requestAuthorization (callback: (...args : any[]) => any) : void;
		export function revert () : void;
		export function save (contacts: Array<Titanium.Contacts.Person>) : void;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export function showContacts (params: showContactsParams) : void;
		export module Tizen {
			export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function applyProperties (props: Dictionary<Object>) : void;
			export function fireEvent (name: string, event: Dictionary<Object>) : void;
			export function getAllPeople (callback: (...args : any[]) => any) : void;
			export function getPeopleWithName (name: string, callback: (...args : any[]) => any) : void;
			export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
			export interface Group  {
				members (group: Titanium.Contacts.Group, callback: (...args : any[]) => any) : void;
				sortedMembers (sortBy: number, group: Titanium.Contacts.Group, callback: (...args : any[]) => any) : void;
			}
		}
		export interface Group extends Titanium.Proxy {
			name : string;
			recordId : number;
			add (person: Titanium.Contacts.Person) : void;
			getName () : string;
			getRecordId () : number;
			members () : Array<Titanium.Contacts.Person>;
			remove (person: Titanium.Contacts.Person) : void;
			setName (name: string) : void;
			setRecordId (recordId: number) : void;
			sortedMembers (sortBy: number) : Array<Titanium.Contacts.Person>;
		}
		export interface Person extends Titanium.Proxy {
			address : Dictionary<Object>;
			birthday : string;
			created : string;
			date : Dictionary<Object>;
			department : string;
			email : Dictionary<Object>;
			firstName : string;
			firstPhonetic : string;
			fullName : string;
			id : number;
			image : Titanium.Blob;
			instantMessage : Dictionary<Object>;
			jobTitle : string;
			kind : number;
			lastName : string;
			lastPhonetic : string;
			middleName : string;
			middlePhonetic : string;
			modified : string;
			nickname : string;
			note : string;
			organization : string;
			phone : Dictionary<Object>;
			prefix : string;
			recordId : number;
			relatedNames : Dictionary<Object>;
			suffix : string;
			url : Dictionary<Object>;
			getAddress () : Dictionary<Object>;
			getBirthday () : string;
			getCreated () : string;
			getDate () : Dictionary<Object>;
			getDepartment () : string;
			getEmail () : Dictionary<Object>;
			getFirstName () : string;
			getFirstPhonetic () : string;
			getFullName () : string;
			getId () : number;
			getImage () : Titanium.Blob;
			getInstantMessage () : Dictionary<Object>;
			getJobTitle () : string;
			getKind () : number;
			getLastName () : string;
			getLastPhonetic () : string;
			getMiddleName () : string;
			getMiddlePhonetic () : string;
			getModified () : string;
			getNickname () : string;
			getNote () : string;
			getOrganization () : string;
			getPhone () : Dictionary<Object>;
			getPrefix () : string;
			getRecordId () : number;
			getRelatedNames () : Dictionary<Object>;
			getSuffix () : string;
			getUrl () : Dictionary<Object>;
			setAddress (address: Dictionary<Object>) : void;
			setBirthday (birthday: string) : void;
			setDate (date: Dictionary<Object>) : void;
			setDepartment (department: string) : void;
			setEmail (email: Dictionary<Object>) : void;
			setFirstName (firstName: string) : void;
			setFirstPhonetic (firstPhonetic: string) : void;
			setImage (image: Titanium.Blob) : void;
			setInstantMessage (instantMessage: Dictionary<Object>) : void;
			setJobTitle (jobTitle: string) : void;
			setKind (kind: number) : void;
			setLastName (lastName: string) : void;
			setLastPhonetic (lastPhonetic: string) : void;
			setMiddleName (middleName: string) : void;
			setMiddlePhonetic (middlePhonetic: string) : void;
			setNickname (nickname: string) : void;
			setNote (note: string) : void;
			setOrganization (organization: string) : void;
			setPhone (phone: Dictionary<Object>) : void;
			setRecordId (recordId: number) : void;
			setRelatedNames (relatedNames: Dictionary<Object>) : void;
			setUrl (url: Dictionary<Object>) : void;
		}
	}
	export interface CloudPush  {
		enabled : boolean;
		focusAppOnPush : boolean;
		showAppOnTrayClick : boolean;
		showTrayNotification : boolean;
		showTrayNotificationsWhenFocused : boolean;
		singleCallback : boolean;
		clearStatus () : void;
		getEnabled () : boolean;
		getFocusAppOnPush () : boolean;
		getShowAppOnTrayClick () : boolean;
		getShowTrayNotification () : boolean;
		getShowTrayNotificationsWhenFocused () : boolean;
		getSingleCallback () : boolean;
		retrieveDeviceToken (config: CloudPushNotificationConfig) : void;
		setEnabled (enabled: boolean) : void;
		setFocusAppOnPush (focusAppOnPush: boolean) : void;
		setShowAppOnTrayClick (showAppOnTrayClick: boolean) : void;
		setShowTrayNotification (showTrayNotification: boolean) : void;
		setShowTrayNotificationsWhenFocused (showTrayNotificationsWhenFocused: boolean) : void;
		setSingleCallback (singleCallback: boolean) : void;
	}
	export module Media {
		export var AUDIO_FILEFORMAT_3GP2 : number;
		export var AUDIO_FILEFORMAT_3GPP : number;
		export var AUDIO_FILEFORMAT_AIFF : number;
		export var AUDIO_FILEFORMAT_AMR : number;
		export var AUDIO_FILEFORMAT_CAF : number;
		export var AUDIO_FILEFORMAT_MP3 : number;
		export var AUDIO_FILEFORMAT_MP4 : number;
		export var AUDIO_FILEFORMAT_MP4A : number;
		export var AUDIO_FILEFORMAT_WAVE : number;
		export var AUDIO_FORMAT_AAC : number;
		export var AUDIO_FORMAT_ALAW : number;
		export var AUDIO_FORMAT_APPLE_LOSSLESS : number;
		export var AUDIO_FORMAT_ILBC : number;
		export var AUDIO_FORMAT_IMA4 : number;
		export var AUDIO_FORMAT_LINEAR_PCM : number;
		export var AUDIO_FORMAT_ULAW : number;
		export var AUDIO_HEADPHONES : number;
		export var AUDIO_HEADPHONES_AND_MIC : number;
		export var AUDIO_HEADSET_INOUT : number;
		export var AUDIO_LINEOUT : number;
		export var AUDIO_MICROPHONE : number;
		export var AUDIO_MUTED : number;
		export var AUDIO_RECEIVER_AND_MIC : number;
		export var AUDIO_SESSION_MODE_AMBIENT : number;
		export var AUDIO_SESSION_MODE_PLAYBACK : number;
		export var AUDIO_SESSION_MODE_PLAY_AND_RECORD : number;
		export var AUDIO_SESSION_MODE_RECORD : number;
		export var AUDIO_SESSION_MODE_SOLO_AMBIENT : number;
		export var AUDIO_SPEAKER : number;
		export var AUDIO_UNAVAILABLE : number;
		export var AUDIO_UNKNOWN : number;
		export var CAMERA_FRONT : number;
		export var CAMERA_REAR : number;
		export var DEVICE_BUSY : number;
		export var MEDIA_TYPE_PHOTO : string;
		export var MEDIA_TYPE_VIDEO : string;
		export var MUSIC_MEDIA_GROUP_ALBUM : number;
		export var MUSIC_MEDIA_GROUP_ALBUM_ARTIST : number;
		export var MUSIC_MEDIA_GROUP_ARTIST : number;
		export var MUSIC_MEDIA_GROUP_COMPOSER : number;
		export var MUSIC_MEDIA_GROUP_GENRE : number;
		export var MUSIC_MEDIA_GROUP_PLAYLIST : number;
		export var MUSIC_MEDIA_GROUP_PODCAST_TITLE : number;
		export var MUSIC_MEDIA_GROUP_TITLE : number;
		export var MUSIC_MEDIA_TYPE_ALL : number;
		export var MUSIC_MEDIA_TYPE_ANY_AUDIO : number;
		export var MUSIC_MEDIA_TYPE_AUDIOBOOK : number;
		export var MUSIC_MEDIA_TYPE_MUSIC : number;
		export var MUSIC_MEDIA_TYPE_PODCAST : number;
		export var MUSIC_PLAYER_REPEAT_ALL : number;
		export var MUSIC_PLAYER_REPEAT_DEFAULT : number;
		export var MUSIC_PLAYER_REPEAT_NONE : number;
		export var MUSIC_PLAYER_REPEAT_ONE : number;
		export var MUSIC_PLAYER_SHUFFLE_ALBUMS : number;
		export var MUSIC_PLAYER_SHUFFLE_DEFAULT : number;
		export var MUSIC_PLAYER_SHUFFLE_NONE : number;
		export var MUSIC_PLAYER_SHUFFLE_SONGS : number;
		export var MUSIC_PLAYER_STATE_INTERRUPTED : number;
		export var MUSIC_PLAYER_STATE_PAUSED : number;
		export var MUSIC_PLAYER_STATE_PLAYING : number;
		export var MUSIC_PLAYER_STATE_SEEK_BACKWARD : number;
		export var MUSIC_PLAYER_STATE_SEEK_FORWARD : number;
		export var MUSIC_PLAYER_STATE_STOPPED : number;
		export var NO_CAMERA : number;
		export var NO_VIDEO : number;
		export var QUALITY_HIGH : number;
		export var QUALITY_LOW : number;
		export var QUALITY_MEDIUM : number;
		export var UNKNOWN_ERROR : number;
		export var VIDEO_CONTROL_DEFAULT : number;
		export var VIDEO_CONTROL_EMBEDDED : number;
		export var VIDEO_CONTROL_FULLSCREEN : number;
		export var VIDEO_CONTROL_HIDDEN : number;
		export var VIDEO_CONTROL_NONE : number;
		export var VIDEO_CONTROL_VOLUME_ONLY : number;
		export var VIDEO_FINISH_REASON_PLAYBACK_ENDED : number;
		export var VIDEO_FINISH_REASON_PLAYBACK_ERROR : number;
		export var VIDEO_FINISH_REASON_USER_EXITED : number;
		export var VIDEO_LOAD_STATE_PLAYABLE : number;
		export var VIDEO_LOAD_STATE_PLAYTHROUGH_OK : number;
		export var VIDEO_LOAD_STATE_STALLED : number;
		export var VIDEO_LOAD_STATE_UNKNOWN : number;
		export var VIDEO_MEDIA_TYPE_AUDIO : number;
		export var VIDEO_MEDIA_TYPE_NONE : number;
		export var VIDEO_MEDIA_TYPE_VIDEO : number;
		export var VIDEO_PLAYBACK_STATE_INTERRUPTED : number;
		export var VIDEO_PLAYBACK_STATE_PAUSED : number;
		export var VIDEO_PLAYBACK_STATE_PLAYING : number;
		export var VIDEO_PLAYBACK_STATE_SEEKING_BACKWARD : number;
		export var VIDEO_PLAYBACK_STATE_SEEKING_FORWARD : number;
		export var VIDEO_PLAYBACK_STATE_STOPPED : number;
		export var VIDEO_REPEAT_MODE_NONE : number;
		export var VIDEO_REPEAT_MODE_ONE : number;
		export var VIDEO_SCALING_ASPECT_FILL : number;
		export var VIDEO_SCALING_ASPECT_FIT : number;
		export var VIDEO_SCALING_MODE_FILL : number;
		export var VIDEO_SCALING_NONE : number;
		export var VIDEO_SOURCE_TYPE_FILE : number;
		export var VIDEO_SOURCE_TYPE_STREAMING : number;
		export var VIDEO_SOURCE_TYPE_UNKNOWN : number;
		export var VIDEO_TIME_OPTION_EXACT : number;
		export var VIDEO_TIME_OPTION_NEAREST_KEYFRAME : number;
		export var appMusicPlayer : Titanium.Media.MusicPlayer;
		export var audioLineType : number;
		export var audioPlaying : boolean;
		export var audioSessionMode : number;
		export var availableCameraMediaTypes : Array<Object>;
		export var availableCameras : Array<Number>;
		export var availablePhotoGalleryMediaTypes : Array<Object>;
		export var availablePhotoMediaTypes : Array<Object>;
		export var averageMicrophonePower : number;
		export var bubbleParent : boolean;
		export var canRecord : boolean;
		export var isCameraSupported : boolean;
		export var peakMicrophonePower : number;
		export var systemMusicPlayer : Titanium.Media.MusicPlayer;
		export var volume : number;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function beep () : void;
		export function createAudioPlayer (parameters?: Dictionary<Titanium.Media.AudioPlayer>) : Titanium.Media.AudioPlayer;
		export function createAudioRecorder (parameters?: Dictionary<Titanium.Media.AudioRecorder>) : Titanium.Media.AudioRecorder;
		export function createItem (parameters?: Dictionary<Titanium.Media.Item>) : Titanium.Media.Item;
		export function createMusicPlayer (parameters?: Dictionary<Titanium.Media.MusicPlayer>) : Titanium.Media.MusicPlayer;
		export function createSound (parameters?: Dictionary<Titanium.Media.Sound>) : Titanium.Media.Sound;
		export function createVideoPlayer (parameters?: Dictionary<Titanium.Media.VideoPlayer>) : Titanium.Media.VideoPlayer;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function getAppMusicPlayer () : Titanium.Media.MusicPlayer;
		export function getAudioLineType () : number;
		export function getAudioPlaying () : boolean;
		export function getAudioSessionMode () : number;
		export function getAvailableCameraMediaTypes () : Array<Object>;
		export function getAvailableCameras () : Array<Number>;
		export function getAvailablePhotoGalleryMediaTypes () : Array<Object>;
		export function getAvailablePhotoMediaTypes () : Array<Object>;
		export function getAverageMicrophonePower () : number;
		export function getBubbleParent () : boolean;
		export function getCanRecord () : boolean;
		export function getIsCameraSupported () : boolean;
		export function getPeakMicrophonePower () : number;
		export function getSystemMusicPlayer () : Titanium.Media.MusicPlayer;
		export function getVolume () : number;
		export function hideCamera () : void;
		export function hideMusicLibrary () : void;
		export function isMediaTypeSupported (source: string, type: string) : boolean;
		export function openMusicLibrary (options: MusicLibraryOptionsType) : void;
		export function openPhotoGallery (options: PhotoGalleryOptionsType) : void;
		export function previewImage (options: Dictionary<PreviewImageOptions>) : void;
		export function queryMusicLibrary (query: MediaQueryType) : Array<Titanium.Media.Item>;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function requestAuthorization (callback: (...args : any[]) => any) : void;
		export function saveToPhotoGallery (media: Titanium.Blob, callbacks: any) : void;
		export function saveToPhotoGallery (media: Titanium.Filesystem.File, callbacks: any) : void;
		export function setAudioSessionMode (audioSessionMode: number) : void;
		export function setAvailableCameraMediaTypes (availableCameraMediaTypes: Array<Object>) : void;
		export function setAvailablePhotoGalleryMediaTypes (availablePhotoGalleryMediaTypes: Array<Object>) : void;
		export function setAvailablePhotoMediaTypes (availablePhotoMediaTypes: Array<Object>) : void;
		export function setAverageMicrophonePower (averageMicrophonePower: number) : void;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export function showCamera (options: CameraOptionsType) : void;
		export function startMicrophoneMonitor () : void;
		export function stopMicrophoneMonitor () : void;
		export function switchCamera (camera: number) : void;
		export function takePicture () : void;
		export function takeScreenshot (callback: (...args : any[]) => any) : void;
		export function vibrate (pattern?: Array<Number>) : void;
		export interface Sound extends Titanium.Proxy {
			allowBackground : boolean;
			duration : number;
			looping : boolean;
			paused : boolean;
			playing : boolean;
			time : number;
			url : string;
			volume : number;
			getDuration () : number;
			getTime () : number;
			getUrl () : string;
			getVolume () : number;
			isLooping () : boolean;
			isPaused () : boolean;
			isPlaying () : boolean;
			pause () : void;
			play () : void;
			release () : void;
			reset () : void;
			setLooping (looping: boolean) : void;
			setPaused (paused: boolean) : void;
			setTime (time: number) : void;
			setUrl (url: string) : void;
			setVolume (volume: number) : void;
			stop () : void;
		}
		export interface AudioRecorder extends Titanium.Proxy {
			compression : number;
			format : number;
			paused : boolean;
			recording : boolean;
			stopped : boolean;
			getCompression () : number;
			getFormat () : number;
			getPaused () : boolean;
			getRecording () : boolean;
			getStopped () : boolean;
			pause () : void;
			resume () : void;
			setCompression (compression: number) : void;
			setFormat (format: number) : void;
			start () : void;
			stop () : Titanium.Filesystem.File;
		}
		export interface Item extends Titanium.Proxy {
			albumArtist : string;
			albumTitle : string;
			albumTrackCount : number;
			albumTrackNumber : number;
			artist : string;
			artwork : Titanium.Blob;
			composer : string;
			discCount : number;
			discNumber : number;
			genre : string;
			isCompilation : boolean;
			lyrics : string;
			mediaType : number;
			playCount : number;
			playbackDuration : number;
			podcastTitle : string;
			rating : number;
			skipCount : number;
			title : string;
			getAlbumArtist () : string;
			getAlbumTitle () : string;
			getAlbumTrackCount () : number;
			getAlbumTrackNumber () : number;
			getArtist () : string;
			getArtwork () : Titanium.Blob;
			getComposer () : string;
			getDiscCount () : number;
			getDiscNumber () : number;
			getGenre () : string;
			getIsCompilation () : boolean;
			getLyrics () : string;
			getMediaType () : number;
			getPlayCount () : number;
			getPlaybackDuration () : number;
			getPodcastTitle () : string;
			getRating () : number;
			getSkipCount () : number;
			getTitle () : string;
		}
		export interface VideoPlayer extends Titanium.UI.View {
			allowsAirPlay : boolean;
			autoplay : boolean;
			contentURL : string;
			currentPlaybackTime : number;
			duration : number;
			endPlaybackTime : number;
			fullscreen : boolean;
			initialPlaybackTime : number;
			loadState : number;
			media : any;
			mediaControlStyle : number;
			mediaTypes : number;
			movieControlMode : number;
			naturalSize : MovieSize;
			playableDuration : number;
			playbackState : number;
			playing : boolean;
			repeatMode : number;
			scalingMode : number;
			sourceType : number;
			url : any;
			useApplicationAudioSession : boolean;
			volume : number;
			cancelAllThumbnailImageRequests () : void;
			getAllowsAirPlay () : boolean;
			getAutoplay () : boolean;
			getContentURL () : string;
			getCurrentPlaybackTime () : number;
			getDuration () : number;
			getEndPlaybackTime () : number;
			getFullscreen () : boolean;
			getInitialPlaybackTime () : number;
			getLoadState () : number;
			getMediaControlStyle () : number;
			getMediaTypes () : number;
			getMovieControlMode () : number;
			getNaturalSize () : MovieSize;
			getPlayableDuration () : number;
			getPlaybackState () : number;
			getPlaying () : boolean;
			getRepeatMode () : number;
			getScalingMode () : number;
			getSourceType () : number;
			getUrl () : any;
			getUseApplicationAudioSession () : boolean;
			getVolume () : number;
			pause () : void;
			play () : void;
			release () : void;
			requestThumbnailImagesAtTimes (times: Array<Number>, option: number, callback: (...args : any[]) => any) : void;
			setAllowsAirPlay (allowsAirPlay: boolean) : void;
			setAutoplay (autoplay: boolean) : void;
			setBackgroundView (view: Titanium.UI.View) : void;
			setContentURL (contentURL: string) : void;
			setCurrentPlaybackTime (currentPlaybackTime: number) : void;
			setDuration (duration: number) : void;
			setEndPlaybackTime (endPlaybackTime: number) : void;
			setFullscreen (fullscreen: boolean) : void;
			setInitialPlaybackTime (initialPlaybackTime: number) : void;
			setMedia (media: Titanium.Blob) : void;
			setMedia (media: Titanium.Filesystem.File) : void;
			setMedia (media: string) : void;
			setMediaControlStyle (mediaControlStyle: number) : void;
			setMediaTypes (mediaTypes: number) : void;
			setMovieControlMode (movieControlMode: number) : void;
			setNaturalSize (naturalSize: MovieSize) : void;
			setRepeatMode (repeatMode: number) : void;
			setScalingMode (scalingMode: number) : void;
			setSourceType (sourceType: number) : void;
			setUrl (url: string) : void;
			setUrl (url: Array<String>) : void;
			setUseApplicationAudioSession (useApplicationAudioSession: boolean) : void;
			setVolume (volume: number) : void;
			stop () : void;
			thumbnailImageAtTime (time: number, option: number) : Titanium.Blob;
		}
		export interface MusicPlayer extends Titanium.Proxy {
			currentPlaybackTime : number;
			nowPlaying : Titanium.Media.Item;
			playbackState : number;
			repeatMode : number;
			shuffleMode : number;
			volume : number;
			getCurrentPlaybackTime () : number;
			getNowPlaying () : Titanium.Media.Item;
			getPlaybackState () : number;
			getRepeatMode () : number;
			getShuffleMode () : number;
			getVolume () : number;
			pause () : void;
			play () : void;
			seekBackward () : void;
			seekForward () : void;
			setCurrentPlaybackTime (currentPlaybackTime: number) : void;
			setQueue (queue: Titanium.Media.Item) : void;
			setQueue (queue: Array<Titanium.Media.Item>) : void;
			setQueue (queue: PlayerQueue) : void;
			setRepeatMode (repeatMode: number) : void;
			setShuffleMode (shuffleMode: number) : void;
			setVolume (volume: number) : void;
			skipToBeginning () : void;
			skipToNext () : void;
			skipToPrevious () : void;
			stop () : void;
			stopSeeking () : void;
		}
		export interface AudioPlayer extends Titanium.Proxy {
			STATE_BUFFERING : number;
			STATE_INITIALIZED : number;
			STATE_PAUSED : number;
			STATE_PLAYING : number;
			STATE_STARTING : number;
			STATE_STOPPED : number;
			STATE_STOPPING : number;
			STATE_WAITING_FOR_DATA : number;
			STATE_WAITING_FOR_QUEUE : number;
			allowBackground : boolean;
			autoplay : boolean;
			bitRate : number;
			bufferSize : number;
			idle : boolean;
			paused : boolean;
			playing : boolean;
			progress : number;
			state : number;
			url : string;
			volume : number;
			waiting : boolean;
			getAllowBackground () : boolean;
			getAutoplay () : boolean;
			getBitRate () : number;
			getBufferSize () : number;
			getIdle () : boolean;
			getPaused () : boolean;
			getPlaying () : boolean;
			getProgress () : number;
			getState () : number;
			getUrl () : string;
			getVolume () : number;
			getWaiting () : boolean;
			isPaused () : boolean;
			isPlaying () : boolean;
			pause () : void;
			play () : void;
			release () : void;
			setBitRate (bitRate: number) : void;
			setBufferSize (bufferSize: number) : void;
			setPaused (paused: boolean) : void;
			setUrl (url: string) : void;
			setVolume (volume: number) : void;
			start () : void;
			stateDescription (state: number) : string;
			stop () : void;
		}
		export interface Android  {
			scanMediaFiles (paths: Array<String>, mimeTypes: Array<String>, callback: (...args : any[]) => any) : void;
			setSystemWallpaper (image: Titanium.Blob, scale: boolean) : void;
		}
	}
	export module Network {
		export var INADDR_ANY : string;
		export var NETWORK_LAN : number;
		export var NETWORK_MOBILE : number;
		export var NETWORK_NONE : number;
		export var NETWORK_UNKNOWN : number;
		export var NETWORK_WIFI : number;
		export var NOTIFICATION_TYPE_ALERT : number;
		export var NOTIFICATION_TYPE_BADGE : number;
		export var NOTIFICATION_TYPE_NEWSSTAND : number;
		export var NOTIFICATION_TYPE_SOUND : number;
		export var READ_MODE : number;
		export var READ_WRITE_MODE : number;
		export var SOCKET_CLOSED : number;
		export var SOCKET_CONNECTED : number;
		export var SOCKET_ERROR : number;
		export var SOCKET_INITIALIZED : number;
		export var SOCKET_LISTENING : number;
		export var TLS_VERSION_1_0 : number;
		export var TLS_VERSION_1_1 : number;
		export var TLS_VERSION_1_2 : number;
		export var WRITE_MODE : number;
		export var bubbleParent : boolean;
		export var httpURLFormatter : (...args : any[]) => any;
		export var networkType : number;
		export var networkTypeName : string;
		export var online : boolean;
		export var remoteDeviceUUID : string;
		export var remoteNotificationTypes : Array<Number>;
		export var remoteNotificationsEnabled : boolean;
		export function addConnectivityListener (callback: (...args : any[]) => any) : void;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function createBonjourBrowser (serviceType: string, domain: string, parameters?: Dictionary<Titanium.Network.BonjourBrowser>) : Titanium.Network.BonjourBrowser;
		export function createBonjourService (name: string, type: string, domain: string, parameters?: Dictionary<Titanium.Network.BonjourService>) : Titanium.Network.BonjourService;
		export function createHTTPClient (parameters?: Dictionary<Titanium.Network.HTTPClient>) : Titanium.Network.HTTPClient;
		export function createTCPSocket (hostName: string, port: number, mode: number, parameters: Dictionary<Titanium.Network.TCPSocket>) : Titanium.Network.TCPSocket;
		export function decodeURIComponent (value: string) : string;
		export function encodeURIComponent (value: string) : string;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function getBubbleParent () : boolean;
		export function getHttpURLFormatter () : (...args : any[]) => any;
		export function getNetworkType () : number;
		export function getNetworkTypeName () : string;
		export function getOnline () : boolean;
		export function getRemoteDeviceUUID () : string;
		export function getRemoteNotificationTypes () : Array<Number>;
		export function getRemoteNotificationsEnabled () : boolean;
		export function registerForPushNotifications (config: PushNotificationConfig) : void;
		export function removeConnectivityListener (callback: (...args : any[]) => any) : void;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export function setHttpURLFormatter (httpURLFormatter: (...args : any[]) => any) : void;
		export function unregisterForPushNotifications () : void;
		export module Socket {
			export var CLOSED : number;
			export var CONNECTED : number;
			export var ERROR : number;
			export var INITIALIZED : number;
			export var LISTENING : number;
			export var bubbleParent : boolean;
			export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function applyProperties (props: Dictionary<Object>) : void;
			export function createTCP (params?: Dictionary<Titanium.Network.Socket.TCP>) : Titanium.Network.Socket.TCP;
			export function createUDP (params?: Dictionary<Titanium.Network.Socket.UDP>) : Titanium.Network.Socket.UDP;
			export function fireEvent (name: string, event: Dictionary<Object>) : void;
			export function getBubbleParent () : boolean;
			export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function setBubbleParent (bubbleParent: boolean) : void;
			export interface UDP extends Titanium.IOStream {
				data : (...args : any[]) => any;
				error : (...args : any[]) => any;
				port : number;
				started : (...args : any[]) => any;
				getData () : (...args : any[]) => any;
				getError () : (...args : any[]) => any;
				getPort () : number;
				getStarted () : (...args : any[]) => any;
				sendBytes (port: number, host: string, data: Array<Number>) : void;
				sendString (port: number, host: string, data: string) : void;
				setData (data: (...args : any[]) => any) : void;
				setError (error: (...args : any[]) => any) : void;
				setPort (port: number) : void;
				setStarted (started: (...args : any[]) => any) : void;
				start (port: number) : void;
				stop () : void;
			}
			export interface TCP extends Titanium.IOStream {
				accepted : (...args : any[]) => any;
				connected : (...args : any[]) => any;
				error : (...args : any[]) => any;
				host : string;
				listenQueueSize : number;
				port : number;
				state : number;
				timeout : number;
				accept (options: AcceptDict) : void;
				connect () : void;
				getAccepted () : (...args : any[]) => any;
				getConnected () : (...args : any[]) => any;
				getError () : (...args : any[]) => any;
				getHost () : string;
				getListenQueueSize () : number;
				getPort () : number;
				getState () : number;
				getTimeout () : number;
				listen () : void;
				setAccepted (accepted: (...args : any[]) => any) : void;
				setConnected (connected: (...args : any[]) => any) : void;
				setError (error: (...args : any[]) => any) : void;
				setHost (host: string) : void;
				setListenQueueSize (listenQueueSize: number) : void;
				setPort (port: number) : void;
				setTimeout (timeout: number) : void;
			}
		}
		export interface TCPSocket extends Titanium.Proxy {
			hostName : string;
			isValid : boolean;
			mode : number;
			port : number;
			stripTerminator : boolean;
			close () : void;
			connect () : void;
			getHostName () : string;
			getIsValid () : boolean;
			getMode () : number;
			getPort () : number;
			getStripTerminator () : boolean;
			listen () : void;
			setHostName (hostName: string) : void;
			setIsValid (isValid: boolean) : void;
			setMode (mode: number) : void;
			setPort (port: number) : void;
			setStripTerminator (stripTerminator: boolean) : void;
			write (data: any, sendTo: number) : void;
			write (data: string, sendTo: number) : void;
		}
		export interface BonjourService extends Titanium.Proxy {
			domain : string;
			isLocal : boolean;
			name : string;
			socket : any;
			type : string;
			getDomain () : string;
			getIsLocal () : boolean;
			getName () : string;
			getSocket () : any;
			getType () : string;
			publish (socket: any) : void;
			resolve (timeout: number) : void;
			setDomain (domain: string) : void;
			setIsLocal (isLocal: boolean) : void;
			setName (name: string) : void;
			setSocket (socket: any) : void;
			setType (type: string) : void;
			stop () : void;
		}
		export interface HTTPClient extends Titanium.Proxy {
			DONE : number;
			HEADERS_RECEIVED : number;
			LOADING : number;
			OPENED : number;
			UNSENT : number;
			allResponseHeaders : string;
			autoEncodeUrl : boolean;
			autoRedirect : boolean;
			cache : boolean;
			connected : boolean;
			connectionType : string;
			domain : string;
			enableKeepAlive : boolean;
			file : string;
			location : string;
			ondatastream : (...args : any[]) => any;
			onerror : (...args : any[]) => any;
			onload : (...args : any[]) => any;
			onreadystatechange : (...args : any[]) => any;
			onsendstream : (...args : any[]) => any;
			password : string;
			readyState : number;
			responseData : Titanium.Blob;
			responseText : string;
			responseXML : Titanium.XML.Document;
			status : number;
			statusText : string;
			timeout : number;
			tlsVersion : number;
			username : string;
			validatesSecureCertificate : boolean;
			withCredentials : boolean;
			abort () : void;
			addAuthFactory (scheme: string, factory: any) : void;
			addKeyManager (X509KeyManager: any) : void;
			addTrustManager (X509TrustManager: any) : void;
			clearCookies (host: string) : void;
			getAllResponseHeaders () : string;
			getAutoEncodeUrl () : boolean;
			getAutoRedirect () : boolean;
			getCache () : boolean;
			getConnected () : boolean;
			getConnectionType () : string;
			getDomain () : string;
			getEnableKeepAlive () : boolean;
			getFile () : string;
			getLocation () : string;
			getOndatastream () : (...args : any[]) => any;
			getOnerror () : (...args : any[]) => any;
			getOnload () : (...args : any[]) => any;
			getOnreadystatechange () : (...args : any[]) => any;
			getOnsendstream () : (...args : any[]) => any;
			getPassword () : string;
			getReadyState () : number;
			getResponseData () : Titanium.Blob;
			getResponseHeader (name: string) : string;
			getResponseText () : string;
			getResponseXML () : Titanium.XML.Document;
			getStatus () : number;
			getStatusText () : string;
			getTimeout () : number;
			getTlsVersion () : number;
			getUsername () : string;
			getValidatesSecureCertificate () : boolean;
			getWithCredentials () : boolean;
			open (method: string, url: string, async?: boolean) : void;
			send (data?: any) : void;
			send (data?: string) : void;
			send (data?: Titanium.Filesystem.File) : void;
			send (data?: Titanium.Blob) : void;
			setAutoEncodeUrl (autoEncodeUrl: boolean) : void;
			setAutoRedirect (autoRedirect: boolean) : void;
			setCache (cache: boolean) : void;
			setDomain (domain: string) : void;
			setEnableKeepAlive (enableKeepAlive: boolean) : void;
			setFile (file: string) : void;
			setOndatastream (ondatastream: (...args : any[]) => any) : void;
			setOnerror (onerror: (...args : any[]) => any) : void;
			setOnload (onload: (...args : any[]) => any) : void;
			setOnreadystatechange (onreadystatechange: (...args : any[]) => any) : void;
			setOnsendstream (onsendstream: (...args : any[]) => any) : void;
			setPassword (password: string) : void;
			setRequestHeader (name: string, value: string) : void;
			setTimeout (timeout: number) : void;
			setTlsVersion (tlsVersion: number) : void;
			setUsername (username: string) : void;
			setValidatesSecureCertificate (validatesSecureCertificate: boolean) : void;
			setWithCredentials (withCredentials: boolean) : void;
		}
		export interface BonjourBrowser extends Titanium.Proxy {
			domain : string;
			isSearching : boolean;
			serviceType : string;
			getDomain () : string;
			getIsSearching () : boolean;
			getServiceType () : string;
			search () : void;
			setDomain (domain: string) : void;
			setIsSearching (isSearching: boolean) : void;
			setServiceType (serviceType: string) : void;
			stopSearch () : void;
		}
	}
	export module Platform {
		export var BATTERY_STATE_CHARGING : number;
		export var BATTERY_STATE_FULL : number;
		export var BATTERY_STATE_UNKNOWN : number;
		export var BATTERY_STATE_UNPLUGGED : number;
		export var address : string;
		export var architecture : string;
		export var availableMemory : number;
		export var batteryLevel : number;
		export var batteryMonitoring : boolean;
		export var batteryState : number;
		export var bubbleParent : boolean;
		export var displayCaps : Titanium.Platform.DisplayCaps;
		export var id : string;
		export var locale : string;
		export var macaddress : string;
		export var manufacturer : string;
		export var model : string;
		export var name : string;
		export var netmask : string;
		export var osname : string;
		export var ostype : string;
		export var processorCount : number;
		export var runtime : string;
		export var username : string;
		export var version : string;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function canOpenURL (url: string) : boolean;
		export function createUUID () : string;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function getAddress () : string;
		export function getArchitecture () : string;
		export function getAvailableMemory () : number;
		export function getBatteryLevel () : number;
		export function getBatteryMonitoring () : boolean;
		export function getBatteryState () : number;
		export function getBubbleParent () : boolean;
		export function getDisplayCaps () : Titanium.Platform.DisplayCaps;
		export function getId () : string;
		export function getLocale () : string;
		export function getMacaddress () : string;
		export function getManufacturer () : string;
		export function getModel () : string;
		export function getName () : string;
		export function getNetmask () : string;
		export function getOsname () : string;
		export function getOstype () : string;
		export function getProcessorCount () : number;
		export function getRuntime () : string;
		export function getUsername () : string;
		export function getVersion () : string;
		export function is24HourTimeFormat () : boolean;
		export function openURL (url: string) : boolean;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function setBatteryMonitoring (batteryMonitoring: boolean) : void;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export interface DisplayCaps extends Titanium.Proxy {
			density : string;
			dpi : number;
			logicalDensityFactor : number;
			platformHeight : number;
			platformWidth : number;
			xdpi : number;
			ydpi : number;
			getDensity () : string;
			getDpi () : number;
			getLogicalDensityFactor () : number;
			getPlatformHeight () : number;
			getPlatformWidth () : number;
			getXdpi () : number;
			getYdpi () : number;
			setDensity (density: string) : void;
			setDpi (dpi: number) : void;
			setLogicalDensityFactor (logicalDensityFactor: number) : void;
			setPlatformHeight (platformHeight: number) : void;
			setPlatformWidth (platformWidth: number) : void;
			setXdpi (xdpi: number) : void;
			setYdpi (ydpi: number) : void;
		}
		export interface Android  {
			API_LEVEL : number;
			PHYSICAL_SIZE_CATEGORY_LARGE : number;
			PHYSICAL_SIZE_CATEGORY_NORMAL : number;
			PHYSICAL_SIZE_CATEGORY_SMALL : number;
			PHYSICAL_SIZE_CATEGORY_UNDEFINED : number;
			PHYSICAL_SIZE_CATEGORY_XLARGE : number;
			physicalSizeCategory : number;
			getPhysicalSizeCategory () : number;
		}
	}
	export interface Buffer extends Titanium.Proxy {
		byteOrder : number;
		length : number;
		type : string;
		value : any;
		append (sourceBuffer: Titanium.Buffer, sourceOffset?: number, sourceLength?: number) : number;
		clear () : void;
		clone (offset?: number, length?: number) : Titanium.Buffer;
		copy (sourceBuffer: Titanium.Buffer, offset: number, sourceOffset?: number, sourceLength?: number) : number;
		fill (fillByte: number, offset?: number, length?: number) : void;
		getByteOrder () : number;
		getLength () : number;
		getType () : string;
		getValue () : any;
		insert (sourceBuffer: Titanium.Buffer, offset: number, sourceOffset?: number, sourceLength?: number) : number;
		release () : void;
		setLength (length: number) : void;
		toBlob () : Titanium.Blob;
		toString () : string;
	}
	export enum BufferStream {

	}
	export module Calendar {
		export var AUTHORIZATION_AUTHORIZED : number;
		export var AUTHORIZATION_DENIED : number;
		export var AUTHORIZATION_RESTRICTED : number;
		export var AUTHORIZATION_UNKNOWN : number;
		export var AVAILABILITY_BUSY : number;
		export var AVAILABILITY_FREE : number;
		export var AVAILABILITY_NOTSUPPORTED : number;
		export var AVAILABILITY_TENTATIVE : number;
		export var AVAILABILITY_UNAVAILABLE : number;
		export var METHOD_ALERT : number;
		export var METHOD_DEFAULT : number;
		export var METHOD_EMAIL : number;
		export var METHOD_SMS : number;
		export var RECURRENCEFREQUENCY_DAILY : number;
		export var RECURRENCEFREQUENCY_MONTHLY : number;
		export var RECURRENCEFREQUENCY_WEEKLY : number;
		export var RECURRENCEFREQUENCY_YEARLY : number;
		export var SPAN_FUTUREEVENTS : number;
		export var SPAN_THISEVENT : number;
		export var STATE_DISMISSED : number;
		export var STATE_FIRED : number;
		export var STATE_SCHEDULED : number;
		export var STATUS_CANCELED : number;
		export var STATUS_CONFIRMED : number;
		export var STATUS_NONE : number;
		export var STATUS_TENTATIVE : number;
		export var VISIBILITY_CONFIDENTIAL : number;
		export var VISIBILITY_DEFAULT : number;
		export var VISIBILITY_PRIVATE : number;
		export var VISIBILITY_PUBLIC : number;
		export var allAlerts : Array<Titanium.Calendar.Alert>;
		export var allCalendars : Array<Titanium.Calendar.Calendar>;
		export var allEditableCalendars : Array<Titanium.Calendar.Calendar>;
		export var bubbleParent : boolean;
		export var defaultCalendar : Titanium.Calendar.Calendar;
		export var eventsAuthorization : number;
		export var selectableCalendars : Array<Titanium.Calendar.Calendar>;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function getAllAlerts () : Array<Titanium.Calendar.Alert>;
		export function getAllCalendars () : Array<Titanium.Calendar.Calendar>;
		export function getAllEditableCalendars () : Array<Titanium.Calendar.Calendar>;
		export function getBubbleParent () : boolean;
		export function getCalendarById (id: number) : Titanium.Calendar.Calendar;
		export function getDefaultCalendar () : Titanium.Calendar.Calendar;
		export function getEventsAuthorization () : number;
		export function getSelectableCalendars () : Array<Titanium.Calendar.Calendar>;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function requestEventsAuthorization (callback: (...args : any[]) => any) : void;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export interface Calendar extends Titanium.Proxy {
			hidden : boolean;
			id : string;
			name : string;
			selected : boolean;
			createEvent (properties: Dictionary<Titanium.Calendar.Event>) : Titanium.Calendar.Event;
			getEventById (id: number) : Titanium.Calendar.Event;
			getEventsBetweenDates (date1: Date, date2: Date) : Array<Titanium.Calendar.Event>;
			getEventsInDate (year: number, month: number, day: number) : Array<Titanium.Calendar.Event>;
			getEventsInMonth (year: number, month: number) : Array<Titanium.Calendar.Event>;
			getEventsInYear (year: number) : Array<Titanium.Calendar.Event>;
			getHidden () : boolean;
			getId () : string;
			getName () : string;
			getSelected () : boolean;
		}
		export interface Reminder extends Titanium.Proxy {
			id : string;
			method : number;
			minutes : number;
			getId () : string;
			getMethod () : number;
			getMinutes () : number;
		}
		export interface Event extends Titanium.Proxy {
			alerts : Array<Titanium.Calendar.Alert>;
			allDay : boolean;
			availability : number;
			begin : Date;
			description : string;
			end : Date;
			extendedProperties : Dictionary<Object>;
			hasAlarm : boolean;
			id : string;
			isDetached : boolean;
			location : string;
			notes : string;
			recurenceRule : Titanium.Calendar.RecurrenceRule;
			recurenceRules : Array<Titanium.Calendar.RecurrenceRule>;
			reminders : Array<Titanium.Calendar.Reminder>;
			status : number;
			title : string;
			visibility : number;
			addRecurrenceRule (rule: Titanium.Calendar.RecurrenceRule) : void;
			createAlert (data: Dictionary<Titanium.Calendar.Alert>) : Titanium.Calendar.Alert;
			createRecurenceRule (data: Dictionary<Titanium.Calendar.RecurrenceRule>) : Titanium.Calendar.RecurrenceRule;
			createReminder (data: Dictionary<Titanium.Calendar.Reminder>) : Titanium.Calendar.Reminder;
			getAlerts () : Array<Titanium.Calendar.Alert>;
			getAllDay () : boolean;
			getAvailability () : number;
			getBegin () : Date;
			getDescription () : string;
			getEnd () : Date;
			getExtendedProperties () : Dictionary<Object>;
			getExtendedProperty (name: string) : string;
			getHasAlarm () : boolean;
			getId () : string;
			getIsDetached () : boolean;
			getLocation () : string;
			getNotes () : string;
			getRecurenceRule () : Titanium.Calendar.RecurrenceRule;
			getRecurenceRules () : Array<Titanium.Calendar.RecurrenceRule>;
			getReminders () : Array<Titanium.Calendar.Reminder>;
			getStatus () : number;
			getTitle () : string;
			getVisibility () : number;
			refresh () : boolean;
			remove (span: number) : boolean;
			removeRecurenceRule (rule: Titanium.Calendar.RecurrenceRule) : void;
			save (span: number) : boolean;
			setAlerts (alerts: Array<Titanium.Calendar.Alert>) : void;
			setAllDay (allDay: boolean) : void;
			setBegin (begin: Date) : void;
			setEnd (end: Date) : void;
			setExtendedProperty (name: string, value: string) : void;
			setLocation (location: string) : void;
			setNotes (notes: string) : void;
			setRecurenceRule (recurenceRule: Titanium.Calendar.RecurrenceRule) : void;
			setRecurenceRules (recurenceRules: Array<Titanium.Calendar.RecurrenceRule>) : void;
			setTitle (title: string) : void;
		}
		export interface RecurrenceRule extends Titanium.Proxy {
			calendarID : string;
			daysOfTheMonth : Array<Number>;
			daysOfTheWeek : daysOfTheWeekDictionary;
			daysOfTheYear : Array<Number>;
			end : recurrenceEndDictionary;
			frequency : number;
			interval : number;
			monthsOfTheYear : Array<Number>;
			setPositions : Array<Number>;
			weeksOfTheYear : Array<Number>;
			getCalendarID () : string;
			getDaysOfTheMonth () : Array<Number>;
			getDaysOfTheWeek () : daysOfTheWeekDictionary;
			getDaysOfTheYear () : Array<Number>;
			getEnd () : recurrenceEndDictionary;
			getFrequency () : number;
			getInterval () : number;
			getMonthsOfTheYear () : Array<Number>;
			getSetPositions () : Array<Number>;
			getWeeksOfTheYear () : Array<Number>;
		}
		export interface Alert extends Titanium.Proxy {
			absoluteDate : Date;
			alarmTime : Date;
			begin : Date;
			end : Date;
			eventId : number;
			id : string;
			minutes : number;
			relativeOffset : number;
			state : number;
			getAbsoluteDate () : Date;
			getAlarmTime () : Date;
			getBegin () : Date;
			getEnd () : Date;
			getEventId () : number;
			getId () : string;
			getMinutes () : number;
			getRelativeOffset () : number;
			getState () : number;
			setAbsoluteDate (absoluteDate: Date) : void;
			setRelativeOffset (relativeOffset: number) : void;
		}
	}
	export module Map {
		export var ANNOTATION_DRAG_STATE_CANCEL : number;
		export var ANNOTATION_DRAG_STATE_DRAG : number;
		export var ANNOTATION_DRAG_STATE_END : number;
		export var ANNOTATION_DRAG_STATE_NONE : number;
		export var ANNOTATION_DRAG_STATE_START : number;
		export var ANNOTATION_GREEN : number;
		export var ANNOTATION_PURPLE : number;
		export var ANNOTATION_RED : number;
		export var HYBRID_TYPE : number;
		export var SATELLITE_TYPE : number;
		export var STANDARD_TYPE : number;
		export var TERRAIN_TYPE : number;
		export var bubbleParent : boolean;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function createAnnotation (parameters?: Dictionary<Titanium.Map.Annotation>) : Titanium.Map.Annotation;
		export function createView (parameters?: Dictionary<Titanium.Map.View>) : Titanium.Map.View;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function getBubbleParent () : boolean;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export interface View extends Titanium.UI.View {
			animated : boolean;
			annotations : Array<Titanium.Map.Annotation>;
			hideAnnotationWhenTouchMap : boolean;
			latitudeDelta : number;
			longitudeDelta : number;
			mapType : number;
			region : MapRegionType;
			regionFit : boolean;
			userLocation : boolean;
			addAnnotation (annotation: Dictionary<Titanium.Map.Annotation>) : void;
			addAnnotation (annotation: Titanium.Map.Annotation) : void;
			addAnnotations (annotations: Array<Titanium.Map.Annotation>) : void;
			addAnnotations (annotations: Array<Dictionary<Titanium.Map.Annotation>>) : void;
			addRoute (route: MapRouteType) : void;
			deselectAnnotation (annotation: string) : void;
			deselectAnnotation (annotation: Titanium.Map.Annotation) : void;
			getAnimate () : boolean;
			getAnimated () : boolean;
			getAnnotations () : Array<Titanium.Map.Annotation>;
			getHideAnnotationWhenTouchMap () : boolean;
			getLatitudeDelta () : number;
			getLongitudeDelta () : number;
			getMapType () : number;
			getRegion () : MapRegionType;
			getRegionFit () : boolean;
			getUserLocation () : boolean;
			removeAllAnnotations () : void;
			removeAnnotation (annotation: string) : void;
			removeAnnotation (annotation: Titanium.Map.Annotation) : void;
			removeAnnotations (annotations: Array<String>) : void;
			removeAnnotations (annotations: Array<Titanium.Map.Annotation>) : void;
			removeRoute (route: MapRouteType) : void;
			selectAnnotation (annotation: string) : void;
			selectAnnotation (annotation: Titanium.Map.Annotation) : void;
			setAnimate (animate: boolean) : void;
			setAnimated (animated: boolean) : void;
			setAnnotations (annotations: Array<Titanium.Map.Annotation>) : void;
			setHideAnnotationWhenTouchMap (hideAnnotationWhenTouchMap: boolean) : void;
			setLocation (location: MapLocationType) : void;
			setMapType (mapType: number) : void;
			setRegion (region: MapRegionType) : void;
			setRegionFit (regionFit: boolean) : void;
			setUserLocation (userLocation: boolean) : void;
			zoom (level: number) : void;
		}
		export interface Annotation extends Titanium.Proxy {
			animate : boolean;
			canShowCallout : boolean;
			centerOffset : Point;
			customView : Titanium.UI.View;
			draggable : boolean;
			image : any;
			latitude : number;
			leftButton : any;
			leftView : Titanium.UI.View;
			longitude : number;
			pinImage : string;
			pincolor : number;
			rightButton : any;
			rightView : Titanium.UI.View;
			subtitle : string;
			subtitleid : string;
			title : string;
			titleid : string;
			getAnimate () : boolean;
			getCanShowCallout () : boolean;
			getCenterOffset () : Point;
			getCustomView () : Titanium.UI.View;
			getDraggable () : boolean;
			getImage () : any;
			getLatitude () : number;
			getLeftButton () : any;
			getLeftView () : Titanium.UI.View;
			getLongitude () : number;
			getPinImage () : string;
			getPincolor () : number;
			getRightButton () : any;
			getRightView () : Titanium.UI.View;
			getSubtitle () : string;
			getSubtitleid () : string;
			getTitle () : string;
			getTitleid () : string;
			setAnimate (animate: boolean) : void;
			setCanShowCallout (canShowCallout: boolean) : void;
			setCenterOffset (centerOffset: Point) : void;
			setCustomView (customView: Titanium.UI.View) : void;
			setDraggable (draggable: boolean) : void;
			setImage (image: string) : void;
			setImage (image: Titanium.Blob) : void;
			setLatitude (latitude: number) : void;
			setLeftButton (leftButton: number) : void;
			setLeftButton (leftButton: string) : void;
			setLeftView (leftView: Titanium.UI.View) : void;
			setLongitude (longitude: number) : void;
			setPinImage (pinImage: string) : void;
			setPincolor (pincolor: number) : void;
			setRightButton (rightButton: number) : void;
			setRightButton (rightButton: string) : void;
			setRightView (rightView: Titanium.UI.View) : void;
			setSubtitle (subtitle: string) : void;
			setSubtitleid (subtitleid: string) : void;
			setTitle (title: string) : void;
			setTitleid (titleid: string) : void;
		}
	}
	export module Filesystem {
		export var MODE_APPEND : number;
		export var MODE_READ : number;
		export var MODE_WRITE : number;
		export var applicationCacheDirectory : string;
		export var applicationDataDirectory : string;
		export var applicationDirectory : string;
		export var applicationSupportDirectory : string;
		export var bubbleParent : boolean;
		export var externalStorageDirectory : string;
		export var lineEnding : string;
		export var resRawDirectory : string;
		export var resourcesDirectory : string;
		export var separator : string;
		export var tempDirectory : string;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function createTempDirectory () : Titanium.Filesystem.File;
		export function createTempFile () : Titanium.Filesystem.File;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function getApplicationCacheDirectory () : string;
		export function getApplicationDataDirectory () : string;
		export function getApplicationDirectory () : string;
		export function getApplicationSupportDirectory () : string;
		export function getBubbleParent () : boolean;
		export function getExternalStorageDirectory () : string;
		export function getFile (path: string) : Titanium.Filesystem.File;
		export function getLineEnding () : string;
		export function getResRawDirectory () : string;
		export function getResourcesDirectory () : string;
		export function getSeparator () : string;
		export function getTempDirectory () : string;
		export function isExternalStoragePresent () : boolean;
		export function openStream (mode: number, path: string) : Titanium.Filesystem.FileStream;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export interface File extends Titanium.Proxy {
			executable : boolean;
			hidden : boolean;
			name : string;
			nativePath : string;
			parent : Titanium.Filesystem.File;
			readonly : boolean;
			remoteBackup : boolean;
			size : number;
			symbolicLink : boolean;
			writable : boolean;
			writeable : boolean;
			append (data: string) : boolean;
			append (data: Titanium.Blob) : boolean;
			append (data: Titanium.Filesystem.File) : boolean;
			copy (destinationPath: string) : boolean;
			createDirectory () : boolean;
			createFile () : boolean;
			createTimestamp () : number;
			deleteDirectory (recursive?: boolean) : boolean;
			deleteFile () : boolean;
			exists () : boolean;
			extension () : string;
			getDirectoryListing () : Array<String>;
			getExecutable () : boolean;
			getHidden () : boolean;
			getName () : string;
			getNativePath () : string;
			getParent () : any;
			getReadonly () : boolean;
			getRemoteBackup () : boolean;
			getSize () : number;
			getSymbolicLink () : boolean;
			getWritable () : boolean;
			getWriteable () : boolean;
			isDirectory () : boolean;
			isFile () : boolean;
			modificationTimestamp () : number;
			move (newpath: string) : boolean;
			open (mode: number) : Titanium.Filesystem.FileStream;
			read () : Titanium.Blob;
			rename (newname: string) : boolean;
			resolve () : string;
			setHidden (hidden: boolean) : void;
			setRemoteBackup (remoteBackup: boolean) : void;
			spaceAvailable () : number;
			write (data: string, append?: boolean) : boolean;
			write (data: Titanium.Filesystem.File, append?: boolean) : boolean;
			write (data: Titanium.Blob, append?: boolean) : boolean;
		}
		export enum FileStream {

		}
	}
	export interface Yahoo  {
		yql (yql: string, callback: (...args : any[]) => any) : void;
	}
	export interface Gesture  {
		landscape : boolean;
		orientation : number;
		portrait : boolean;
		getLandscape () : boolean;
		getOrientation () : number;
		getPortrait () : boolean;
		isFaceDown () : boolean;
		isFaceUp () : boolean;
		isLandscape () : boolean;
		isPortrait () : boolean;
	}
	export interface Analytics  {
		lastEvent : string;
		addEvent (type: string, name: string, data?: any) : void;
		featureEvent (name: string, data?: any) : void;
		getLastEvent () : string;
		navEvent (from: string, to: string, name?: string, data?: any) : void;
		settingsEvent (name: string, data?: any) : void;
		timedEvent (name: string, start: Date, stop: Date, duration: number, data?: any) : void;
		userEvent (name: string, data?: any) : void;
	}
	export module Facebook {
		export var BUTTON_STYLE_NORMAL : number;
		export var BUTTON_STYLE_WIDE : number;
		export var accessToken : string;
		export var appid : string;
		export var bubbleParent : boolean;
		export var expirationDate : Date;
		export var forceDialogAuth : boolean;
		export var loggedIn : boolean;
		export var permissions : Array<String>;
		export var uid : string;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function authorize () : void;
		export function createLoginButton (parameters?: Dictionary<Titanium.Facebook.LoginButton>) : Titanium.Facebook.LoginButton;
		export function dialog (action: string, params: any, callback: (...args : any[]) => any) : void;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function getAccessToken () : string;
		export function getAppid () : string;
		export function getBubbleParent () : boolean;
		export function getExpirationDate () : Date;
		export function getForceDialogAuth () : boolean;
		export function getLoggedIn () : boolean;
		export function getPermissions () : Array<String>;
		export function getUid () : string;
		export function logout () : void;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function request (method: string, params: any, callback: (...args : any[]) => any) : void;
		export function requestWithGraphPath (path: string, params: Dictionary<Object>, httpMethod: string, callback: (...args : any[]) => any) : void;
		export function setAccessToken (accessToken: string) : void;
		export function setAppid (appid: string) : void;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export function setExpirationDate (expirationDate: Date) : void;
		export function setForceDialogAuth (forceDialogAuth: boolean) : void;
		export function setLoggedIn (loggedIn: boolean) : void;
		export function setPermissions (permissions: Array<String>) : void;
		export function setUid (uid: string) : void;
		export interface LoginButton extends Titanium.UI.View {
			style : string;
			getStyle () : string;
			setStyle (style: string) : void;
		}
	}
	export enum Accelerometer {

	}
	export interface Utils  {
		base64decode (obj: string) : Titanium.Blob;
		base64decode (obj: Titanium.Blob) : Titanium.Blob;
		base64encode (obj: string) : Titanium.Blob;
		base64encode (obj: Titanium.Blob) : Titanium.Blob;
		md5HexDigest (obj: string) : string;
		md5HexDigest (obj: Titanium.Blob) : string;
		sha1 (obj: string) : string;
		sha1 (obj: Titanium.Blob) : string;
		sha256 (obj: string) : string;
		sha256 (obj: Titanium.Blob) : string;
	}
	export interface Event  {
		bubbles : boolean;
		cancelBubble : boolean;
		source : any;
		type : string;
	}
	export interface Stream  {
		MODE_APPEND : number;
		MODE_READ : number;
		MODE_WRITE : number;
		createStream (params: CreateStreamArgs) : Titanium.IOStream;
		pump (inputStream: Titanium.IOStream, handler: (...args : any[]) => any, maxChunkSize: number, isAsync?: boolean) : void;
		read (sourceStream: Titanium.IOStream, buffer: Titanium.Buffer, offset?: number, length?: number, resultsCallback?: (...args : any[]) => any) : void;
		readAll (sourceStream: Titanium.IOStream, buffer?: Titanium.Buffer, resultsCallback?: (...args : any[]) => any) : any;
		write (outputStream: Titanium.IOStream, buffer: Titanium.Buffer, offset?: number, length?: number, resultsCallback?: (...args : any[]) => any) : void;
		writeStream (inputStream: Titanium.IOStream, outputStream: Titanium.IOStream, maxChunkSize: number, resultsCallback?: (...args : any[]) => any) : void;
	}
}

declare class Dictionary<Object>  {

}

declare class BarItemType  {
	accessibilityLabel : string;
	enabled : boolean;
	image : any;
	title : string;
	width : number;
}

declare class MatrixCreationDict  {
	anchorPoint : Dictionary<Object>;
	rotate : number;
	scale : number;
}

declare class TableViewIndexEntry  {
	index : number;
	title : string;
}

declare class FacebookRESTResponsev1  {
	error : string;
	method : string;
	result : string;
	success : boolean;
}

declare class MapRegionType  {
	latitude : number;
	latitudeDelta : number;
	longitude : number;
	longitudeDelta : number;
}

declare class CropRectType  {
	height : number;
	width : number;
	x : number;
	y : number;
}

declare class LocationResults extends ErrorResponse {
	coords : LocationCoordinates;
	provider : LocationProviderDict;
}

declare class ErrorResponse  {
	code : number;
	error : string;
	success : boolean;
}

declare enum CloudPushNotificationsResponse {

}

declare class CloudResponse  {
	code : number;
	error : boolean;
	message : string;
	meta : Dictionary<Object>;
	success : boolean;
}

declare class recurrenceEndDictionary  {
	endDate : Date;
	occurrenceCount : number;
}

declare module Global {
	export function L (key: string, hint?: string) : string;
	export function alert (message: string) : void;
	export function clearInterval (timerId: number) : void;
	export function clearTimeout (timerId: number) : void;
	export function decodeURIComponent (encodedURI: string) : string;
	export function encodeURIComponent (string: string) : string;
	export function require (moduleId: string) : any;
	export function setInterval (_function: (...args : any[]) => any, delay: number) : number;
	export function setTimeout (_function: (...args : any[]) => any, delay: number) : number;
	export interface console  {
		debug (message: any) : void;
		error (message: any) : void;
		info (message: any) : void;
		log (message: any) : void;
		warn (message: any) : void;
	}
	export interface String  {
		format (formatString: string, value: string) : string;
		format (formatString: string, value: number) : string;
		formatCurrency (value: number) : string;
		formatDate (date: Date, format?: string) : string;
		formatDecimal (value: number, locale?: string, pattern?: string) : string;
		formatTime (date: Date, format?: string) : string;
	}
	export interface JSON  {
		parse (text: string, reviver: (...args : any[]) => any) : any;
		stringify (value: any, replacer?: (...args : any[]) => any, space?: number) : string;
		stringify (value: any, replacer?: Array<String>, space?: string) : string;
		stringify (value: any, replacer?: Array<String>, space?: number) : string;
		stringify (value: any, replacer?: (...args : any[]) => any, space?: string) : string;
	}
}

declare class ServiceIntentOptions  {
	startMode : number;
	url : string;
}

declare class AcceptedCallbackArgs  {
	inbound : Titanium.Network.Socket.TCP;
	socket : Titanium.Network.Socket.TCP;
}

declare class HeadingData  {
	accuracy : number;
	magneticHeading : number;
	timestamp : number;
	trueHeading : number;
	x : number;
	y : number;
	z : number;
}

declare class FacebookGraphResponsev1  {
	error : string;
	path : string;
	result : string;
	success : boolean;
}

declare class textAreaSelectedParams  {
	length : number;
	location : number;
}

declare class ThumbnailResponse extends ErrorResponse {
	image : Titanium.Blob;
	time : number;
}

declare class Dimension  {
	height : number;
	width : number;
	x : number;
	y : number;
}

declare class ReadCallbackArgs extends ErrorResponse {
	bytesProcessed : number;
	errorDescription : string;
	errorState : number;
	source : Titanium.IOStream;
}

declare class CloudACLsCheckResponse extends CloudResponse {
	permission : Dictionary<Object>;
}

declare class ViewTemplate  {
	bindId : string;
	childTemplates : Array<ViewTemplate>;
	events : Dictionary<Object>;
	properties : Dictionary<Object>;
	type : string;
}

declare class CloudChatsResponse extends CloudResponse {
	chats : Array<Dictionary<Object>>;
}

declare class MediaQueryType  {
	albumArtist : any;
	albumTitle : any;
	artist : any;
	composer : any;
	genre : any;
	grouping : number;
	isCompilation : any;
	mediaType : any;
	title : any;
}

declare class WebAPIError  {
	code : number;
	message : string;
	name : string;
}

declare class DocumentViewerOptions  {
	animated : boolean;
	view : Titanium.UI.View;
}

declare class ListViewAnimationProperties  {
	animated : boolean;
	animationStyle : number;
	position : number;
}

declare class DataCallbackArgs  {
	address : string;
	bytesData : Array<Number>;
	port : string;
	stringData : string;
}

declare class CloudPushNotificationErrorArg  {
	error : string;
}

declare class ScreenshotResult  {
	media : Titanium.Blob;
}

declare class YQLResponse extends ErrorResponse {
	data : any;
	message : string;
}

declare class ForwardGeocodeResponse extends ErrorResponse {
	accuracy : number;
	address : string;
	city : string;
	country : string;
	countryCode : string;
	country_code : string;
	displayAddress : string;
	latitude : string;
	longitude : string;
	postalCode : string;
	region1 : string;
	region2 : string;
	street : string;
	street1 : string;
}

declare class CloudEventsResponse extends CloudResponse {
	events : Array<Dictionary<Object>>;
}

declare class ErrorCallbackArgs  {
	errorCode : number;
	socket : Titanium.Network.Socket.TCP;
}

declare enum FailureResponse {

}

declare class WriteCallbackArgs extends ErrorResponse {
	bytesProcessed : number;
	errorDescription : string;
	errorState : number;
	source : Titanium.IOStream;
}

declare class CloudPushNotificationSuccessArg  {
	deviceToken : string;
}

declare class MapLocationType  {
	animate : boolean;
	latitude : number;
	latitudeDelta : number;
	longitude : number;
	longitudeDelta : number;
	regionFit : boolean;
}

declare class DecodeStringDict  {
	charset : string;
	length : number;
	position : number;
	source : Titanium.Buffer;
}

declare class ListViewContentInsetOption  {
	animated : boolean;
	duration : number;
}

declare class CreateStreamArgs  {
	mode : number;
	source : any;
}

declare enum ContactsAuthorizationResponse {

}

declare class CloudCheckinsResponse extends CloudResponse {
	checkins : Array<Dictionary<Object>>;
}

declare class CreateBufferArgs  {
	byteOrder : number;
	length : number;
	type : string;
	value : any;
}

declare class CloudPushNotificationConfig  {
	error : (...args : any[]) => any;
	success : (...args : any[]) => any;
}

declare class CloudReviewsResponse extends CloudResponse {
	reviews : Array<Dictionary<Object>>;
}

declare class Point  {
	x : number;
	y : number;
}

declare class CloudPhotosResponse extends CloudResponse {
	photos : Array<Dictionary<Object>>;
}

declare class PushNotificationConfig  {
	callback : (...args : any[]) => any;
	error : (...args : any[]) => any;
	success : (...args : any[]) => any;
	types : Array<Number>;
}

declare class MapRouteType  {
	color : string;
	name : string;
	points : Array<MapPointType>;
	width : number;
}

declare class AcceptDict  {
	error : (...args : any[]) => any;
	timeout : number;
}

declare class MediaQueryInfoType  {
	exact : boolean;
	value : any;
}

declare class PumpCallbackArgs extends ErrorResponse {
	buffer : Titanium.Buffer;
	bytesProcessed : number;
	errorDescription : string;
	errorState : number;
	source : Titanium.IOStream;
	totalBytesProcessed : number;
}

declare class MusicLibraryOptionsType  {
	allowMultipleSelections : boolean;
	animated : boolean;
	autohide : boolean;
	cancel : (...args : any[]) => any;
	error : (...args : any[]) => any;
	mediaTypes : any;
	success : (...args : any[]) => any;
}

declare class launchOptions  {
	launchOptionsLocationKey : boolean;
	source : string;
	url : string;
}

declare class WriteStreamCallbackArgs extends ErrorResponse {
	bytesProcessed : number;
	errorDescription : string;
	errorState : number;
	fromStream : Titanium.IOStream;
	toStream : Titanium.IOStream;
}

declare class CloudChatGroupsResponse extends CloudResponse {
	chat_groups : Array<Dictionary<Object>>;
}

declare class CloudPhotoCollectionsPhotosResponse extends CloudResponse {
	photos : Array<Dictionary<Object>>;
}

declare class DecodeNumberDict  {
	byteOrder : number;
	position : number;
	source : Titanium.Buffer;
	type : string;
}

declare class ConnectedCallbackArgs  {
	socket : Titanium.Network.Socket.TCP;
}

declare class CloudPhotoCollectionsResponse extends CloudResponse {
	collections : Array<Dictionary<Object>>;
}

declare class CloudObjectsResponse extends CloudResponse {
	classname : Array<Dictionary<Object>>;
}

declare class MediaScannerResponse  {
	path : string;
	uri : string;
}

declare class CloudPostsResponse extends CloudResponse {
	posts : Array<Dictionary<Object>>;
}

declare class CloudSocialIntegrationsResponse extends CloudResponse {
	users : Array<Dictionary<Object>>;
}

declare class CameraOptionsType  {
	allowEditing : boolean;
	animated : boolean;
	arrowDirection : number;
	autohide : boolean;
	cancel : (...args : any[]) => any;
	error : (...args : any[]) => any;
	inPopOver : boolean;
	mediaTypes : Array<String>;
	overlay : Titanium.UI.View;
	popoverView : Titanium.UI.View;
	saveToPhotoGallery : boolean;
	showControls : boolean;
	success : (...args : any[]) => any;
	transform : Titanium.UI._2DMatrix;
	videoMaximumDuration : number;
	videoQuality : number;
}

declare class ListViewIndexEntry  {
	index : number;
	title : string;
}

declare class CloudStreamProgress  {
	progress : number;
	url : string;
}

declare class MusicLibraryResponseType  {
	items : Array<Titanium.Media.Item>;
	representative : Titanium.Media.Item;
	types : number;
}

declare class CloudEventOccurrencesResponse extends CloudResponse {
	event_occurrences : Array<Dictionary<Object>>;
}

declare class CloudUsersResponse extends CloudResponse {
	users : Array<Dictionary<Object>>;
}

declare class TableViewContentInsetOption  {
	animated : boolean;
	duration : number;
}

declare class CloudFriendRequestsResponse extends CloudResponse {
	friend_requests : Array<Dictionary<Object>>;
}

declare class CloudACLsResponse extends CloudResponse {
	acls : Array<Dictionary<Object>>;
}

declare class ListViewMarkerProps  {
	itemIndex : number;
	sectionIndex : number;
}

declare class EventsAuthorizationResponse  {
	code : number;
	error : string;
	success : boolean;
}

declare class PlayerQueue  {
	items : Array<Titanium.Media.Item>;
}

declare class CoverFlowImageType  {
	height : number;
	image : any;
	width : number;
}

declare class BroadcastIntentOptions  {
	action : string;
	className : string;
	data : string;
	flags : number;
	packageName : string;
	url : string;
}

declare class CloudUsersSecureResponse extends CloudResponse {
	accessToken : string;
	expiresIn : number;
}

declare class CloudClientsResponse extends CloudResponse {
	ip_address : string;
	location : Dictionary<Object>;
}

declare class PushNotificationErrorArg  {
	type : string;
}

declare class CloudStatusesResponse extends CloudResponse {
	statuses : Array<Dictionary<Object>>;
}

declare class windowToolbarParam  {
	animated : boolean;
	barColor : string;
	tintColor : string;
	translucent : boolean;
}

declare class GeocodedAddress  {
	address : string;
	city : string;
	country : string;
	countryCode : string;
	country_code : string;
	displayAddress : string;
	latitude : string;
	longitude : string;
	postalCode : string;
	region1 : string;
	region2 : string;
	street : string;
	street1 : string;
	zipcode : string;
}

declare class ContactsCallbackArgs extends ErrorResponse {
	data : Array<Titanium.Contacts.Person>;
}

declare class zoomScaleOption  {
	animated : boolean;
}

declare class LocationCoordinates  {
	accuracy : number;
	altitude : number;
	altitudeAccuracy : number;
	heading : number;
	latitude : number;
	longitude : number;
	speed : number;
	timestamp : number;
}

declare class ActivityResult  {
	intent : Titanium.Android.Intent;
	requestCode : number;
	resultCode : number;
}

declare class CloudUsersSecureDialog  {
	title : string;
}

declare class CloudFriendsResponse extends CloudResponse {
	users : Array<Dictionary<Object>>;
}

declare class PhotoGalleryOptionsType  {
	allowEditing : boolean;
	animated : boolean;
	arrowDirection : number;
	autohide : boolean;
	cancel : (...args : any[]) => any;
	error : (...args : any[]) => any;
	mediaTypes : Array<String>;
	popoverView : Titanium.UI.View;
	success : (...args : any[]) => any;
}

declare class NotificationParams  {
	alertAction : string;
	alertBody : string;
	alertLaunchImage : string;
	badge : number;
	date : Date;
	repeat : string;
	sound : string;
	timezone : string;
	userInfo : Dictionary<Object>;
}

declare enum SuccessResponse {

}

declare class daysOfTheWeekDictionary  {
	daysOfWeek : number;
	week : number;
}

declare class Modules  {

}

declare class hideStatusBarParams  {
	animated : boolean;
	animationStyle : number;
}

declare class ListDataItem  {
	properties : Dictionary<Titanium.UI.ListItem>;
	template : any;
}

declare class ItemTemplate  {
	childTemplates : Array<ViewTemplate>;
	events : Dictionary<Object>;
	properties : Dictionary<Titanium.UI.ListItem>;
}

declare class MovieSize  {
	height : number;
	width : number;
}

declare class CameraMediaItemType  {
	cropRect : CropRectType;
	media : Titanium.Blob;
	mediaType : string;
}

declare class HeadingResponse extends ErrorResponse {
	heading : HeadingData;
}

declare class ListViewEdgeInsets  {
	bottom : number;
	left : number;
	right : number;
	top : number;
}

declare enum CloudEmailsResponse {

}

declare class GradientColorRef  {
	color : string;
	offset : number;
}

declare class Font  {
	fontFamily : string;
	fontSize : any;
	fontStyle : string;
	fontWeight : string;
}

declare class CloudPlacesResponse extends CloudResponse {
	places : Array<Dictionary<Object>>;
}

declare class EncodeNumberDict  {
	byteOrder : number;
	dest : Titanium.Buffer;
	position : number;
	source : number;
	type : string;
}

declare class showContactsParams  {
	animated : boolean;
	cancel : (...args : any[]) => any;
	fields : Array<String>;
	selectedPerson : (...args : any[]) => any;
	selectedProperty : (...args : any[]) => any;
}

declare class LocationProviderDict  {
	accuracy : number;
	name : string;
	power : number;
}

declare class FacebookDialogResponsev1  {
	cancelled : boolean;
	error : string;
	result : string;
	success : boolean;
}

declare class CloudFilesResponse extends CloudResponse {
	files : Array<Dictionary<Object>>;
}

declare class hideParams  {
	animated : boolean;
}

declare class openWindowParams  {
	activityEnterAnimation : number;
	activityExitAnimation : number;
	animated : boolean;
	bottom : any;
	fullscreen : boolean;
	height : any;
	left : any;
	modal : boolean;
	modalStyle : number;
	modalTransitionStyle : number;
	navBarHidden : boolean;
	right : any;
	top : any;
	transition : number;
	width : any;
}

declare class Gradient  {
	backfillEnd : boolean;
	backfillStart : boolean;
	colors : any;
	endPoint : Point;
	endRadius : number;
	startPoint : Point;
	startRadius : number;
	type : string;
}

declare class showStatusBarParams  {
	animated : boolean;
	animationStyle : number;
}

declare class MapPointType  {
	latitude : number;
	longitude : number;
}

declare class CloudKeyValuesResponse extends CloudResponse {
	keyvalues : Array<Dictionary<Object>>;
}

declare class TableViewEdgeInsets  {
	bottom : number;
	left : number;
	right : number;
	top : number;
}

declare class ReverseGeocodeResponse extends ErrorResponse {
	places : Array<GeocodedAddress>;
}

declare class PushNotificationSuccessArg  {
	deviceToken : string;
	type : string;
}

declare class PushNotificationData  {
	data : Dictionary<Object>;
	inBackground : boolean;
}

declare class closeWindowParams  {
	activityEnterAnimation : number;
	activityExitAnimation : number;
	animated : boolean;
}

declare class showParams  {
	animated : boolean;
	rect : Dictionary<Object>;
	view : Titanium.UI.View;
}

declare class PreviewImageError  {
	message : string;
}

declare class CloudMessagesResponse extends CloudResponse {
	messages : Array<Dictionary<Object>>;
}

declare class ImageAsCroppedDict  {
	height : number;
	width : number;
	x : number;
	y : number;
}

declare class PreviewImageOptions  {
	error : (...args : any[]) => any;
	image : Titanium.Blob;
	success : (...args : any[]) => any;
}

declare class contentOffsetOption  {
	animated : boolean;
}

declare class TableViewAnimationProperties  {
	animated : boolean;
	animationStyle : number;
	position : number;
}

declare enum MediaAuthorizationResponse {

}

declare class EncodeStringDict  {
	charset : string;
	dest : Titanium.Buffer;
	destPosition : number;
	source : string;
	sourceLength : number;
	sourcePosition : number;
}

