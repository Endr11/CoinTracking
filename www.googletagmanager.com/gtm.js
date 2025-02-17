// Copyright 2012 Google Inc. All rights reserved.

(function(w, g) {
    w[g] = w[g] || {};
    w[g].e = function(s) {
        return eval(s);
    };
})(window, 'google_tag_manager');

(function() {

    var data = {
        "resource": {
            "version": "39",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-254948606-1",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__v",
                "vtp_name": "gtm.triggers",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ""
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__awec",
                "vtp_mode": "AUTO",
                "vtp_enableElementBlocking": false
            }, {
                "function": "__u",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__cvt_101243939_77"
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video_percent"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video_title"
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "s2",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.getElementsByTagName(\"video\").length;return 0\u003Ca?!0:!1})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video_status"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video_provider"
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementTarget",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementTarget",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoProvider",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoTitle",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoPercent",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoStatus",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoCurrentTime",
                "vtp_dataLayerVersion": 1
            }],
            "tags": [{
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_overrideGaSettings": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 4
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 5
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 7
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "lead",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 1],
                "vtp_eventAction": "lead",
                "vtp_eventLabel": "lead",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 14
            }, {
                "function": "__googtag",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_tagId": "G-DD066XMF9M",
                "vtp_configSettingsTable": ["list", ["map", "parameter", "send_page_view", "parameterValue", "true"]],
                "tag_id": 15
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_userDataVariable": ["macro", 5],
                "vtp_sendEcommerceData": false,
                "vtp_enhancedUserId": true,
                "vtp_eventName": "wizard_form_submit",
                "vtp_measurementIdOverride": "G-DD066XMF9M",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 18
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_userDataVariable": ["macro", 5],
                "vtp_sendEcommerceData": false,
                "vtp_enhancedUserId": true,
                "vtp_eventName": "lead_form_submit",
                "vtp_measurementIdOverride": "G-DD066XMF9M",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 20
            }, {
                "function": "__gclidw",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableCrossDomain": false,
                "vtp_enableUrlPassthrough": false,
                "vtp_enableCookieOverrides": false,
                "tag_id": 24
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "11065641904",
                "vtp_conversionLabel": "uO_2CObLpeEYELCXwZwp",
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 26
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "11065641904",
                "vtp_conversionLabel": "iiHOCOnLpeEYELCXwZwp",
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 28
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "11065641904",
                "vtp_conversionLabel": "9-x5COzLpeEYELCXwZwp",
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 30
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_sendEcommerceData": false,
                "vtp_enhancedUserId": false,
                "vtp_eventName": "wizard_step1",
                "vtp_measurementIdOverride": "G-DD066XMF9M",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 37
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_sendEcommerceData": false,
                "vtp_enhancedUserId": false,
                "vtp_eventName": "wizard_step2",
                "vtp_measurementIdOverride": "G-DD066XMF9M",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 38
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_sendEcommerceData": false,
                "vtp_enhancedUserId": false,
                "vtp_eventName": "wizard_step3",
                "vtp_measurementIdOverride": "G-DD066XMF9M",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 39
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_sendEcommerceData": false,
                "vtp_enhancedUserId": false,
                "vtp_eventName": "wizard_step4",
                "vtp_measurementIdOverride": "G-DD066XMF9M",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 40
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_sendEcommerceData": false,
                "vtp_enhancedUserId": false,
                "vtp_eventName": "wizard_step5",
                "vtp_measurementIdOverride": "G-DD066XMF9M",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 41
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_userDataVariable": ["macro", 5],
                "vtp_sendEcommerceData": false,
                "vtp_enhancedUserId": true,
                "vtp_eventName": "wizard_completion",
                "vtp_measurementIdOverride": "G-DD066XMF9M",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 43
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "11065641904",
                "vtp_conversionLabel": "S2FDCJbrg5EZELCXwZwp",
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 44
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "11065641904",
                "vtp_conversionLabel": "FobDCIymiZEZELCXwZwp",
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 45
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "11065641904",
                "vtp_conversionLabel": "9vDwCIioiZEZELCXwZwp",
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 46
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "11065641904",
                "vtp_conversionLabel": "LFbbCJbEkJEZELCXwZwp",
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 47
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "11065641904",
                "vtp_conversionLabel": "OtlsCLDGkJEZELCXwZwp",
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 48
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": true,
                "vtp_cssProvidedEnhancedConversionValue": ["macro", 5],
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "11065641904",
                "vtp_conversionLabel": "ol6vCNP7g5EZELCXwZwp",
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 49
            }, {
                "function": "__cvt_101243939_51",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": "303965677195893",
                "vtp_standardEventName": "PageView",
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "standard",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_advancedMatching": false,
                "tag_id": 52
            }, {
                "function": "__cvt_101243939_51",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": "303965677195893",
                "vtp_eventId": ["macro", 8],
                "vtp_standardEventName": "Lead",
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "standard",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_advancedMatching": false,
                "tag_id": 53
            }, {
                "function": "__cvt_101243939_51",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": "303965677195893",
                "vtp_eventId": ["macro", 8],
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "custom",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_customEventName": "step_1",
                "vtp_consent": true,
                "vtp_advancedMatching": false,
                "tag_id": 54
            }, {
                "function": "__cvt_101243939_51",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": "303965677195893",
                "vtp_eventId": ["macro", 8],
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "custom",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_customEventName": "step_2",
                "vtp_consent": true,
                "vtp_advancedMatching": false,
                "tag_id": 55
            }, {
                "function": "__cvt_101243939_51",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": "303965677195893",
                "vtp_eventId": ["macro", 8],
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "custom",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_customEventName": "step_3",
                "vtp_consent": true,
                "vtp_advancedMatching": false,
                "tag_id": 56
            }, {
                "function": "__cvt_101243939_51",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": "303965677195893",
                "vtp_eventId": ["macro", 8],
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "custom",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_customEventName": "step_4",
                "vtp_consent": true,
                "vtp_advancedMatching": false,
                "tag_id": 57
            }, {
                "function": "__cvt_101243939_51",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": "303965677195893",
                "vtp_eventId": ["macro", 8],
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "custom",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_customEventName": "step_5",
                "vtp_consent": true,
                "vtp_advancedMatching": false,
                "tag_id": 58
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_enhancedUserId": false,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "click_text", "parameterValue", ["macro", 10]]],
                "vtp_eventName": "qa_click",
                "vtp_measurementIdOverride": "G-DD066XMF9M",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 60
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_enhancedUserId": false,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "video_title", "parameterValue", ["macro", 12]],
                    ["map", "parameter", "video_percent", "parameterValue", ["macro", 11]]
                ],
                "vtp_eventName": ["template", "video_", ["macro", 11]],
                "vtp_measurementIdOverride": "G-DD066XMF9M",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 72
            }, {
                "function": "__cvt_101243939_51",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": "303965677195893",
                "vtp_eventId": ["macro", 8],
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "custom",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_customEventName": ["template", "video_", ["macro", 11]],
                "vtp_consent": true,
                "vtp_advancedMatching": false,
                "tag_id": 73
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_sendEcommerceData": false,
                "vtp_enhancedUserId": false,
                "vtp_eventName": "start_wizard_click",
                "vtp_measurementIdOverride": "G-DD066XMF9M",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": true,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 81
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": ".elementor-message.elementor-message-success",
                "vtp_firingFrequency": "MANY_PER_ELEMENT",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "101243939_6",
                "tag_id": 82
            }, {
                "function": "__fsl",
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "101243939_17",
                "tag_id": 83
            }, {
                "function": "__fsl",
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "101243939_19",
                "tag_id": 84
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": "div.elementor-message.elementor-message-success",
                "vtp_firingFrequency": "ONCE_PER_ELEMENT",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "101243939_25",
                "tag_id": 85
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "101243939_27",
                "tag_id": 86
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "101243939_29",
                "tag_id": 87
            }, {
                "function": "__cl",
                "tag_id": 88
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "101243939_59",
                "tag_id": 89
            }, {
                "function": "__cl",
                "tag_id": 90
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "101243939_80",
                "tag_id": 91
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003Etwq(\"event\",\"tw-odoq4-odoql\",{});\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 10
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"https:\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"config\",\"odoq4\");\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 11
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(a,b){if(!a.rdt){var c=a.rdt=function(){c.sendEvent?c.sendEvent.apply(c,arguments):c.callQueue.push(arguments)};c.callQueue=[];a=b.createElement(\"script\");a.src=\"https:\/\/www.redditstatic.com\/ads\/pixel.js\";a.async=!0;b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}}(window,document);rdt(\"init\",\"t2_sn9kbsu0\",{optOut:!1,useDecimalCurrencyValues:!0,aaid:\"\\x3cAAID-HERE\\x3e\",email:\"\\x3cEMAIL-HERE\\x3e\",externalId:\"\\x3cEXTERNAL-ID-HERE\\x3e\",idfa:\"\\x3cIDFA-HERE\\x3e\"});\nrdt(\"track\",\"PageVisit\");\u003C\/script\u003E\n\n\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 12
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Erdt(\"track\",\"SignUp\",{currency:\"USD\",transactionId:\"12345678\",value:100});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 13
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cmeta data-fr-http-equiv=\"delegate-ch\" content=\"sec-ch-ua https:\/\/coospeliturissue.com; sec-ch-ua-mobile https:\/\/coospeliturissue.com; sec-ch-ua-arch https:\/\/coospeliturissue.com; sec-ch-ua-model https:\/\/coospeliturissue.com; sec-ch-ua-platform https:\/\/coospeliturissue.com; sec-ch-ua-platform-version https:\/\/coospeliturissue.com; sec-ch-ua-bitness https:\/\/coospeliturissue.com; sec-ch-ua-full-version-list https:\/\/coospeliturissue.com; sec-ch-ua-full-version https:\/\/coospeliturissue.com\"\u003E\u003Cstyle\u003E.dtpcnt{opacity: 0;}\u003C\/style\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,g,r,c,n,t,h,k,l,d,p,f,q){q=\"https:\"===a.location.protocol?\"secure; \":\"\";a[c]||(a[c]=function(e){a[c].state.callbackQueue.push(e)},a[c].state={callbackQueue:[]},a[c].registerConversion=function(e){a[c].state.callbackQueue.push(e)},function(){(l=\/[?\u0026]cpid(=([^\u0026#]*)|\u0026|#|$)\/.exec(a.location.href))\u0026\u0026l[2]\u0026\u0026(d=l[2],p=b.cookie.match(new RegExp(\"(^| )vl-\"+d+\"\\x3d([^;]+)\")));var e=b.cookie.match(\/(^| )vl-cid=([^;]+)\/),m;\"savedCid\"!==t||!e||d\u0026\u0026\"undefined\"!==typeof d||(m=e.pop());h=b.createElement(\"script\");\nk=b.scripts[0];h.src=n+(-1===n.indexOf(\"?\")?\"?\":\"\\x26\")+\"oref\\x3d\"+g(b.referrer)+\"\\x26ourl\\x3d\"+g(location[r])+\"\\x26opt\\x3d\"+g(b.title)+\"\\x26vtm\\x3d\"+(new Date).getTime()+(m?\"\\x26cid\\x3d\"+m:\"\")+(p?\"\\x26uw\\x3dno\":\"\");k.parentNode.insertBefore(h,k);d\u0026\u0026(f=new Date,f.setTime(f.getTime()+864E5),b.cookie=\"vl-\"+d+\"\\x3d1; \"+q+\"samesite\\x3dStrict; expires\\x3d\"+f.toGMTString()+\"; path\\x3d\/\")}())})(window,document,encodeURIComponent,\"href\",\"dtpCallback\",\"https:\/\/coospeliturissue.com\/d\/.js\",\"savedCid\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Clink href=\"https:\/\/coospeliturissue.com\/d\/.js?noscript=true\u0026amp;ourl=\" rel=\"stylesheet\"\u003E\u003C\/noscript\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 21
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b){a=\"https:\/\/coospeliturissue.com\/conversion.js?cid\\x3d", ["escape", ["macro", 13], 7], "\\x26payout\\x3dOPTIONAL\\x26txid\\x3dOPTIONAL\";var c=b.createElement(\"script\"),d=b.scripts[0];if(b=b.cookie.match(\/(^| )vl-cid=([^;]+)\/))if(-1\u003Ca.indexOf(\"cid\\x3d\"))a=a.replace(\/cid=.*?(\u0026|$)\/,\"cid\\x3d\"+b.pop()+\"\\x26\");else{var e=-1\u003Ca.indexOf(\"?\")?\"\\x26\":\"?\";a+=e+\"cid\\x3d\"+b.pop()}c.src=a;d.parentNode.insertBefore(c,d)})(window,document);\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 22
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function f(a){switch(a.type){case \"timeupdate\":b[a.target.id].current=Math.round(a.target.currentTime);var k=Math.floor(100*b[a.target.id].current\/a.target.duration),g;for(g in b[a.target.id]._progress_markers)k\u003E=g\u0026\u0026g\u003Eb[a.target.id].greatest_marker\u0026\u0026(b[a.target.id].greatest_marker=g);b[a.target.id].greatest_marker\u0026\u0026!b[a.target.id]._progress_markers[b[a.target.id].greatest_marker]\u0026\u0026(b[a.target.id]._progress_markers[b[a.target.id].greatest_marker]=!0,dataLayer.push({event:\"video\",video_status:\"progress\",\nvideo_provider:\"generic html5 video player\",video_percent:b[a.target.id].greatest_marker,video_title:decodeURIComponent(a.target.currentSrc.split(\"\/\")[a.target.currentSrc.split(\"\/\").length-1])}));break;case \"play\":dataLayer.push({event:\"video\",video_status:\"play\",video_provider:\"generic html5 video player\",video_percent:b[a.target.id].greatest_marker,video_title:decodeURIComponent(a.target.currentSrc.split(\"\/\")[a.target.currentSrc.split(\"\/\").length-1])});break;case \"pause\":\"75\"\u003Eb[a.target.id].greatest_marker\u0026\u0026\ndataLayer.push({event:\"video\",video_status:\"pause\",video_provider:\"generic html5 video player\",video_percent:b[a.target.id].greatest_marker,video_title:decodeURIComponent(a.target.currentSrc.split(\"\/\")[a.target.currentSrc.split(\"\/\").length-1])});break;case \"ended\":dataLayer.push({event:\"video\",video_status:\"complete\",video_provider:\"generic html5 video player\",video_percent:\"100\",video_title:decodeURIComponent(a.target.currentSrc.split(\"\/\")[a.target.currentSrc.split(\"\/\").length-1])})}}for(var h=25,\nb={},d=document.getElementsByTagName(\"video\"),c=0;c\u003Cd.length;c++){if(d[c].getAttribute(\"id\"))var e=d[c].getAttribute(\"id\");else e=\"html5_video_\"+Math.random().toString(36).slice(2),d[c].setAttribute(\"id\",e);b[e]={};b[e].greatest_marker=0;b[e]._progress_markers={};for(j=0;100\u003Ej;j++)b[e].progress_point=h*Math.floor(j\/h),b[e]._progress_markers[b[e].progress_point]=!1;b[e].current=0;d[c].addEventListener(\"play\",f,!1);d[c].addEventListener(\"pause\",f,!1);d[c].addEventListener(\"ended\",f,!1);d[c].addEventListener(\"timeupdate\",\nf,!1);d[c].addEventListener(\"ended\",f,!1)}})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 63
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.elementVisibility"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)101243939_6($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 3],
                "arg1": "6% Which scenario best describes your case?"
            }, {
                "function": "_cn",
                "arg0": ["macro", 4],
                "arg1": "\/"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.formSubmit"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)101243939_17($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 3],
                "arg1": "Country Afghanistan Albania Algeria American Samoa"
            }, {
                "function": "_eq",
                "arg0": ["macro", 4],
                "arg1": "\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)101243939_19($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)101243939_25($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 7],
                "arg1": "tel:"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.linkClick"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)101243939_27($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 7],
                "arg1": "mailto:"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)101243939_29($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "step1_wizard"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "step2_wizard"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "step3_wizard"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "step4_wizard"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "step5_wizard"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "wizard_complition"
            }, {
                "function": "_eq",
                "arg0": ["macro", 9],
                "arg1": "elementor-toggle-title"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)101243939_59($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.click"
            }, {
                "function": "_re",
                "arg0": ["macro", 11],
                "arg1": "25|50|75|100"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "video"
            }, {
                "function": "_eq",
                "arg0": ["macro", 10],
                "arg1": "START WIZARD"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)101243939_80($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 14],
                "arg1": "true"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.load"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0, 1, 4, 7, 23, 45, 46, 48, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43]
                ],
                [
                    ["if", 1, 2],
                    ["add", 2, 3, 44, 47]
                ],
                [
                    ["if", 3, 4, 5, 6],
                    ["add", 5, 49]
                ],
                [
                    ["if", 5, 7, 8, 9],
                    ["add", 6]
                ],
                [
                    ["if", 1, 10],
                    ["add", 8]
                ],
                [
                    ["if", 11, 12, 13],
                    ["add", 9]
                ],
                [
                    ["if", 12, 14, 15],
                    ["add", 10]
                ],
                [
                    ["if", 16],
                    ["add", 11, 17, 25]
                ],
                [
                    ["if", 17],
                    ["add", 12, 18, 26]
                ],
                [
                    ["if", 18],
                    ["add", 13, 19, 27]
                ],
                [
                    ["if", 19],
                    ["add", 14, 20, 28]
                ],
                [
                    ["if", 20],
                    ["add", 15, 21, 29]
                ],
                [
                    ["if", 21],
                    ["add", 16, 22, 24]
                ],
                [
                    ["if", 12, 22, 23],
                    ["add", 30]
                ],
                [
                    ["if", 22, 24],
                    ["add", 30]
                ],
                [
                    ["if", 25, 26],
                    ["add", 31, 32]
                ],
                [
                    ["if", 12, 27, 28],
                    ["add", 33]
                ],
                [
                    ["if", 29, 30],
                    ["add", 50]
                ]
            ]
        },
        "runtime": [
            [50, "__cvt_101243939_51", [46, "a"],
                [52, "b", ["require", "createQueue"]],
                [52, "c", ["require", "callInWindow"]],
                [52, "d", ["require", "aliasInWindow"]],
                [52, "e", ["require", "copyFromWindow"]],
                [52, "f", ["require", "setInWindow"]],
                [52, "g", ["require", "injectScript"]],
                [52, "h", ["require", "makeTableMap"]],
                [52, "i", ["require", "makeNumber"]],
                [52, "j", ["require", "getType"]],
                [52, "k", ["require", "copyFromDataLayer"]],
                [52, "l", ["require", "Math"]],
                [52, "m", ["require", "logToConsole"]],
                [52, "n", [30, ["e", "_fbq_gtm_ids"],
                    [7]
                ]],
                [52, "o", [17, [15, "a"], "pixelId"]],
                [52, "p", [7, "AddPaymentInfo", "AddToCart", "AddToWishlist", "CompleteRegistration", "Contact", "CustomizeProduct", "Donate", "FindLocation", "InitiateCheckout", "Lead", "PageView", "Purchase", "Schedule", "Search", "StartTrial", "SubmitApplication", "Subscribe", "ViewContent"]],
                [52, "q", ["k", "ecommerce", 1]],
                [52, "r", [51, "", [7, "bg"],
                    ["m", [15, "bg"]],
                    [2, [15, "a"], "gtmOnFailure", [7]]
                ]],
                [52, "s", [51, "", [7, "bg", "bh"],
                    [55, "bi", [15, "bh"],
                        [46, [22, [2, [15, "bh"], "hasOwnProperty", [7, [15, "bi"]]],
                            [46, [43, [15, "bg"],
                                [15, "bi"],
                                [16, [15, "bh"],
                                    [15, "bi"]
                                ]
                            ]]
                        ]]
                    ],
                    [36, [15, "bg"]]
                ]],
                [52, "t", [51, "", [7, "bg"],
                    [36, [8, "id", [17, [15, "bg"], "id"], "quantity", [17, [15, "bg"], "quantity"]]]
                ]],
                [41, "u", "v", "w"],
                [22, [17, [15, "a"], "enhancedEcommerce"],
                    [46, [22, [28, [15, "q"]],
                            [46, [36, ["r", "Facebook Pixel: No valid \"ecommerce\" object found in dataLayer"]]]
                        ],
                        [22, [17, [15, "q"], "detail"],
                            [46, [3, "u", "ViewContent"],
                                [3, "v", "detail"]
                            ],
                            [46, [22, [17, [15, "q"], "add"],
                                [46, [3, "u", "AddToCart"],
                                    [3, "v", "add"]
                                ],
                                [46, [22, [17, [15, "q"], "checkout"],
                                    [46, [3, "u", "InitiateCheckout"],
                                        [3, "v", "checkout"]
                                    ],
                                    [46, [22, [17, [15, "q"], "purchase"],
                                        [46, [3, "u", "Purchase"],
                                            [3, "v", "purchase"]
                                        ],
                                        [46, [36, ["r", "Facebook Pixel: Most recently pushed \"ecommerce\" object must be one of types \"detail\", \"add\", \"checkout\" or \"purchase\"."]]]
                                    ]]
                                ]]
                            ]]
                        ],
                        [22, [30, [28, [17, [16, [15, "q"],
                                    [15, "v"]
                                ], "products"]],
                                [21, ["j", [17, [16, [15, "q"],
                                    [15, "v"]
                                ], "products"]], "array"]
                            ],
                            [46, [36, ["r", "Facebook pixel: Most recently pushed \"ecommerce\" object did not have a valid \"products\" array."]]]
                        ],
                        [3, "w", [8, "content_type", "product", "contents", [2, [17, [16, [15, "q"],
                            [15, "v"]
                        ], "products"], "map", [7, [15, "t"]]], "value", [2, [17, [16, [15, "q"],
                            [15, "v"]
                        ], "products"], "reduce", [7, [51, "", [7, "bg", "bh"],
                            [52, "bi", [10, [2, [15, "l"], "round", [7, [26, [26, ["i", [30, [17, [15, "bh"], "price"], 0]],
                                [30, [17, [15, "bh"], "quantity"], 1]
                            ], 100]]], 100]],
                            [36, [0, [15, "bg"],
                                [15, "bi"]
                            ]]
                        ], 0]], "currency", [30, [17, [15, "q"], "currencyCode"], "USD"]]],
                        [22, [18, [2, [7, "InitiateCheckout", "Purchase"], "indexOf", [7, [15, "u"]]],
                                [27, 1]
                            ],
                            [46, [43, [15, "w"], "num_items", [2, [17, [16, [15, "q"],
                                [15, "v"]
                            ], "products"], "reduce", [7, [51, "", [7, "bg", "bh"],
                                [36, [0, [15, "bg"],
                                    ["i", [30, [17, [15, "bh"], "quantity"], 1]]
                                ]]
                            ], 0]]]]
                        ]
                    ]
                ],
                [52, "x", [39, [1, [17, [15, "a"], "advancedMatchingList"],
                        [17, [17, [15, "a"], "advancedMatchingList"], "length"]
                    ],
                    ["h", [17, [15, "a"], "advancedMatchingList"], "name", "value"],
                    [8]
                ]],
                [52, "y", [39, [1, [17, [15, "a"], "objectPropertyList"],
                        [17, [17, [15, "a"], "objectPropertyList"], "length"]
                    ],
                    ["h", [17, [15, "a"], "objectPropertyList"], "name", "value"],
                    [8]
                ]],
                [52, "z", [39, [20, ["j", [17, [15, "a"], "objectPropertiesFromVariable"]], "object"],
                    [17, [15, "a"], "objectPropertiesFromVariable"],
                    [8]
                ]],
                [52, "ba", ["s", [15, "z"],
                    [15, "y"]
                ]],
                [52, "bb", ["s", [30, [15, "w"],
                        [8]
                    ],
                    [15, "ba"]
                ]],
                [3, "u", [30, [15, "u"],
                    [39, [20, [17, [15, "a"], "eventName"], "custom"],
                        [17, [15, "a"], "customEventName"],
                        [39, [20, [17, [15, "a"], "eventName"], "variable"],
                            [17, [15, "a"], "variableEventName"],
                            [17, [15, "a"], "standardEventName"]
                        ]
                    ]
                ]],
                [52, "bc", [39, [20, [2, [15, "p"], "indexOf", [7, [15, "u"]]],
                    [27, 1]
                ], "trackSingleCustom", "trackSingle"]],
                [52, "bd", [39, [20, [17, [15, "a"], "consent"], false], "revoke", "grant"]],
                [52, "be", [51, "", [7],
                    [41, "bg"],
                    [3, "bg", ["e", "fbq"]],
                    [22, [15, "bg"],
                        [46, [36, [15, "bg"]]]
                    ],
                    ["f", "fbq", [51, "", [7],
                        [52, "bh", ["e", "fbq.callMethod.apply"]],
                        [22, [15, "bh"],
                            [46, ["c", "fbq.callMethod.apply", [45],
                                [15, "arguments"]
                            ]],
                            [46, ["c", "fbq.queue.push", [15, "arguments"]]]
                        ]
                    ]],
                    ["d", "_fbq", "fbq"],
                    ["b", "fbq.queue"],
                    [36, ["e", "fbq"]]
                ]],
                [52, "bf", ["be"]],
                ["bf", "consent", [15, "bd"]],
                [22, [17, [15, "a"], "dpoLDU"],
                    [46, ["bf", "dataProcessingOptions", [7, "LDU"],
                        ["i", [17, [15, "a"], "dpoCountry"]],
                        ["i", [17, [15, "a"], "dpoState"]]
                    ]]
                ],
                [2, [2, [15, "o"], "split", [7, ","]], "forEach", [7, [51, "", [7, "bg"],
                    [22, [20, [2, [15, "n"], "indexOf", [7, [15, "bg"]]],
                            [27, 1]
                        ],
                        [46, [22, [17, [15, "a"], "disableAutoConfig"],
                                [46, ["bf", "set", "autoConfig", false, [15, "bg"]]]
                            ],
                            [22, [17, [15, "a"], "disablePushState"],
                                [46, ["f", "fbq.disablePushState", true]]
                            ],
                            ["bf", "init", [15, "bg"],
                                [15, "x"]
                            ],
                            ["bf", "set", "agent", "tmSimo-GTM-WebTemplate", [15, "bg"]],
                            [2, [15, "n"], "push", [7, [15, "bg"]]],
                            ["f", "_fbq_gtm_ids", [15, "n"], true]
                        ]
                    ],
                    [22, [17, [15, "a"], "eventId"],
                        [46, ["bf", [15, "bc"],
                            [15, "bg"],
                            [15, "u"],
                            [15, "bb"],
                            [8, "eventID", [17, [15, "a"], "eventId"]]
                        ]],
                        [46, ["bf", [15, "bc"],
                            [15, "bg"],
                            [15, "u"],
                            [15, "bb"]
                        ]]
                    ]
                ]]],
                ["g", "https://connect.facebook.net/en_US/fbevents.js", [17, [15, "a"], "gtmOnSuccess"],
                    [17, [15, "a"], "gtmOnFailure"], "fbPixel"
                ]
            ],
            [50, "__cvt_101243939_77", [46, "a"],
                [50, "h", [46],
                    [36, [30, ["b", "gtm.uniqueEventId"], "0"]]
                ],
                [50, "i", [46],
                    [41, "k"],
                    [3, "k", [2, [15, "g"], "getItem", [7, "gtmBrowserId"]]],
                    [22, [28, [15, "k"]],
                        [46, [3, "k", [0, ["e"],
                                ["f", 100000, 999999]
                            ]],
                            [2, [15, "g"], "setItem", [7, "gtmBrowserId", [15, "k"]]]
                        ]
                    ],
                    [36, [15, "k"]]
                ],
                [50, "j", [46],
                    [41, "k"],
                    [3, "k", ["d", "gtmPageLoadId"]],
                    [22, [28, [15, "k"]],
                        [46, [3, "k", [0, ["e"],
                                ["f", 100000, 999999]
                            ]],
                            ["c", "gtmPageLoadId", [15, "k"], false]
                        ]
                    ],
                    [36, [15, "k"]]
                ],
                [52, "b", ["require", "copyFromDataLayer"]],
                [52, "c", ["require", "setInWindow"]],
                [52, "d", ["require", "copyFromWindow"]],
                [52, "e", ["require", "getTimestampMillis"]],
                [52, "f", ["require", "generateRandom"]],
                [52, "g", ["require", "localStorage"]],
                [36, [0, [0, [0, ["i"], "_"],
                        ["j"]
                    ],
                    ["h"]
                ]]
            ],
            [50, "__awec", [46, "a"],
                [50, "f", [46, "v", "w", "x"],
                    [22, [21, [16, [15, "w"],
                                [15, "x"]
                            ],
                            [44]
                        ],
                        [46, [43, [15, "v"],
                                [15, "x"],
                                [16, [15, "w"],
                                    [15, "x"]
                                ]
                            ],
                            [33, [15, "e"],
                                [3, "e", [0, [15, "e"], 1]]
                            ]
                        ]
                    ]
                ],
                [50, "g", [46, "v"],
                    [3, "e", 0],
                    [52, "w", [8]],
                    ["f", [15, "w"],
                        [15, "v"], "first_name"
                    ],
                    ["f", [15, "w"],
                        [15, "v"], "last_name"
                    ],
                    ["f", [15, "w"],
                        [15, "v"], "street"
                    ],
                    ["f", [15, "w"],
                        [15, "v"], "sha256_first_name"
                    ],
                    ["f", [15, "w"],
                        [15, "v"], "sha256_last_name"
                    ],
                    ["f", [15, "w"],
                        [15, "v"], "sha256_street"
                    ],
                    ["f", [15, "w"],
                        [15, "v"], "city"
                    ],
                    ["f", [15, "w"],
                        [15, "v"], "region"
                    ],
                    ["f", [15, "w"],
                        [15, "v"], "country"
                    ],
                    ["f", [15, "w"],
                        [15, "v"], "postal_code"
                    ],
                    [22, [20, [15, "e"], 0],
                        [46, [36, [44]]],
                        [46, [36, [15, "w"]]]
                    ]
                ],
                [52, "b", ["require", "getType"]],
                [52, "c", ["require", "queryPermission"]],
                [41, "d"],
                [3, "d", [8]],
                [41, "e"],
                [3, "e", 0],
                [41, "h"],
                [3, "h", [16, [15, "a"], "mode"]],
                [38, [15, "h"],
                    [46, "CODE", "AUTO"],
                    [46, [5, [46, [52, "i", [7]],
                            [52, "j", [30, [16, [15, "a"], "dataSource"],
                                [8]
                            ]],
                            ["f", [15, "d"],
                                [15, "j"], "email"
                            ],
                            ["f", [15, "d"],
                                [15, "j"], "phone_number"
                            ],
                            ["f", [15, "d"],
                                [15, "j"], "sha256_email_address"
                            ],
                            ["f", [15, "d"],
                                [15, "j"], "sha256_phone_number"
                            ],
                            [52, "k", [16, [15, "j"], "address"]],
                            [22, [20, ["b", [15, "k"]], "array"],
                                [46, [66, "v", [15, "k"],
                                    [46, [53, [52, "w", ["g", [15, "v"]]],
                                        [22, [21, [15, "w"],
                                                [44]
                                            ],
                                            [46, [2, [15, "i"], "push", [7, [15, "w"]]]]
                                        ]
                                    ]]
                                ]],
                                [46, [22, [15, "k"],
                                    [46, [53, [52, "v", ["g", [15, "k"]]],
                                        [22, [21, [15, "v"],
                                                [44]
                                            ],
                                            [46, [2, [15, "i"], "push", [7, [15, "v"]]]]
                                        ]
                                    ]]
                                ]]
                            ],
                            [22, [18, [17, [15, "i"], "length"], 0],
                                [46, [43, [15, "d"], "address", [15, "i"]]]
                            ],
                            [4]
                        ]],
                        [5, [46, [52, "l", [13, [41, "$0"],
                                [3, "$0", ["require", "internal.getFlags"]],
                                ["$0"]
                            ]],
                            [52, "m", ["require", "internal.detectUserProvidedData"]],
                            [41, "n"],
                            [3, "n", [44]],
                            [22, [1, [16, [15, "a"], "enableElementBlocking"],
                                    [16, [15, "a"], "disabledElements"]
                                ],
                                [46, [53, [52, "v", [16, [15, "a"], "disabledElements"]],
                                    [3, "n", [7]],
                                    [65, "w", [15, "v"],
                                        [46, [2, [15, "n"], "push", [7, [16, [15, "w"], "column1"]]]]
                                    ]
                                ]]
                            ],
                            [52, "o", [30, [16, [15, "l"], "enableAutoPhoneAndAddressDetection"],
                                [17, [15, "a"], "isAutoCollectPiiEnabledFlag"]
                            ]],
                            [52, "p", [39, [15, "o"],
                                [21, [17, [15, "a"], "autoEmailEnabled"], false], true
                            ]],
                            [52, "q", [1, [15, "o"],
                                [28, [28, [17, [15, "a"], "autoPhoneEnabled"]]]
                            ]],
                            [52, "r", [1, [15, "o"],
                                [28, [28, [17, [15, "a"], "autoAddressEnabled"]]]
                            ]],
                            [41, "s"],
                            [22, ["c", "detect_user_provided_data", "auto"],
                                [46, [3, "s", ["m", [8, "excludeElementSelectors", [15, "n"], "fieldFilters", [8, "email", [15, "p"], "phone", [15, "q"], "address", [15, "r"]]]]]]
                            ],
                            [52, "t", [1, [15, "s"],
                                [16, [15, "s"], "elements"]
                            ]],
                            [22, [1, [15, "t"],
                                    [18, [17, [15, "t"], "length"], 0]
                                ],
                                [46, [53, [52, "v", [8]],
                                    [53, [41, "w"],
                                        [3, "w", 0],
                                        [63, [7, "w"],
                                            [23, [15, "w"],
                                                [17, [15, "t"], "length"]
                                            ],
                                            [33, [15, "w"],
                                                [3, "w", [0, [15, "w"], 1]]
                                            ],
                                            [46, [53, [52, "x", [16, [15, "t"],
                                                    [15, "w"]
                                                ]],
                                                [22, [1, [1, [15, "p"],
                                                            [20, [16, [15, "x"], "type"], "email"]
                                                        ],
                                                        [28, [16, [15, "d"], "email"]]
                                                    ],
                                                    [46, [43, [15, "d"], "email", [16, [15, "x"], "userData"]]],
                                                    [46, [22, [1, [1, [15, "q"],
                                                                [20, [16, [15, "x"], "type"], "phone_number"]
                                                            ],
                                                            [28, [16, [15, "d"], "phone_number"]]
                                                        ],
                                                        [46, [43, [15, "d"], "phone_number", [16, [15, "x"], "userData"]]],
                                                        [46, [22, [1, [1, [15, "r"],
                                                                    [20, [16, [15, "x"], "type"], "first_name"]
                                                                ],
                                                                [28, [16, [15, "v"], "first_name"]]
                                                            ],
                                                            [46, [43, [15, "v"], "first_name", [16, [15, "x"], "userData"]]],
                                                            [46, [22, [1, [1, [15, "r"],
                                                                        [20, [16, [15, "x"], "type"], "last_name"]
                                                                    ],
                                                                    [28, [16, [15, "v"], "last_name"]]
                                                                ],
                                                                [46, [43, [15, "v"], "last_name", [16, [15, "x"], "userData"]]],
                                                                [46, [22, [1, [1, [15, "r"],
                                                                            [20, [16, [15, "x"], "type"], "country"]
                                                                        ],
                                                                        [28, [16, [15, "v"], "country"]]
                                                                    ],
                                                                    [46, [43, [15, "v"], "country", [16, [15, "x"], "userData"]]],
                                                                    [46, [22, [1, [1, [15, "r"],
                                                                                [20, [16, [15, "x"], "type"], "postal_code"]
                                                                            ],
                                                                            [28, [16, [15, "v"], "postal_code"]]
                                                                        ],
                                                                        [46, [43, [15, "v"], "postal_code", [16, [15, "x"], "userData"]]]
                                                                    ]]
                                                                ]]
                                                            ]]
                                                        ]]
                                                    ]]
                                                ]
                                            ]]
                                        ]
                                    ],
                                    [22, [15, "r"],
                                        [46, [43, [15, "d"], "address", [7, [15, "v"]]]]
                                    ]
                                ]]
                            ],
                            [4]
                        ]],
                        [9, [46, [3, "h", "MANUAL"],
                            ["f", [15, "d"],
                                [15, "a"], "email"
                            ],
                            ["f", [15, "d"],
                                [15, "a"], "phone_number"
                            ],
                            [52, "u", ["g", [15, "a"]]],
                            [22, [21, [15, "u"],
                                    [44]
                                ],
                                [46, [43, [15, "d"], "address", [7, [15, "u"]]]]
                            ]
                        ]]
                    ]
                ],
                [43, [15, "d"], "_tag_mode", [15, "h"]],
                [36, [15, "d"]]
            ],
            [50, "__cl", [46, "a"],
                [52, "b", ["require", "internal.enableAutoEventOnClick"]],
                ["b"],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__e", [46, "a"],
                [36, [13, [41, "$0"],
                    [3, "$0", ["require", "internal.getEventData"]],
                    ["$0", "event"]
                ]]
            ],
            [50, "__evl", [46, "a"],
                [52, "b", ["require", "internal.enableAutoEventOnElementVisibility"]],
                [52, "c", ["require", "makeNumber"]],
                [52, "d", [8, "selectorType", [17, [15, "a"], "selectorType"], "id", [17, [15, "a"], "elementId"], "selector", [17, [15, "a"], "elementSelector"], "useDomChangeListener", [28, [28, [17, [15, "a"], "useDomChangeListener"]]], "onScreenRatio", ["c", [17, [15, "a"], "onScreenRatio"]], "firingFrequency", [17, [15, "a"], "firingFrequency"]]],
                [22, [17, [15, "a"], "useOnScreenDuration"],
                    [46, [43, [15, "d"], "onScreenDuration", ["c", [17, [15, "a"], "onScreenDuration"]]]]
                ],
                ["b", [15, "d"],
                    [17, [15, "a"], "uniqueTriggerId"]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__fsl", [46, "a"],
                [52, "b", ["require", "internal.enableAutoEventOnFormSubmit"]],
                [52, "c", [8, "waitForTags", [17, [15, "a"], "waitForTags"], "checkValidation", [17, [15, "a"], "checkValidation"], "waitForTagsTimeout", [17, [15, "a"], "waitForTagsTimeout"]]],
                [52, "d", [30, [17, [15, "a"], "uniqueTriggerId"], "0"]],
                ["b", [15, "c"],
                    [15, "d"]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__googtag", [46, "a"],
                [50, "l", [46, "u", "v"],
                    [66, "w", [2, [15, "b"], "keys", [7, [15, "v"]]],
                        [46, [43, [15, "u"],
                            [15, "w"],
                            [16, [15, "v"],
                                [15, "w"]
                            ]
                        ]]
                    ]
                ],
                [50, "m", [46],
                    [36, [7, [17, [17, [15, "d"], "SCHEMA"], "EP_SERVER_CONTAINER_URL"],
                        [17, [17, [15, "d"], "SCHEMA"], "EP_TRANSPORT_URL"]
                    ]]
                ],
                [50, "n", [46, "u"],
                    [52, "v", ["m"]],
                    [65, "w", [15, "v"],
                        [46, [53, [52, "x", [16, [15, "u"],
                                [15, "w"]
                            ]],
                            [22, [15, "x"],
                                [46, [36, [15, "x"]]]
                            ]
                        ]]
                    ],
                    [36, [44]]
                ],
                [52, "b", ["require", "Object"]],
                [52, "c", ["require", "createArgumentsQueue"]],
                [52, "d", [15, "__module_gtag"]],
                [52, "e", ["require", "internal.gtagConfig"]],
                [52, "f", ["require", "getType"]],
                [52, "g", ["require", "internal.loadGoogleTag"]],
                [52, "h", ["require", "logToConsole"]],
                [52, "i", ["require", "makeNumber"]],
                [52, "j", ["require", "makeString"]],
                [52, "k", ["require", "makeTableMap"]],
                [52, "o", [30, [17, [15, "a"], "tagId"], ""]],
                [22, [30, [21, ["f", [15, "o"]], "string"],
                        [24, [2, [15, "o"], "indexOf", [7, "-"]], 0]
                    ],
                    [46, ["h", [0, "Invalid Measurement ID for the GA4 Configuration tag: ", [15, "o"]]],
                        [2, [15, "a"], "gtmOnFailure", [7]],
                        [36]
                    ]
                ],
                [52, "p", [30, [17, [15, "a"], "configSettingsVariable"],
                    [8]
                ]],
                [52, "q", [30, ["k", [30, [17, [15, "a"], "configSettingsTable"],
                        [7]
                    ], "parameter", "parameterValue"],
                    [8]
                ]],
                ["l", [15, "p"],
                    [15, "q"]
                ],
                [52, "r", [30, [17, [15, "a"], "eventSettingsVariable"],
                    [8]
                ]],
                [52, "s", [30, ["k", [30, [17, [15, "a"], "eventSettingsTable"],
                        [7]
                    ], "parameter", "parameterValue"],
                    [8]
                ]],
                ["l", [15, "r"],
                    [15, "s"]
                ],
                [52, "t", [15, "p"]],
                ["l", [15, "t"],
                    [15, "r"]
                ],
                [22, [30, [2, [15, "t"], "hasOwnProperty", [7, [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"]]],
                        [17, [15, "a"], "userProperties"]
                    ],
                    [46, [53, [52, "u", [30, [16, [15, "t"],
                                [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"]
                            ],
                            [8]
                        ]],
                        ["l", [15, "u"],
                            [30, ["k", [30, [17, [15, "a"], "userProperties"],
                                    [7]
                                ], "name", "value"],
                                [8]
                            ]
                        ],
                        [43, [15, "t"],
                            [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                            [15, "u"]
                        ]
                    ]]
                ],
                [2, [15, "d"], "convertParameters", [7, [15, "t"],
                    [17, [15, "d"], "GOLD_BOOLEAN_FIELDS"],
                    [51, "", [7, "u"],
                        [36, [39, [20, "false", [2, ["j", [15, "u"]], "toLowerCase", [7]]], false, [28, [28, [15, "u"]]]]]
                    ]
                ]],
                [2, [15, "d"], "convertParameters", [7, [15, "t"],
                    [17, [15, "d"], "GOLD_NUMERIC_FIELDS"],
                    [51, "", [7, "u"],
                        [36, ["i", [15, "u"]]]
                    ]
                ]],
                ["g", [15, "o"],
                    [8, "firstPartyUrl", ["n", [15, "t"]]]
                ],
                ["e", [15, "o"],
                    [15, "t"],
                    [8, "noTargetGroup", true]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__html", [46, "a"],
                [52, "b", ["require", "internal.injectHtml"]],
                ["b", [17, [15, "a"], "html"],
                    [17, [15, "a"], "gtmOnSuccess"],
                    [17, [15, "a"], "gtmOnFailure"],
                    [17, [15, "a"], "useIframe"],
                    [17, [15, "a"], "supportDocumentWrite"]
                ]
            ],
            [50, "__jsm", [46, "a"],
                [52, "b", ["require", "internal.executeJavascriptString"]],
                [22, [20, [17, [15, "a"], "javascript"],
                        [44]
                    ],
                    [46, [36]]
                ],
                [36, ["b", [17, [15, "a"], "javascript"]]]
            ],
            [50, "__lcl", [46, "a"],
                [52, "b", ["require", "makeInteger"]],
                [52, "c", ["require", "makeString"]],
                [52, "d", ["require", "internal.enableAutoEventOnLinkClick"]],
                [52, "e", [8]],
                [22, [17, [15, "a"], "waitForTags"],
                    [46, [43, [15, "e"], "waitForTags", true],
                        [43, [15, "e"], "waitForTagsTimeout", ["b", [17, [15, "a"], "waitForTagsTimeout"]]]
                    ]
                ],
                [22, [17, [15, "a"], "checkValidation"],
                    [46, [43, [15, "e"], "checkValidation", true]]
                ],
                [52, "f", [30, [17, [15, "a"], "uniqueTriggerId"], "0"]],
                ["d", [15, "e"],
                    [15, "f"]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__paused", [46, "a"],
                [2, [15, "a"], "gtmOnFailure", [7]]
            ],
            [52, "__module_gtag", [13, [41, "$0"],
                [3, "$0", [51, "", [7],
                    [50, "a", [46],
                        [50, "f", [46, "g", "h", "i"],
                            [65, "j", [15, "h"],
                                [46, [22, [2, [15, "g"], "hasOwnProperty", [7, [15, "j"]]],
                                    [46, [43, [15, "g"],
                                        [15, "j"],
                                        ["i", [16, [15, "g"],
                                            [15, "j"]
                                        ]]
                                    ]]
                                ]]
                            ]
                        ],
                        [52, "b", ["require", "Object"]],
                        [52, "c", [2, [15, "b"], "freeze", [7, [8, "EP_FIRST_PARTY_COLLECTION", "first_party_collection", "EP_SERVER_CONTAINER_URL", "server_container_url", "EP_TRANSPORT_URL", "transport_url", "EP_USER_PROPERTIES", "user_properties"]]]],
                        [52, "d", [2, [15, "b"], "freeze", [7, [7, "allow_ad_personalization_signals", "allow_direct_google_requests", "allow_google_signals", "cookie_update", "ignore_referrer", "update", "first_party_collection", "send_page_view"]]]],
                        [52, "e", [2, [15, "b"], "freeze", [7, [7, "cookie_expires", "event_timeout", "session_duration", "session_engaged_time", "engagement_time_msec"]]]],
                        [36, [8, "SCHEMA", [15, "c"], "GOLD_BOOLEAN_FIELDS", [15, "d"], "GOLD_NUMERIC_FIELDS", [15, "e"], "convertParameters", [15, "f"]]]
                    ],
                    [36, ["a"]]
                ]],
                ["$0"]
            ]]

        ],
        "entities": {
            "__e": {
                "2": true,
                "4": true
            },
            "__googtag": {
                "1": 10
            }


        },
        "blob": {
            "1": "39"
        },
        "permissions": {
            "__cvt_101243939_51": {
                "access_globals": {
                    "keys": [{
                        "key": "fbq",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "_fbq_gtm",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "_fbq",
                        "read": false,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "_fbq_gtm_ids",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "fbq.callMethod.apply",
                        "read": true,
                        "write": false,
                        "execute": true
                    }, {
                        "key": "fbq.queue.push",
                        "read": false,
                        "write": false,
                        "execute": true
                    }, {
                        "key": "fbq.queue",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "fbq.disablePushState",
                        "read": true,
                        "write": true,
                        "execute": false
                    }]
                },
                "inject_script": {
                    "urls": ["https:\/\/connect.facebook.net\/en_US\/fbevents.js"]
                },
                "logging": {
                    "environments": "debug"
                },
                "read_data_layer": {
                    "allowedKeys": "specific",
                    "keyPatterns": ["ecommerce"]
                }
            },
            "__cvt_101243939_77": {
                "read_data_layer": {
                    "allowedKeys": "specific",
                    "keyPatterns": ["gtm.uniqueEventId"]
                },
                "access_globals": {
                    "keys": [{
                        "key": "gtmPageLoadId",
                        "read": true,
                        "write": true,
                        "execute": false
                    }]
                },
                "access_local_storage": {
                    "keys": [{
                        "key": "gtmBrowserId",
                        "read": true,
                        "write": true
                    }]
                }
            },
            "__awec": {
                "detect_user_provided_data": {
                    "limitDataSources": true,
                    "allowAutoDataSources": true,
                    "allowManualDataSources": false,
                    "allowCodeDataSources": false
                }
            },
            "__cl": {
                "detect_click_events": {}
            },
            "__e": {
                "read_event_data": {
                    "eventDataAccess": "specific",
                    "keyPatterns": ["event"]
                }
            },
            "__evl": {
                "detect_element_visibility_events": {}
            },
            "__fsl": {
                "detect_form_submit_events": {
                    "allowWaitForTags": true
                }
            },
            "__googtag": {
                "logging": {
                    "environments": "debug"
                },
                "access_globals": {
                    "keys": [{
                        "key": "gtag",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "dataLayer",
                        "read": true,
                        "write": true,
                        "execute": false
                    }]
                },
                "configure_google_tags": {
                    "allowedTagIds": "any"
                },
                "load_google_tags": {
                    "allowedTagIds": "any",
                    "allowFirstPartyUrls": true,
                    "allowedFirstPartyUrls": "any"
                }
            },
            "__html": {
                "unsafe_inject_arbitrary_html": {}
            },
            "__jsm": {
                "unsafe_run_arbitrary_javascript": {}
            },
            "__lcl": {
                "detect_link_click_events": {
                    "allowWaitForTags": true
                }
            },
            "__paused": {}


        }

        ,
        "sandboxed_scripts": [
                "__cvt_101243939_51", "__cvt_101243939_77"

            ]

            ,
        "security_groups": {
            "customScripts": [
                "__html",
                "__jsm"

            ],
            "google": [
                "__awec",
                "__cl",
                "__e",
                "__evl",
                "__googtag"

            ]


        }



    };




    var h, da = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ea = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        fa = function(a) {
            for (var b = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d && d.Math == Math) return d
            }
            throw Error("Cannot find global object");
        },
        ha = fa(this),
        ka = function(a, b) {
            if (b) a: {
                for (var c = ha, d = a.split("."), e = 0; e < d.length - 1; e++) {
                    var f = d[e];
                    if (!(f in c)) break a;
                    c = c[f]
                }
                var g = d[d.length - 1],
                    k = c[g],
                    m = b(k);m != k && m != null && ea(c, g, {
                    configurable: !0,
                    writable: !0,
                    value: m
                })
            }
        };
    ka("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.j = f;
            ea(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.j
        };
        var c = "jscomp_symbol_" + (Math.random() * 1E9 >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    });
    var la = typeof Object.create == "function" ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        na;
    if (typeof Object.setPrototypeOf == "function") na = Object.setPrototypeOf;
    else {
        var oa;
        a: {
            var pa = {
                    a: !0
                },
                qa = {};
            try {
                qa.__proto__ = pa;
                oa = qa.a;
                break a
            } catch (a) {}
            oa = !1
        }
        na = oa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ra = na,
        sa = function(a, b) {
            a.prototype = la(b.prototype);
            a.prototype.constructor = a;
            if (ra) ra(a, b);
            else
                for (var c in b)
                    if (c != "prototype")
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.yo = b.prototype
        },
        l = function(a) {
            var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if (typeof a.length == "number") return {
                next: da(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        ta = function(a) {
            for (var b,
                    c = []; !(b = a.next()).done;) c.push(b.value);
            return c
        },
        ua = function(a) {
            return a instanceof Array ? a : ta(l(a))
        },
        wa = function(a) {
            return va(a, a)
        },
        va = function(a, b) {
            a.raw = b;
            Object.freeze && (Object.freeze(a), Object.freeze(b));
            return a
        },
        xa = typeof Object.assign == "function" ? Object.assign : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
            }
            return a
        };
    ka("Object.assign", function(a) {
        return a || xa
    });
    var ya = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    };
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var za = this || self;
    var Aa = function(a, b) {
        this.type = a;
        this.data = b
    };
    var Ba = function() {
        this.map = {};
        this.j = {}
    };
    Ba.prototype.get = function(a) {
        return this.map["dust." + a]
    };
    Ba.prototype.set = function(a, b) {
        var c = "dust." + a;
        this.j.hasOwnProperty(c) || (this.map[c] = b)
    };
    Ba.prototype.has = function(a) {
        return this.map.hasOwnProperty("dust." + a)
    };
    Ba.prototype.remove = function(a) {
        var b = "dust." + a;
        this.j.hasOwnProperty(b) || delete this.map[b]
    };
    var Ca = function(a, b) {
        var c = [],
            d;
        for (d in a.map)
            if (a.map.hasOwnProperty(d)) {
                var e = d.substring(5);
                switch (b) {
                    case 1:
                        c.push(e);
                        break;
                    case 2:
                        c.push(a.map[d]);
                        break;
                    case 3:
                        c.push([e, a.map[d]])
                }
            }
        return c
    };
    Ba.prototype.ka = function() {
        return Ca(this, 1)
    };
    Ba.prototype.Xb = function() {
        return Ca(this, 2)
    };
    Ba.prototype.Fb = function() {
        return Ca(this, 3)
    };
    var Ea = function() {};
    Ea.prototype.reset = function() {};
    var Fa = function(a, b) {
        this.K = a;
        this.parent = b;
        this.j = this.C = void 0;
        this.xc = !1;
        this.H = function(c, d, e) {
            return c.apply(d, e)
        };
        this.values = new Ba
    };
    Fa.prototype.add = function(a, b) {
        Ha(this, a, b, !1)
    };
    var Ha = function(a, b, c, d) {
        if (!a.xc)
            if (d) {
                var e = a.values;
                e.set(b, c);
                e.j["dust." + b] = !0
            } else a.values.set(b, c)
    };
    Fa.prototype.set = function(a, b) {
        this.xc || (!this.values.has(a) && this.parent && this.parent.has(a) ? this.parent.set(a, b) : this.values.set(a, b))
    };
    Fa.prototype.get = function(a) {
        return this.values.has(a) ? this.values.get(a) : this.parent ? this.parent.get(a) : void 0
    };
    Fa.prototype.has = function(a) {
        return !!this.values.has(a) || !(!this.parent || !this.parent.has(a))
    };
    var Ia = function(a) {
        var b = new Fa(a.K, a);
        a.C && (b.C = a.C);
        b.H = a.H;
        b.j = a.j;
        return b
    };
    Fa.prototype.Md = function() {
        return this.K
    };
    Fa.prototype.Ha = function() {
        this.xc = !0
    };

    function Ja(a, b) {
        for (var c, d = l(b), e = d.next(); !e.done && !(c = Ka(a, e.value), c instanceof Aa); e = d.next());
        return c
    }

    function Ka(a, b) {
        try {
            var c = l(b),
                d = c.next().value,
                e = ta(c),
                f = a.get(String(d));
            if (!f || typeof f.invoke !== "function") throw Error("Attempting to execute non-function " + b[0] + ".");
            return f.invoke.apply(f, [a].concat(ua(e)))
        } catch (k) {
            var g = a.C;
            g && g(k, b.context ? {
                id: b[0],
                line: b.context.line
            } : null);
            throw k;
        }
    };
    var La = function() {
        this.C = new Ea;
        this.j = new Fa(this.C)
    };
    h = La.prototype;
    h.Md = function() {
        return this.C
    };
    h.execute = function(a) {
        return this.si([a].concat(ua(ya.apply(1, arguments))))
    };
    h.si = function() {
        for (var a, b = l(ya.apply(0, arguments)), c = b.next(); !c.done; c = b.next()) a = Ka(this.j, c.value);
        return a
    };
    h.Hl = function(a) {
        var b = ya.apply(1, arguments),
            c = Ia(this.j);
        c.j = a;
        for (var d, e = l(b), f = e.next(); !f.done; f = e.next()) d = Ka(c, f.value);
        return d
    };
    h.Ha = function() {
        this.j.Ha()
    };
    var Ma = function() {
        this.C = !1;
        this.j = new Ba
    };
    h = Ma.prototype;
    h.get = function(a) {
        return this.j.get(a)
    };
    h.set = function(a, b) {
        this.C || this.j.set(a, b)
    };
    h.has = function(a) {
        return this.j.has(a)
    };
    h.remove = function(a) {
        this.C || this.j.remove(a)
    };
    h.ka = function() {
        return this.j.ka()
    };
    h.Xb = function() {
        return this.j.Xb()
    };
    h.Fb = function() {
        return this.j.Fb()
    };
    h.Ha = function() {
        this.C = !0
    };
    h.xc = function() {
        return this.C
    };

    function Na() {
        for (var a = Oa, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function Pa() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Oa, Qa;

    function Ra(a) {
        Oa = Oa || Pa();
        Qa = Qa || Na();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                k = e ? a.charCodeAt(c + 2) : 0,
                m = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | k >> 6,
                q = k & 63;
            e || (q = 64, d || (p = 64));
            b.push(Oa[m], Oa[n], Oa[p], Oa[q])
        }
        return b.join("")
    }

    function Sa(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = Qa[n];
                if (p != null) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        Oa = Oa || Pa();
        Qa = Qa || Na();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                k = b(64);
            if (k === 64 && e === -1) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            g !== 64 && (c += String.fromCharCode(f << 4 & 240 | g >> 2), k !== 64 && (c += String.fromCharCode(g << 6 & 192 | k)))
        }
    };
    var Ua = {};

    function Va(a, b) {
        Ua[a] = Ua[a] || [];
        Ua[a][b] = !0
    }

    function Xa(a) {
        var b = Ua[a];
        if (!b || b.length === 0) return "";
        for (var c = [], d = 0, e = 0; e < b.length; e++) e % 8 === 0 && e > 0 && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
        d > 0 && c.push(String.fromCharCode(d));
        return Ra(c.join("")).replace(/\.+$/, "")
    }

    function Ya() {
        for (var a = [], b = Ua.fdr || [], c = 0; c < b.length; c++) b[c] && a.push(c);
        return a.length > 0 ? a : void 0
    };

    function Za() {}

    function $a(a) {
        return typeof a === "function"
    }

    function z(a) {
        return typeof a === "string"
    }

    function ab(a) {
        return typeof a === "number" && !isNaN(a)
    }

    function bb(a) {
        return Array.isArray(a) ? a : [a]
    }

    function cb(a, b) {
        if (a && Array.isArray(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c])) return a[c]
    }

    function db(a, b) {
        if (!ab(a) || !ab(b) || a > b) a = 0, b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) + a)
    }

    function eb(a, b) {
        for (var c = new fb, d = 0; d < a.length; d++) c.set(a[d], !0);
        for (var e = 0; e < b.length; e++)
            if (c.get(b[e])) return !0;
        return !1
    }

    function hb(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }

    function ib(a) {
        return !!a && (Object.prototype.toString.call(a) === "[object Arguments]" || Object.prototype.hasOwnProperty.call(a, "callee"))
    }

    function jb(a) {
        return Math.round(Number(a)) || 0
    }

    function kb(a) {
        return "false" === String(a).toLowerCase() ? !1 : !!a
    }

    function lb(a) {
        var b = [];
        if (Array.isArray(a))
            for (var c = 0; c < a.length; c++) b.push(String(a[c]));
        return b
    }

    function mb(a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : ""
    }

    function nb() {
        return new Date(Date.now())
    }

    function ob() {
        return nb().getTime()
    }
    var fb = function() {
        this.prefix = "gtm.";
        this.values = {}
    };
    fb.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    fb.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    fb.prototype.contains = function(a) {
        return this.get(a) !== void 0
    };

    function pb(a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }

    function qb(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = void 0;
                try {
                    c()
                } catch (d) {}
            }
        }
    }

    function rb(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
    }

    function sb(a, b) {
        for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
        return c
    }

    function tb(a, b) {
        return a.length >= b.length && a.substring(0, b.length) === b
    }

    function ub(a, b) {
        return a.length >= b.length && a.substring(a.length - b.length, a.length) === b
    }

    function vb(a, b) {
        var c = B;
        b = b || [];
        for (var d = c, e = 0; e < a.length - 1; e++) {
            if (!d.hasOwnProperty(a[e])) return;
            d = d[a[e]];
            if (b.indexOf(d) >= 0) return
        }
        return d
    }

    function wb(a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    }
    var xb = /^\w{1,9}$/;

    function yb(a, b) {
        a = a || {};
        b = b || ",";
        var c = [];
        hb(a, function(d, e) {
            xb.test(d) && e && c.push(d)
        });
        return c.join(b)
    }

    function zb(a, b) {
        function c() {
            e && ++d === b && (e(), e = null, c.done = !0)
        }
        var d = 0,
            e = a;
        c.done = !1;
        return c
    }

    function Ab(a) {
        if (!a) return a;
        var b = a;
        try {
            b = decodeURIComponent(a)
        } catch (d) {}
        var c = b.split(",");
        return c.length === 2 && c[0] === c[1] ? c[0] : a
    }

    function Bb(a, b, c) {
        function d(n) {
            var p = n.split("=")[0];
            if (a.indexOf(p) < 0) return n;
            if (c !== void 0) return p + "=" + c
        }

        function e(n) {
            return n.split("&").map(d).filter(function(p) {
                return p !== void 0
            }).join("&")
        }
        var f = b.href.split(/[?#]/)[0],
            g = b.search,
            k = b.hash;
        g[0] === "?" && (g = g.substring(1));
        k[0] === "#" && (k = k.substring(1));
        g = e(g);
        k = e(k);
        g !== "" && (g = "?" + g);
        k !== "" && (k = "#" + k);
        var m = "" + f + g + k;
        m[m.length - 1] === "/" && (m = m.substring(0, m.length - 1));
        return m
    }

    function Cb(a) {
        for (var b = 0; b < 3; ++b) try {
            var c = decodeURIComponent(a).replace(/\+/g, " ");
            if (c === a) break;
            a = c
        } catch (d) {
            return ""
        }
        return a
    };
    /*

     Copyright Google LLC
     SPDX-License-Identifier: Apache-2.0
    */
    var Db = globalThis.trustedTypes,
        Eb;

    function Fb() {
        var a = null;
        if (!Db) return a;
        try {
            var b = function(c) {
                return c
            };
            a = Db.createPolicy("goog#html", {
                createHTML: b,
                createScript: b,
                createScriptURL: b
            })
        } catch (c) {}
        return a
    }

    function Gb() {
        Eb === void 0 && (Eb = Fb());
        return Eb
    };
    var Hb = function(a) {
        this.j = a
    };
    Hb.prototype.toString = function() {
        return this.j + ""
    };

    function Ib(a) {
        var b = a,
            c = Gb();
        return new Hb(c ? c.createScriptURL(b) : b)
    }

    function Jb(a) {
        if (a instanceof Hb) return a.j;
        throw Error("");
    };
    var Kb = wa([""]),
        Lb = va(["\x00"], ["\\0"]),
        Mb = va(["\n"], ["\\n"]),
        Nb = va(["\x00"], ["\\u0000"]);

    function Ob(a) {
        return a.toString().indexOf("`") === -1
    }
    Ob(function(a) {
        return a(Kb)
    }) || Ob(function(a) {
        return a(Lb)
    }) || Ob(function(a) {
        return a(Mb)
    }) || Ob(function(a) {
        return a(Nb)
    });
    var Pb = function(a) {
        this.j = a
    };
    Pb.prototype.toString = function() {
        return this.j
    };
    var Qb = function(a) {
        this.Xm = a
    };

    function Rb(a) {
        return new Qb(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    }
    var Sb = [Rb("data"), Rb("http"), Rb("https"), Rb("mailto"), Rb("ftp"), new Qb(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];

    function Tb(a) {
        var b;
        b = b === void 0 ? Sb : b;
        if (a instanceof Pb) return a;
        for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (d instanceof Qb && d.Xm(a)) return new Pb(a)
        }
    }
    var Ub = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

    function Vb(a) {
        var b;
        if (a instanceof Pb)
            if (a instanceof Pb) b = a.j;
            else throw Error("");
        else b = Ub.test(a) ? a : void 0;
        return b
    };

    function Wb(a, b) {
        var c = Vb(b);
        c !== void 0 && (a.action = c)
    };
    var Xb = function(a) {
        this.j = a
    };
    Xb.prototype.toString = function() {
        return this.j + ""
    };
    var Zb = function() {
        this.j = Yb[0].toLowerCase()
    };
    Zb.prototype.toString = function() {
        return this.j
    };

    function $b(a, b) {
        var c = [new Zb];
        if (c.length === 0) throw Error("");
        var d = c.map(function(f) {
                var g;
                if (f instanceof Zb) g = f.j;
                else throw Error("");
                return g
            }),
            e = b.toLowerCase();
        if (d.every(function(f) {
                return e.indexOf(f) !== 0
            })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true")
    };
    var ac = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
        "INPUT"
    ]);

    function bc(a) {
        return a === null ? "null" : a === void 0 ? "undefined" : a
    };
    var B = window,
        cc = window.history,
        F = document,
        dc = navigator;

    function ec() {
        var a;
        try {
            a = dc.serviceWorker
        } catch (b) {
            return
        }
        return a
    }
    var fc = F.currentScript,
        gc = fc && fc.src;

    function hc(a, b) {
        var c = B[a];
        B[a] = c === void 0 ? b : c;
        return B[a]
    }

    function ic(a) {
        return (dc.userAgent || "").indexOf(a) !== -1
    }
    var jc = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        kc = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function lc(a, b, c) {
        b && hb(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }

    function mc(a, b, c, d, e) {
        var f = F.createElement("script");
        lc(f, d, jc);
        f.type = "text/javascript";
        f.async = d && d.async === !1 ? !1 : !0;
        var g;
        g = Ib(bc(a));
        f.src = Jb(g);
        var k, m = f.ownerDocument;
        m = m === void 0 ? document : m;
        var n, p, q = (p = (n = m).querySelector) == null ? void 0 : p.call(n, "script[nonce]");
        (k = q == null ? "" : q.nonce || q.getAttribute("nonce") || "") && f.setAttribute("nonce", k);
        b && (f.onload = b);
        c && (f.onerror = c);
        if (e) e.appendChild(f);
        else {
            var r = F.getElementsByTagName("script")[0] || F.body || F.head;
            r.parentNode.insertBefore(f, r)
        }
        return f
    }

    function oc() {
        if (gc) {
            var a = gc.toLowerCase();
            if (a.indexOf("https://") === 0) return 2;
            if (a.indexOf("http://") === 0) return 3
        }
        return 1
    }

    function pc(a, b, c, d, e) {
        var f;
        f = f === void 0 ? !0 : f;
        var g = e,
            k = !1;
        g || (g = F.createElement("iframe"), k = !0);
        lc(g, c, kc);
        d && hb(d, function(n, p) {
            g.dataset[n] = p
        });
        f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
        a !== void 0 && (g.src = a);
        if (k) {
            var m = F.body && F.body.lastChild || F.body || F.head;
            m.parentNode.insertBefore(g, m)
        }
        b && (g.onload = b);
        return g
    }

    function qc(a, b, c, d) {
        return rc(a, b, c, d)
    }

    function sc(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, !!d)
    }

    function tc(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }

    function G(a) {
        B.setTimeout(a, 0)
    }

    function uc(a, b) {
        return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
    }

    function vc(a) {
        var b = a.innerText || a.textContent || "";
        b && b !== " " && (b = b.replace(/^[\s\xa0]+/g, ""), b = b.replace(/[\s\xa0]+$/g, ""));
        b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return b
    }

    function wc(a) {
        var b = F.createElement("div"),
            c = b,
            d, e = bc("A<div>" + a + "</div>"),
            f = Gb();
        d = new Xb(f ? f.createHTML(e) : e);
        if (c.nodeType === 1 && /^(script|style)$/i.test(c.tagName)) throw Error("");
        var g;
        if (d instanceof Xb) g = d.j;
        else throw Error("");
        c.innerHTML = g;
        b = b.lastChild;
        for (var k = []; b && b.firstChild;) k.push(b.removeChild(b.firstChild));
        return k
    }

    function xc(a, b, c) {
        c = c || 100;
        for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
        for (var f = a, g = 0; f && g <= c; g++) {
            if (d[String(f.tagName).toLowerCase()]) return f;
            f = f.parentElement
        }
        return null
    }

    function yc(a, b, c) {
        var d;
        try {
            d = dc.sendBeacon && dc.sendBeacon(a)
        } catch (e) {
            Va("TAGGING", 15)
        }
        d ? b == null || b() : rc(a, b, c)
    }

    function zc(a, b) {
        try {
            return dc.sendBeacon(a, b)
        } catch (c) {
            Va("TAGGING", 15)
        }
        return !1
    }
    var Ac = {
        cache: "no-store",
        credentials: "include",
        keepalive: !0,
        method: "POST",
        mode: "no-cors",
        redirect: "follow"
    };

    function Bc(a, b, c, d, e) {
        if (Cc()) {
            var f = Object.assign({}, Ac);
            b && (f.body = b);
            c && (c.attributionReporting && (f.attributionReporting = c.attributionReporting), c.browsingTopics && (f.browsingTopics = c.browsingTopics), c.credentials && (f.credentials = c.credentials), c.mode && (f.mode = c.mode));
            try {
                var g = B.fetch(a, f);
                if (g) return g.then(function(m) {
                    m && (m.ok || m.status === 0) ? d == null || d() : e == null || e()
                }).catch(function() {
                    e == null || e()
                }), !0
            } catch (m) {}
        }
        if (c && c.yk) return e == null || e(), !1;
        if (b) {
            var k = zc(a, b);
            k ? d == null || d() : e == null ||
                e();
            return k
        }
        yc(a, d, e);
        return !0
    }

    function Cc() {
        return typeof B.fetch === "function"
    }

    function Dc(a, b) {
        var c = a[b];
        c && typeof c.animVal === "string" && (c = c.animVal);
        return c
    }

    function Ec() {
        var a = B.performance;
        if (a && $a(a.now)) return a.now()
    }

    function Fc() {
        var a, b = B.performance;
        if (b && b.getEntriesByType) try {
            var c = b.getEntriesByType("navigation");
            c && c.length > 0 && (a = c[0].type)
        } catch (d) {
            return "e"
        }
        if (!a) return "u";
        switch (a) {
            case "navigate":
                return "n";
            case "back_forward":
                return "h";
            case "reload":
                return "r";
            case "prerender":
                return "p";
            default:
                return "x"
        }
    }

    function Gc() {
        return B.performance || void 0
    }

    function Hc() {
        var a = B.webPixelsManager;
        return a ? a.createShopifyExtend !== void 0 : !1
    }
    var rc = function(a, b, c, d) {
        var e = new Image(1, 1);
        lc(e, d, {});
        e.onload = function() {
            e.onload = null;
            b && b()
        };
        e.onerror = function() {
            e.onerror = null;
            c && c()
        };
        e.src = a;
        return e
    };

    function Ic(a, b) {
        return this.evaluate(a) && this.evaluate(b)
    }

    function Jc(a, b) {
        return this.evaluate(a) === this.evaluate(b)
    }

    function Kc(a, b) {
        return this.evaluate(a) || this.evaluate(b)
    }

    function Lc(a, b) {
        var c = this.evaluate(a),
            d = this.evaluate(b);
        return String(c).indexOf(String(d)) > -1
    }

    function Mc(a, b) {
        var c = String(this.evaluate(a)),
            d = String(this.evaluate(b));
        return c.substring(0, d.length) === d
    }

    function Nc(a, b) {
        var c = this.evaluate(a),
            d = this.evaluate(b);
        switch (c) {
            case "pageLocation":
                var e = B.location.href;
                d instanceof Ma && d.get("stripProtocol") && (e = e.replace(/^https?:\/\//, ""));
                return e
        }
    };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
    */
    var Oc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Pc = function(a) {
            if (a == null) return String(a);
            var b = Oc.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Qc = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Rc = function(a) {
            if (!a || Pc(a) != "object" || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Qc(a, "constructor") && !Qc(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return b === void 0 ||
                Qc(a, b)
        },
        Sc = function(a, b) {
            var c = b || (Pc(a) == "array" ? [] : {}),
                d;
            for (d in a)
                if (Qc(a, d)) {
                    var e = a[d];
                    Pc(e) == "array" ? (Pc(c[d]) != "array" && (c[d] = []), c[d] = Sc(e, c[d])) : Rc(e) ? (Rc(c[d]) || (c[d] = {}), c[d] = Sc(e, c[d])) : c[d] = e
                }
            return c
        };

    function Tc(a) {
        if (a == void 0 || Array.isArray(a) || Rc(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    }

    function Uc(a) {
        return typeof a === "number" && a >= 0 && isFinite(a) && a % 1 === 0 || typeof a === "string" && a[0] !== "-" && a === "" + parseInt(a)
    };
    var Vc = function(a) {
        a = a === void 0 ? [] : a;
        this.j = new Ba;
        this.values = [];
        this.C = !1;
        for (var b in a) a.hasOwnProperty(b) && (Uc(b) ? this.values[Number(b)] = a[Number(b)] : this.j.set(b, a[b]))
    };
    h = Vc.prototype;
    h.toString = function(a) {
        if (a && a.indexOf(this) >= 0) return "";
        for (var b = [], c = 0; c < this.values.length; c++) {
            var d = this.values[c];
            d === null || d === void 0 ? b.push("") : d instanceof Vc ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(String(d))
        }
        return b.join(",")
    };
    h.set = function(a, b) {
        if (!this.C)
            if (a === "length") {
                if (!Uc(b)) throw Error("RangeError: Length property must be a valid integer.");
                this.values.length = Number(b)
            } else Uc(a) ? this.values[Number(a)] = b : this.j.set(a, b)
    };
    h.get = function(a) {
        return a === "length" ? this.length() : Uc(a) ? this.values[Number(a)] : this.j.get(a)
    };
    h.length = function() {
        return this.values.length
    };
    h.ka = function() {
        for (var a = this.j.ka(), b = 0; b < this.values.length; b++) this.values.hasOwnProperty(b) && a.push(String(b));
        return a
    };
    h.Xb = function() {
        for (var a = this.j.Xb(), b = 0; b < this.values.length; b++) this.values.hasOwnProperty(b) && a.push(this.values[b]);
        return a
    };
    h.Fb = function() {
        for (var a = this.j.Fb(), b = 0; b < this.values.length; b++) this.values.hasOwnProperty(b) && a.push([String(b), this.values[b]]);
        return a
    };
    h.remove = function(a) {
        Uc(a) ? delete this.values[Number(a)] : this.C || this.j.remove(a)
    };
    h.pop = function() {
        return this.values.pop()
    };
    h.push = function() {
        return this.values.push.apply(this.values, ua(ya.apply(0, arguments)))
    };
    h.shift = function() {
        return this.values.shift()
    };
    h.splice = function(a, b) {
        var c = ya.apply(2, arguments);
        return b === void 0 && c.length === 0 ? new Vc(this.values.splice(a)) : new Vc(this.values.splice.apply(this.values, [a, b || 0].concat(ua(c))))
    };
    h.unshift = function() {
        return this.values.unshift.apply(this.values, ua(ya.apply(0, arguments)))
    };
    h.has = function(a) {
        return Uc(a) && this.values.hasOwnProperty(a) || this.j.has(a)
    };
    h.Ha = function() {
        this.C = !0;
        Object.freeze(this.values)
    };
    h.xc = function() {
        return this.C
    };

    function Wc(a) {
        for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
        return b
    };
    var Xc = function(a, b) {
        this.functionName = a;
        this.Ld = b;
        this.j = new Ba;
        this.C = !1
    };
    h = Xc.prototype;
    h.toString = function() {
        return this.functionName
    };
    h.getName = function() {
        return this.functionName
    };
    h.invoke = function(a) {
        return this.Ld.call.apply(this.Ld, [new Yc(this, a)].concat(ua(ya.apply(1, arguments))))
    };
    h.hb = function(a) {
        var b = ya.apply(1, arguments);
        try {
            return this.invoke.apply(this, [a].concat(ua(b)))
        } catch (c) {}
    };
    h.get = function(a) {
        return this.j.get(a)
    };
    h.set = function(a, b) {
        this.C || this.j.set(a, b)
    };
    h.has = function(a) {
        return this.j.has(a)
    };
    h.remove = function(a) {
        this.C || this.j.remove(a)
    };
    h.ka = function() {
        return this.j.ka()
    };
    h.Xb = function() {
        return this.j.Xb()
    };
    h.Fb = function() {
        return this.j.Fb()
    };
    h.Ha = function() {
        this.C = !0
    };
    h.xc = function() {
        return this.C
    };
    var Zc = function(a, b) {
        Xc.call(this, a, b)
    };
    sa(Zc, Xc);
    var $c = function(a, b) {
        Xc.call(this, a, b)
    };
    sa($c, Xc);
    var Yc = function(a, b) {
        this.Ld = a;
        this.D = b
    };
    Yc.prototype.evaluate = function(a) {
        var b = this.D;
        return Array.isArray(a) ? Ka(b, a) : a
    };
    Yc.prototype.getName = function() {
        return this.Ld.getName()
    };
    Yc.prototype.Md = function() {
        return this.D.Md()
    };
    var ad = function() {
        this.map = new Map
    };
    ad.prototype.set = function(a, b) {
        this.map.set(a, b)
    };
    ad.prototype.get = function(a) {
        return this.map.get(a)
    };
    var bd = function() {
        this.keys = [];
        this.values = []
    };
    bd.prototype.set = function(a, b) {
        this.keys.push(a);
        this.values.push(b)
    };
    bd.prototype.get = function(a) {
        var b = this.keys.indexOf(a);
        if (b > -1) return this.values[b]
    };

    function cd() {
        try {
            return Map ? new ad : new bd
        } catch (a) {
            return new bd
        }
    };
    var dd = function(a) {
        if (a instanceof dd) return a;
        if (Tc(a)) throw Error("Type of given value has an equivalent Pixie type.");
        this.value = a
    };
    dd.prototype.getValue = function() {
        return this.value
    };
    dd.prototype.toString = function() {
        return String(this.value)
    };
    var fd = function(a) {
        this.promise = a;
        this.C = !1;
        this.j = new Ba;
        this.j.set("then", ed(this));
        this.j.set("catch", ed(this, !0));
        this.j.set("finally", ed(this, !1, !0))
    };
    h = fd.prototype;
    h.get = function(a) {
        return this.j.get(a)
    };
    h.set = function(a, b) {
        this.C || this.j.set(a, b)
    };
    h.has = function(a) {
        return this.j.has(a)
    };
    h.remove = function(a) {
        this.C || this.j.remove(a)
    };
    h.ka = function() {
        return this.j.ka()
    };
    h.Xb = function() {
        return this.j.Xb()
    };
    h.Fb = function() {
        return this.j.Fb()
    };
    var ed = function(a, b, c) {
        b = b === void 0 ? !1 : b;
        c = c === void 0 ? !1 : c;
        return new Zc("", function(d, e) {
            b && (e = d, d = void 0);
            c && (e = d);
            d instanceof Zc || (d = void 0);
            e instanceof Zc || (e = void 0);
            var f = Ia(this.D),
                g = function(m) {
                    return function(n) {
                        return c ? (m.invoke(f), a.promise) : m.invoke(f, n)
                    }
                },
                k = a.promise.then(d && g(d), e && g(e));
            return new fd(k)
        })
    };
    fd.prototype.Ha = function() {
        this.C = !0
    };
    fd.prototype.xc = function() {
        return this.C
    };

    function J(a, b, c) {
        var d = cd(),
            e = function(g, k) {
                for (var m = g.ka(), n = 0; n < m.length; n++) k[m[n]] = f(g.get(m[n]))
            },
            f = function(g) {
                if (g === null || g === void 0) return g;
                var k = d.get(g);
                if (k) return k;
                if (g instanceof Vc) {
                    var m = [];
                    d.set(g, m);
                    for (var n = g.ka(), p = 0; p < n.length; p++) m[n[p]] = f(g.get(n[p]));
                    return m
                }
                if (g instanceof fd) return g.promise;
                if (g instanceof Ma) {
                    var q = {};
                    d.set(g, q);
                    e(g, q);
                    return q
                }
                if (g instanceof Zc || g instanceof $c) {
                    var r = function() {
                        for (var v = ya.apply(0, arguments), u = [], w = 0; w < v.length; w++) u[w] = gd(v[w],
                            b, c);
                        var x = new Fa(b ? b.Md() : new Ea);
                        b && (x.j = b.j);
                        return f(g.invoke.apply(g, [x].concat(ua(u))))
                    };
                    d.set(g, r);
                    e(g, r);
                    return r
                }
                var t = !1;
                switch (c) {
                    case 1:
                        t = !0;
                        break;
                    case 2:
                        t = !1;
                        break;
                    case 3:
                        t = !1;
                        break;
                    default:
                }
                if (g instanceof dd && t) return g.getValue();
                switch (typeof g) {
                    case "boolean":
                    case "number":
                    case "string":
                    case "undefined":
                        return g;
                    case "object":
                        if (g === null) return null
                }
            };
        return f(a)
    }

    function gd(a, b, c) {
        var d = cd(),
            e = function(g, k) {
                for (var m in g) g.hasOwnProperty(m) && k.set(m, f(g[m]))
            },
            f = function(g) {
                var k = d.get(g);
                if (k) return k;
                if (Array.isArray(g) || ib(g)) {
                    var m = new Vc;
                    d.set(g, m);
                    for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
                    return m
                }
                if (Rc(g)) {
                    var p = new Ma;
                    d.set(g, p);
                    e(g, p);
                    return p
                }
                if (typeof g === "function") {
                    var q = new Zc("", function() {
                        for (var x = ya.apply(0, arguments), y = [], A = 0; A < x.length; A++) y[A] = J(this.evaluate(x[A]), b, c);
                        return f((0, this.D.H)(g, g, y))
                    });
                    d.set(g, q);
                    e(g, q);
                    return q
                }
                var u = typeof g;
                if (g === null || u === "string" || u === "number" || u === "boolean") return g;
                var w = !1;
                switch (c) {
                    case 1:
                        w = !0;
                        break;
                    case 2:
                        w = !1;
                        break;
                    default:
                }
                if (g !== void 0 && w) return new dd(g)
            };
        return f(a)
    };

    function hd() {
        var a = !1;
        return a
    };
    var id = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a) {
            for (var b = [], c = 0; c < this.length(); c++) b.push(this.get(c));
            for (var d = 1; d < arguments.length; d++)
                if (arguments[d] instanceof Vc)
                    for (var e = arguments[d], f = 0; f < e.length(); f++) b.push(e.get(f));
                else b.push(arguments[d]);
            return new Vc(b)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() &&
                d < c; d++)
                if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
            return !0
        },
        filter: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
            return new Vc(d)
        },
        forEach: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.invoke(a, this.get(d), d, this)
        },
        hasOwnProperty: function(a, b) {
            return this.has(b)
        },
        indexOf: function(a, b, c) {
            var d = this.length(),
                e = c === void 0 ? 0 : Number(c);
            e < 0 && (e = Math.max(d + e, 0));
            for (var f =
                    e; f < d; f++)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        join: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function(a, b, c) {
            var d = this.length(),
                e = d - 1;
            c !== void 0 && (e = c < 0 ? d + c : Math.min(c, e));
            for (var f = e; f >= 0; f--)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        map: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
            return new Vc(d)
        },
        pop: function() {
            return this.pop()
        },
        push: function(a) {
            return this.push.apply(this,
                ua(ya.apply(1, arguments)))
        },
        reduce: function(a, b, c) {
            var d = this.length(),
                e, f = 0;
            if (c !== void 0) e = c;
            else {
                if (d === 0) throw Error("TypeError: Reduce on List with no elements.");
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break
                    }
                if (g === d) throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var k = f; k < d; k++) this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
            return e
        },
        reduceRight: function(a, b, c) {
            var d = this.length(),
                e, f = d - 1;
            if (c !== void 0) e = c;
            else {
                if (d === 0) throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break
                    }
                if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var k = f; k >= 0; k--) this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
            return e
        },
        reverse: function() {
            for (var a = Wc(this), b = a.length - 1, c = 0; b >= 0; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
            return this
        },
        shift: function() {
            return this.shift()
        },
        slice: function(a, b, c) {
            var d = this.length();
            b === void 0 && (b = 0);
            b = b < 0 ? Math.max(d + b, 0) : Math.min(b, d);
            c = c === void 0 ?
                d : c < 0 ? Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new Vc(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
            return !1
        },
        sort: function(a, b) {
            var c = Wc(this);
            b === void 0 ? c.sort() : c.sort(function(e, f) {
                return Number(b.invoke(a, e, f))
            });
            for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
            return this
        },
        splice: function(a, b, c) {
            return this.splice.apply(this, [b, c].concat(ua(ya.apply(3, arguments))))
        },
        toString: function() {
            return this.toString()
        },
        unshift: function(a) {
            return this.unshift.apply(this, ua(ya.apply(1, arguments)))
        }
    };
    var jd = function(a) {
        var b;
        b = Error.call(this, a);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack)
    };
    sa(jd, Error);
    var kd = {
            charAt: 1,
            concat: 1,
            indexOf: 1,
            lastIndexOf: 1,
            match: 1,
            replace: 1,
            search: 1,
            slice: 1,
            split: 1,
            substring: 1,
            toLowerCase: 1,
            toLocaleLowerCase: 1,
            toString: 1,
            toUpperCase: 1,
            toLocaleUpperCase: 1,
            trim: 1
        },
        ld = new Aa("break"),
        md = new Aa("continue");

    function nd(a, b) {
        return this.evaluate(a) + this.evaluate(b)
    }

    function od(a, b) {
        return this.evaluate(a) && this.evaluate(b)
    }

    function pd(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c);
        if (!(f instanceof Vc)) throw Error("Error: Non-List argument given to Apply instruction.");
        if (d === null || d === void 0) {
            var g = "TypeError: Can't read property " + e + " of " + d + ".";
            if (hd()) throw new jd(g);
            throw Error(g);
        }
        var k = typeof d === "number";
        if (typeof d === "boolean" || k) {
            if (e === "toString") {
                if (k && f.length()) {
                    var m = J(f.get(0));
                    try {
                        return d.toString(m)
                    } catch (D) {}
                }
                return d.toString()
            }
            var n = "TypeError: " + d + "." + e + " is not a function.";
            if (hd()) throw new jd(n);
            throw Error(n);
        }
        if (typeof d === "string") {
            if (kd.hasOwnProperty(e)) {
                var p = 2;
                p = 1;
                var q = J(f, void 0, p);
                return gd(d[e].apply(d, q), this.D)
            }
            var r = "TypeError: " + e + " is not a function";
            if (hd()) throw new jd(r);
            throw Error(r);
        }
        if (d instanceof Vc) {
            if (d.has(e)) {
                var t = d.get(String(e));
                if (t instanceof Zc) {
                    var v = Wc(f);
                    return t.invoke.apply(t, [this.D].concat(ua(v)))
                }
                var u =
                    "TypeError: " + e + " is not a function";
                if (hd()) throw new jd(u);
                throw Error(u);
            }
            if (id.supportedMethods.indexOf(e) >= 0) {
                var w = Wc(f);
                return id[e].call.apply(id[e], [d, this.D].concat(ua(w)))
            }
        }
        if (d instanceof Zc || d instanceof Ma || d instanceof fd) {
            if (d.has(e)) {
                var x = d.get(e);
                if (x instanceof Zc) {
                    var y = Wc(f);
                    return x.invoke.apply(x, [this.D].concat(ua(y)))
                }
                var A = "TypeError: " + e + " is not a function";
                if (hd()) throw new jd(A);
                throw Error(A);
            }
            if (e === "toString") return d instanceof Zc ? d.getName() : d.toString();
            if (e ===
                "hasOwnProperty") return d.has(f.get(0))
        }
        if (d instanceof dd && e === "toString") return d.toString();
        var C = "TypeError: Object has no '" + e + "' property.";
        if (hd()) throw new jd(C);
        throw Error(C);
    }

    function qd(a, b) {
        a = this.evaluate(a);
        if (typeof a !== "string") throw Error("Invalid key name given for assignment.");
        var c = this.D;
        if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
        var d = this.evaluate(b);
        c.set(a, d);
        return d
    }

    function rd() {
        var a = ya.apply(0, arguments),
            b = Ia(this.D),
            c = Ja(b, a);
        if (c instanceof Aa) return c
    }

    function sd() {
        return ld
    }

    function td(a) {
        for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
            var d = this.evaluate(b[c]);
            if (d instanceof Aa) return d
        }
    }

    function ud() {
        for (var a = this.D, b = 0; b < arguments.length - 1; b += 2) {
            var c = arguments[b];
            if (typeof c === "string") {
                var d = this.evaluate(arguments[b + 1]);
                Ha(a, c, d, !0)
            }
        }
    }

    function vd() {
        return md
    }

    function wd(a, b) {
        return new Aa(a, this.evaluate(b))
    }

    function xd(a, b) {
        for (var c = ya.apply(2, arguments), d = new Vc, e = this.evaluate(b), f = 0; f < e.length; f++) d.push(e[f]);
        var g = [51, a, d].concat(ua(c));
        this.D.add(a, this.evaluate(g))
    }

    function yd(a, b) {
        return this.evaluate(a) / this.evaluate(b)
    }

    function zd(a, b) {
        var c = this.evaluate(a),
            d = this.evaluate(b),
            e = c instanceof dd,
            f = d instanceof dd;
        return e || f ? e && f ? c.getValue() === d.getValue() : !1 : c == d
    }

    function Ad() {
        for (var a, b = 0; b < arguments.length; b++) a = this.evaluate(arguments[b]);
        return a
    }

    function Bd(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e)),
                g = Ja(f, d);
            if (g instanceof Aa) {
                if (g.type === "break") break;
                if (g.type === "return") return g
            }
        }
    }

    function Cd(a, b, c) {
        if (typeof b === "string") return Bd(a, function() {
            return b.length
        }, function(f) {
            return f
        }, c);
        if (b instanceof Ma || b instanceof fd || b instanceof Vc || b instanceof Zc) {
            var d = b.ka(),
                e = d.length;
            return Bd(a, function() {
                return e
            }, function(f) {
                return d[f]
            }, c)
        }
    }

    function Dd(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c),
            g = this.D;
        return Cd(function(k) {
            g.set(d, k);
            return g
        }, e, f)
    }

    function Ed(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c),
            g = this.D;
        return Cd(function(k) {
            var m = Ia(g);
            Ha(m, d, k, !0);
            return m
        }, e, f)
    }

    function Fd(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c),
            g = this.D;
        return Cd(function(k) {
            var m = Ia(g);
            m.add(d, k);
            return m
        }, e, f)
    }

    function Gd(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c),
            g = this.D;
        return Hd(function(k) {
            g.set(d, k);
            return g
        }, e, f)
    }

    function Id(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c),
            g = this.D;
        return Hd(function(k) {
            var m = Ia(g);
            Ha(m, d, k, !0);
            return m
        }, e, f)
    }

    function Jd(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c),
            g = this.D;
        return Hd(function(k) {
            var m = Ia(g);
            m.add(d, k);
            return m
        }, e, f)
    }

    function Hd(a, b, c) {
        if (typeof b === "string") return Bd(a, function() {
            return b.length
        }, function(d) {
            return b[d]
        }, c);
        if (b instanceof Vc) return Bd(a, function() {
            return b.length()
        }, function(d) {
            return b.get(d)
        }, c);
        if (hd()) throw new jd("The value is not iterable.");
        throw new TypeError("The value is not iterable.");
    }

    function Kd(a, b, c, d) {
        function e(q, r) {
            for (var t = 0; t < f.length(); t++) {
                var v = f.get(t);
                r.add(v, q.get(v))
            }
        }
        var f = this.evaluate(a);
        if (!(f instanceof Vc)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
        var g = this.D,
            k = this.evaluate(d),
            m = Ia(g);
        for (e(g, m); Ka(m, b);) {
            var n = Ja(m, k);
            if (n instanceof Aa) {
                if (n.type === "break") break;
                if (n.type === "return") return n
            }
            var p = Ia(g);
            e(m, p);
            Ka(p, c);
            m = p
        }
    }

    function Ld(a, b) {
        var c = ya.apply(2, arguments),
            d = this.D,
            e = this.evaluate(b);
        if (!(e instanceof Vc)) throw Error("Error: non-List value given for Fn argument names.");
        return new Zc(a, function() {
            return function() {
                var f = ya.apply(0, arguments),
                    g = Ia(d);
                g.j === void 0 && (g.j = this.D.j);
                for (var k = [], m = 0; m < f.length; m++) {
                    var n = this.evaluate(f[m]);
                    k[m] = n
                }
                for (var p = e.get("length"), q = 0; q < p; q++) q < k.length ? g.add(e.get(q), k[q]) : g.add(e.get(q), void 0);
                g.add("arguments", new Vc(k));
                var r = Ja(g, c);
                if (r instanceof Aa) return r.type ===
                    "return" ? r.data : r
            }
        }())
    }

    function Md(a) {
        var b = this.evaluate(a),
            c = this.D;
        if (Nd && !c.has(b)) throw new ReferenceError(b + " is not defined.");
        return c.get(b)
    }

    function Od(a, b) {
        var c, d = this.evaluate(a),
            e = this.evaluate(b);
        if (d === void 0 || d === null) {
            var f = "TypeError: Cannot read properties of " + d + " (reading '" + e + "')";
            if (hd()) throw new jd(f);
            throw Error(f);
        }
        if (d instanceof Ma || d instanceof fd || d instanceof Vc || d instanceof Zc) c = d.get(e);
        else if (typeof d === "string") e === "length" ? c = d.length : Uc(e) && (c = d[e]);
        else if (d instanceof dd) return;
        return c
    }

    function Pd(a, b) {
        return this.evaluate(a) > this.evaluate(b)
    }

    function Qd(a, b) {
        return this.evaluate(a) >= this.evaluate(b)
    }

    function Rd(a, b) {
        var c = this.evaluate(a),
            d = this.evaluate(b);
        c instanceof dd && (c = c.getValue());
        d instanceof dd && (d = d.getValue());
        return c === d
    }

    function Sd(a, b) {
        return !Rd.call(this, a, b)
    }

    function Td(a, b, c) {
        var d = [];
        this.evaluate(a) ? d = this.evaluate(b) : c && (d = this.evaluate(c));
        var e = Ja(this.D, d);
        if (e instanceof Aa) return e
    }
    var Nd = !1;

    function Ud(a, b) {
        return this.evaluate(a) < this.evaluate(b)
    }

    function Vd(a, b) {
        return this.evaluate(a) <= this.evaluate(b)
    }

    function Wd() {
        for (var a = new Vc, b = 0; b < arguments.length; b++) {
            var c = this.evaluate(arguments[b]);
            a.push(c)
        }
        return a
    }

    function Xd() {
        for (var a = new Ma, b = 0; b < arguments.length - 1; b += 2) {
            var c = String(this.evaluate(arguments[b])),
                d = this.evaluate(arguments[b + 1]);
            a.set(c, d)
        }
        return a
    }

    function Yd(a, b) {
        return this.evaluate(a) % this.evaluate(b)
    }

    function Zd(a, b) {
        return this.evaluate(a) * this.evaluate(b)
    }

    function $d(a) {
        return -this.evaluate(a)
    }

    function ae(a) {
        return !this.evaluate(a)
    }

    function be(a, b) {
        return !zd.call(this, a, b)
    }

    function ce() {
        return null
    }

    function de(a, b) {
        return this.evaluate(a) || this.evaluate(b)
    }

    function ee(a, b) {
        var c = this.evaluate(a);
        this.evaluate(b);
        return c
    }

    function fe(a) {
        return this.evaluate(a)
    }

    function ge() {
        return ya.apply(0, arguments)
    }

    function he(a) {
        return new Aa("return", this.evaluate(a))
    }

    function ie(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c);
        if (d === null || d === void 0) {
            var g = "TypeError: Can't set property " + e + " of " + d + ".";
            if (hd()) throw new jd(g);
            throw Error(g);
        }(d instanceof Zc || d instanceof Vc || d instanceof Ma) && d.set(String(e), f);
        return f
    }

    function je(a, b) {
        return this.evaluate(a) - this.evaluate(b)
    }

    function ke(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c);
        if (!Array.isArray(e) || !Array.isArray(f)) throw Error("Error: Malformed switch instruction.");
        for (var g, k = !1, m = 0; m < e.length; m++)
            if (k || d === this.evaluate(e[m]))
                if (g = this.evaluate(f[m]), g instanceof Aa) {
                    var n = g.type;
                    if (n === "break") return;
                    if (n === "return" || n === "continue") return g
                } else k = !0;
        if (f.length === e.length + 1 && (g = this.evaluate(f[f.length - 1]), g instanceof Aa && (g.type === "return" || g.type === "continue"))) return g
    }

    function le(a, b, c) {
        return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c)
    }

    function me(a) {
        var b = this.evaluate(a);
        return b instanceof Zc ? "function" : typeof b
    }

    function ne() {
        for (var a = this.D, b = 0; b < arguments.length; b++) {
            var c = arguments[b];
            typeof c !== "string" || a.add(c, void 0)
        }
    }

    function oe(a, b, c, d) {
        var e = this.evaluate(d);
        if (this.evaluate(c)) {
            var f = Ja(this.D, e);
            if (f instanceof Aa) {
                if (f.type === "break") return;
                if (f.type === "return") return f
            }
        }
        for (; this.evaluate(a);) {
            var g = Ja(this.D, e);
            if (g instanceof Aa) {
                if (g.type === "break") break;
                if (g.type === "return") return g
            }
            this.evaluate(b)
        }
    }

    function pe(a) {
        return ~Number(this.evaluate(a))
    }

    function qe(a, b) {
        return Number(this.evaluate(a)) << Number(this.evaluate(b))
    }

    function re(a, b) {
        return Number(this.evaluate(a)) >> Number(this.evaluate(b))
    }

    function te(a, b) {
        return Number(this.evaluate(a)) >>> Number(this.evaluate(b))
    }

    function ue(a, b) {
        return Number(this.evaluate(a)) & Number(this.evaluate(b))
    }

    function ve(a, b) {
        return Number(this.evaluate(a)) ^ Number(this.evaluate(b))
    }

    function we(a, b) {
        return Number(this.evaluate(a)) | Number(this.evaluate(b))
    }

    function xe() {}

    function ye(a, b, c, d, e) {
        var f = !0;
        try {
            var g = this.evaluate(c);
            if (g instanceof Aa) return g
        } catch (r) {
            if (!(r instanceof jd && a)) throw f = r instanceof jd, r;
            var k = Ia(this.D),
                m = new dd(r);
            k.add(b, m);
            var n = this.evaluate(d),
                p = Ja(k, n);
            if (p instanceof Aa) return p
        } finally {
            if (f && e !== void 0) {
                var q = this.evaluate(e);
                if (q instanceof Aa) return q
            }
        }
    };
    var Ae = function() {
        this.j = new La;
        ze(this)
    };
    Ae.prototype.execute = function(a) {
        return this.j.si(a)
    };
    var ze = function(a) {
        var b = function(c, d) {
            var e = new $c(String(c), d);
            e.Ha();
            a.j.j.set(String(c), e)
        };
        b("map", Xd);
        b("and", Ic);
        b("contains", Lc);
        b("equals", Jc);
        b("or", Kc);
        b("startsWith", Mc);
        b("variable", Nc)
    };
    var Ce = function() {
        this.C = !1;
        this.j = new La;
        Be(this);
        this.C = !0
    };
    Ce.prototype.execute = function(a) {
        return De(this.j.si(a))
    };
    var Ee = function(a, b, c) {
        return De(a.j.Hl(b, c))
    };
    Ce.prototype.Ha = function() {
        this.j.Ha()
    };
    var Be = function(a) {
        var b = function(c, d) {
            var e = String(c),
                f = new $c(e, d);
            f.Ha();
            a.j.j.set(e, f)
        };
        b(0, nd);
        b(1, od);
        b(2, pd);
        b(3, qd);
        b(56, ue);
        b(57, qe);
        b(58, pe);
        b(59, we);
        b(60, re);
        b(61, te);
        b(62, ve);
        b(53, rd);
        b(4, sd);
        b(5, td);
        b(52, ud);
        b(6, vd);
        b(49, wd);
        b(7, Wd);
        b(8, Xd);
        b(9, td);
        b(50, xd);
        b(10, yd);
        b(12, zd);
        b(13, Ad);
        b(51, Ld);
        b(47, Dd);
        b(54, Ed);
        b(55, Fd);
        b(63, Kd);
        b(64, Gd);
        b(65, Id);
        b(66, Jd);
        b(15, Md);
        b(16, Od);
        b(17, Od);
        b(18, Pd);
        b(19, Qd);
        b(20, Rd);
        b(21, Sd);
        b(22, Td);
        b(23, Ud);
        b(24, Vd);
        b(25, Yd);
        b(26, Zd);
        b(27, $d);
        b(28, ae);
        b(29,
            be);
        b(45, ce);
        b(30, de);
        b(32, ee);
        b(33, ee);
        b(34, fe);
        b(35, fe);
        b(46, ge);
        b(36, he);
        b(43, ie);
        b(37, je);
        b(38, ke);
        b(39, le);
        b(67, ye);
        b(40, me);
        b(44, xe);
        b(41, ne);
        b(42, oe)
    };
    Ce.prototype.Md = function() {
        return this.j.Md()
    };

    function De(a) {
        if (a instanceof Aa || a instanceof Zc || a instanceof Vc || a instanceof Ma || a instanceof fd || a instanceof dd || a === null || a === void 0 || typeof a === "string" || typeof a === "number" || typeof a === "boolean") return a
    };
    var Fe = function(a) {
        this.message = a
    };

    function Ge(a) {
        var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a];
        return b === void 0 ? new Fe("Value " + a + " can not be encoded in web-safe base64 dictionary.") : b
    };

    function He(a) {
        switch (a) {
            case 1:
                return "1";
            case 2:
            case 4:
                return "0";
            default:
                return "-"
        }
    };
    var Ie = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function Je(a, b) {
        for (var c = "", d = !0; a > 7;) {
            var e = a & 31;
            a >>= 5;
            d ? d = !1 : e |= 32;
            c = "" + Ge(e) + c
        }
        a <<= 2;
        d || (a |= 32);
        return c = "" + Ge(a | b) + c
    };
    var Ke = function() {
        function a(b) {
            return {
                toString: function() {
                    return b
                }
            }
        }
        return {
            Zk: a("consent"),
            Ei: a("convert_case_to"),
            Fi: a("convert_false_to"),
            Gi: a("convert_null_to"),
            Hi: a("convert_true_to"),
            Ii: a("convert_undefined_to"),
            Qn: a("debug_mode_metadata"),
            qa: a("function"),
            vh: a("instance_name"),
            Kl: a("live_only"),
            Ll: a("malware_disabled"),
            METADATA: a("metadata"),
            Ol: a("original_activity_id"),
            eo: a("original_vendor_template_id"),
            co: a("once_on_load"),
            Nl: a("once_per_event"),
            Sj: a("once_per_load"),
            ho: a("priority_override"),
            io: a("respected_consent_types"),
            bk: a("setup_tags"),
            Me: a("tag_id"),
            hk: a("teardown_tags")
        }
    }();
    var Me = function(a) {
            return Le[a]
        },
        Oe = function(a) {
            return Ne[a]
        },
        Qe = function(a) {
            return Pe[a]
        },
        Re = [],
        Pe = {
            "\x00": "&#0;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\v": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            "-": "&#45;",
            "/": "&#47;",
            "=": "&#61;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        },
        Se = /[\x00\x22\x26\x27\x3c\x3e]/g;
    var We = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
        Ne = {
            "\x00": "\\x00",
            "\b": "\\x08",
            "\t": "\\t",
            "\n": "\\n",
            "\v": "\\x0b",
            "\f": "\\f",
            "\r": "\\r",
            '"': "\\x22",
            "&": "\\x26",
            "'": "\\x27",
            "/": "\\/",
            "<": "\\x3c",
            "=": "\\x3d",
            ">": "\\x3e",
            "\\": "\\\\",
            "\u0085": "\\x85",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029",
            $: "\\x24",
            "(": "\\x28",
            ")": "\\x29",
            "*": "\\x2a",
            "+": "\\x2b",
            ",": "\\x2c",
            "-": "\\x2d",
            ".": "\\x2e",
            ":": "\\x3a",
            "?": "\\x3f",
            "[": "\\x5b",
            "]": "\\x5d",
            "^": "\\x5e",
            "{": "\\x7b",
            "|": "\\x7c",
            "}": "\\x7d"
        };
    Re[7] = function(a) {
        return String(a).replace(We, Oe)
    };
    var df = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Le = {
            "\x00": "%00",
            "\u0001": "%01",
            "\u0002": "%02",
            "\u0003": "%03",
            "\u0004": "%04",
            "\u0005": "%05",
            "\u0006": "%06",
            "\u0007": "%07",
            "\b": "%08",
            "\t": "%09",
            "\n": "%0A",
            "\v": "%0B",
            "\f": "%0C",
            "\r": "%0D",
            "\u000e": "%0E",
            "\u000f": "%0F",
            "\u0010": "%10",
            "\u0011": "%11",
            "\u0012": "%12",
            "\u0013": "%13",
            "\u0014": "%14",
            "\u0015": "%15",
            "\u0016": "%16",
            "\u0017": "%17",
            "\u0018": "%18",
            "\u0019": "%19",
            "\u001a": "%1A",
            "\u001b": "%1B",
            "\u001c": "%1C",
            "\u001d": "%1D",
            "\u001e": "%1E",
            "\u001f": "%1F",
            " ": "%20",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "<": "%3C",
            ">": "%3E",
            "\\": "%5C",
            "{": "%7B",
            "}": "%7D",
            "\u007f": "%7F",
            "\u0085": "%C2%85",
            "\u00a0": "%C2%A0",
            "\u2028": "%E2%80%A8",
            "\u2029": "%E2%80%A9",
            "\uff01": "%EF%BC%81",
            "\uff03": "%EF%BC%83",
            "\uff04": "%EF%BC%84",
            "\uff06": "%EF%BC%86",
            "\uff07": "%EF%BC%87",
            "\uff08": "%EF%BC%88",
            "\uff09": "%EF%BC%89",
            "\uff0a": "%EF%BC%8A",
            "\uff0b": "%EF%BC%8B",
            "\uff0c": "%EF%BC%8C",
            "\uff0f": "%EF%BC%8F",
            "\uff1a": "%EF%BC%9A",
            "\uff1b": "%EF%BC%9B",
            "\uff1d": "%EF%BC%9D",
            "\uff1f": "%EF%BC%9F",
            "\uff20": "%EF%BC%A0",
            "\uff3b": "%EF%BC%BB",
            "\uff3d": "%EF%BC%BD"
        };
    var ff;
    var gf = [],
        hf = [],
        jf = [],
        kf = [],
        lf = [],
        mf = {},
        nf, of ;

    function pf(a) { of = of || a
    }

    function qf() {
        for (var a = data.resource || {}, b = a.macros || [], c = 0; c < b.length; c++) gf.push(b[c]);
        for (var d = a.tags || [], e = 0; e < d.length; e++) kf.push(d[e]);
        for (var f = a.predicates || [], g = 0; g < f.length; g++) jf.push(f[g]);
        for (var k = a.rules || [], m = 0; m < k.length; m++) {
            for (var n = k[m], p = {}, q = 0; q < n.length; q++) {
                var r = n[q][0];
                p[r] = Array.prototype.slice.call(n[q], 1);
                r !== "if" && r !== "unless" || rf(p[r])
            }
            hf.push(p)
        }
    }

    function rf(a) {}
    var sf, tf = [],
        uf = [];

    function vf(a, b) {
        var c = {};
        c[Ke.qa] = "__" + a;
        for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
        return c
    }

    function wf(a, b, c) {
        try {
            return nf(xf(a, b, c))
        } catch (d) {
            JSON.stringify(a)
        }
        return 2
    }

    function yf(a) {
        var b = a[Ke.qa];
        if (!b) throw Error("Error: No function name given for function call.");
        return !!mf[b]
    }
    var xf = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = zf(a[e], b, c));
            return d
        },
        zf = function(a, b, c) {
            if (Array.isArray(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(zf(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = gf[f];
                        if (!g || b.isBlocked(g)) return;
                        c[f] = !0;
                        var k = String(g[Ke.vh]);
                        try {
                            var m = xf(g, b, c);
                            m.vtp_gtmEventId = b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = Af(m, {
                                event: b,
                                index: f,
                                type: 2,
                                name: k
                            });
                            sf && (d = sf.gm(d, m))
                        } catch (y) {
                            b.logMacroError && b.logMacroError(y, Number(f), k), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[zf(a[n], b, c)] = zf(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = zf(a[q], b, c); of && (p = p || of .Um(r));
                            d.push(r)
                        }
                        return of && p ? of .jm(d) : d.join("");
                    case "escape":
                        d = zf(a[1], b, c);
                        if ( of && Array.isArray(a[1]) && a[1][0] === "macro" && of .Vm(a)) return of.qn(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++) Re[a[t]] && (d = Re[a[t]](d));
                        return d;
                    case "tag":
                        var v = a[1];
                        if (!kf[v]) throw Error("Unable to resolve tag reference " + v + ".");
                        return {
                            rk: a[2],
                            index: v
                        };
                    case "zb":
                        var u = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        u[Ke.qa] = a[1];
                        var w = wf(u, b, c),
                            x = !!a[4];
                        return x || w !== 2 ? x !== (w === 1) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        Af = function(a, b) {
            var c = a[Ke.qa],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = mf[c],
                f = b && b.type === 2 && (d == null ? void 0 : d.reportMacroDiscrepancy) &&
                e && tf.indexOf(c) !== -1,
                g = {},
                k = {},
                m;
            for (m in a) a.hasOwnProperty(m) && tb(m, "vtp_") && (e && (g[m] = a[m]), !e || f) && (k[m.substring(4)] = a[m]);
            e && d && d.cachedModelValues && (g.vtp_gtmCachedValues = d.cachedModelValues);
            if (b) {
                if (b.name == null) {
                    var n;
                    a: {
                        var p = b.type,
                            q = b.index;
                        if (q == null) n = "";
                        else {
                            var r;
                            switch (p) {
                                case 2:
                                    r = gf[q];
                                    break;
                                case 1:
                                    r = kf[q];
                                    break;
                                default:
                                    n = "";
                                    break a
                            }
                            var t = r && r[Ke.vh];
                            n = t ? String(t) : ""
                        }
                    }
                    b.name = n
                }
                e && (g.vtp_gtmEntityIndex = b.index, g.vtp_gtmEntityName = b.name)
            }
            var v, u, w;
            if (f && uf.indexOf(c) === -1) {
                uf.push(c);
                var x = ob();
                v = e(g);
                var y = ob() - x,
                    A = ob();
                u = ff(c, k, b);
                w = y - (ob() - A)
            } else if (e && (v = e(g)), !e || f) u = ff(c, k, b);
            f && d && (d.reportMacroDiscrepancy(d.id, c, void 0, !0), Tc(v) ? (Array.isArray(v) ? Array.isArray(u) : Rc(v) ? Rc(u) : typeof v === "function" ? typeof u === "function" : v === u) || d.reportMacroDiscrepancy(d.id, c) : v !== u && d.reportMacroDiscrepancy(d.id, c), w !== void 0 && d.reportMacroDiscrepancy(d.id, c, w));
            return e ? v : u
        };
    var Bf = function(a, b, c) {
        var d;
        d = Error.call(this, c);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.permissionId = a;
        this.parameters = b;
        this.name = "PermissionError"
    };
    sa(Bf, Error);
    Bf.prototype.getMessage = function() {
        return this.message
    };

    function Cf(a, b) {
        if (Array.isArray(a)) {
            Object.defineProperty(a, "context", {
                value: {
                    line: b[0]
                }
            });
            for (var c = 1; c < a.length; c++) Cf(a[c], b[c])
        }
    };
    var Df = function(a, b) {
        var c;
        c = Error.call(this, "Wrapped error for Dust debugging. Original error message: " + a.message);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.ln = a;
        this.j = [];
        this.C = b
    };
    sa(Df, Error);

    function Ef() {
        return function(a, b) {
            a instanceof Df || (a = new Df(a, Ff));
            b && a instanceof Df && a.j.push(b);
            throw a;
        }
    }

    function Ff(a) {
        if (!a.length) return a;
        a.push({
            id: "main",
            line: 0
        });
        for (var b = a.length - 1; b > 0; b--) ab(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; c > 0; c--) a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    };

    function Gf(a) {
        function b(r) {
            for (var t = 0; t < r.length; t++) d[r[t]] = !0
        }
        for (var c = [], d = [], e = Hf(a), f = 0; f < hf.length; f++) {
            var g = hf[f],
                k = If(g, e);
            if (k) {
                for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                b(g.block || [])
            } else k === null && b(g.block || []);
        }
        for (var p = [], q = 0; q < kf.length; q++) c[q] && !d[q] && (p[q] = !0);
        return p
    }

    function If(a, b) {
        for (var c = a["if"] || [], d = 0; d < c.length; d++) {
            var e = b(c[d]);
            if (e === 0) return !1;
            if (e === 2) return null
        }
        for (var f = a.unless || [], g = 0; g < f.length; g++) {
            var k = b(f[g]);
            if (k === 2) return null;
            if (k === 1) return !1
        }
        return !0
    }

    function Hf(a) {
        var b = [];
        return function(c) {
            b[c] === void 0 && (b[c] = wf(jf[c], a));
            return b[c]
        }
    };

    function Jf(a, b) {
        b[Ke.Ei] && typeof a === "string" && (a = b[Ke.Ei] === 1 ? a.toLowerCase() : a.toUpperCase());
        b.hasOwnProperty(Ke.Gi) && a === null && (a = b[Ke.Gi]);
        b.hasOwnProperty(Ke.Ii) && a === void 0 && (a = b[Ke.Ii]);
        b.hasOwnProperty(Ke.Hi) && a === !0 && (a = b[Ke.Hi]);
        b.hasOwnProperty(Ke.Fi) && a === !1 && (a = b[Ke.Fi]);
        return a
    };
    var Kf = function() {
            this.j = {}
        },
        Mf = function(a, b) {
            var c = Lf.j,
                d;
            (d = c.j)[a] != null || (d[a] = []);
            c.j[a].push(function() {
                return b.apply(null, ua(ya.apply(0, arguments)))
            })
        };

    function Nf(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0,
                    g = "A policy function denied the permission request";
                try {
                    f = a[e](b, c, d), g += "."
                } catch (k) {
                    g = typeof k === "string" ? g + (": " + k) : k instanceof Error ? g + (": " + k.message) : g + "."
                }
                if (!f) throw new Bf(c, d, g);
            }
    }

    function Of(a, b, c) {
        return function(d) {
            if (d) {
                var e = a.j[d],
                    f = a.j.all;
                if (e || f) {
                    var g = c.apply(void 0, [d].concat(ua(ya.apply(1, arguments))));
                    Nf(e, b, d, g);
                    Nf(f, b, d, g)
                }
            }
        }
    };
    var Sf = function() {
            var a = data.permissions || {},
                b = Pf.ctid,
                c = this;
            this.C = {};
            this.j = new Kf;
            var d = {},
                e = {},
                f = Of(this.j, b, function(g) {
                    return g && d[g] ? d[g].apply(void 0, [g].concat(ua(ya.apply(1, arguments)))) : {}
                });
            hb(a, function(g, k) {
                function m(p) {
                    var q = ya.apply(1, arguments);
                    if (!n[p]) throw Qf(p, {}, "The requested additional permission " + p + " is not configured.");
                    f.apply(null, [p].concat(ua(q)))
                }
                var n = {};
                hb(k, function(p, q) {
                    var r = Rf(p, q);
                    n[p] = r.assert;
                    d[p] || (d[p] = r.M);
                    r.jk && !e[p] && (e[p] = r.jk)
                });
                c.C[g] = function(p,
                    q) {
                    var r = n[p];
                    if (!r) throw Qf(p, {}, "The requested permission " + p + " is not configured.");
                    var t = Array.prototype.slice.call(arguments, 0);
                    r.apply(void 0, t);
                    f.apply(void 0, t);
                    var v = e[p];
                    v && v.apply(null, [m].concat(ua(t.slice(1))))
                }
            })
        },
        Tf = function(a) {
            return Lf.C[a] || function() {}
        };

    function Rf(a, b) {
        var c = vf(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = Qf;
        try {
            return Af(c)
        } catch (d) {
            return {
                assert: function(e) {
                    throw new Bf(e, {}, "Permission " + e + " is unknown.");
                },
                M: function() {
                    throw new Bf(a, {}, "Permission " + a + " is unknown.");
                }
            }
        }
    }

    function Qf(a, b, c) {
        return new Bf(a, b, c)
    };
    var Uf = !1;
    var Vf = {};
    Vf.Rk = kb('');
    Vf.om = kb('');
    var ag = {},
        bg = (ag.uaa = !0, ag.uab = !0, ag.uafvl = !0, ag.uamb = !0, ag.uam = !0, ag.uap = !0, ag.uapv = !0, ag.uaw = !0, ag);
    var jg = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = a,
                    e = b[c];
                if (!hg.exec(e)) throw Error("Invalid key wildcard");
                var f = e.indexOf(".*"),
                    g = f !== -1 && f === e.length - 2,
                    k = g ? e.slice(0, e.length - 2) : e,
                    m;
                a: if (d.length === 0) m = !1;
                    else {
                        for (var n = d.split("."), p = 0; p < n.length; p++)
                            if (!ig.exec(n[p])) {
                                m = !1;
                                break a
                            }
                        m = !0
                    }
                if (!m || k.length > d.length || !g && d.length !== e.length ? 0 : g ? tb(d, k) && (d === k || d.charAt(k.length) === ".") : d === k) return !0
            }
            return !1
        },
        ig = /^[a-z$_][\w-$]*$/i,
        hg = /^(?:[a-z_$][a-z-_$0-9]*\.)*[a-z_$][a-z-_$0-9]*(?:\.\*)?$/i;
    var kg = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function lg(a, b) {
        var c = String(a),
            d = String(b),
            e = c.length - d.length;
        return e >= 0 && c.indexOf(d, e) === e
    }
    var mg = new fb;

    function ng(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + String(d),
                f = mg.get(e);
            f || (f = new RegExp(b, d), mg.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function og(a, b) {
        return String(a).indexOf(String(b)) >= 0
    }

    function pg(a, b) {
        return String(a) === String(b)
    }

    function qg(a, b) {
        return Number(a) >= Number(b)
    }

    function rg(a, b) {
        return Number(a) <= Number(b)
    }

    function sg(a, b) {
        return Number(a) > Number(b)
    }

    function tg(a, b) {
        return Number(a) < Number(b)
    }

    function ug(a, b) {
        return tb(String(a), String(b))
    };
    var vg = function(a, b) {
            return a.length && b.length && a.lastIndexOf(b) === a.length - b.length
        },
        wg = function(a, b) {
            var c = b.charAt(b.length - 1) === "*" || b === "/" || b === "/*";
            vg(b, "/*") && (b = b.slice(0, -2));
            vg(b, "?") && (b = b.slice(0, -1));
            var d = b.split("*");
            if (!c && d.length === 1) return a === d[0];
            for (var e = -1, f = 0; f < d.length; f++) {
                var g = d[f];
                if (g) {
                    e = a.indexOf(g, e);
                    if (e === -1 || f === 0 && e !== 0) return !1;
                    e += g.length
                }
            }
            if (c || e === a.length) return !0;
            var k = d[d.length - 1];
            return a.lastIndexOf(k) === a.length - k.length
        },
        xg = function(a) {
            return a.protocol ===
                "https:" && (!a.port || a.port === "443")
        },
        Ag = function(a, b) {
            var c;
            if (!(c = !xg(a))) {
                var d;
                a: {
                    var e = a.hostname.split(".");
                    if (e.length < 2) d = !1;
                    else {
                        for (var f = 0; f < e.length; f++)
                            if (!yg.exec(e[f])) {
                                d = !1;
                                break a
                            }
                        d = !0
                    }
                }
                c = !d
            }
            if (c) return !1;
            for (var g = 0; g < b.length; g++) {
                var k;
                var m = a,
                    n = b[g];
                if (!zg.exec(n)) throw Error("Invalid Wildcard");
                var p = n.slice(8),
                    q = p.slice(0, p.indexOf("/")),
                    r;
                var t = m.hostname,
                    v = q;
                if (v.indexOf("*.") !== 0) r = t.toLowerCase() === v.toLowerCase();
                else {
                    v = v.slice(2);
                    var u = t.toLowerCase().indexOf(v.toLowerCase());
                    r = u === -1 ? !1 : t.length === v.length ? !0 : t.length !== v.length + u ? !1 : t[u - 1] === "."
                }
                if (r) {
                    var w = p.slice(p.indexOf("/"));
                    k = wg(m.pathname + m.search, w) ? !0 : !1
                } else k = !1;
                if (k) return !0
            }
            return !1
        },
        yg = /^[a-z0-9-]+$/i,
        zg = /^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i;
    var Bg = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
        Cg = {
            Fn: "function",
            PixieMap: "Object",
            List: "Array"
        };

    function Dg(a, b) {
        for (var c = ["input:!*"], d = 0; d < c.length; d++) {
            var e = Bg.exec(c[d]);
            if (!e) throw Error("Internal Error in " + a);
            var f = e[1],
                g = e[2] === "!",
                k = e[3],
                m = b[d];
            if (m == null) {
                if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
            } else if (k !== "*") {
                var n = typeof m;
                m instanceof Zc ? n = "Fn" : m instanceof Vc ? n = "List" : m instanceof Ma ? n = "PixieMap" : m instanceof fd ? n = "PixiePromise" : m instanceof dd && (n = "OpaqueValue");
                if (n !== k) throw Error("Error in " + a + ". Argument " + f + " has type " + ((Cg[n] || n) + ", which does not match required type ") +
                    ((Cg[k] || k) + "."));
            }
        }
    }

    function L(a, b, c) {
        for (var d = [], e = l(c), f = e.next(); !f.done; f = e.next()) {
            var g = f.value;
            g instanceof Zc ? d.push("function") : g instanceof Vc ? d.push("Array") : g instanceof Ma ? d.push("Object") : g instanceof fd ? d.push("Promise") : g instanceof dd ? d.push("OpaqueValue") : d.push(typeof g)
        }
        return Error("Argument error in " + a + ". Expected argument types [" + (b.join(",") + "], but received [") + (d.join(",") + "]."))
    }

    function Eg(a) {
        return a instanceof Ma
    }

    function Fg(a) {
        return Eg(a) || a === null || Gg(a)
    }

    function Hg(a) {
        return a instanceof Zc
    }

    function Ig(a) {
        return Hg(a) || a === null || Gg(a)
    }

    function Jg(a) {
        return a instanceof Vc
    }

    function Kg(a) {
        return a instanceof dd
    }

    function M(a) {
        return typeof a === "string"
    }

    function Lg(a) {
        return M(a) || a === null || Gg(a)
    }

    function Mg(a) {
        return typeof a === "boolean"
    }

    function Ng(a) {
        return Mg(a) || a === null || Gg(a)
    }

    function Og(a) {
        return typeof a === "number"
    }

    function Gg(a) {
        return a === void 0
    };

    function Pg(a) {
        return "" + a
    }

    function Qg(a, b) {
        var c = [];
        return c
    };

    function Rg(a, b) {
        var c = new Zc(a, function() {
            for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = this.evaluate(d[e]);
            try {
                return b.apply(this, d)
            } catch (g) {
                if (hd()) throw new jd(g.message);
                throw g;
            }
        });
        c.Ha();
        return c
    }

    function Sg(a, b) {
        var c = new Ma,
            d;
        for (d in b)
            if (b.hasOwnProperty(d)) {
                var e = b[d];
                $a(e) ? c.set(d, Rg(a + "_" + d, e)) : Rc(e) ? c.set(d, Sg(a + "_" + d, e)) : (ab(e) || z(e) || typeof e === "boolean") && c.set(d, e)
            }
        c.Ha();
        return c
    };

    function Tg(a, b) {
        if (!M(a)) throw L(this.getName(), ["string"], arguments);
        if (!Lg(b)) throw L(this.getName(), ["string", "undefined"], arguments);
        var c = {},
            d = new Ma;
        return d = Sg("AssertApiSubject",
            c)
    };

    function Ug(a, b) {
        if (!Lg(b)) throw L(this.getName(), ["string", "undefined"], arguments);
        if (a instanceof fd) throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
        var c = {},
            d = new Ma;
        return d = Sg("AssertThatSubject", c)
    };

    function Vg(a) {
        return function() {
            for (var b = ya.apply(0, arguments), c = [], d = this.D, e = 0; e < b.length; ++e) c.push(J(b[e], d));
            return gd(a.apply(null, c))
        }
    }

    function Wg() {
        for (var a = Math, b = Xg, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = Vg(a[e].bind(a)))
        }
        return c
    };

    function Yg(a) {
        var b;
        return b
    };

    function Zg(a) {
        var b;
        return b
    };

    function $g(a) {
        try {
            return encodeURI(a)
        } catch (b) {}
    };

    function ah(a) {
        try {
            return encodeURIComponent(String(a))
        } catch (b) {}
    };

    function fh(a) {
        if (!Lg(a)) throw L(this.getName(), ["string|undefined"], arguments);
    };

    function gh(a, b) {
        if (!Og(a) || !Og(b)) throw L(this.getName(), ["number", "number"], arguments);
        return db(a, b)
    };

    function hh() {
        return (new Date).getTime()
    };

    function ih(a) {
        if (a === null) return "null";
        if (a instanceof Vc) return "array";
        if (a instanceof Zc) return "function";
        if (a instanceof dd) {
            var b = a.getValue();
            if ((b == null ? void 0 : b.constructor) === void 0 || b.constructor.name === void 0) {
                var c = String(b);
                return c.substring(8, c.length - 1)
            }
            return String(b.constructor.name)
        }
        return typeof a
    };

    function jh(a) {
        function b(c) {
            return function(d) {
                try {
                    return c(d)
                } catch (e) {
                    (Uf || Vf.Rk) && a.call(this, e.message)
                }
            }
        }
        return {
            parse: b(function(c) {
                return gd(JSON.parse(c))
            }),
            stringify: b(function(c) {
                return JSON.stringify(J(c))
            }),
            publicName: "JSON"
        }
    };

    function kh(a) {
        return jb(J(a, this.D))
    };

    function lh(a) {
        return Number(J(a, this.D))
    };

    function mh(a) {
        return a === null ? "null" : a === void 0 ? "undefined" : a.toString()
    };

    function nh(a, b, c) {
        var d = null,
            e = !1;
        if (!Jg(a) || !M(b) || !M(c)) throw L(this.getName(), ["Array", "string", "string"], arguments);
        d = new Ma;
        for (var f = 0; f < a.length(); f++) {
            var g = a.get(f);
            g instanceof Ma && g.has(b) && g.has(c) && (d.set(g.get(b), g.get(c)), e = !0)
        }
        return e ? d : null
    };
    var Xg = "floor ceil round max min abs pow sqrt".split(" ");

    function oh() {
        var a = {};
        return {
            zm: function(b) {
                return a.hasOwnProperty(b) ? a[b] : void 0
            },
            Nk: function(b, c) {
                a[b] = c
            },
            reset: function() {
                a = {}
            }
        }
    }

    function ph(a, b) {
        return function() {
            return Zc.prototype.invoke.apply(a, [b].concat(ua(ya.apply(0, arguments))))
        }
    }

    function qh(a, b) {
        if (!M(a)) throw L(this.getName(), ["string", "any"], arguments);
    }

    function rh(a, b) {
        if (!M(a) || !Eg(b)) throw L(this.getName(), ["string", "PixieMap"], arguments);
    };
    var sh = {};
    var th = function(a) {
        var b = new Ma;
        if (a instanceof Vc)
            for (var c = a.ka(), d = 0; d < c.length; d++) {
                var e = c[d];
                a.has(e) && b.set(e, a.get(e))
            } else if (a instanceof Zc)
                for (var f = a.ka(), g = 0; g < f.length; g++) {
                    var k = f[g];
                    b.set(k, a.get(k))
                } else
                    for (var m = 0; m < a.length; m++) b.set(m, a[m]);
        return b
    };
    sh.keys = function(a) {
        Dg(this.getName(), arguments);
        if (a instanceof Vc || a instanceof Zc || typeof a === "string") a = th(a);
        if (a instanceof Ma || a instanceof fd) return new Vc(a.ka());
        return new Vc
    };
    sh.values = function(a) {
        Dg(this.getName(), arguments);
        if (a instanceof Vc || a instanceof Zc || typeof a === "string") a = th(a);
        if (a instanceof Ma || a instanceof fd) return new Vc(a.Xb());
        return new Vc
    };
    sh.entries = function(a) {
        Dg(this.getName(), arguments);
        if (a instanceof Vc || a instanceof Zc || typeof a === "string") a = th(a);
        if (a instanceof Ma || a instanceof fd) return new Vc(a.Fb().map(function(b) {
            return new Vc(b)
        }));
        return new Vc
    };
    sh.freeze = function(a) {
        (a instanceof Ma || a instanceof fd || a instanceof Vc || a instanceof Zc) && a.Ha();
        return a
    };
    sh.delete = function(a, b) {
        if (a instanceof Ma && !a.xc()) return a.remove(b), !0;
        return !1
    };

    function N(a, b) {
        var c = ya.apply(2, arguments),
            d = a.D.j;
        if (!d) throw Error("Missing program state.");
        if (d.wn) {
            try {
                d.kk.apply(null, [b].concat(ua(c)))
            } catch (e) {
                throw Va("TAGGING", 21), e;
            }
            return
        }
        d.kk.apply(null, [b].concat(ua(c)))
    };
    var uh = function() {
        this.C = {};
        this.j = {};
        this.H = !0;
    };
    uh.prototype.get = function(a, b) {
        var c = this.contains(a) ? this.C[a] : void 0;
        return c
    };
    uh.prototype.contains = function(a) {
        return this.C.hasOwnProperty(a)
    };
    uh.prototype.add = function(a, b, c) {
        if (this.contains(a)) throw Error("Attempting to add a function which already exists: " + a + ".");
        if (this.j.hasOwnProperty(a)) throw Error("Attempting to add an API with an existing private API name: " + a + ".");
        this.C[a] = c ? void 0 : $a(b) ? Rg(a, b) : Sg(a, b)
    };

    function vh(a, b) {
        var c = void 0;
        return c
    };

    function wh(a, b) {}
    wh.F = "internal.safeInvoke";

    function xh() {
        var a = {};
        return a
    };
    var Q = {
            g: {
                ra: "ad_personalization",
                N: "ad_storage",
                O: "ad_user_data",
                R: "analytics_storage",
                sb: "region",
                bc: "consent_updated",
                Yd: "wait_for_update",
                Ki: "app_remove",
                Li: "app_store_refund",
                Mi: "app_store_subscription_cancel",
                Ni: "app_store_subscription_convert",
                Oi: "app_store_subscription_renew",
                kl: "consent_update",
                Ag: "add_payment_info",
                Bg: "add_shipping_info",
                yc: "add_to_cart",
                zc: "remove_from_cart",
                Cg: "view_cart",
                fc: "begin_checkout",
                Ac: "select_item",
                tb: "view_item_list",
                Nb: "select_promotion",
                ub: "view_promotion",
                Ka: "purchase",
                Bc: "refund",
                Pa: "view_item",
                Dg: "add_to_wishlist",
                ml: "exception",
                Pi: "first_open",
                Qi: "first_visit",
                ba: "gtag.config",
                Za: "gtag.get",
                Ri: "in_app_purchase",
                hc: "page_view",
                nl: "screen_view",
                Si: "session_start",
                Sn: "source_update",
                ol: "timing_complete",
                pl: "track_social",
                Yc: "user_engagement",
                ql: "user_id_update",
                be: "gclid_link_decoration_source",
                ce: "gclid_storage_source",
                vb: "gclgb",
                ab: "gclid",
                Ti: "gclid_len",
                Zc: "gclgs",
                bd: "gcllp",
                dd: "gclst",
                fa: "ads_data_redaction",
                Ui: "gad_source",
                Vi: "gad_source_src",
                Wi: "ndclid",
                Xi: "ngad_source",
                Yi: "ngbraid",
                Zi: "ngclid",
                aj: "ngclsrc",
                de: "gclid_url",
                bj: "gclsrc",
                Eg: "gbraid",
                Bf: "wbraid",
                la: "allow_ad_personalization_signals",
                ee: "allow_custom_scripts",
                fe: "allow_direct_google_requests",
                Cf: "allow_display_features",
                he: "allow_enhanced_conversions",
                ib: "allow_google_signals",
                Aa: "allow_interest_groups",
                rl: "app_id",
                sl: "app_installer_id",
                tl: "app_name",
                vl: "app_version",
                wb: "auid",
                cj: "auto_detection_enabled",
                ic: "aw_remarketing",
                Df: "aw_remarketing_only",
                ie: "discount",
                je: "aw_feed_country",
                ke: "aw_feed_language",
                da: "items",
                me: "aw_merchant_id",
                Fg: "aw_basket_type",
                ed: "campaign_content",
                fd: "campaign_id",
                gd: "campaign_medium",
                hd: "campaign_name",
                jd: "campaign",
                kd: "campaign_source",
                ld: "campaign_term",
                jb: "client_id",
                dj: "rnd",
                Gg: "consent_update_type",
                ej: "content_group",
                fj: "content_type",
                kb: "conversion_cookie_prefix",
                md: "conversion_id",
                sa: "conversion_linker",
                gj: "conversion_linker_disabled",
                jc: "conversion_api",
                Ef: "cookie_deprecation",
                La: "cookie_domain",
                Ma: "cookie_expires",
                Qa: "cookie_flags",
                kc: "cookie_name",
                mb: "cookie_path",
                Fa: "cookie_prefix",
                Ob: "cookie_update",
                Cc: "country",
                Ba: "currency",
                Hg: "customer_buyer_stage",
                nd: "customer_lifetime_value",
                Ig: "customer_loyalty",
                Jg: "customer_ltv_bucket",
                od: "custom_map",
                Kg: "gcldc",
                ne: "dclid",
                Lg: "debug_mode",
                ia: "developer_id",
                ij: "disable_merchant_reported_purchases",
                pd: "dc_custom_params",
                jj: "dc_natural_search",
                Mg: "dynamic_event_settings",
                Ng: "affiliation",
                oe: "checkout_option",
                Ff: "checkout_step",
                Og: "coupon",
                rd: "item_list_name",
                Gf: "list_name",
                kj: "promotions",
                sd: "shipping",
                Hf: "tax",
                pe: "engagement_time_msec",
                qe: "enhanced_client_id",
                se: "enhanced_conversions",
                Pg: "enhanced_conversions_automatic_settings",
                te: "estimated_delivery_date",
                If: "euid_logged_in_state",
                ud: "event_callback",
                wl: "event_category",
                nb: "event_developer_id_string",
                xl: "event_label",
                Dc: "event",
                ue: "event_settings",
                ve: "event_timeout",
                yl: "description",
                zl: "fatal",
                lj: "experiments",
                Jf: "firebase_id",
                Ec: "first_party_collection",
                we: "_x_20",
                xb: "_x_19",
                mj: "fledge_drop_reason",
                Qg: "fledge",
                Rg: "flight_error_code",
                Sg: "flight_error_message",
                nj: "fl_activity_category",
                oj: "fl_activity_group",
                Tg: "fl_advertiser_id",
                pj: "fl_ar_dedupe",
                Ug: "match_id",
                qj: "fl_random_number",
                rj: "tran",
                sj: "u",
                xe: "gac_gclid",
                Fc: "gac_wbraid",
                Vg: "gac_wbraid_multiple_conversions",
                Wg: "ga_restrict_domain",
                Xg: "ga_temp_client_id",
                Al: "ga_temp_ecid",
                mc: "gdpr_applies",
                Yg: "geo_granularity",
                Pb: "value_callback",
                yb: "value_key",
                Gc: "_google_ng",
                Hc: "google_signals",
                Zg: "google_tld",
                ye: "groups",
                ah: "gsa_experiment_id",
                tj: "gtm_up",
                Qb: "iframe_state",
                vd: "ignore_referrer",
                Kf: "internal_traffic_results",
                nc: "is_legacy_converted",
                Rb: "is_legacy_loaded",
                ze: "is_passthrough",
                wd: "_lps",
                Ra: "language",
                Ae: "legacy_developer_id_string",
                wa: "linker",
                Ic: "accept_incoming",
                zb: "decorate_forms",
                U: "domains",
                Sb: "url_position",
                Lf: "merchant_feed_label",
                Mf: "merchant_feed_language",
                Nf: "merchant_id",
                bh: "method",
                Bl: "name",
                uj: "navigation_type",
                xd: "new_customer",
                eh: "non_interaction",
                vj: "optimize_id",
                fh: "page_hostname",
                yd: "page_path",
                Ga: "page_referrer",
                cb: "page_title",
                gh: "passengers",
                hh: "phone_conversion_callback",
                wj: "phone_conversion_country_code",
                ih: "phone_conversion_css_class",
                xj: "phone_conversion_ids",
                jh: "phone_conversion_number",
                kh: "phone_conversion_options",
                Cl: "_platinum_request_status",
                lh: "_protected_audience_enabled",
                zd: "quantity",
                Be: "redact_device_info",
                Of: "referral_exclusion_definition",
                Tn: "_request_start_time",
                Ab: "restricted_data_processing",
                yj: "retoken",
                Dl: "sample_rate",
                Pf: "screen_name",
                Tb: "screen_resolution",
                zj: "_script_source",
                Aj: "search_term",
                Na: "send_page_view",
                oc: "send_to",
                Jc: "server_container_url",
                Bd: "session_duration",
                Ce: "session_engaged",
                Qf: "session_engaged_time",
                Bb: "session_id",
                De: "session_number",
                Rf: "_shared_user_id",
                Cd: "delivery_postal_code",
                Un: "_tag_firing_delay",
                Vn: "_tag_firing_time",
                El: "temporary_client_id",
                Sf: "topmost_url",
                Bj: "tracking_id",
                Tf: "traffic_type",
                Ca: "transaction_id",
                Cb: "transport_url",
                mh: "trip_type",
                rc: "update",
                eb: "url_passthrough",
                Cj: "uptgs",
                Uf: "_user_agent_architecture",
                Vf: "_user_agent_bitness",
                Wf: "_user_agent_full_version_list",
                Xf: "_user_agent_mobile",
                Yf: "_user_agent_model",
                Zf: "_user_agent_platform",
                cg: "_user_agent_platform_version",
                dg: "_user_agent_wow64",
                Da: "user_data",
                nh: "user_data_auto_latency",
                oh: "user_data_auto_meta",
                ph: "user_data_auto_multi",
                qh: "user_data_auto_selectors",
                rh: "user_data_auto_status",
                Dd: "user_data_mode",
                Ee: "user_data_settings",
                Ea: "user_id",
                pb: "user_properties",
                Dj: "_user_region",
                Ed: "us_privacy_string",
                ma: "value",
                sh: "wbraid_multiple_conversions",
                Fd: "_fpm_parameters",
                Kj: "_host_name",
                Lj: "_in_page_command",
                Mj: "_ip_override",
                Nj: "_is_passthrough_cid",
                Ub: "non_personalized_ads",
                Ke: "_sst_parameters",
                lb: "conversion_label",
                oa: "page_location",
                ob: "global_developer_id_string",
                qc: "tc_privacy_string"
            }
        },
        yh = {},
        zh = Object.freeze((yh[Q.g.la] = 1, yh[Q.g.Cf] = 1, yh[Q.g.he] = 1, yh[Q.g.ib] = 1, yh[Q.g.da] = 1, yh[Q.g.La] = 1, yh[Q.g.Ma] = 1, yh[Q.g.Qa] = 1, yh[Q.g.kc] = 1, yh[Q.g.mb] = 1, yh[Q.g.Fa] = 1, yh[Q.g.Ob] = 1, yh[Q.g.od] = 1, yh[Q.g.ia] = 1, yh[Q.g.Mg] = 1, yh[Q.g.ud] = 1, yh[Q.g.ue] = 1, yh[Q.g.ve] = 1, yh[Q.g.Ec] = 1, yh[Q.g.Wg] = 1, yh[Q.g.Hc] = 1, yh[Q.g.Zg] = 1, yh[Q.g.ye] = 1, yh[Q.g.Kf] = 1, yh[Q.g.nc] = 1, yh[Q.g.Rb] = 1, yh[Q.g.wa] = 1, yh[Q.g.Of] = 1, yh[Q.g.Ab] = 1, yh[Q.g.Na] = 1, yh[Q.g.oc] =
            1, yh[Q.g.Jc] = 1, yh[Q.g.Bd] = 1, yh[Q.g.Qf] = 1, yh[Q.g.Cd] = 1, yh[Q.g.Cb] = 1, yh[Q.g.rc] = 1, yh[Q.g.Ee] = 1, yh[Q.g.pb] = 1, yh[Q.g.Ke] = 1, yh));
    Object.freeze([Q.g.oa, Q.g.Ga, Q.g.cb, Q.g.Ra, Q.g.Pf, Q.g.Ea, Q.g.Jf, Q.g.ej]);
    var Ah = {},
        Bh = Object.freeze((Ah[Q.g.Ki] = 1, Ah[Q.g.Li] = 1, Ah[Q.g.Mi] = 1, Ah[Q.g.Ni] = 1, Ah[Q.g.Oi] = 1, Ah[Q.g.Pi] = 1, Ah[Q.g.Qi] = 1, Ah[Q.g.Ri] = 1, Ah[Q.g.Si] = 1, Ah[Q.g.Yc] = 1, Ah)),
        Ch = {},
        Dh = Object.freeze((Ch[Q.g.Ag] = 1, Ch[Q.g.Bg] = 1, Ch[Q.g.yc] = 1, Ch[Q.g.zc] = 1, Ch[Q.g.Cg] = 1, Ch[Q.g.fc] = 1, Ch[Q.g.Ac] = 1, Ch[Q.g.tb] = 1, Ch[Q.g.Nb] = 1, Ch[Q.g.ub] = 1, Ch[Q.g.Ka] = 1, Ch[Q.g.Bc] = 1, Ch[Q.g.Pa] = 1, Ch[Q.g.Dg] = 1, Ch)),
        Eh = Object.freeze([Q.g.la, Q.g.fe, Q.g.ib, Q.g.Ob, Q.g.Ec, Q.g.vd, Q.g.Na, Q.g.rc]),
        Fh = Object.freeze([].concat(ua(Eh))),
        Gh = Object.freeze([Q.g.Ma,
            Q.g.ve, Q.g.Bd, Q.g.Qf, Q.g.pe
        ]),
        Hh = Object.freeze([].concat(ua(Gh))),
        Ih = {},
        Jh = (Ih[Q.g.N] = "1", Ih[Q.g.R] = "2", Ih[Q.g.O] = "3", Ih[Q.g.ra] = "4", Ih),
        Kh = {},
        Lh = Object.freeze((Kh[Q.g.be] = 1, Kh[Q.g.ce] = 1, Kh[Q.g.la] = 1, Kh[Q.g.fe] = 1, Kh[Q.g.he] = 1, Kh[Q.g.Aa] = 1, Kh[Q.g.ic] = 1, Kh[Q.g.Df] = 1, Kh[Q.g.ie] = 1, Kh[Q.g.je] = 1, Kh[Q.g.ke] = 1, Kh[Q.g.da] = 1, Kh[Q.g.me] = 1, Kh[Q.g.kb] = 1, Kh[Q.g.sa] = 1, Kh[Q.g.La] = 1, Kh[Q.g.Ma] = 1, Kh[Q.g.Qa] = 1, Kh[Q.g.Fa] = 1, Kh[Q.g.Ba] = 1, Kh[Q.g.Hg] = 1, Kh[Q.g.nd] = 1, Kh[Q.g.Ig] = 1, Kh[Q.g.Jg] = 1, Kh[Q.g.ia] = 1, Kh[Q.g.ij] = 1, Kh[Q.g.se] =
            1, Kh[Q.g.te] = 1, Kh[Q.g.Jf] = 1, Kh[Q.g.Ec] = 1, Kh[Q.g.nc] = 1, Kh[Q.g.Rb] = 1, Kh[Q.g.Ra] = 1, Kh[Q.g.Lf] = 1, Kh[Q.g.Mf] = 1, Kh[Q.g.Nf] = 1, Kh[Q.g.xd] = 1, Kh[Q.g.oa] = 1, Kh[Q.g.Ga] = 1, Kh[Q.g.hh] = 1, Kh[Q.g.ih] = 1, Kh[Q.g.jh] = 1, Kh[Q.g.kh] = 1, Kh[Q.g.Ab] = 1, Kh[Q.g.Na] = 1, Kh[Q.g.oc] = 1, Kh[Q.g.Jc] = 1, Kh[Q.g.Cd] = 1, Kh[Q.g.Ca] = 1, Kh[Q.g.Cb] = 1, Kh[Q.g.rc] = 1, Kh[Q.g.eb] = 1, Kh[Q.g.Da] = 1, Kh[Q.g.Ea] = 1, Kh[Q.g.ma] = 1, Kh)),
        Mh = {},
        Nh = Object.freeze((Mh.search = "s", Mh.youtube = "y", Mh.playstore = "p", Mh.shopping = "h", Mh.ads = "a", Mh.maps = "m", Mh));
    Object.freeze(Q.g);
    var R = {},
        Oh = (R[Q.g.bc] = "gcu", R[Q.g.vb] = "gclgb", R[Q.g.ab] = "gclaw", R[Q.g.Ti] = "gclid_len", R[Q.g.Zc] = "gclgs", R[Q.g.bd] = "gcllp", R[Q.g.dd] = "gclst", R[Q.g.Wi] = "ndclid", R[Q.g.Xi] = "ngad_source", R[Q.g.Yi] = "ngbraid", R[Q.g.Zi] = "ngclid", R[Q.g.aj] = "ngclsrc", R[Q.g.wb] = "auid", R[Q.g.ie] = "dscnt", R[Q.g.je] = "fcntr", R[Q.g.ke] = "flng", R[Q.g.me] = "mid", R[Q.g.Fg] = "bttype", R[Q.g.jb] = "gacid", R[Q.g.lb] = "label", R[Q.g.jc] = "capi", R[Q.g.Ef] = "pscdl", R[Q.g.Ba] = "currency_code", R[Q.g.Hg] = "clobs", R[Q.g.nd] = "vdltv", R[Q.g.Ig] = "clolo", R[Q.g.Jg] =
            "clolb", R[Q.g.Lg] = "_dbg", R[Q.g.te] = "oedeld", R[Q.g.nb] = "edid", R[Q.g.mj] = "fdr", R[Q.g.Qg] = "fledge", R[Q.g.xe] = "gac", R[Q.g.Fc] = "gacgb", R[Q.g.Vg] = "gacmcov", R[Q.g.mc] = "gdpr", R[Q.g.ob] = "gdid", R[Q.g.Gc] = "_ng", R[Q.g.ah] = "gsaexp", R[Q.g.Qb] = "frm", R[Q.g.ze] = "gtm_up", R[Q.g.wd] = "lps", R[Q.g.Ae] = "did", R[Q.g.Lf] = "fcntr", R[Q.g.Mf] = "flng", R[Q.g.Nf] = "mid", R[Q.g.xd] = void 0, R[Q.g.cb] = "tiba", R[Q.g.Ab] = "rdp", R[Q.g.Bb] = "ecsid", R[Q.g.Rf] = "ga_uid", R[Q.g.Cd] = "delopc", R[Q.g.qc] = "gdpr_consent", R[Q.g.Ca] = "oid", R[Q.g.Cj] = "uptgs",
            R[Q.g.Uf] = "uaa", R[Q.g.Vf] = "uab", R[Q.g.Wf] = "uafvl", R[Q.g.Xf] = "uamb", R[Q.g.Yf] = "uam", R[Q.g.Zf] = "uap", R[Q.g.cg] = "uapv", R[Q.g.dg] = "uaw", R[Q.g.nh] = "ec_lat", R[Q.g.oh] = "ec_meta", R[Q.g.ph] = "ec_m", R[Q.g.qh] = "ec_sel", R[Q.g.rh] = "ec_s", R[Q.g.Dd] = "ec_mode", R[Q.g.Ea] = "userId", R[Q.g.Ed] = "us_privacy", R[Q.g.ma] = "value", R[Q.g.sh] = "mcov", R[Q.g.Kj] = "hn", R[Q.g.Lj] = "gtm_ee", R[Q.g.Ub] = "npa", R[Q.g.md] = null, R[Q.g.Tb] = null, R[Q.g.Ra] = null, R[Q.g.da] = null, R[Q.g.oa] = null, R[Q.g.Ga] = null, R[Q.g.Sf] = null, R[Q.g.Fd] = null, R[Q.g.be] =
            null, R[Q.g.ce] = null, R);

    function Ph(a, b) {
        if (a) {
            var c = a.split("x");
            c.length === 2 && (Qh(b, "u_w", c[0]), Qh(b, "u_h", c[1]))
        }
    }

    function Rh(a, b) {
        a && (a.length === 2 ? Qh(b, "hl", a) : a.length === 5 && (Qh(b, "hl", a.substring(0, 2)), Qh(b, "gl", a.substring(3, 5))))
    }

    function Sh(a) {
        var b = Th;
        b = b === void 0 ? Uh : b;
        var c;
        var d = b;
        if (a && a.length) {
            for (var e = [], f = 0; f < a.length; ++f) {
                var g = a[f];
                g && e.push({
                    item_id: d(g),
                    quantity: g.quantity,
                    value: g.price,
                    start_date: g.start_date,
                    end_date: g.end_date
                })
            }
            c = e
        } else c = [];
        var k;
        var m = c;
        if (m) {
            for (var n = [], p = 0; p < m.length; p++) {
                var q = m[p],
                    r = [];
                q && (r.push(Vh(q.value)), r.push(Vh(q.quantity)), r.push(Vh(q.item_id)), r.push(Vh(q.start_date)), r.push(Vh(q.end_date)), n.push("(" + r.join("*") + ")"))
            }
            k = n.length > 0 ? n.join("") : ""
        } else k = "";
        return k
    }

    function Uh(a) {
        return Wh(a.item_id, a.id, a.item_name)
    }

    function Wh() {
        for (var a = l(ya.apply(0, arguments)), b = a.next(); !b.done; b = a.next()) {
            var c = b.value;
            if (c !== null && c !== void 0) return c
        }
    }

    function Xh(a) {
        if (a && a.length) {
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                d && d.estimated_delivery_date ? b.push("" + d.estimated_delivery_date) : b.push("")
            }
            return b.join(",")
        }
    }

    function Qh(a, b, c) {
        c === void 0 || c === null || c === "" && !bg[b] || (a[b] = c)
    }

    function Vh(a) {
        return typeof a !== "number" && typeof a !== "string" ? "" : a.toString()
    };

    function Yh(a) {
        return Zh ? F.querySelectorAll(a) : null
    }

    function $h(a, b) {
        if (!Zh) return null;
        if (Element.prototype.closest) try {
            return a.closest(b)
        } catch (e) {
            return null
        }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
            d = a;
        if (!F.documentElement.contains(d)) return null;
        do {
            try {
                if (c.call(d, b)) return d
            } catch (e) {
                break
            }
            d = d.parentElement || d.parentNode
        } while (d !== null && d.nodeType === 1);
        return null
    }
    var ai = !1;
    if (F.querySelectorAll) try {
        var bi = F.querySelectorAll(":root");
        bi && bi.length == 1 && bi[0] == F.documentElement && (ai = !0)
    } catch (a) {}
    var Zh = ai;

    function ci(a) {
        switch (a) {
            case 0:
                break;
            case 9:
                return "e4";
            case 6:
                return "e5";
            case 14:
                return "e6";
            default:
                return "e7"
        }
    };
    var di = /^[0-9A-Fa-f]{64}$/;

    function ei(a) {
        try {
            return (new TextEncoder).encode(a)
        } catch (e) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                d < 128 ? b.push(d) : d < 2048 ? b.push(192 | d >> 6, 128 | d & 63) : d < 55296 || d >= 57344 ? b.push(224 | d >> 12, 128 | d >> 6 & 63, 128 | d & 63) : (d = 65536 + ((d & 1023) << 10 | a.charCodeAt(++c) & 1023), b.push(240 | d >> 18, 128 | d >> 12 & 63, 128 | d >> 6 & 63, 128 | d & 63))
            }
            return new Uint8Array(b)
        }
    }

    function fi(a) {
        if (a === "" || a === "e0") return Promise.resolve(a);
        var b;
        if ((b = B.crypto) == null ? 0 : b.subtle) {
            if (di.test(a)) return Promise.resolve(a);
            try {
                var c = ei(a);
                return B.crypto.subtle.digest("SHA-256", c).then(function(d) {
                    var e = Array.from(new Uint8Array(d)).map(function(f) {
                        return String.fromCharCode(f)
                    }).join("");
                    return B.btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                }).catch(function() {
                    return "e2"
                })
            } catch (d) {
                return Promise.resolve("e2")
            }
        } else return Promise.resolve("e1")
    };

    function gi(a, b) {
        if (a === "") return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var hi = [],
        ii = {};

    function ji(a) {
        return hi[a] === void 0 ? !1 : hi[a]
    };
    var ki = [];

    function li(a) {
        switch (a) {
            case 0:
                return 0;
            case 52:
                return 10;
            case 53:
                return 11;
            case 54:
                return 1;
            case 55:
                return 2;
            case 56:
                return 7;
            case 84:
                return 3;
            case 114:
                return 4;
            case 116:
                return 5;
            case 132:
                return 9;
            case 133:
                return 6
        }
    }

    function mi(a, b) {
        ki[a] = b;
        var c = li(a);
        c !== void 0 && (hi[c] = b)
    }

    function S(a) {
        mi(a, !0)
    }
    S(40);
    S(35);
    S(36);
    S(37);
    S(38);
    S(58);
    S(103);
    S(21);
    S(144);
    S(20);
    S(151);
    S(143);
    S(85);
    S(117);
    S(9);
    S(59);
    S(6);
    S(109);
    S(140);
    S(99);
    S(92);
    S(115);
    S(157);
    S(128);
    S(22);
    S(108);
    S(82);
    S(113);
    S(152);
    S(116);
    S(7);
    mi(25, !1), S(26);
    ii[1] = gi('1', 6E4);
    ii[3] = gi('10', 1);
    ii[2] = gi('', 50);
    S(30);
    S(15);
    S(91);
    S(111);
    S(141);
    var oi = !1;
    S(121);
    S(13);
    S(11);
    S(155);
    S(133);
    S(124);
    S(29);
    S(80);
    S(132);
    S(94);
    S(98);
    S(112);


    S(97);
    S(131);
    S(114);
    S(95);
    S(32);
    S(60);
    S(24);
    S(61);
    S(17);
    S(148);
    S(81);
    S(149);
    S(137);
    S(137), S(139);

    S(107);
    S(96);
    S(16);

    function T(a) {
        return !!ki[a]
    }

    function ni(a, b) {
        for (var c = !1, d = !1, e = 0; c === d;)
            if (c = ((Math.random() * 4294967296 | 0) & 1) === 0, d = ((Math.random() * 4294967296 | 0) & 1) === 0, e++, e > 30) return;
        c ? S(b) : S(a)
    }
    var pi = {
            fl: '',
            il: '',
            jl: '1000',
            Vl: '102067808~102482433~102539968~102558064~102587591~102605417~102640599'
        },
        qi = {
            nk: Number(pi.fl) || 0,
            pk: Number(pi.il) || 0,
            mm: Number(pi.jl) || 0,
            Nn: pi.Vl
        };

    function U(a) {
        Va("GTM", a)
    }

    function ri(a) {
        for (var b = Object.keys(a), c = l(Object.keys(si)), d = c.next(); !d.done; d = c.next()) {
            var e = d.value;
            b.includes(e) && U(si[e])
        }
    }
    var ti = {},
        si = (ti[Q.g.Aa] = 157, ti[Q.g.Jc] = 158, ti[Q.g.Cb] = 159, ti[Q.g.fa] = 160, ti[Q.g.nd] = 161, ti[Q.g.ee] = 162, ti[Q.g.Ob] = 163, ti[Q.g.Fa] = 164, ti[Q.g.Ma] = 165, ti[Q.g.La] = 166, ti[Q.g.kc] = 167, ti[Q.g.mb] = 168, ti[Q.g.Qa] = 169, ti);
    var yi = function(a, b) {
            var c = ["tv.1"],
                d = ui(a);
            if (d) return c.push(d), {
                na: !1,
                vg: c.join("~"),
                Wc: {}
            };
            var e = {},
                f = 0;
            var g = vi(a, function(p, q, r) {
                var t = p.value,
                    v;
                if (r) {
                    var u = q + "__" + f++;
                    v = "${userData." + u + "|sha256}";
                    e[u] = t
                } else v = encodeURIComponent(encodeURIComponent(t));
                var w;
                c.push("" + q + ((w = p.index) != null ? w : "") + "." + v)
            }).na;
            T(72) || (g = f > 0);
            var k = c.join("~"),
                m = {
                    userData: e
                },
                n = b === 2;
            return b === 1 || n ? {
                na: g,
                vg: k,
                Wc: m,
                qk: n ?
                    "tv.9~${" + (k + "|encryptRsa}") : "tv.1~${" + (k + "|encrypt}"),
                encryptionKeyString: n ? wi() : xi()
            } : {
                na: g,
                vg: k,
                Wc: m
            }
        },
        Ai = function(a) {
            if (!(a != null && Object.keys(a).length > 0)) return !1;
            var b = zi(a);
            return vi(b, function() {}).na
        },
        vi = function(a, b) {
            b = b === void 0 ? function() {} : b;
            for (var c = !1, d = !1, e = l(a), f = e.next(); !f.done; f = e.next()) {
                var g = f.value;
                if (g.value) {
                    var k = Bi[g.name];
                    if (k) {
                        var m = Ci(g);
                        m && (c = !0);
                        d = !0;
                        b(g, k, m)
                    }
                }
            }
            return {
                na: d,
                Th: c
            }
        },
        Ci = function(a) {
            var b = Di.indexOf(a.name) !== -1,
                c = /^e\d+$/.test(a.value),
                d;
            if (d = b && !c) {
                var e =
                    a.value;
                d = !(Ei.test(e) || di.test(e))
            }
            return d
        },
        xi = function() {
            return T(100) ? '{\x22keys\x22:[{\x22hpkePublicKey\x22:{\x22params\x22:{\x22aead\x22:\x22AES_128_GCM\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22},\x22publicKey\x22:\x22BBWyYaFuRaUvGcAdCM+sCDj5m0rX7oB067G7NYM/oe0yqa2AxlXoaQssx+6JBWeXnjZ9H3AfO73pahkj2pAanvs\x3d\x22,\x22version\x22:0},\x22id\x22:\x22e7b19a5a-36f1-4413-904f-713d5aa33ac7\x22},{\x22hpkePublicKey\x22:{\x22params\x22:{\x22aead\x22:\x22AES_128_GCM\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22},\x22publicKey\x22:\x22BJh3xxx1C0Ce/FC5yitLZ2BxiqdlvOqLTXztL5WOPvJdp3dw3xxndpgeW4P68ioBFhJ51fIzNxLX5tdR8z6RMBk\x3d\x22,\x22version\x22:0},\x22id\x22:\x22b3821e8c-d50c-4a70-8daf-8a789962c1e3\x22},{\x22hpkePublicKey\x22:{\x22params\x22:{\x22aead\x22:\x22AES_128_GCM\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22},\x22publicKey\x22:\x22BHpNiNvjs8c4jMja+TkpJf5ITqe42ROCUOhm9739bH06lGfzwkrEldiGEWnevRsqQyfvkn5trJj+lk2+BRaf/Gs\x3d\x22,\x22version\x22:0},\x22id\x22:\x227ea7f154-5f4d-488e-815e-823f542fbe8c\x22},{\x22hpkePublicKey\x22:{\x22params\x22:{\x22aead\x22:\x22AES_128_GCM\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22},\x22publicKey\x22:\x22BBrhelVOpo9FiuSiOMxiE9HbCcAtVSnIq9G2L7ynT/y2Jr3ayGWQ1O9PivSwQXbaFlaRp12A1tnHSkdsHVw8zNE\x3d\x22,\x22version\x22:0},\x22id\x22:\x2275f702d8-3808-4de1-87f0-a26f2f794b58\x22},{\x22hpkePublicKey\x22:{\x22params\x22:{\x22aead\x22:\x22AES_128_GCM\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22},\x22publicKey\x22:\x22BBSkyGBH0eed45GHQP7P17KS4FCrpIUPKj05WJecWz+WoKWQWZtkqcMDfgDoQK8UaJw9wQQ86eRfH6GxzSXHgrc\x3d\x22,\x22version\x22:0},\x22id\x22:\x2259522f35-75f5-40a9-9b7f-0260f93e29d6\x22}]}' : '{\x22keys\x22:[{\x22id\x22:\x22e7b19a5a-36f1-4413-904f-713d5aa33ac7\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BBWyYaFuRaUvGcAdCM+sCDj5m0rX7oB067G7NYM/oe0yqa2AxlXoaQssx+6JBWeXnjZ9H3AfO73pahkj2pAanvs\x3d\x22}},{\x22id\x22:\x22b3821e8c-d50c-4a70-8daf-8a789962c1e3\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BJh3xxx1C0Ce/FC5yitLZ2BxiqdlvOqLTXztL5WOPvJdp3dw3xxndpgeW4P68ioBFhJ51fIzNxLX5tdR8z6RMBk\x3d\x22}},{\x22id\x22:\x227ea7f154-5f4d-488e-815e-823f542fbe8c\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BHpNiNvjs8c4jMja+TkpJf5ITqe42ROCUOhm9739bH06lGfzwkrEldiGEWnevRsqQyfvkn5trJj+lk2+BRaf/Gs\x3d\x22}},{\x22id\x22:\x2275f702d8-3808-4de1-87f0-a26f2f794b58\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BBrhelVOpo9FiuSiOMxiE9HbCcAtVSnIq9G2L7ynT/y2Jr3ayGWQ1O9PivSwQXbaFlaRp12A1tnHSkdsHVw8zNE\x3d\x22}},{\x22id\x22:\x2259522f35-75f5-40a9-9b7f-0260f93e29d6\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BBSkyGBH0eed45GHQP7P17KS4FCrpIUPKj05WJecWz+WoKWQWZtkqcMDfgDoQK8UaJw9wQQ86eRfH6GxzSXHgrc\x3d\x22}}]}'
        },
        Hi = function(a) {
            if (B.Promise) {
                var b = void 0;
                return b
            }
        },
        Mi = function(a, b, c, d) {
            if (B.Promise) try {
                var e = zi(a),
                    f = Ii(e).then(Ji);
                return f
            } catch (n) {}
        },
        Gi = function(a, b) {
            var c = void 0;
            return c
        },
        Ji = function(a) {
            var b = a.Sd,
                c = a.time,
                d = ["tv.1"],
                e = ui(b);
            if (e) return d.push(e), {
                Va: encodeURIComponent(d.join("~")),
                Th: !1,
                na: !1,
                time: c,
                Sh: !0
            };
            var f = b.filter(function(n) {
                    return !Ci(n)
                }),
                g = vi(f, function(n, p) {
                    var q = n.value,
                        r = n.index;
                    r !== void 0 && (p += r);
                    d.push(p + "." + q)
                }),
                k = g.Th,
                m = g.na;
            return {
                Va: encodeURIComponent(d.join("~")),
                Th: k,
                na: m,
                time: c,
                Sh: !1
            }
        },
        ui = function(a) {
            if (a.length === 1 && a[0].name === "error_code") return Bi.error_code +
                "." + a[0].value
        },
        Li = function(a) {
            if (a.length === 1 && a[0].name === "error_code") return !1;
            for (var b = l(a), c = b.next(); !c.done; c = b.next()) {
                var d = c.value;
                if (Bi[d.name] && d.value) return !0
            }
            return !1
        },
        zi = function(a) {
            function b(r, t, v, u) {
                var w = Ni(r);
                w !== "" && (di.test(w) ? k.push({
                    name: t,
                    value: w,
                    index: u
                }) : k.push({
                    name: t,
                    value: v(w),
                    index: u
                }))
            }

            function c(r, t) {
                var v = r;
                if (z(v) || Array.isArray(v)) {
                    v = bb(r);
                    for (var u = 0; u < v.length; ++u) {
                        var w = Ni(v[u]),
                            x = di.test(w);
                        t && !x && U(89);
                        !t && x && U(88)
                    }
                }
            }

            function d(r, t) {
                var v = r[t];
                c(v, !1);
                var u =
                    Oi[t];
                r[u] && (r[t] && U(90), v = r[u], c(v, !0));
                return v
            }

            function e(r, t, v) {
                for (var u = bb(d(r, t)), w = 0; w < u.length; ++w) b(u[w], t, v)
            }

            function f(r, t, v, u) {
                var w = d(r, t);
                b(w, t, v, u)
            }

            function g(r) {
                return function(t) {
                    U(64);
                    return r(t)
                }
            }
            var k = [];
            if (B.location.protocol !== "https:") return k.push({
                name: "error_code",
                value: "e3",
                index: void 0
            }), k;
            e(a, "email", Pi);
            e(a, "phone_number", Qi);
            e(a, "first_name", g(Ri));
            e(a, "last_name", g(Ri));
            var m = a.home_address || {};
            e(m, "street", g(Si));
            e(m, "city", g(Si));
            e(m, "postal_code", g(Ti));
            e(m, "region",
                g(Si));
            e(m, "country", g(Ti));
            for (var n = bb(a.address || {}), p = 0; p < n.length; p++) {
                var q = n[p];
                f(q, "first_name", Ri, p);
                f(q, "last_name", Ri, p);
                f(q, "street", Si, p);
                f(q, "city", Si, p);
                f(q, "postal_code", Ti, p);
                f(q, "region", Si, p);
                f(q, "country", Ti, p)
            }
            return k
        },
        Ui = function(a) {
            var b = a ? zi(a) : [];
            return Ji({
                Sd: b
            })
        },
        Vi = function(a) {
            return a && a != null && Object.keys(a).length > 0 && B.Promise ? zi(a).some(function(b) {
                return b.value && Di.indexOf(b.name) !== -1 && !di.test(b.value)
            }) : !1
        },
        Ni = function(a) {
            return a == null ? "" : z(a) ? mb(String(a)) :
                "e0"
        },
        Ti = function(a) {
            return a.replace(Wi, "")
        },
        Ri = function(a) {
            return Si(a.replace(/\s/g, ""))
        },
        Si = function(a) {
            return mb(a.replace(Xi, "").toLowerCase())
        },
        Qi = function(a) {
            a = a.replace(/[\s-()/.]/g, "");
            a.charAt(0) !== "+" && (a = "+" + a);
            return Yi.test(a) ? a : "e0"
        },
        Pi = function(a) {
            var b = a.toLowerCase().split("@");
            if (b.length === 2) {
                var c = b[0];
                /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
                c = c + "@" + b[1];
                if (Zi.test(c)) return c
            }
            return "e0"
        },
        Ii = function(a) {
            if (!a.some(function(c) {
                    return c.value && Di.indexOf(c.name) !==
                        -1
                })) return Promise.resolve({
                Sd: a
            });
            if (!B.Promise) return Promise.resolve({
                Sd: []
            });
            var b;
            if (T(65) || T(105)) b = Ec();
            return Promise.all(a.map(function(c) {
                return c.value && Di.indexOf(c.name) !== -1 ? fi(c.value).then(function(d) {
                    c.value = d
                }) : Promise.resolve()
            })).then(function() {
                var c = {
                    Sd: a
                };
                if (b !== void 0) {
                    var d = Ec();
                    b && d && (c.time = Math.round(d) - Math.round(b))
                }
                return c
            }).catch(function() {
                return {
                    Sd: []
                }
            })
        },
        Xi = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
        Zi = /^\S+@\S+\.\S+$/,
        Yi = /^\+\d{10,15}$/,
        Wi = /[.~]/g,
        Ei = /^[0-9A-Za-z_-]{43}$/,
        $i = {},
        Bi = ($i.email = "em", $i.phone_number = "pn", $i.first_name = "fn", $i.last_name = "ln", $i.street = "sa", $i.city = "ct", $i.region = "rg", $i.country = "co", $i.postal_code = "pc", $i.error_code = "ec", $i),
        aj = {},
        Oi = (aj.email = "sha256_email_address", aj.phone_number = "sha256_phone_number", aj.first_name = "sha256_first_name", aj.last_name = "sha256_last_name", aj.street = "sha256_street", aj);
    var Di = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var bj = {
        xh: "52b0"
    };
    bj.Je = Number("0") || 0;
    bj.Lb = "dataLayer";
    bj.Pn = "ChAIgM22vQYQi9uGh6i4qLhbEiQAULhzVsW0uWGm4xEQl1zQBQ4Z5HLdcJgtgVSJzwiLSjzoIvoaAlJH";
    var cj = {
            __cl: 1,
            __ecl: 1,
            __ehl: 1,
            __evl: 1,
            __fal: 1,
            __fil: 1,
            __fsl: 1,
            __hl: 1,
            __jel: 1,
            __lcl: 1,
            __sdl: 1,
            __tl: 1,
            __ytl: 1
        },
        dj = {
            __paused: 1,
            __tg: 1
        },
        ej;
    for (ej in cj) cj.hasOwnProperty(ej) && (dj[ej] = 1);
    var fj = kb(""),
        gj = !1,
        hj, ij = !1;
    hj = ij;
    var jj, kj = !1;
    jj = kj;
    var lj, mj = !1;
    lj = mj;
    bj.Af = "www.googletagmanager.com";
    var nj = "" + bj.Af + (hj ? "/gtag/js" : "/gtm.js"),
        oj = null,
        pj = null,
        qj = {},
        rj = {};
    bj.al = "";
    var sj = "";
    bj.yh = sj;
    var tj = function() {
            this.j = new Set
        },
        vj = function() {
            return Array.from(uj.fb.j).join("~")
        },
        wj = function() {
            var a = uj.fb,
                b = qi.Nn;
            a.j = new Set;
            if (b !== "")
                for (var c = l(b.split("~")), d = c.next(); !d.done; d = c.next()) {
                    var e = Number(d.value);
                    isNaN(e) || a.j.add(e)
                }
        },
        uj = new function() {
            this.fb = new tj;
            this.j = !1;
            this.C = 0;
            this.X = this.xa = this.sc = this.K = "";
            this.P = this.H = !1
        };

    function xj() {
        var a = uj.K.length;
        return uj.K[a - 1] === "/" ? uj.K.substring(0, a - 1) : uj.K
    }

    function yj() {
        return uj.j ? T(89) ? uj.C === 0 : uj.C !== 1 : !1
    }

    function zj(a) {
        for (var b = {}, c = l(a.split("|")), d = c.next(); !d.done; d = c.next()) b[d.value] = !0;
        return b
    };
    var Aj = new fb,
        Bj = {},
        Cj = {},
        Fj = {
            name: bj.Lb,
            set: function(a, b) {
                Sc(wb(a, b), Bj);
                Dj()
            },
            get: function(a) {
                return Ej(a, 2)
            },
            reset: function() {
                Aj = new fb;
                Bj = {};
                Dj()
            }
        };

    function Ej(a, b) {
        return b != 2 ? Aj.get(a) : Gj(a)
    }

    function Gj(a, b) {
        var c = a.split(".");
        b = b || [];
        for (var d = Bj, e = 0; e < c.length; e++) {
            if (d === null) return !1;
            if (d === void 0) break;
            d = d[c[e]];
            if (b.indexOf(d) !== -1) return
        }
        return d
    }

    function Hj(a, b) {
        Cj.hasOwnProperty(a) || (Aj.set(a, b), Sc(wb(a, b), Bj), Dj())
    }

    function Ij() {
        for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], b = 0; b < a.length; b++) {
            var c = a[b],
                d = Ej(c, 1);
            if (Array.isArray(d) || Rc(d)) d = Sc(d, null);
            Cj[c] = d
        }
    }

    function Dj(a) {
        hb(Cj, function(b, c) {
            Aj.set(b, c);
            Sc(wb(b), Bj);
            Sc(wb(b, c), Bj);
            a && delete Cj[b]
        })
    }

    function Jj(a, b) {
        var c, d = (b === void 0 ? 2 : b) !== 1 ? Gj(a) : Aj.get(a);
        Pc(d) === "array" || Pc(d) === "object" ? c = Sc(d, null) : c = d;
        return c
    };
    var Kj = function(a, b, c) {
            if (!c) return !1;
            for (var d = String(c.value), e, f = d.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "").split(","), g = 0; g < f.length; g++) {
                var k = f[g].trim();
                if (k && !tb(k, "#") && !tb(k, ".")) {
                    if (tb(k, "dataLayer.")) e = Ej(k.substring(10));
                    else {
                        var m = k.split(".");
                        e = B[m.shift()];
                        for (var n = 0; n < m.length; n++) e = e && e[m[n]];
                        T(63) && e === void 0 && (e = Ej(k))
                    }
                    if (e !== void 0) break
                }
            }
            if (e === void 0 && Zh) try {
                var p = Yh(d);
                if (p && p.length > 0) {
                    e = [];
                    for (var q = 0; q < p.length && q < (b === "email" || b === "phone_number" ? 5 : 1); q++) e.push(vc(p[q]) ||
                        mb(p[q].value));
                    e = e.length === 1 ? e[0] : e
                }
            } catch (r) {
                U(149)
            }
            return e ? (a[b] = e, !0) : !1
        },
        Lj = function(a) {
            if (a) {
                var b = {},
                    c = !1;
                c = Kj(b, "email", a.email) || c;
                c = Kj(b, "phone_number", a.phone) || c;
                b.address = [];
                for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
                    var f = {};
                    c = Kj(f, "first_name", d[e].first_name) || c;
                    c = Kj(f, "last_name", d[e].last_name) || c;
                    c = Kj(f, "street", d[e].street) || c;
                    c = Kj(f, "city", d[e].city) || c;
                    c = Kj(f, "region", d[e].region) || c;
                    c = Kj(f, "country", d[e].country) || c;
                    c = Kj(f, "postal_code", d[e].postal_code) || c;
                    b.address.push(f)
                }
                return c ?
                    b : void 0
            }
        },
        Mj = function(a, b) {
            switch (a.enhanced_conversions_mode) {
                case "manual":
                    if (b && Rc(b)) return b;
                    var c = a.enhanced_conversions_manual_var;
                    if (c !== void 0) return c;
                    var d = B.enhanced_conversion_data;
                    d && U(154);
                    return d;
                case "automatic":
                    return Lj(a[Q.g.Pg])
            }
        },
        Nj = function(a) {
            return Rc(a) ? !!a.enable_code : !1
        };
    var Oj = /:[0-9]+$/,
        Pj = /^\d+\.fls\.doubleclick\.net$/;

    function Qj(a, b, c, d) {
        for (var e = [], f = l(a.split("&")), g = f.next(); !g.done; g = f.next()) {
            var k = l(g.value.split("=")),
                m = k.next().value,
                n = ta(k);
            if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
                var p = n.join("=");
                if (!c) return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
                e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")))
            }
        }
        return c ? e : void 0
    }

    function Rj(a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if (b === "protocol" || b === "port") a.protocol = Sj(a.protocol) || Sj(B.location.protocol);
        b === "port" ? a.port = String(Number(a.hostname ? a.port : B.location.port) || (a.protocol === "http" ? 80 : a.protocol === "https" ? 443 : "")) : b === "host" && (a.hostname = (a.hostname || B.location.hostname).replace(Oj, "").toLowerCase());
        return Tj(a, b, c, d, e)
    }

    function Tj(a, b, c, d, e) {
        var f, g = Sj(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
            case "url_no_fragment":
                f = Uj(a);
                break;
            case "protocol":
                f = g;
                break;
            case "host":
                f = a.hostname.replace(Oj, "").toLowerCase();
                if (c) {
                    var k = /^www\d*\./.exec(f);
                    k && k[0] && (f = f.substring(k[0].length))
                }
                break;
            case "port":
                f = String(Number(a.port) || (g === "http" ? 80 : g === "https" ? 443 : ""));
                break;
            case "path":
                a.pathname || a.hostname || Va("TAGGING", 1);
                f = a.pathname.substring(0, 1) === "/" ? a.pathname : "/" + a.pathname;
                var m = f.split("/");
                (d || []).indexOf(m[m.length -
                    1]) >= 0 && (m[m.length - 1] = "");
                f = m.join("/");
                break;
            case "query":
                f = a.search.replace("?", "");
                e && (f = Qj(f, e, !1));
                break;
            case "extension":
                var n = a.pathname.split(".");
                f = n.length > 1 ? n[n.length - 1] : "";
                f = f.split("/")[0];
                break;
            case "fragment":
                f = a.hash.replace("#", "");
                break;
            default:
                f = a && a.href
        }
        return f
    }

    function Sj(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    }

    function Uj(a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = c < 0 ? a.href : a.href.substring(0, c)
        }
        return b
    }
    var Vj = {},
        Wj = 0;

    function Xj(a) {
        var b = Vj[a];
        if (!b) {
            var c = F.createElement("a");
            a && (c.href = a);
            var d = c.pathname;
            d[0] !== "/" && (a || Va("TAGGING", 1), d = "/" + d);
            var e = c.hostname.replace(Oj, "");
            b = {
                href: c.href,
                protocol: c.protocol,
                host: c.host,
                hostname: e,
                pathname: d,
                search: c.search,
                hash: c.hash,
                port: c.port
            };
            Wj < 5 && (Vj[a] = b, Wj++)
        }
        return b
    }

    function Yj(a) {
        var b = Xj(B.location.href),
            c = Rj(b, "host", !1);
        if (c && c.match(Pj)) {
            var d = Rj(b, "path");
            if (d) {
                var e = d.split(a + "=");
                if (e.length > 1) return e[1].split(";")[0].split("?")[0]
            }
        }
    };
    var Zj = {
        "https://www.google.com": "/g",
        "https://www.googleadservices.com": "/as",
        "https://pagead2.googlesyndication.com": "/gs"
    };

    function ak(a, b) {
        if (a) {
            var c = "" + a;
            c.indexOf("http://") !== 0 && c.indexOf("https://") !== 0 && (c = "https://" + c);
            c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1));
            return Xj("" + c + b).href
        }
    }

    function bk(a, b) {
        if (yj() || jj) return ak(a, b)
    }

    function ck() {
        return !!bj.yh && bj.yh.split("@@").join("") !== "SGTM_TOKEN"
    }

    function dk(a) {
        for (var b = l([Q.g.Jc, Q.g.Cb]), c = b.next(); !c.done; c = b.next()) {
            var d = V(a, c.value);
            if (d) return d
        }
    }

    function ek(a, b) {
        return yj() ? "" + xj() + (b ? Zj[a] || "" : "") : a
    };

    function fk(a) {
        var b = String(a[Ke.qa] || "").replace(/_/g, "");
        return tb(b, "cvt") ? "cvt" : b
    }
    var gk = B.location.search.indexOf("?gtm_latency=") >= 0 || B.location.search.indexOf("&gtm_latency=") >= 0;
    var hk = {
            sampleRate: "0.005000",
            Wk: "",
            Mn: "0.01"
        },
        ik = Math.random(),
        jk;
    if (!(jk = gk)) {
        var kk = hk.sampleRate;
        jk = ik < Number(kk)
    }
    var lk = jk,
        mk = (gc == null ? void 0 : gc.includes("gtm_debug=d")) || gk || ik >= 1 - Number(hk.Mn);
    var nk = /gtag[.\/]js/,
        ok = /gtm[.\/]js/,
        pk = !1;

    function qk(a) {
        if (pk) return "1";
        var b, c = (b = a.scriptElement) == null ? void 0 : b.src;
        if (c) {
            if (nk.test(c)) return "3";
            if (ok.test(c)) return "2"
        }
        return "0"
    }

    function rk(a, b) {
        var c = sk();
        c.pending || (c.pending = []);
        cb(c.pending, function(d) {
            return d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
        }) || c.pending.push({
            target: a,
            onLoad: b
        })
    }

    function tk() {
        var a = B.google_tags_first_party;
        Array.isArray(a) || (a = []);
        for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next()) b[d.value] = !0;
        return Object.freeze(b)
    }
    var uk = function() {
        this.container = {};
        this.destination = {};
        this.canonical = {};
        this.pending = [];
        this.siloed = [];
        this.injectedFirstPartyContainers = {};
        this.injectedFirstPartyContainers = tk()
    };

    function sk() {
        var a = hc("google_tag_data", {}),
            b = a.tidr;
        b && typeof b === "object" || (b = new uk, a.tidr = b);
        var c = b;
        c.container || (c.container = {});
        c.destination || (c.destination = {});
        c.canonical || (c.canonical = {});
        c.pending || (c.pending = []);
        c.siloed || (c.siloed = []);
        c.injectedFirstPartyContainers || (c.injectedFirstPartyContainers = tk());
        return c
    };
    var vk = {},
        wk = !1,
        xk = void 0,
        Pf = {
            ctid: "GTM-WGVB27Q",
            canonicalContainerId: "101243939",
            Bk: "GTM-WGVB27Q",
            Ck: "GTM-WGVB27Q"
        };
    vk.Ge = kb("");

    function yk() {
        return vk.Ge && zk().some(function(a) {
            return a === Pf.ctid
        })
    }

    function Ak() {
        var a = Bk();
        return wk ? a.map(Ck) : a
    }

    function Dk() {
        var a = zk();
        return wk ? a.map(Ck) : a
    }

    function Ek() {
        var a = Dk();
        if (T(136) && !wk)
            for (var b = l([].concat(ua(a))), c = b.next(); !c.done; c = b.next()) {
                var d = Ck(c.value),
                    e = sk().destination[d];
                e && e.state !== 0 || a.push(d)
            }
        return a
    }

    function Fk() {
        return Gk(Pf.ctid)
    }

    function Hk() {
        return Gk(Pf.canonicalContainerId || "_" + Pf.ctid)
    }

    function Bk() {
        return Pf.Bk ? Pf.Bk.split("|") : [Pf.ctid]
    }

    function zk() {
        return Pf.Ck ? Pf.Ck.split("|") : []
    }

    function Ik() {
        var a = Jk(Kk()),
            b = a && a.parent;
        if (b) return Jk(b)
    }

    function Jk(a) {
        var b = sk();
        return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
    }

    function Gk(a) {
        return wk ? Ck(a) : a
    }

    function Ck(a) {
        return "siloed_" + a
    }

    function Lk(a) {
        return T(136) ? Mk(a) : wk ? Mk(a) : a
    }

    function Mk(a) {
        a = String(a);
        return tb(a, "siloed_") ? a.substring(7) : a
    }

    function Nk() {
        if (uj.H) {
            var a = sk();
            if (a.siloed) {
                for (var b = [], c = Bk().map(Ck), d = zk().map(Ck), e = {}, f = 0; f < a.siloed.length; e = {
                        ig: void 0
                    }, f++) e.ig = a.siloed[f], !wk && cb(e.ig.isDestination ? d : c, function(g) {
                    return function(k) {
                        return k === g.ig.ctid
                    }
                }(e)) ? wk = !0 : b.push(e.ig);
                a.siloed = b
            }
        }
    }

    function Ok() {
        var a = sk();
        if (a.pending) {
            for (var b, c = [], d = !1, e = Ak(), f = xk ? xk : Ek(), g = {}, k = 0; k < a.pending.length; g = {
                    qf: void 0
                }, k++) g.qf = a.pending[k], cb(g.qf.target.isDestination ? f : e, function(m) {
                return function(n) {
                    return n === m.qf.target.ctid
                }
            }(g)) ? d || (b = g.qf.onLoad, d = !0) : c.push(g.qf);
            a.pending = c;
            if (b) try {
                b(Hk())
            } catch (m) {}
        }
    }

    function Pk() {
        var a = Pf.ctid,
            b = Ak(),
            c = Ek();
        xk = c;
        for (var d = function(n, p) {
                var q = {
                    canonicalContainerId: Pf.canonicalContainerId,
                    scriptContainerId: a,
                    state: 2,
                    containers: b.slice(),
                    destinations: c.slice()
                };
                fc && (q.scriptElement = fc);
                gc && (q.scriptSource = gc);
                if (Ik() === void 0) {
                    var r;
                    a: {
                        if ((q.scriptContainerId || "").indexOf("GTM-") >= 0) {
                            var t;
                            b: {
                                var v, u = (v = q.scriptElement) == null ? void 0 : v.src;
                                if (u) {
                                    for (var w = uj.j, x = Xj(u), y = w ? x.pathname : "" + x.hostname + x.pathname, A = F.scripts, C = "", D = 0; D < A.length; ++D) {
                                        var E = A[D];
                                        if (!(E.innerHTML.length ===
                                                0 || !w && E.innerHTML.indexOf(q.scriptContainerId || "SHOULD_NOT_BE_SET") < 0 || E.innerHTML.indexOf(y) < 0)) {
                                            if (E.innerHTML.indexOf("(function(w,d,s,l,i)") >= 0) {
                                                t = String(D);
                                                break b
                                            }
                                            C = String(D)
                                        }
                                    }
                                    if (C) {
                                        t = C;
                                        break b
                                    }
                                }
                                t = void 0
                            }
                            var I = t;
                            if (I) {
                                pk = !0;
                                r = I;
                                break a
                            }
                        }
                        var H = [].slice.call(document.scripts);r = q.scriptElement ? String(H.indexOf(q.scriptElement)) : "-1"
                    }
                    q.htmlLoadOrder = r;
                    q.loadScriptType = qk(q)
                }
                var O = p ? e.destination : e.container,
                    K = O[n];
                K ? (p && K.state === 0 && U(93), Object.assign(K, q)) : O[n] = q
            }, e = sk(), f = l(b), g = f.next(); !g.done; g =
            f.next()) d(g.value, !1);
        for (var k = l(c), m = k.next(); !m.done; m = k.next()) d(m.value, !0);
        e.canonical[Hk()] = {};
        Ok()
    }

    function Qk() {
        var a = Hk();
        return !!sk().canonical[a]
    }

    function Rk(a) {
        return !!sk().container[a]
    }

    function Sk(a) {
        var b = sk().destination[a];
        return !!b && !!b.state
    }

    function Kk() {
        return {
            ctid: Fk(),
            isDestination: vk.Ge
        }
    }

    function Tk(a, b, c) {
        b.siloed && Uk({
            ctid: a,
            isDestination: !1
        });
        var d = Kk();
        sk().container[a] = {
            state: 1,
            context: b,
            parent: d
        };
        rk({
            ctid: a,
            isDestination: !1
        }, c)
    }

    function Uk(a) {
        var b = sk();
        (b.siloed = b.siloed || []).push(a)
    }

    function Vk() {
        var a = sk().container,
            b;
        for (b in a)
            if (a.hasOwnProperty(b) && a[b].state === 1) return !0;
        return !1
    }

    function Wk() {
        var a = {};
        hb(sk().destination, function(b, c) {
            c.state === 0 && (a[Mk(b)] = c)
        });
        return a
    }

    function Xk(a) {
        return !!(a && a.parent && a.context && a.context.source === 1 && a.parent.ctid.indexOf("GTM-") !== 0)
    }

    function Yk() {
        for (var a = sk(), b = l(Ak()), c = b.next(); !c.done; c = b.next())
            if (a.injectedFirstPartyContainers[c.value]) return !0;
        return !1
    }

    function Zk(a) {
        var b = sk();
        return b.destination[a] ? 1 : b.destination[Ck(a)] ? 2 : 0
    }
    var $k = "/td?id=" + Pf.ctid,
        al = ["v", "t", "pid", "dl", "tdp"],
        bl = ["mcc"],
        cl = {},
        dl = {};

    function el(a, b, c) {
        dl[a] = b;
        (c === void 0 || c) && fl(a)
    }

    function fl(a, b) {
        if (cl[a] === void 0 || (b === void 0 ? 0 : b)) cl[a] = !0
    }

    function gl(a) {
        a = a === void 0 ? !1 : a;
        var b = Object.keys(cl).filter(function(c) {
            return cl[c] === !0 && dl[c] !== void 0 && (a || !bl.includes(c))
        }).map(function(c) {
            var d = dl[c];
            typeof d === "function" && (d = d());
            return d ? "&" + c + "=" + d : ""
        }).join("");
        return "" + ek("https://www.googletagmanager.com") + $k + ("" + b + "&z=0")
    }

    function hl() {
        Object.keys(cl).forEach(function(a) {
            al.indexOf(a) < 0 && (cl[a] = !1)
        })
    }

    function il(a) {
        a = a === void 0 ? !1 : a;
        if ((!T(8) || uj.P) && mk && Pf.ctid) {
            var b = gl(a);
            a ? Bc(b) : rc(b);
            hl()
        }
    }
    var jl = {};

    function kl() {
        Object.keys(cl).filter(function(a) {
            return cl[a] && !al.includes(a)
        }).length > 0 && il(!0)
    }
    var ll = db();

    function ml() {
        ll = db()
    }

    function nl() {
        el("v", "3");
        el("t", "t");
        el("pid", function() {
            return String(ll)
        });
        sc(B, "pagehide", kl);
        B.setInterval(ml, 864E5)
    }

    function ol() {
        var a = hc("google_tag_data", {});
        return a.ics = a.ics || new pl
    }
    var pl = function() {
        this.entries = {};
        this.waitPeriodTimedOut = this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
        this.j = []
    };
    pl.prototype.default = function(a, b, c, d, e, f, g) {
        this.usedDefault || this.usedDeclare || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
        this.usedDefault = this.active = !0;
        Va("TAGGING", 19);
        b == null ? Va("TAGGING", 18) : ql(this, a, b === "granted", c, d, e, f, g)
    };
    pl.prototype.waitForUpdate = function(a, b, c) {
        for (var d = 0; d < a.length; d++) ql(this, a[d], void 0, void 0, "", "", b, c)
    };
    var ql = function(a, b, c, d, e, f, g, k) {
        var m = a.entries,
            n = m[b] || {},
            p = n.region,
            q = d && z(d) ? d.toUpperCase() : void 0;
        e = e.toUpperCase();
        f = f.toUpperCase();
        if (e === "" || q === f || (q === e ? p !== f : !q && !p)) {
            var r = !!(g && g > 0 && n.update === void 0),
                t = {
                    region: q,
                    declare_region: n.declare_region,
                    implicit: n.implicit,
                    default: c !== void 0 ? c : n.default,
                    declare: n.declare,
                    update: n.update,
                    quiet: r
                };
            if (e !== "" || n.default !== !1) m[b] = t;
            r && B.setTimeout(function() {
                m[b] === t && t.quiet && (Va("TAGGING", 2), a.waitPeriodTimedOut = !0, a.clearTimeout(b, void 0, k),
                    a.notifyListeners())
            }, g)
        }
    };
    h = pl.prototype;
    h.clearTimeout = function(a, b, c) {
        var d = [a],
            e = c.delegatedConsentTypes,
            f;
        for (f in e) e.hasOwnProperty(f) && e[f] === a && d.push(f);
        var g = this.entries[a] || {},
            k = this.getConsentState(a, c);
        if (g.quiet) {
            g.quiet = !1;
            for (var m = l(d), n = m.next(); !n.done; n = m.next()) rl(this, n.value)
        } else if (b !== void 0 && k !== b)
            for (var p = l(d), q = p.next(); !q.done; q = p.next()) rl(this, q.value)
    };
    h.update = function(a, b, c) {
        this.usedDefault || this.usedDeclare || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
        this.usedUpdate = this.active = !0;
        if (b != null) {
            var d = this.getConsentState(a, c),
                e = this.entries;
            (e[a] = e[a] || {}).update = b === "granted";
            this.clearTimeout(a, d, c)
        }
    };
    h.declare = function(a, b, c, d, e) {
        this.usedDeclare = this.active = !0;
        var f = this.entries,
            g = f[a] || {},
            k = g.declare_region,
            m = c && z(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (d === "" || m === e || (m === d ? k !== e : !m && !k)) {
            var n = {
                region: g.region,
                declare_region: m,
                declare: b === "granted",
                implicit: g.implicit,
                default: g.default,
                update: g.update,
                quiet: g.quiet
            };
            if (d !== "" || g.declare !== !1) f[a] = n
        }
    };
    h.implicit = function(a, b) {
        this.usedImplicit = !0;
        var c = this.entries,
            d = c[a] = c[a] || {};
        d.implicit !== !1 && (d.implicit = b === "granted")
    };
    h.getConsentState = function(a, b) {
        var c = this.entries,
            d = c[a] || {},
            e = d.update;
        if (e !== void 0) return e ? 1 : 2;
        if (b.usedContainerScopedDefaults) {
            var f = b.containerScopedDefaults[a];
            if (f === 3) return 1;
            if (f === 2) return 2
        } else if (e = d.default, e !== void 0) return e ? 1 : 2;
        if (b == null ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
            var g = b.delegatedConsentTypes[a],
                k = c[g] || {};
            e = k.update;
            if (e !== void 0) return e ? 1 : 2;
            if (b.usedContainerScopedDefaults) {
                var m = b.containerScopedDefaults[g];
                if (m === 3) return 1;
                if (m === 2) return 2
            } else if (e =
                k.default, e !== void 0) return e ? 1 : 2
        }
        e = d.declare;
        if (e !== void 0) return e ? 1 : 2;
        e = d.implicit;
        return e !== void 0 ? e ? 3 : 4 : 0
    };
    h.addListener = function(a, b) {
        this.j.push({
            consentTypes: a,
            Ld: b
        })
    };
    var rl = function(a, b) {
        for (var c = 0; c < a.j.length; ++c) {
            var d = a.j[c];
            Array.isArray(d.consentTypes) && d.consentTypes.indexOf(b) !== -1 && (d.Dk = !0)
        }
    };
    pl.prototype.notifyListeners = function(a, b) {
        for (var c = 0; c < this.j.length; ++c) {
            var d = this.j[c];
            if (d.Dk) {
                d.Dk = !1;
                try {
                    d.Ld({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    };
    var sl = !1,
        tl = !1,
        ul = {},
        vl = {
            delegatedConsentTypes: {},
            corePlatformServices: {},
            usedCorePlatformServices: !1,
            selectedAllCorePlatformServices: !1,
            containerScopedDefaults: (ul.ad_storage = 1, ul.analytics_storage = 1, ul.ad_user_data = 1, ul.ad_personalization = 1, ul),
            usedContainerScopedDefaults: !1
        };

    function wl(a) {
        var b = ol();
        b.accessedAny = !0;
        return (z(a) ? [a] : a).every(function(c) {
            switch (b.getConsentState(c, vl)) {
                case 1:
                case 3:
                    return !0;
                case 2:
                case 4:
                    return !1;
                default:
                    return !0
            }
        })
    }

    function xl(a) {
        var b = ol();
        b.accessedAny = !0;
        return b.getConsentState(a, vl)
    }

    function yl(a) {
        for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next()) {
            var e = d.value;
            b[e] = vl.corePlatformServices[e] !== !1
        }
        return b
    }

    function zl(a) {
        var b = ol();
        b.accessedAny = !0;
        return !(b.entries[a] || {}).quiet
    }

    function Al() {
        if (!ji(8)) return !1;
        var a = ol();
        a.accessedAny = !0;
        if (a.active) return !0;
        if (!vl.usedContainerScopedDefaults) return !1;
        for (var b = l(Object.keys(vl.containerScopedDefaults)), c = b.next(); !c.done; c = b.next())
            if (vl.containerScopedDefaults[c.value] !== 1) return !0;
        return !1
    }

    function Bl(a, b) {
        ol().addListener(a, b)
    }

    function Cl(a, b) {
        ol().notifyListeners(a, b)
    }

    function Dl(a, b) {
        function c() {
            for (var e = 0; e < b.length; e++)
                if (!zl(b[e])) return !0;
            return !1
        }
        if (c()) {
            var d = !1;
            Bl(b, function(e) {
                d || c() || (d = !0, a(e))
            })
        } else a({})
    }

    function El(a, b) {
        function c() {
            for (var k = [], m = 0; m < e.length; m++) {
                var n = e[m];
                wl(n) && !f[n] && k.push(n)
            }
            return k
        }

        function d(k) {
            for (var m = 0; m < k.length; m++) f[k[m]] = !0
        }
        var e = z(b) ? [b] : b,
            f = {},
            g = c();
        g.length !== e.length && (d(g), Bl(e, function(k) {
            function m(q) {
                q.length !== 0 && (d(q), k.consentTypes = q, a(k))
            }
            var n = c();
            if (n.length !== 0) {
                var p = Object.keys(f).length;
                n.length + p >= e.length ? m(n) : B.setTimeout(function() {
                    m(c())
                }, 500)
            }
        }))
    };
    var Fl = ["ad_storage", "analytics_storage", "ad_user_data", "ad_personalization"],
        Gl = [Q.g.Jc, Q.g.Cb, Q.g.Ec, Q.g.jb, Q.g.Bb, Q.g.Ea, Q.g.wa, Q.g.Fa, Q.g.La, Q.g.mb],
        Hl = !1,
        Il = !1,
        Jl = {},
        Kl = {};

    function Ll() {
        !Il && Hl && (Fl.some(function(a) {
            return vl.containerScopedDefaults[a] !== 1
        }) || Ml("mbc"));
        Il = !0
    }

    function Ml(a) {
        mk && (el(a, "1"), il())
    }

    function Nl(a, b) {
        if (!Jl[b] && (Jl[b] = !0, Kl[b]))
            for (var c = l(Gl), d = c.next(); !d.done; d = c.next())
                if (a.hasOwnProperty(d.value)) {
                    Ml("erc");
                    break
                }
    }

    function Ol(a) {
        Va("HEALTH", a)
    };
    var Pl;
    try {
        Pl = JSON.parse(Sa("eyIwIjoiQUwiLCIxIjoiQUwtMTEiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5hbCIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"))
    } catch (a) {
        U(123), Ol(2), Pl = {}
    }

    function Ql() {
        return Pl["0"] || ""
    }

    function Rl() {
        return Pl["1"] || ""
    }

    function Sl() {
        var a = !1;
        return a
    }

    function Tl() {
        return Pl["6"] !== !1
    }

    function Ul() {
        var a = "";
        return a
    }

    function Vl() {
        var a = !1;
        a = !!Pl["5"];
        return a
    }

    function Wl() {
        var a = "";
        return a
    }

    function Xl(a) {
        return a && a.indexOf("pending:") === 0 ? Yl(a.substr(8)) : !1
    }

    function Yl(a) {
        if (a == null || a.length === 0) return !1;
        var b = Number(a),
            c = ob();
        return b < c + 3E5 && b > c - 9E5
    };
    var Zl = !1,
        $l = !1,
        am = !1,
        bm = 0,
        cm = !1,
        dm = [];

    function em(a) {
        if (bm === 0) cm && dm && (dm.length >= 100 && dm.shift(), dm.push(a));
        else if (fm()) {
            var b = hc('google.tagmanager.ta.prodqueue', []);
            b.length >= 50 && b.shift();
            b.push(a)
        }
    }

    function gm() {
        hm();
        tc(F, "TAProdDebugSignal", gm)
    }

    function hm() {
        if (!$l) {
            $l = !0;
            im();
            var a = dm;
            dm = void 0;
            a == null || a.forEach(function(b) {
                em(b)
            })
        }
    }

    function im() {
        var a = F.documentElement.getAttribute("data-tag-assistant-prod-present");
        Yl(a) ? bm = 1 : !Xl(a) || Zl || am ? bm = 2 : (am = !0, sc(F, "TAProdDebugSignal", gm, !1), B.setTimeout(function() {
            hm();
            Zl = !0
        }, 200))
    }

    function fm() {
        if (!cm) return !1;
        switch (bm) {
            case 1:
            case 0:
                return !0;
            case 2:
                return !1;
            default:
                return !1
        }
    };
    var jm = !1;

    function km(a, b) {
        if (fm()) {
            var c = lm("INIT");
            c.containerLoadSource = a != null ? a : 0;
            b && (c.parentTargetReference = b);
            em(c)
        }
    }

    function mm(a) {
        var b, c, d, e;
        b = a.targetId;
        c = a.request;
        d = a.Ta;
        e = a.isBatched;
        if (fm()) {
            var f = lm("GTAG_HIT", {
                eventId: d.eventId,
                priorityId: d.priorityId
            });
            f.target = b;
            f.url = c.url;
            c.postBody && (f.postBody = c.postBody);
            f.parameterEncoding = c.parameterEncoding;
            f.endpoint = c.endpoint;
            e !== void 0 && (f.isBatched = e);
            em(f)
        }
    }

    function nm(a) {
        fm() && mm(a())
    }

    function lm(a, b) {
        b = b === void 0 ? {} : b;
        b.groupId = om;
        var c, d = b,
            e = {
                publicId: pm
            };
        d.eventId != null && (e.eventId = d.eventId);
        d.priorityId != null && (e.priorityId = d.priorityId);
        d.eventName && (e.eventName = d.eventName);
        d.groupId && (e.groupId = d.groupId);
        d.tagName && (e.tagName = d.tagName);
        c = {
            containerProduct: "GTM",
            key: e,
            version: '39',
            messageType: a
        };
        c.containerProduct = jm ? "OGT" : "GTM";
        c.key.targetRef = qm;
        return c
    }
    var pm = "",
        qm = {
            ctid: "",
            isDestination: !1
        },
        om;

    function rm(a) {
        var b = Pf.ctid,
            c = yk(),
            d = T(120);
        d && (bm = 0, cm = !0, im());
        d && (om = a, pm = b, jm = hj, qm = {
            ctid: b,
            isDestination: c
        })
    };
    var sm = [Q.g.N, Q.g.R, Q.g.O, Q.g.ra],
        tm, um;

    function vm(a) {
        for (var b = a[Q.g.sb], c = Array.isArray(b) ? b : [b], d = {
                bf: 0
            }; d.bf < c.length; d = {
                bf: d.bf
            }, ++d.bf) hb(a, function(e) {
            return function(f, g) {
                if (f !== Q.g.sb) {
                    var k = c[e.bf],
                        m = Ql(),
                        n = Rl();
                    tl = !0;
                    sl && Va("TAGGING", 20);
                    ol().declare(f, g, k, m, n)
                }
            }
        }(d))
    }

    function wm(a) {
        Ll();
        !um && tm && Ml("crc");
        um = !0;
        var b = a[Q.g.sb];
        b && U(40);
        var c = a[Q.g.Yd];
        c && U(41);
        for (var d = Array.isArray(b) ? b : [b], e = {
                cf: 0
            }; e.cf < d.length; e = {
                cf: e.cf
            }, ++e.cf) hb(a, function(f) {
            return function(g, k) {
                if (g !== Q.g.sb && g !== Q.g.Yd) {
                    var m = d[f.cf],
                        n = Number(c),
                        p = Ql(),
                        q = Rl();
                    n = n === void 0 ? 0 : n;
                    sl = !0;
                    tl && Va("TAGGING", 20);
                    ol().default(g, k, m, p, q, n, vl)
                }
            }
        }(e))
    }

    function xm(a) {
        vl.usedContainerScopedDefaults = !0;
        var b = a[Q.g.sb];
        if (b) {
            var c = Array.isArray(b) ? b : [b];
            if (!c.includes(Rl()) && !c.includes(Ql())) return
        }
        hb(a, function(d, e) {
            switch (d) {
                case "ad_storage":
                case "analytics_storage":
                case "ad_user_data":
                case "ad_personalization":
                    break;
                default:
                    return
            }
            vl.usedContainerScopedDefaults = !0;
            vl.containerScopedDefaults[d] = e === "granted" ? 3 : 2
        })
    }

    function ym(a, b) {
        Ll();
        tm = !0;
        hb(a, function(c, d) {
            sl = !0;
            tl && Va("TAGGING", 20);
            ol().update(c, d, vl)
        });
        Cl(b.eventId, b.priorityId)
    }

    function zm(a) {
        a.hasOwnProperty("all") && (vl.selectedAllCorePlatformServices = !0, hb(Nh, function(b) {
            vl.corePlatformServices[b] = a.all === "granted";
            vl.usedCorePlatformServices = !0
        }));
        hb(a, function(b, c) {
            b !== "all" && (vl.corePlatformServices[b] = c === "granted", vl.usedCorePlatformServices = !0)
        })
    }

    function W(a) {
        Array.isArray(a) || (a = [a]);
        return a.every(function(b) {
            return wl(b)
        })
    }

    function Am(a, b) {
        Bl(a, b)
    }

    function Bm(a, b) {
        El(a, b)
    }

    function Cm(a, b) {
        Dl(a, b)
    }

    function Dm() {
        var a = [Q.g.N, Q.g.ra, Q.g.O];
        ol().waitForUpdate(a, 500, vl)
    }

    function Em(a) {
        for (var b = l(a), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            ol().clearTimeout(d, void 0, vl)
        }
        Cl()
    }

    function Fm() {
        if (!lj)
            for (var a = Tl() ? zj(uj.xa) : zj(uj.sc), b = 0; b < sm.length; b++) {
                var c = sm[b],
                    d = c,
                    e = a[c] ? "granted" : "denied";
                ol().implicit(d, e)
            }
    }
    var Gm = !1,
        Hm = [];

    function Im() {
        if (!Gm) {
            Gm = !0;
            for (var a = Hm.length - 1; a >= 0; a--) Hm[a]();
            Hm = []
        }
    };
    var Jm = B.google_tag_manager = B.google_tag_manager || {};

    function Km(a, b) {
        return Jm[a] = Jm[a] || b()
    }

    function Lm() {
        var a = Fk(),
            b = Mm;
        Jm[a] = Jm[a] || b
    }

    function Nm() {
        var a = bj.Lb;
        return Jm[a] = Jm[a] || {}
    }

    function Om() {
        var a = Jm.sequence || 1;
        Jm.sequence = a + 1;
        return a
    };
    var Pm = {
            Zj: "service_worker_endpoint",
            zh: "shared_user_id",
            Ah: "shared_user_id_requested",
            Le: "shared_user_id_source",
            zf: "cookie_deprecation_label"
        },
        Qm;

    function Rm(a) {
        if (!Qm) {
            Qm = {};
            for (var b = l(Object.keys(Pm)), c = b.next(); !c.done; c = b.next()) Qm[Pm[c.value]] = !0
        }
        return !!Qm[a]
    }

    function Sm(a, b) {
        b = b === void 0 ? !1 : b;
        if (Rm(a)) {
            var c, d, e = (d = (c = hc("google_tag_data", {})).xcd) != null ? d : c.xcd = {};
            if (e[a]) return e[a];
            if (b) {
                var f = void 0,
                    g = 1,
                    k = {},
                    m = {
                        set: function(n) {
                            f = n;
                            m.notify()
                        },
                        get: function() {
                            return f
                        },
                        subscribe: function(n) {
                            k[String(g)] = n;
                            return g++
                        },
                        unsubscribe: function(n) {
                            var p = String(n);
                            return k.hasOwnProperty(p) ? (delete k[p], !0) : !1
                        },
                        notify: function() {
                            for (var n = l(Object.keys(k)), p = n.next(); !p.done; p = n.next()) {
                                var q = p.value;
                                try {
                                    k[q](a, f)
                                } catch (r) {}
                            }
                        }
                    };
                return e[a] = m
            }
        }
    }

    function Tm(a, b) {
        var c = Sm(a, !0);
        c && c.set(b)
    }

    function Um(a) {
        var b;
        return (b = Sm(a)) == null ? void 0 : b.get()
    }

    function Vm(a, b) {
        if (typeof b === "function") {
            var c;
            return (c = Sm(a, !0)) == null ? void 0 : c.subscribe(b)
        }
    }

    function Wm(a, b) {
        var c = Sm(a);
        return c ? c.unsubscribe(b) : !1
    };

    function Xm() {
        if (Jm.pscdl !== void 0) Um(Pm.zf) === void 0 && Tm(Pm.zf, Jm.pscdl);
        else {
            var a = function(c) {
                    Jm.pscdl = c;
                    Tm(Pm.zf, c)
                },
                b = function() {
                    a("error")
                };
            try {
                dc.cookieDeprecationLabel ? (a("pending"), dc.cookieDeprecationLabel.getValue().then(a).catch(b)) : a("noapi")
            } catch (c) {
                b(c)
            }
        }
    };

    function Ym(a, b) {
        b && hb(b, function(c, d) {
            typeof d !== "object" && d !== void 0 && (a["1p." + c] = String(d))
        })
    };
    var Zm = /[A-Z]+/,
        $m = /\s/;

    function an(a, b) {
        if (z(a)) {
            a = mb(a);
            var c = a.indexOf("-");
            if (!(c < 0)) {
                var d = a.substring(0, c);
                if (Zm.test(d)) {
                    var e = a.substring(c + 1),
                        f;
                    if (b) {
                        var g = function(n) {
                            var p = n.indexOf("/");
                            return p < 0 ? [n] : [n.substring(0, p), n.substring(p + 1)]
                        };
                        f = g(e);
                        if (d === "DC" && f.length === 2) {
                            var k = g(f[1]);
                            k.length === 2 && (f[1] = k[0], f.push(k[1]))
                        }
                    } else {
                        f = e.split("/");
                        for (var m = 0; m < f.length; m++)
                            if (!f[m] || $m.test(f[m]) && (d !== "AW" || m !== 1)) return
                    }
                    return {
                        id: a,
                        prefix: d,
                        destinationId: d + "-" + f[0],
                        ids: f
                    }
                }
            }
        }
    }

    function bn(a, b) {
        for (var c = {}, d = 0; d < a.length; ++d) {
            var e = an(a[d], b);
            e && (c[e.id] = e)
        }
        cn(c);
        var f = [];
        hb(c, function(g, k) {
            f.push(k)
        });
        return f
    }

    function cn(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                d.prefix === "AW" && d.ids[dn[2]] && b.push(d.destinationId)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    }
    var en = {},
        dn = (en[0] = 0, en[1] = 0, en[2] = 1, en[3] = 0, en[4] = 1, en[5] = 2, en[6] = 0, en[7] = 0, en[8] = 0, en);
    var fn = Number('') || 500,
        gn = {},
        hn = {},
        jn = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        kn = {},
        ln = Object.freeze((kn[Q.g.Na] = !0, kn)),
        mn = void 0;

    function nn(a, b) {
        if (b.length && mk) {
            var c;
            (c = gn)[a] != null || (c[a] = []);
            hn[a] != null || (hn[a] = []);
            var d = b.filter(function(e) {
                return !hn[a].includes(e)
            });
            gn[a].push.apply(gn[a], ua(d));
            hn[a].push.apply(hn[a], ua(d));
            !mn && d.length > 0 && (fl("tdc", !0), mn = B.setTimeout(function() {
                il();
                gn = {};
                mn = void 0
            }, fn))
        }
    }

    function on(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function pn(a, b, c, d) {
        c = c === void 0 ? {} : c;
        d = d === void 0 ? "" : d;
        if (a === b) return [];
        var e = function(r, t) {
                var v;
                Pc(t) === "object" ? v = t[r] : Pc(t) === "array" && (v = t[r]);
                return v === void 0 ? ln[r] : v
            },
            f = on(a, b),
            g;
        for (g in f)
            if (f.hasOwnProperty(g)) {
                var k = (d ? d + "." : "") + g,
                    m = e(g, a),
                    n = e(g, b),
                    p = Pc(m) === "object" || Pc(m) === "array",
                    q = Pc(n) === "object" || Pc(n) === "array";
                if (p && q) pn(m, n, c, k);
                else if (p || q || m !== n) c[k] = !0
            }
        return Object.keys(c)
    }

    function qn() {
        el("tdc", function() {
            mn && (B.clearTimeout(mn), mn = void 0);
            var a = [],
                b;
            for (b in gn) gn.hasOwnProperty(b) && a.push(b + "*" + gn[b].join("."));
            return a.length ? a.join("!") : void 0
        }, !1)
    };
    var rn = function(a, b, c, d, e, f, g, k, m, n, p) {
            this.eventId = a;
            this.priorityId = b;
            this.j = c;
            this.P = d;
            this.H = e;
            this.K = f;
            this.C = g;
            this.eventMetadata = k;
            this.onSuccess = m;
            this.onFailure = n;
            this.isGtmEvent = p
        },
        sn = function(a, b) {
            var c = [];
            switch (b) {
                case 3:
                    c.push(a.j);
                    c.push(a.P);
                    c.push(a.H);
                    c.push(a.K);
                    c.push(a.C);
                    break;
                case 2:
                    c.push(a.j);
                    break;
                case 1:
                    c.push(a.P);
                    c.push(a.H);
                    c.push(a.K);
                    c.push(a.C);
                    break;
                case 4:
                    c.push(a.j), c.push(a.P), c.push(a.H), c.push(a.K)
            }
            return c
        },
        V = function(a, b, c, d) {
            for (var e = l(sn(a, d === void 0 ? 3 :
                    d)), f = e.next(); !f.done; f = e.next()) {
                var g = f.value;
                if (g[b] !== void 0) return g[b]
            }
            return c
        },
        tn = function(a) {
            for (var b = {}, c = sn(a, 4), d = l(c), e = d.next(); !e.done; e = d.next())
                for (var f = Object.keys(e.value), g = l(f), k = g.next(); !k.done; k = g.next()) b[k.value] = 1;
            return Object.keys(b)
        },
        un = function(a, b, c) {
            function d(n) {
                Rc(n) && hb(n, function(p, q) {
                    f = !0;
                    e[p] = q
                })
            }
            var e = {},
                f = !1,
                g = sn(a, c === void 0 ? 3 : c);
            g.reverse();
            for (var k = l(g), m = k.next(); !m.done; m = k.next()) d(m.value[b]);
            return f ? e : void 0
        },
        vn = function(a) {
            for (var b = [Q.g.jd, Q.g.ed,
                    Q.g.fd, Q.g.gd, Q.g.hd, Q.g.kd, Q.g.ld
                ], c = sn(a, 3), d = l(c), e = d.next(); !e.done; e = d.next()) {
                for (var f = e.value, g = {}, k = !1, m = l(b), n = m.next(); !n.done; n = m.next()) {
                    var p = n.value;
                    f[p] !== void 0 && (g[p] = f[p], k = !0)
                }
                var q = k ? g : void 0;
                if (q) return q
            }
            return {}
        },
        wn = function(a, b) {
            this.eventId = a;
            this.priorityId = b;
            this.C = {};
            this.P = {};
            this.j = {};
            this.H = {};
            this.X = {};
            this.K = {};
            this.eventMetadata = {};
            this.isGtmEvent = !1;
            this.onSuccess = function() {};
            this.onFailure = function() {}
        },
        xn = function(a, b) {
            a.C = b;
            return a
        },
        yn = function(a, b) {
            a.P = b;
            return a
        },
        zn = function(a, b) {
            a.j = b;
            return a
        },
        An = function(a, b) {
            a.H = b;
            return a
        },
        Bn = function(a, b) {
            a.X = b;
            return a
        },
        Cn = function(a, b) {
            a.K = b;
            return a
        },
        Dn = function(a, b) {
            a.eventMetadata = b || {};
            return a
        },
        En = function(a, b) {
            a.onSuccess = b;
            return a
        },
        Fn = function(a, b) {
            a.onFailure = b;
            return a
        },
        Gn = function(a, b) {
            a.isGtmEvent = b;
            return a
        },
        Hn = function(a) {
            return new rn(a.eventId, a.priorityId, a.C, a.P, a.j, a.H, a.K, a.eventMetadata, a.onSuccess, a.onFailure, a.isGtmEvent)
        };
    var In = {
            Vk: Number("5"),
            zo: Number("")
        },
        Jn = [];

    function Kn(a) {
        Jn.push(a)
    }
    var Ln = "?id=" + Pf.ctid,
        Mn = void 0,
        Nn = {},
        On = void 0,
        Pn = new function() {
            var a = 5;
            In.Vk > 0 && (a = In.Vk);
            this.C = a;
            this.j = 0;
            this.H = []
        },
        Qn = 1E3;

    function Rn(a, b) {
        var c = Mn;
        if (c === void 0)
            if (b) c = Om();
            else return "";
        for (var d = [ek("https://www.googletagmanager.com"), "/a", Ln], e = l(Jn), f = e.next(); !f.done; f = e.next())
            for (var g = f.value, k = g({
                    eventId: c,
                    Xc: !!a
                }), m = l(k), n = m.next(); !n.done; n = m.next()) {
                var p = l(n.value),
                    q = p.next().value,
                    r = p.next().value;
                d.push("&" + q + "=" + r)
            }
        d.push("&z=0");
        return d.join("")
    }

    function Sn() {
        if (!T(8) || uj.P)
            if (On && (B.clearTimeout(On), On = void 0), Mn !== void 0 && Tn) {
                var a;
                (a = Nn[Mn]) || (a = Pn.j < Pn.C ? !1 : ob() - Pn.H[Pn.j % Pn.C] < 1E3);
                if (a || Qn-- <= 0) U(1), Nn[Mn] = !0;
                else {
                    var b = Pn.j++ % Pn.C;
                    Pn.H[b] = ob();
                    var c = Rn(!0);
                    rc(c);
                    Tn = !1
                }
            }
    }

    function Un() {
        if (lk && (!T(8) || uj.P)) {
            var a = Rn(!0, !0);
            rc(a)
        }
    }
    var Tn = !1;

    function Vn(a) {
        Nn[a] || (a !== Mn && (Sn(), Mn = a), Tn = !0, On || (On = B.setTimeout(Sn, 500)), Rn().length >= 2022 && Sn())
    }
    var Wn = db();

    function Xn() {
        Wn = db()
    }

    function Yn() {
        return [
            ["v", "3"],
            ["t", "t"],
            ["pid", String(Wn)]
        ]
    }
    var Zn = {};

    function $n(a, b, c) {
        lk && a !== void 0 && (Zn[a] = Zn[a] || [], Zn[a].push(c + b), Vn(a))
    }

    function ao(a) {
        var b = a.eventId,
            c = a.Xc,
            d = [],
            e = Zn[b] || [];
        e.length && d.push(["epr", e.join(".")]);
        c && delete Zn[b];
        return d
    };
    var bo = {},
        co = (bo[0] = 0, bo[1] = 0, bo[2] = 0, bo[3] = 0, bo),
        eo = function(a, b) {
            this.j = a;
            this.consentTypes = b
        };
    eo.prototype.isConsentGranted = function() {
        switch (this.j) {
            case 0:
                return this.consentTypes.every(function(a) {
                    return wl(a)
                });
            case 1:
                return this.consentTypes.some(function(a) {
                    return wl(a)
                });
            default:
                throw Error("consentsRequired had an unknown type");
        }
    };
    var fo = {},
        go = (fo[0] = new eo(0, []), fo[1] = new eo(0, ["ad_storage"]), fo[2] = new eo(0, ["analytics_storage"]), fo[3] = new eo(1, ["ad_storage", "analytics_storage"]), fo);
    var ho = function(a) {
        var b = this;
        this.type = a;
        this.j = [];
        Am(go[a].consentTypes, function() {
            co[b.type] === 2 && !go[b.type].isConsentGranted() || b.flush()
        })
    };
    ho.prototype.flush = function() {
        for (var a = l(this.j), b = a.next(); !b.done; b = a.next()) {
            var c = b.value;
            c()
        }
        this.j = []
    };
    var io = function(a, b) {
            co[a.type] !== 2 || go[a.type].isConsentGranted() ? b() : a.j.push(b)
        },
        jo = new Map;

    function ko(a) {
        jo.has(a) || jo.set(a, new ho(a));
        return jo.get(a)
    };

    function lo(a, b, c) {
        var d = an(Gk(a), !0);
        d && mo.register(d, b, c)
    }

    function no(a, b, c, d) {
        var e = an(c, d.isGtmEvent);
        e && (gj && (d.deferrable = !0), mo.push("event", [b, a], e, d))
    }

    function oo(a, b, c, d) {
        var e = an(c, d.isGtmEvent);
        e && mo.push("get", [a, b], e, d)
    }

    function po(a) {
        var b = an(Gk(a), !0),
            c;
        b ? c = qo(mo, b).j : c = {};
        return c
    }

    function ro(a, b) {
        var c = an(Gk(a), !0);
        if (c) {
            var d = mo,
                e = Sc(b, null);
            Sc(qo(d, c).j, e);
            qo(d, c).j = e
        }
    }
    var so = function() {
            this.P = {};
            this.j = {};
            this.C = {};
            this.X = null;
            this.K = {};
            this.H = !1;
            this.status = 1
        },
        to = function(a, b, c, d) {
            this.C = ob();
            this.j = b;
            this.args = c;
            this.messageContext = d;
            this.type = a
        },
        uo = function() {
            this.destinations = {};
            this.j = {};
            this.commands = []
        },
        qo = function(a, b) {
            var c = b.destinationId;
            T(136) && !wk && (c = Lk(c));
            return a.destinations[c] = a.destinations[c] || new so
        },
        vo = function(a, b, c, d) {
            if (d.j) {
                var e = qo(a, d.j),
                    f = e.X;
                if (f) {
                    var g = d.j.id;
                    T(136) && !wk && (g = Lk(g));
                    var k = Sc(c, null),
                        m = Sc(e.P[g], null),
                        n = Sc(e.K, null),
                        p = Sc(e.j, null),
                        q = Sc(a.j, null),
                        r = {};
                    if (lk) try {
                        r = Sc(Bj, null)
                    } catch (x) {
                        U(72)
                    }
                    var t = d.j.prefix,
                        v = function(x) {
                            $n(d.messageContext.eventId, t, x)
                        },
                        u = Hn(Gn(Fn(En(Dn(Bn(An(Cn(zn(yn(xn(new wn(d.messageContext.eventId, d.messageContext.priorityId), k), m), n), p), q), r), d.messageContext.eventMetadata), function() {
                            if (v) {
                                var x = v;
                                v = void 0;
                                x("2");
                                if (d.messageContext.onSuccess) d.messageContext.onSuccess()
                            }
                        }), function() {
                            if (v) {
                                var x = v;
                                v = void 0;
                                x("3");
                                if (d.messageContext.onFailure) d.messageContext.onFailure()
                            }
                        }), !!d.messageContext.isGtmEvent)),
                        w = function() {
                            try {
                                $n(d.messageContext.eventId, t, "1");
                                var x = d.type,
                                    y = d.j.id;
                                if (mk && x === "config") {
                                    var A, C = (A = an(y)) == null ? void 0 : A.ids;
                                    if (!(C && C.length > 1)) {
                                        var D, E = hc("google_tag_data", {});
                                        E.td || (E.td = {});
                                        D = E.td;
                                        var I = Sc(u.K);
                                        Sc(u.j, I);
                                        var H = [],
                                            O;
                                        for (O in D) D.hasOwnProperty(O) && pn(D[O], I).length && H.push(O);
                                        H.length && (nn(y, H), Va("TAGGING", jn[F.readyState] || 14));
                                        D[y] = I
                                    }
                                }
                                f(d.j.id, b, d.C, u)
                            } catch (K) {
                                $n(d.messageContext.eventId, t, "4")
                            }
                        };
                    b === "gtag.get" ? w() : T(110) ? io(e.xa, w) : w()
                }
            }
        };
    uo.prototype.register = function(a, b, c) {
        var d = qo(this, a);
        d.status !== 3 && (d.X = b, d.status = 3, T(110) && (d.xa = ko(c)), this.flush())
    };
    uo.prototype.push = function(a, b, c, d) {
        c !== void 0 && (qo(this, c).status === 1 && (qo(this, c).status = 2, this.push("require", [{}], c, {})), qo(this, c).H && (d.deferrable = !1));
        this.commands.push(new to(a, c, b, d));
        d.deferrable || this.flush()
    };
    uo.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.commands.length; e = {
                Vb: void 0,
                jg: void 0
            }) {
            var f = this.commands[0],
                g = f.j;
            if (f.messageContext.deferrable) !g || qo(this, g).H ? (f.messageContext.deferrable = !1, this.commands.push(f)) : c.push(f), this.commands.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (qo(this, g).status !== 3 && !a) {
                            this.commands.push.apply(this.commands, c);
                            return
                        }
                        break;
                    case "set":
                        var k = f.args[0];
                        hb(k, function(v, u) {
                            Sc(wb(v, u), b.j)
                        });
                        ri(k);
                        break;
                    case "config":
                        var m = qo(this, g);
                        e.Vb = {};
                        hb(f.args[0], function(v) {
                            return function(u, w) {
                                Sc(wb(u, w), v.Vb)
                            }
                        }(e));
                        var n = !!e.Vb[Q.g.rc];
                        delete e.Vb[Q.g.rc];
                        var p = g.destinationId === g.id;
                        n || (p ? m.K = {} : m.P[g.id] = {});
                        m.H && n || vo(this, Q.g.ba, e.Vb, f);
                        m.H = !0;
                        p ? Sc(e.Vb, m.K) : (Sc(e.Vb, m.P[g.id]), U(70));
                        d = !0;
                        Nl(e.Vb, g.id);
                        Hl = !0;
                        ri(e.Vb);
                        break;
                    case "event":
                        e.jg = {};
                        hb(f.args[0], function(v) {
                            return function(u, w) {
                                Sc(wb(u, w), v.jg)
                            }
                        }(e));
                        vo(this, f.args[1], e.jg, f);
                        var q = void 0;
                        !f.j || ((q = f.messageContext.eventMetadata) == null ? 0 : q.em_event) || (Kl[f.j.id] = !0);
                        Hl = !0;
                        ri(e.jg);
                        break;
                    case "get":
                        var r = {},
                            t = (r[Q.g.yb] = f.args[0], r[Q.g.Pb] = f.args[1], r);
                        vo(this, Q.g.Za, t, f);
                        Hl = !0
                }
                this.commands.shift();
                wo(this, f)
            }
        }
        this.commands.push.apply(this.commands, c);
        d && this.flush()
    };
    var wo = function(a, b) {
            if (b.type !== "require")
                if (b.j)
                    for (var c = qo(a, b.j).C[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.destinations)
                        if (a.destinations.hasOwnProperty(e)) {
                            var f = a.destinations[e];
                            if (f && f.C)
                                for (var g = f.C[b.type] || [], k = 0; k < g.length; k++) g[k]()
                        }
        },
        mo = new uo;
    var xo = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        yo = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };
    var zo = function(a, b, c) {
            a.addEventListener && a.addEventListener(b, c, !1)
        },
        Ao = function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        };
    var Bo, Co;
    a: {
        for (var Do = ["CLOSURE_FLAGS"], Eo = za, Fo = 0; Fo < Do.length; Fo++)
            if (Eo = Eo[Do[Fo]], Eo == null) {
                Co = null;
                break a
            }
        Co = Eo
    }
    var Go = Co && Co[610401301];
    Bo = Go != null ? Go : !1;

    function Ho() {
        var a = za.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }
    var Io, Jo = za.navigator;
    Io = Jo ? Jo.userAgentData || null : null;

    function Ko(a) {
        return Bo ? Io ? Io.brands.some(function(b) {
            var c;
            return (c = b.brand) && c.indexOf(a) != -1
        }) : !1 : !1
    }

    function Lo(a) {
        return Ho().indexOf(a) != -1
    };

    function Mo() {
        return Bo ? !!Io && Io.brands.length > 0 : !1
    }

    function No() {
        return Mo() ? !1 : Lo("Opera")
    }

    function Oo() {
        return Lo("Firefox") || Lo("FxiOS")
    }

    function Po() {
        return Mo() ? Ko("Chromium") : (Lo("Chrome") || Lo("CriOS")) && !(Mo() ? 0 : Lo("Edge")) || Lo("Silk")
    };
    var Qo = function(a) {
        Qo[" "](a);
        return a
    };
    Qo[" "] = function() {};
    var Ro = function(a, b, c, d) {
            for (var e = b, f = c.length;
                (e = a.indexOf(c, e)) >= 0 && e < d;) {
                var g = a.charCodeAt(e - 1);
                if (g == 38 || g == 63) {
                    var k = a.charCodeAt(e + f);
                    if (!k || k == 61 || k == 38 || k == 35) return e
                }
                e += f + 1
            }
            return -1
        },
        So = /#|$/,
        To = function(a, b) {
            var c = a.search(So),
                d = Ro(a, 0, b, c);
            if (d < 0) return null;
            var e = a.indexOf("&", d);
            if (e < 0 || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " "))
        },
        Uo = /[?&]($|#)/,
        Vo = function(a, b, c) {
            for (var d, e = a.search(So), f = 0, g, k = [];
                (g = Ro(a, f, b, e)) >= 0;) k.push(a.substring(f,
                g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
            k.push(a.slice(f));
            d = k.join("").replace(Uo, "$1");
            var m, n = c != null ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q, r = d.indexOf("#");
                r < 0 && (r = d.length);
                var t = d.indexOf("?"),
                    v;
                t < 0 || t > r ? (t = r, v = "") : v = d.substring(t + 1, r);
                q = [d.slice(0, t), v, d.slice(r)];
                var u = q[1];
                q[1] = p ? u ? u + "&" + p : p : u;
                m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else m = d;
            return m
        };

    function Wo() {
        return Bo ? !!Io && !!Io.platform : !1
    }

    function Xo() {
        return Lo("iPhone") && !Lo("iPod") && !Lo("iPad")
    }

    function Yo() {
        Xo() || Lo("iPad") || Lo("iPod")
    };
    No();
    Mo() || Lo("Trident") || Lo("MSIE");
    Lo("Edge");
    !Lo("Gecko") || Ho().toLowerCase().indexOf("webkit") != -1 && !Lo("Edge") || Lo("Trident") || Lo("MSIE") || Lo("Edge");
    Ho().toLowerCase().indexOf("webkit") != -1 && !Lo("Edge") && Lo("Mobile");
    Wo() || Lo("Macintosh");
    Wo() || Lo("Windows");
    (Wo() ? Io.platform === "Linux" : Lo("Linux")) || Wo() || Lo("CrOS");
    Wo() || Lo("Android");
    Xo();
    Lo("iPad");
    Lo("iPod");
    Yo();
    Ho().toLowerCase().indexOf("kaios");
    var Zo = function(a) {
            try {
                var b;
                if (b = !!a && a.location.href != null) a: {
                    try {
                        Qo(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        $o = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        },
        ap = function(a) {
            if (B.top == B) return 0;
            if (a === void 0 ? 0 : a) {
                var b = B.location.ancestorOrigins;
                if (b) return b[b.length - 1] == B.location.origin ? 1 : 2
            }
            return Zo(B.top) ? 1 : 2
        },
        bp = function(a) {
            a = a === void 0 ? document : a;
            return a.createElement("img")
        },
        cp = function() {
            for (var a = B, b = a; a && a != a.parent;) a =
                a.parent, Zo(a) && (b = a);
            return b
        };

    function dp(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = bp(a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests,
                        k = ac(g, e);
                    k >= 0 && Array.prototype.splice.call(g, k, 1)
                }
                Ao(e, "load", f);
                Ao(e, "error", f)
            };
            zo(e, "load", f);
            zo(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var fp = function(a) {
            var b;
            b = b === void 0 ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            $o(a, function(d, e) {
                if (d || d === 0) c += "&" + e + "=" + encodeURIComponent("" + d)
            });
            ep(c, b)
        },
        ep = function(a, b) {
            var c = window,
                d;
            b = b === void 0 ? !1 : b;
            d = d === void 0 ? !1 : d;
            if (c.fetch) {
                var e = {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                };
                d && (e.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? e.attributionReporting = {
                        eventSourceEligible: "true",
                        triggerEligible: "false"
                    } :
                    e.headers = {
                        "Attribution-Reporting-Eligible": "event-source"
                    });
                c.fetch(a, e)
            } else dp(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d)
        };
    var gp = function() {
        this.P = this.P;
        this.C = this.C
    };
    gp.prototype.P = !1;
    gp.prototype.dispose = function() {
        this.P || (this.P = !0, this.xa())
    };
    gp.prototype[Symbol.dispose] = function() {
        this.dispose()
    };
    gp.prototype.addOnDisposeCallback = function(a, b) {
        this.P ? b !== void 0 ? a.call(b) : a() : (this.C || (this.C = []), b && (a = a.bind(b)), this.C.push(a))
    };
    gp.prototype.xa = function() {
        if (this.C)
            for (; this.C.length;) this.C.shift()()
    };

    function hp(a) {
        a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
        a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
        return a.tcString !== void 0 && typeof a.tcString !== "string" || a.listenerId !== void 0 && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
    }
    var ip = function(a, b) {
        b = b === void 0 ? {} : b;
        gp.call(this);
        this.j = null;
        this.X = {};
        this.eg = 0;
        this.K = null;
        this.H = a;
        var c;
        this.sc = (c = b.Hn) != null ? c : 500;
        var d;
        this.fb = (d = b.po) != null ? d : !1
    };
    sa(ip, gp);
    ip.prototype.xa = function() {
        this.X = {};
        this.K && (Ao(this.H, "message", this.K), delete this.K);
        delete this.X;
        delete this.H;
        delete this.j;
        gp.prototype.xa.call(this)
    };
    var kp = function(a) {
        return typeof a.H.__tcfapi === "function" || jp(a) != null
    };
    ip.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.fb
            },
            d = yo(function() {
                return a(c)
            }),
            e = 0;
        this.sc !== -1 && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.sc));
        var f = function(g, k) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = hp(c), c.internalBlockOnErrors = b.fb, k && c.internalErrorState === 0 || (c.tcString = "tcunavailable", k || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            lp(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    ip.prototype.removeEventListener = function(a) {
        a && a.listenerId && lp(this, "removeEventListener", null, a.listenerId)
    };
    var np = function(a, b, c) {
            var d;
            d = d === void 0 ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (f !== void 0) {
                        e = f[d === void 0 ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (g === 0) return !1;
            var k = c;
            c === 2 ? (k = 0, g === 2 && (k = 1)) : c === 3 && (k = 1, g === 1 && (k = 0));
            var m;
            if (k === 0)
                if (a.purpose && a.vendor) {
                    var n = mp(a.vendor.consents, d === void 0 ? "755" : d);
                    m = n && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH" ? !0 : n && mp(a.purpose.consents, b)
                } else m = !0;
            else m = k === 1 ? a.purpose && a.vendor ? mp(a.purpose.legitimateInterests,
                b) && mp(a.vendor.legitimateInterests, d === void 0 ? "755" : d) : !0 : !0;
            return m
        },
        mp = function(a, b) {
            return !(!a || !a[b])
        },
        lp = function(a, b, c, d) {
            c || (c = function() {});
            var e = a.H;
            if (typeof e.__tcfapi === "function") {
                var f = e.__tcfapi;
                f(b, 2, c, d)
            } else if (jp(a)) {
                op(a);
                var g = ++a.eg;
                a.X[g] = c;
                if (a.j) {
                    var k = {};
                    a.j.postMessage((k.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: g,
                        parameter: d
                    }, k), "*")
                }
            } else c({}, !1)
        },
        jp = function(a) {
            if (a.j) return a.j;
            var b;
            a: {
                for (var c = a.H, d = 0; d < 50; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (k) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b
                            }
                        } catch (k) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.j = b;
            return a.j
        },
        op = function(a) {
            if (!a.K) {
                var b = function(c) {
                    try {
                        var d;
                        d = (typeof c.data === "string" ? JSON.parse(c.data) : c.data).__tcfapiReturn;
                        a.X[d.callId](d.returnValue, d.success)
                    } catch (e) {}
                };
                a.K = b;
                zo(a.H, "message", b)
            }
        },
        qp = function(a) {
            if (a.gdprApplies === !1) return !0;
            a.internalErrorState === void 0 && (a.internalErrorState = hp(a));
            return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ?
                (fp({
                    e: String(a.internalErrorState)
                }), !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
        };
    var rp = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    };

    function sp() {
        return Km("tcf", function() {
            return {}
        })
    }
    var tp = function() {
        return new ip(B, {
            Hn: -1
        })
    };

    function up() {
        var a = sp(),
            b = tp();
        kp(b) && !vp() && !wp() && U(124);
        if (!a.active && kp(b)) {
            vp() && (a.active = !0, a.purposes = {}, a.cmpId = 0, a.tcfPolicyVersion = 0, ol().active = !0, a.tcString = "tcunavailable");
            Dm();
            try {
                b.addEventListener(function(c) {
                    if (c.internalErrorState !== 0) xp(a), Em([Q.g.N, Q.g.ra, Q.g.O]), ol().active = !0;
                    else if (a.gdprApplies = c.gdprApplies, a.cmpId = c.cmpId, a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode, wp() && (a.active = !0), !yp(c) || vp() || wp()) {
                        a.tcfPolicyVersion = c.tcfPolicyVersion;
                        var d;
                        if (c.gdprApplies ===
                            !1) {
                            var e = {},
                                f;
                            for (f in rp) rp.hasOwnProperty(f) && (e[f] = !0);
                            d = e;
                            b.removeEventListener(c)
                        } else if (yp(c)) {
                            var g = {},
                                k;
                            for (k in rp)
                                if (rp.hasOwnProperty(k))
                                    if (k === "1") {
                                        var m, n = c,
                                            p = {
                                                ym: !0
                                            };
                                        p = p === void 0 ? {} : p;
                                        m = qp(n) ? n.gdprApplies === !1 ? !0 : n.tcString === "tcunavailable" ? !p.vk : (p.vk || n.gdprApplies !== void 0 || p.ym) && (p.vk || typeof n.tcString === "string" && n.tcString.length) ? np(n, "1", 0) : !0 : !1;
                                        g["1"] = m
                                    } else g[k] = np(c, k, rp[k]);
                            d = g
                        }
                        if (d) {
                            a.tcString = c.tcString || "tcempty";
                            a.purposes = d;
                            var q = {},
                                r = (q[Q.g.N] = a.purposes["1"] ?
                                    "granted" : "denied", q);
                            a.gdprApplies !== !0 ? (Em([Q.g.N, Q.g.ra, Q.g.O]), ol().active = !0) : (r[Q.g.ra] = a.purposes["3"] && a.purposes["4"] ? "granted" : "denied", typeof a.tcfPolicyVersion === "number" && a.tcfPolicyVersion >= 4 ? r[Q.g.O] = a.purposes["1"] && a.purposes["7"] ? "granted" : "denied" : Em([Q.g.O]), ym(r, {
                                eventId: 0
                            }, {
                                gdprApplies: a ? a.gdprApplies : void 0,
                                tcString: zp() || ""
                            }))
                        }
                    } else Em([Q.g.N, Q.g.ra, Q.g.O])
                })
            } catch (c) {
                xp(a), Em([Q.g.N, Q.g.ra, Q.g.O]), ol().active = !0
            }
        }
    }

    function xp(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }

    function yp(a) {
        return a.eventStatus === "tcloaded" || a.eventStatus === "useractioncomplete" || a.eventStatus === "cmpuishown"
    }

    function vp() {
        return B.gtag_enable_tcf_support === !0
    }

    function wp() {
        return sp().enableAdvertiserConsentMode === !0
    }

    function zp() {
        var a = sp();
        if (a.active) return a.tcString
    }

    function Ap() {
        var a = sp();
        if (a.active && a.gdprApplies !== void 0) return a.gdprApplies ? "1" : "0"
    }

    function Bp(a) {
        if (!rp.hasOwnProperty(String(a))) return !0;
        var b = sp();
        return b.active && b.purposes ? !!b.purposes[String(a)] : !0
    }
    var Cp = [Q.g.N, Q.g.R, Q.g.O, Q.g.ra],
        Dp = {},
        Ep = (Dp[Q.g.N] = 1, Dp[Q.g.R] = 2, Dp);

    function Fp(a) {
        if (a === void 0) return 0;
        switch (V(a, Q.g.la)) {
            case void 0:
                return 1;
            case !1:
                return 3;
            default:
                return 2
        }
    }

    function Gp(a) {
        if (Rl() === "US-CO" && dc.globalPrivacyControl === !0) return !1;
        var b = Fp(a);
        if (b === 3) return !1;
        switch (xl(Q.g.ra)) {
            case 1:
            case 3:
                return !0;
            case 2:
                return !1;
            case 4:
                return b === 2;
            case 0:
                return !0;
            default:
                return !1
        }
    }

    function Hp() {
        return Al() || !wl(Q.g.N) || !wl(Q.g.R)
    }

    function Ip() {
        var a = {},
            b;
        for (b in Ep) Ep.hasOwnProperty(b) && (a[Ep[b]] = xl(b));
        return "G1" + He(a[1] || 0) + He(a[2] || 0)
    }
    var Jp = {},
        Kp = (Jp[Q.g.N] = 0, Jp[Q.g.R] = 1, Jp[Q.g.O] = 2, Jp[Q.g.ra] = 3, Jp);

    function Lp(a) {
        switch (a) {
            case void 0:
                return 1;
            case !0:
                return 3;
            case !1:
                return 2;
            default:
                return 0
        }
    }

    function Mp(a) {
        for (var b = "1", c = 0; c < Cp.length; c++) {
            var d = b,
                e, f = Cp[c],
                g = vl.delegatedConsentTypes[f];
            e = g === void 0 ? 0 : Kp.hasOwnProperty(g) ? 12 | Kp[g] : 8;
            var k = ol();
            k.accessedAny = !0;
            var m = k.entries[f] || {};
            e = e << 2 | Lp(m.implicit);
            b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [Lp(m.declare) << 4 | Lp(m.default) << 2 | Lp(m.update)])
        }
        var n = b,
            p = (Rl() === "US-CO" && dc.globalPrivacyControl === !0 ? 1 : 0) << 3,
            q = (Al() ? 1 : 0) << 2,
            r = Fp(a);
        b =
            n + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [p | q | r];
        return b += "" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [vl.containerScopedDefaults.ad_storage << 4 | vl.containerScopedDefaults.analytics_storage << 2 | vl.containerScopedDefaults.ad_user_data] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [(vl.usedContainerScopedDefaults ? 1 : 0) << 2 | vl.containerScopedDefaults.ad_personalization]
    }

    function Np() {
        if (!wl(Q.g.O)) return "-";
        for (var a = Object.keys(Nh), b = yl(a), c = "", d = l(a), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            b[f] && (c += Nh[f])
        }(vl.usedCorePlatformServices ? vl.selectedAllCorePlatformServices : 1) && (c += "o");
        return c || "-"
    }

    function Op() {
        return Tl() || (vp() || wp()) && Ap() === "1" ? "1" : "0"
    }

    function Pp() {
        return (Tl() ? !0 : !(!vp() && !wp()) && Ap() === "1") || !wl(Q.g.O)
    }

    function Qp() {
        var a = "0",
            b = "0",
            c;
        var d = sp();
        c = d.active ? d.cmpId : void 0;
        typeof c === "number" && c >= 0 && c <= 4095 && (a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c >> 6 & 63], b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c & 63]);
        var e = "0",
            f;
        var g = sp();
        f = g.active ? g.tcfPolicyVersion : void 0;
        typeof f === "number" && f >= 0 && f <= 63 && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [f]);
        var k = 0;
        Tl() && (k |= 1);
        Ap() === "1" && (k |= 2);
        vp() && (k |= 4);
        var m;
        var n = sp();
        m = n.enableAdvertiserConsentMode !==
            void 0 ? n.enableAdvertiserConsentMode ? "1" : "0" : void 0;
        m === "1" && (k |= 8);
        ol().waitPeriodTimedOut && (k |= 16);
        return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [k]
    }

    function Rp() {
        return Rl() === "US-CO"
    };

    function Sp() {
        var a = !1;
        return a
    };
    var Tp = {
        UA: 1,
        AW: 2,
        DC: 3,
        G: 4,
        GF: 5,
        GT: 12,
        GTM: 14,
        HA: 6,
        MC: 7
    };

    function Up(a) {
        a = a === void 0 ? {} : a;
        var b = Pf.ctid.split("-")[0].toUpperCase(),
            c = {
                ctid: Pf.ctid,
                vn: bj.Je,
                xn: bj.xh,
                Ym: vk.Ge ? 2 : 1,
                Cn: a.Mk,
                Qe: Pf.canonicalContainerId
            };
        c.Qe !== a.za && (c.za = a.za);
        var d = Ik();
        c.mn = d ? d.canonicalContainerId : void 0;
        hj ? (c.sg = Tp[b], c.sg || (c.sg = 0)) : c.sg = lj ? 13 : 10;
        uj.j ? (c.qg = 0, c.am = 2) : jj ? c.qg = 1 : Sp() ? c.qg = 2 : c.qg = 3;
        var e = {};
        e[6] = wk;
        uj.C === 2 ? e[7] = !0 : uj.C === 1 && (e[2] = !0);
        if (gc) {
            var f = Rj(Xj(gc), "host");
            f && (e[8] = f.match(/^(www\.)?googletagmanager\.com$/) === null)
        }
        c.fm = e;
        var g = a.gg,
            k;
        var m = c.sg,
            n = c.qg;
        m === void 0 ? k = "" : (n || (n = 0), k = "" + Je(1, 1) + Ge(m << 2 | n));
        var p = c.am,
            q = "4" + k + (p ? "" + Je(2, 1) + Ge(p) : ""),
            r, t = c.xn;
        r = t && Ie.test(t) ? "" + Je(3, 2) + t : "";
        var v, u = c.vn;
        v = u ? "" + Je(4, 1) + Ge(u) : "";
        var w;
        var x = c.ctid;
        if (x && g) {
            var y = x.split("-"),
                A = y[0].toUpperCase();
            if (A !== "GTM" && A !== "OPT") w = "";
            else {
                var C = y[1];
                w = "" + Je(5, 3) + Ge(1 + C.length) + (c.Ym || 0) + C
            }
        } else w = "";
        var D = c.Cn,
            E = c.Qe,
            I = c.za,
            H = c.xo,
            O = q + r + v + w + (D ? "" + Je(6, 1) + Ge(D) : "") + (E ? "" + Je(7, 3) + Ge(E.length) + E : "") + (I ? "" + Je(8, 3) + Ge(I.length) + I : "") + (H ? "" + Je(9, 3) + Ge(H.length) +
                H : ""),
            K;
        var Z = c.fm;
        Z = Z === void 0 ? {} : Z;
        for (var ca = [], ba = l(Object.keys(Z)), aa = ba.next(); !aa.done; aa = ba.next()) {
            var P = aa.value;
            ca[Number(P)] = Z[P]
        }
        if (ca.length) {
            var ma = Je(10, 3),
                ia;
            if (ca.length === 0) ia = Ge(0);
            else {
                for (var ja = [], Ga = 0, Wa = !1, Da = 0; Da < ca.length; Da++) {
                    Wa = !0;
                    var Ta = Da % 6;
                    ca[Da] && (Ga |= 1 << Ta);
                    Ta === 5 && (ja.push(Ge(Ga)), Ga = 0, Wa = !1)
                }
                Wa && ja.push(Ge(Ga));
                ia = ja.join("")
            }
            var gb = ia;
            K = "" + ma + Ge(gb.length) + gb
        } else K = "";
        var nc = c.mn;
        return O + K + (nc ? "" + Je(11, 3) + Ge(nc.length) + nc : "")
    };

    function Vp(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; d >= 0; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = c !== 0 ? b ^ c >> 21 : b;
        return b
    };

    function Wp(a) {
        return a.origin !== "null"
    };

    function Xp(a, b, c, d) {
        var e;
        if (Yp(d)) {
            for (var f = [], g = String(b || Zp()).split(";"), k = 0; k < g.length; k++) {
                var m = g[k].split("="),
                    n = m[0].replace(/^\s*|\s*$/g, "");
                if (n && n === a) {
                    var p = m.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                    p && c && (p = decodeURIComponent(p));
                    f.push(p)
                }
            }
            e = f
        } else e = [];
        return e
    }

    function $p(a, b, c, d, e) {
        if (Yp(e)) {
            var f = aq(a, d, e);
            if (f.length === 1) return f[0].id;
            if (f.length !== 0) {
                f = bq(f, function(g) {
                    return g.lm
                }, b);
                if (f.length === 1) return f[0].id;
                f = bq(f, function(g) {
                    return g.on
                }, c);
                return f[0] ? f[0].id : void 0
            }
        }
    }

    function cq(a, b, c, d) {
        var e = Zp(),
            f = window;
        Wp(f) && (f.document.cookie = a);
        var g = Zp();
        return e !== g || c !== void 0 && Xp(b, g, !1, d).indexOf(c) >= 0
    }

    function dq(a, b, c, d) {
        function e(w, x, y) {
            if (y == null) return delete k[x], w;
            k[x] = y;
            return w + "; " + x + "=" + y
        }

        function f(w, x) {
            if (x == null) return w;
            k[x] = !0;
            return w + "; " + x
        }
        if (!Yp(c.Jb)) return 2;
        var g;
        b == null ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = eq(b), g = a + "=" + b);
        var k = {};
        g = e(g, "path", c.path);
        var m;
        c.expires instanceof Date ? m = c.expires.toUTCString() : c.expires != null && (m = "" + c.expires);
        g = e(g, "expires", m);
        g = e(g, "max-age", c.fn);
        g = e(g, "samesite", c.yn);
        c.secure &&
            (g = f(g, "secure"));
        var n = c.domain;
        if (n && n.toLowerCase() === "auto") {
            for (var p = fq(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
                var v = p[t] !== "none" ? p[t] : void 0,
                    u = e(g, "domain", v);
                u = f(u, c.flags);
                try {
                    d && d(a, k)
                } catch (w) {
                    q = w;
                    continue
                }
                r = !0;
                if (!gq(v, c.path) && cq(u, a, b, c.Jb)) return 0
            }
            if (q && !r) throw q;
            return 1
        }
        n && n.toLowerCase() !== "none" && (g = e(g, "domain", n));
        g = f(g, c.flags);
        d && d(a, k);
        return gq(n, c.path) ? 1 : cq(g, a, b, c.Jb) ? 0 : 1
    }

    function hq(a, b, c) {
        c.path == null && (c.path = "/");
        c.domain || (c.domain = "auto");
        return dq(a, b, c)
    }

    function bq(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var k = a[g],
                m = b(k);
            m === c ? d.push(k) : f === void 0 || m < f ? (e = [k], f = m) : m === f && e.push(k)
        }
        return d.length > 0 ? d : e
    }

    function aq(a, b, c) {
        for (var d = [], e = Xp(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                k = g.shift();
            if (!b || !k || b.indexOf(k) !== -1) {
                var m = g.shift();
                if (m) {
                    var n = m.split("-");
                    d.push({
                        id: g.join("."),
                        lm: Number(n[0]) || 1,
                        on: Number(n[1]) || 1
                    })
                }
            }
        }
        return d
    }

    function eq(a) {
        a && a.length > 1200 && (a = a.substring(0, 1200));
        return a
    }
    var iq = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        jq = /(^|\.)doubleclick\.net$/i;

    function gq(a, b) {
        return a !== void 0 && (jq.test(window.document.location.hostname) || b === "/" && iq.test(a))
    }

    function kq(a) {
        if (!a) return 1;
        var b = a;
        ji(7) && a === "none" && (b = window.document.location.hostname);
        b = b.indexOf(".") === 0 ? b.substring(1) : b;
        return b.split(".").length
    }

    function lq(a) {
        if (!a || a === "/") return 1;
        a[0] !== "/" && (a = "/" + a);
        a[a.length - 1] !== "/" && (a += "/");
        return a.split("/").length - 1
    }

    function mq(a, b) {
        var c = "" + kq(a),
            d = lq(b);
        d > 1 && (c += "-" + d);
        return c
    }
    var Zp = function() {
            return Wp(window) ? window.document.cookie : ""
        },
        Yp = function(a) {
            return a && ji(8) ? (Array.isArray(a) ? a : [a]).every(function(b) {
                return zl(b) && wl(b)
            }) : !0
        },
        fq = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (b.length === 4) {
                var c = b[b.length - 1];
                if (Number(c).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; d >= 0; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            jq.test(e) || iq.test(e) || a.push("none");
            return a
        };

    function nq(a) {
        var b = Math.round(Math.random() * 2147483647);
        return a ? String(b ^ Vp(a) & 2147483647) : String(b)
    }

    function oq(a) {
        return [nq(a), Math.round(ob() / 1E3)].join(".")
    }

    function pq(a, b, c, d, e) {
        var f = kq(b);
        return $p(a, f, lq(c), d, e)
    }

    function qq(a, b, c, d) {
        return [b, mq(c, d), a].join(".")
    };

    function rq(a, b, c, d) {
        var e, f = Number(a.Ib != null ? a.Ib : void 0);
        f !== 0 && (e = new Date((b || ob()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            Jb: d
        }
    };
    var sq = ["ad_storage", "ad_user_data"];

    function tq(a, b) {
        if (!a) return 10;
        if (b === null || b === void 0 || b === "") return 11;
        var c = uq(!1);
        if (c.error !== 0) return c.error;
        if (!c.value) return 2;
        c.value[a] = b;
        return vq(c)
    }

    function wq(a) {
        if (!a) return {
            error: 10
        };
        var b = uq();
        if (b.error !== 0) return b;
        if (!b.value) return {
            error: 2
        };
        if (!(a in b.value)) return {
            value: void 0,
            error: 15
        };
        var c = b.value[a];
        return c === null || c === void 0 || c === "" ? {
            value: void 0,
            error: 11
        } : {
            value: c,
            error: 0
        }
    }

    function uq(a) {
        a = a === void 0 ? !0 : a;
        if (!wl(sq)) return {
            error: 3
        };
        try {
            if (!B.localStorage) return {
                error: 1
            }
        } catch (f) {
            return {
                error: 14
            }
        }
        var b = {
                schema: "gcl",
                version: 1
            },
            c = void 0;
        try {
            c = B.localStorage.getItem("_gcl_ls")
        } catch (f) {
            return {
                error: 13
            }
        }
        try {
            if (c) {
                var d = JSON.parse(c);
                if (d && typeof d === "object") b = d;
                else return {
                    error: 12
                }
            }
        } catch (f) {
            return {
                error: 8
            }
        }
        if (b.schema !== "gcl") return {
            error: 4
        };
        if (b.version !== 1) return {
            error: 5
        };
        try {
            var e = xq(b);
            a && e && vq({
                value: b,
                error: 0
            })
        } catch (f) {
            return {
                error: 8
            }
        }
        return {
            value: b,
            error: 0
        }
    }

    function xq(a) {
        if (!a || typeof a !== "object") return !1;
        if ("expires" in a && "value" in a) {
            var b;
            typeof a.expires === "number" ? b = a.expires : b = typeof a.expires === "string" ? Number(a.expires) : NaN;
            if (isNaN(b) || !(Date.now() <= b)) return a.value = null, a.error = 9, !0
        } else {
            for (var c = !1, d = l(Object.keys(a)), e = d.next(); !e.done; e = d.next()) c = xq(a[e.value]) || c;
            return c
        }
        return !1
    }

    function vq(a) {
        if (a.error) return a.error;
        if (!a.value) return 2;
        var b = a.value,
            c;
        try {
            c = JSON.stringify(b)
        } catch (d) {
            return 6
        }
        try {
            B.localStorage.setItem("_gcl_ls", c)
        } catch (d) {
            return 7
        }
        return 0
    };

    function yq() {
        if (!zq()) return -1;
        var a = Aq();
        return a !== -1 && Bq(a + 1) ? a + 1 : -1
    }

    function Aq() {
        if (!zq()) return -1;
        var a = wq("gcl_ctr");
        if (!a || a.error !== 0 || !a.value || typeof a.value !== "object") return -1;
        var b = a.value;
        try {
            if (!("value" in b && b.value) || typeof b.value !== "object") return -1;
            var c = b.value.value;
            return c == null || Number.isNaN(c) ? -1 : Number(c)
        } catch (d) {
            return -1
        }
    }

    function zq() {
        return wl(["ad_storage", "ad_user_data"]) ? ji(11) : !1
    }

    function Bq(a, b) {
        b = b || {};
        var c = ob();
        return tq("gcl_ctr", {
            value: {
                value: a,
                creationTimeMs: c
            },
            expires: Number(rq(b, c, !0).expires)
        }) === 0 ? !0 : !1
    };
    var Cq;

    function Dq() {
        function a(g) {
            c(g.target || g.srcElement || {})
        }

        function b(g) {
            d(g.target || g.srcElement || {})
        }
        var c = Eq,
            d = Fq,
            e = Gq();
        if (!e.init) {
            sc(F, "mousedown", a);
            sc(F, "keyup", a);
            sc(F, "submit", b);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function() {
                d(this);
                f.call(this)
            };
            e.init = !0
        }
    }

    function Hq(a, b, c, d, e) {
        var f = {
            callback: a,
            domains: b,
            fragment: c === 2,
            placement: c,
            forms: d,
            sameHost: e
        };
        Gq().decorators.push(f)
    }

    function Iq(a, b, c) {
        for (var d = Gq().decorators, e = {}, f = 0; f < d.length; ++f) {
            var g = d[f],
                k;
            if (k = !c || g.forms) a: {
                var m = g.domains,
                    n = a,
                    p = !!g.sameHost;
                if (m && (p || n !== F.location.hostname))
                    for (var q = 0; q < m.length; q++)
                        if (m[q] instanceof RegExp) {
                            if (m[q].test(n)) {
                                k = !0;
                                break a
                            }
                        } else if (n.indexOf(m[q]) >= 0 || p && m[q].indexOf(n) >= 0) {
                    k = !0;
                    break a
                }
                k = !1
            }
            if (k) {
                var r = g.placement;
                r === void 0 && (r = g.fragment ? 2 : 1);
                r === b && rb(e, g.callback())
            }
        }
        return e
    }

    function Gq() {
        var a = hc("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var Jq = /(.*?)\*(.*?)\*(.*)/,
        Kq = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Lq = /^(?:www\.|m\.|amp\.)+/,
        Mq = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Nq(a) {
        var b = Mq.exec(a);
        if (b) return {
            hi: b[1],
            query: b[2],
            fragment: b[3]
        }
    }

    function Oq(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }

    function Pq(a, b) {
        var c = [dc.userAgent, (new Date).getTimezoneOffset(), dc.userLanguage || dc.language, Math.floor(ob() / 60 / 1E3) - (b === void 0 ? 0 : b), a].join("*"),
            d;
        if (!(d = Cq)) {
            for (var e = Array(256), f = 0; f < 256; f++) {
                for (var g = f, k = 0; k < 8; k++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        Cq = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ Cq[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function Qq(a) {
        return function(b) {
            var c = Xj(B.location.href),
                d = c.search.replace("?", ""),
                e = Qj(d, "_gl", !1, !0) || "";
            b.query = Rq(e) || {};
            var f = Rj(c, "fragment"),
                g;
            var k = -1;
            if (tb(f, "_gl=")) k = 4;
            else {
                var m = f.indexOf("&_gl=");
                m > 0 && (k = m + 3 + 2)
            }
            if (k < 0) g = void 0;
            else {
                var n = f.indexOf("&", k);
                g = n < 0 ? f.substring(k) : f.substring(k, n)
            }
            b.fragment = Rq(g || "") || {};
            a && Sq(c, d, f)
        }
    }

    function Tq(a, b) {
        var c = Oq(a).exec(b),
            d = b;
        if (c) {
            var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }

    function Sq(a, b, c) {
        function d(g, k) {
            var m = Tq("_gl", g);
            m.length && (m = k + m);
            return m
        }
        if (cc && cc.replaceState) {
            var e = Oq("_gl");
            if (e.test(b) || e.test(c)) {
                var f = Rj(a, "path");
                b = d(b, "?");
                c = d(c, "#");
                cc.replaceState({}, "", "" + f + b + c)
            }
        }
    }

    function Uq(a, b) {
        var c = Qq(!!b),
            d = Gq();
        d.data || (d.data = {
            query: {},
            fragment: {}
        }, c(d.data));
        var e = {},
            f = d.data;
        f && (rb(e, f.query), a && rb(e, f.fragment));
        return e
    }
    var Rq = function(a) {
        try {
            var b = Vq(a, 3);
            if (b !== void 0) {
                for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                    var f = d[e],
                        g = Sa(d[e + 1]);
                    c[f] = g
                }
                Va("TAGGING", 6);
                return c
            }
        } catch (k) {
            Va("TAGGING", 8)
        }
    };

    function Vq(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; e < 3; ++e) {
                    var f = Jq.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && g[1] === "1") {
                var k = g[3],
                    m;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === Pq(k, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m) return k;
                Va("TAGGING", 7)
            }
        }
    }

    function Wq(a, b, c, d, e) {
        function f(p) {
            p = Tq(a, p);
            var q = p.charAt(p.length - 1);
            p && q !== "&" && (p += "&");
            return p + n
        }
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        var g = Nq(c);
        if (!g) return "";
        var k = g.query || "",
            m = g.fragment || "",
            n = a + "=" + b;
        d ? m.substring(1).length !== 0 && e || (m = "#" + f(m.substring(1))) : k = "?" + f(k.substring(1));
        return "" + g.hi + k + m
    }

    function Xq(a, b) {
        function c(n, p, q) {
            var r;
            a: {
                for (var t in n)
                    if (n.hasOwnProperty(t)) {
                        r = !0;
                        break a
                    }
                r = !1
            }
            if (r) {
                var v, u = [],
                    w;
                for (w in n)
                    if (n.hasOwnProperty(w)) {
                        var x = n[w];
                        x !== void 0 && x === x && x !== null && x.toString() !== "[object Object]" && (u.push(w), u.push(Ra(String(x))))
                    }
                var y = u.join("*");
                v = ["1", Pq(y), y].join("*");
                d ? (ji(3) || ji(1) || !p) && Yq("_gl", v, a, p, q) : Zq("_gl", v, a, p, q)
            }
        }
        var d = (a.tagName || "").toUpperCase() === "FORM",
            e = Iq(b, 1, d),
            f = Iq(b, 2, d),
            g = Iq(b, 4, d),
            k = Iq(b, 3, d);
        c(e, !1, !1);
        c(f, !0, !1);
        ji(1) && c(g, !0, !0);
        for (var m in k) k.hasOwnProperty(m) &&
            $q(m, k[m], a)
    }

    function $q(a, b, c) {
        c.tagName.toLowerCase() === "a" ? Zq(a, b, c) : c.tagName.toLowerCase() === "form" && Yq(a, b, c)
    }

    function Zq(a, b, c, d, e) {
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        var f;
        if (f = c.href) {
            var g;
            if (!(g = !ji(5) || d)) {
                var k = B.location.href,
                    m = Nq(c.href),
                    n = Nq(k);
                g = !(m && n && m.hi === n.hi && m.query === n.query && m.fragment)
            }
            f = g
        }
        if (f) {
            var p = Wq(a, b, c.href, d, e);
            Ub.test(p) && (c.href = p)
        }
    }

    function Yq(a, b, c, d, e) {
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        if (c && c.action) {
            var f = (c.method || "").toLowerCase();
            if (f !== "get" || d) {
                if (f === "get" || f === "post") {
                    var g = Wq(a, b, c.action, d, e);
                    Ub.test(g) && (c.action = g)
                }
            } else {
                for (var k = c.childNodes || [], m = !1, n = 0; n < k.length; n++) {
                    var p = k[n];
                    if (p.name === a) {
                        p.setAttribute("value", b);
                        m = !0;
                        break
                    }
                }
                if (!m) {
                    var q = F.createElement("input");
                    q.setAttribute("type", "hidden");
                    q.setAttribute("name", a);
                    q.setAttribute("value", b);
                    c.appendChild(q)
                }
            }
        }
    }

    function Eq(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && d > 0;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                f !== "http:" && f !== "https:" || Xq(e, e.hostname)
            }
        } catch (g) {}
    }

    function Fq(a) {
        try {
            if (a.action) {
                var b = Rj(Xj(a.action), "host");
                Xq(a, b)
            }
        } catch (c) {}
    }

    function ar(a, b, c, d) {
        Dq();
        var e = c === "fragment" ? 2 : 1;
        d = !!d;
        Hq(a, b, e, d, !1);
        e === 2 && Va("TAGGING", 23);
        d && Va("TAGGING", 24)
    }

    function br(a, b) {
        Dq();
        Hq(a, [Tj(B.location, "host", !0)], b, !0, !0)
    }

    function cr() {
        var a = F.location.hostname,
            b = Kq.exec(F.referrer);
        if (!b) return !1;
        var c = b[2],
            d = b[1],
            e = "";
        if (c) {
            var f = c.split("/"),
                g = f[1];
            e = g === "s" ? decodeURIComponent(f[2]) : decodeURIComponent(g)
        } else if (d) {
            if (d.indexOf("xn--") === 0) return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-")
        }
        var k = a.replace(Lq, ""),
            m = e.replace(Lq, "");
        return k === m || ub(k, "." + m)
    }

    function dr(a, b) {
        return a === !1 ? !1 : a || b || cr()
    };
    var er = ["1"],
        fr = {},
        gr = {};

    function hr(a, b) {
        b = b === void 0 ? !0 : b;
        var c = ir(a.prefix);
        if (fr[c]) jr(a);
        else if (kr(c, a.path, a.domain)) {
            var d = gr[ir(a.prefix)];
            b && lr(a, d ? d.id : void 0, d ? d.bi : void 0);
            jr(a)
        } else {
            var e = Yj("auiddc");
            if (e) Va("TAGGING", 17), fr[c] = e;
            else if (b) {
                var f = ir(a.prefix),
                    g = oq();
                mr(f, g, a);
                kr(c, a.path, a.domain);
                jr(a, !0)
            }
        }
    }

    function jr(a, b) {
        if ((b === void 0 ? 0 : b) && zq()) {
            var c = uq(!1);
            c.error === 0 && c.value && "gcl_ctr" in c.value && (delete c.value.gcl_ctr, vq(c))
        }
        wl(["ad_storage", "ad_user_data"]) && ji(10) && Aq() === -1 && Bq(0, a)
    }

    function lr(a, b, c) {
        var d = ir(a.prefix),
            e = fr[d];
        if (e) {
            var f = e.split(".");
            if (f.length === 2) {
                var g = Number(f[1]) || 0;
                if (g) {
                    var k = e;
                    b && (k = e + "." + b + "." + (c ? c : Math.floor(ob() / 1E3)));
                    mr(d, k, a, g * 1E3)
                }
            }
        }
    }

    function mr(a, b, c, d) {
        var e = qq(b, "1", c.domain, c.path),
            f = rq(c, d);
        f.Jb = nr();
        hq(a, e, f)
    }

    function kr(a, b, c) {
        var d = pq(a, b, c, er, nr());
        if (!d) return !1;
        or(a, d);
        return !0
    }

    function or(a, b) {
        var c = b.split(".");
        c.length === 5 ? (fr[a] = c.slice(0, 2).join("."), gr[a] = {
            id: c.slice(2, 4).join("."),
            bi: Number(c[4]) || 0
        }) : c.length === 3 ? gr[a] = {
            id: c.slice(0, 2).join("."),
            bi: Number(c[2]) || 0
        } : fr[a] = b
    }

    function ir(a) {
        return (a || "_gcl") + "_au"
    }

    function pr(a) {
        function b() {
            wl(c) && a()
        }
        var c = nr();
        Dl(function() {
            b();
            wl(c) || El(b, c)
        }, c)
    }

    function qr(a) {
        var b = Uq(!0),
            c = ir(a.prefix);
        pr(function() {
            var d = b[c];
            if (d) {
                or(c, d);
                var e = Number(fr[c].split(".")[1]) * 1E3;
                if (e) {
                    Va("TAGGING", 16);
                    var f = rq(a, e);
                    f.Jb = nr();
                    var g = qq(d, "1", a.domain, a.path);
                    hq(c, g, f)
                }
            }
        })
    }

    function rr(a, b, c, d, e) {
        e = e || {};
        var f = function() {
            var g = {},
                k = pq(a, e.path, e.domain, er, nr());
            k && (g[a] = k);
            return g
        };
        pr(function() {
            ar(f, b, c, d)
        })
    }

    function nr() {
        return ["ad_storage", "ad_user_data"]
    };
    var sr = {},
        tr = (sr.k = {
            Z: /^[\w-]+$/
        }, sr.b = {
            Z: /^[\w-]+$/,
            oi: !0
        }, sr.i = {
            Z: /^[1-9]\d*$/
        }, sr.u = {
            Z: /^[1-9]\d*$/
        }, sr);
    var ur = {},
        xr = (ur[5] = {
            Xk: {
                2: vr
            },
            Ih: ["k", "i", "b", "u"]
        }, ur[4] = {
            Xk: {
                2: vr,
                GCL: wr
            },
            Ih: ["k", "i", "b"]
        }, ur);

    function yr(a) {
        var b = xr[5];
        if (b) {
            var c = a.split(".")[0];
            if (c) {
                var d = b.Xk[c];
                if (d) return d(a, 5)
            }
        }
    }

    function vr(a, b) {
        var c = a.split(".");
        if (c.length === 3) {
            var d = {},
                e = xr[b];
            if (e) {
                for (var f = e.Ih, g = l(c[2].split("$")), k = g.next(); !k.done; k = g.next()) {
                    var m = k.value,
                        n = m[0];
                    if (f.indexOf(n) !== -1) try {
                        var p = decodeURIComponent(m.substring(1)),
                            q = tr[n];
                        q && (q.oi ? (d[n] = d[n] || [], d[n].push(p)) : d[n] = p)
                    } catch (r) {}
                }
                return d
            }
        }
    }

    function zr(a, b) {
        var c = xr[5];
        if (c) {
            for (var d = [], e = l(c.Ih), f = e.next(); !f.done; f = e.next()) {
                var g = f.value,
                    k = tr[g];
                if (k) {
                    var m = a[g];
                    if (m !== void 0)
                        if (k.oi && Array.isArray(m))
                            for (var n = l(m), p = n.next(); !p.done; p = n.next()) d.push(encodeURIComponent("" + g + p.value));
                        else d.push(encodeURIComponent("" + g + m))
                }
            }
            return ["2", b || "1", d.join("$")].join(".")
        }
    }

    function wr(a) {
        var b = a.split(".");
        b.shift();
        var c = b.shift(),
            d = b.shift(),
            e = {};
        return e.k = d, e.i = c, e.b = b, e
    };
    var Ar = new Map([
        [5, "ad_storage"],
        [4, ["ad_storage", "ad_user_data"]]
    ]);

    function Br(a) {
        if (xr[5]) {
            for (var b = [], c = Xp(a, void 0, void 0, Ar.get(5)), d = l(c), e = d.next(); !e.done; e = d.next()) {
                var f = yr(e.value);
                f && (Cr(f), b.push(f))
            }
            return b
        }
    }

    function Dr(a, b, c, d) {
        c = c || {};
        var e = mq(c.domain, c.path),
            f = zr(b, e);
        if (f) {
            var g = rq(c, d, void 0, Ar.get(5));
            hq(a, f, g)
        }
    }

    function Er(a, b) {
        var c = b.Z;
        return typeof c === "function" ? c(a) : c.test(a)
    }

    function Cr(a) {
        for (var b = l(Object.keys(a)), c = b.next(), d = {}; !c.done; d = {
                Se: void 0
            }, c = b.next()) {
            var e = c.value,
                f = a[e];
            d.Se = tr[e];
            d.Se ? d.Se.oi ? a[e] = Array.isArray(f) ? f.filter(function(g) {
                return function(k) {
                    return Er(k, g.Se)
                }
            }(d)) : void 0 : typeof f === "string" && Er(f, d.Se) || (a[e] = void 0) : a[e] = void 0
        }
    };

    function Fr(a) {
        for (var b = [], c = F.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                xi: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, k) {
            return k.timestamp - g.timestamp
        });
        return b
    }

    function Gr(a, b) {
        var c = Fr(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!(f[0] !== "1" || b && f.length < 3 || !b && f.length !== 3) && Number(f[1])) {
                d[c[e].xi] || (d[c[e].xi] = []);
                var g = {
                    version: f[0],
                    timestamp: Number(f[1]) * 1E3,
                    T: f[2]
                };
                b && f.length > 3 && (g.labels = f.slice(3));
                d[c[e].xi].push(g)
            }
        }
        return d
    };

    function Hr() {
        var a = String,
            b = B.location.hostname,
            c = B.location.pathname,
            d = b = Cb(b);
        d.split(".").length > 2 && (d = d.replace(/^(www[0-9]*|web|ftp|wap|home|m|w|amp|mobile)\./, ""));
        b = d;
        c = Cb(c);
        var e = c.split(";")[0];
        e = e.replace(/\/(ar|slp|web|index)?\/?$/, "");
        return a(Vp(("" + b + e).toLowerCase()))
    };
    var Ir = /^\w+$/,
        Jr = /^[\w-]+$/,
        Kr = {},
        Lr = (Kr.aw = "_aw", Kr.dc = "_dc", Kr.gf = "_gf", Kr.gp = "_gp", Kr.gs = "_gs", Kr.ha = "_ha", Kr.ag = "_ag", Kr.gb = "_gb", Kr);

    function Mr() {
        return ["ad_storage", "ad_user_data"]
    }

    function Nr(a) {
        return !ji(8) || wl(a)
    }

    function Or(a, b) {
        function c() {
            var d = Nr(b);
            d && a();
            return d
        }
        Dl(function() {
            c() || El(c, b)
        }, b)
    }

    function Pr(a) {
        return Qr(a).map(function(b) {
            return b.T
        })
    }

    function Rr(a) {
        return Sr(a).filter(function(b) {
            return b.T
        }).map(function(b) {
            return b.T
        })
    }

    function Sr(a) {
        var b = Tr(a.prefix),
            c = Ur("gb", b),
            d = Ur("ag", b);
        if (!d || !c) return [];
        var e = function(k) {
                return function(m) {
                    m.type = k;
                    return m
                }
            },
            f = Qr(c).map(e("gb")),
            g = Vr(d).map(e("ag"));
        return f.concat(g).sort(function(k, m) {
            return m.timestamp - k.timestamp
        })
    }

    function Wr(a, b, c, d, e, f) {
        var g = cb(a, function(k) {
            return k.T === c
        });
        g ? (g.timestamp < d && (g.timestamp = d, g.Qd = f), g.labels = Xr(g.labels || [], e || [])) : a.push({
            version: b,
            T: c,
            timestamp: d,
            labels: e,
            Qd: f
        })
    }

    function Vr(a) {
        for (var b = Br(a) || [], c = [], d = l(b), e = d.next(); !e.done; e = d.next()) {
            var f = e.value,
                g = f,
                k = g.k,
                m = g.b,
                n = Yr(f);
            if (n) {
                var p = void 0;
                ji(9) && (p = f.u);
                Wr(c, "2", k, n, m || [], p)
            }
        }
        return c.sort(function(q, r) {
            return r.timestamp - q.timestamp
        })
    }

    function Qr(a) {
        for (var b = [], c = Xp(a, F.cookie, void 0, Mr()), d = l(c), e = d.next(); !e.done; e = d.next()) {
            var f = Zr(e.value);
            if (f != null) {
                var g = f;
                Wr(b, g.version, g.T, g.timestamp, g.labels)
            }
        }
        b.sort(function(k, m) {
            return m.timestamp - k.timestamp
        });
        return $r(b)
    }

    function as(a, b) {
        for (var c = [], d = l(a), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            c.includes(f) || c.push(f)
        }
        for (var g = l(b), k = g.next(); !k.done; k = g.next()) {
            var m = k.value;
            c.includes(m) || c.push(m)
        }
        return c
    }

    function bs(a, b) {
        var c = cb(a, function(d) {
            return d.T === b.T
        });
        c ? (c.timestamp < b.timestamp && (c.timestamp = b.timestamp, c.Qd = b.Qd), c.Oa = c.Oa ? b.Oa ? c.timestamp < b.timestamp ? b.Oa : c.Oa : c.Oa || 0 : b.Oa || 0, c.labels = as(c.labels || [], b.labels || []), c.Vc = as(c.Vc || [], b.Vc || [])) : a.push(b)
    }

    function cs() {
        var a = wq("gclid");
        if (!a || a.error || !a.value || typeof a.value !== "object") return null;
        var b = a.value;
        try {
            if (!("value" in b && b.value) || typeof b.value !== "object") return null;
            var c = b.value,
                d = c.value;
            return d && d.match(Jr) ? {
                version: "",
                T: d,
                timestamp: Number(c.creationTimeMs) || 0,
                labels: [],
                Oa: c.linkDecorationSource || 0,
                Vc: [2]
            } : null
        } catch (e) {
            return null
        }
    }

    function ds(a) {
        for (var b = [], c = Xp(a, F.cookie, void 0, Mr()), d = l(c), e = d.next(); !e.done; e = d.next()) {
            var f = Zr(e.value);
            f != null && (f.Qd = void 0, f.Oa = 0, f.Vc = [1], bs(b, f))
        }
        var g = cs();
        g && (g.Qd = void 0, g.Oa = g.Oa || 0, g.Vc = g.Vc || [2], bs(b, g));
        b.sort(function(k, m) {
            return m.timestamp - k.timestamp
        });
        return $r(b)
    }

    function Xr(a, b) {
        if (!a.length) return b;
        if (!b.length) return a;
        var c = {};
        return a.concat(b).filter(function(d) {
            return c.hasOwnProperty(d) ? !1 : c[d] = !0
        })
    }

    function Tr(a) {
        return a && typeof a === "string" && a.match(Ir) ? a : "_gcl"
    }

    function es(a, b, c) {
        var d = Xj(a),
            e = Rj(d, "query", !1, void 0, "gclsrc"),
            f = {
                value: Rj(d, "query", !1, void 0, "gclid"),
                Oa: c ? 4 : 2
            };
        if (b && (!f.value || !e)) {
            var g = d.hash.replace("#", "");
            f.value || (f.value = Qj(g, "gclid", !1), f.Oa = 3);
            e || (e = Qj(g, "gclsrc", !1))
        }
        return !f.value || e !== void 0 && e !== "aw" && e !== "aw.ds" ? [] : [f]
    }

    function fs(a, b) {
        var c = Xj(a),
            d = Rj(c, "query", !1, void 0, "gclid"),
            e = Rj(c, "query", !1, void 0, "gclsrc"),
            f = Rj(c, "query", !1, void 0, "wbraid");
        f = Ab(f);
        var g = Rj(c, "query", !1, void 0, "gbraid"),
            k = Rj(c, "query", !1, void 0, "gad_source"),
            m = Rj(c, "query", !1, void 0, "dclid");
        if (b && !(d && e && f && g)) {
            var n = c.hash.replace("#", "");
            d = d || Qj(n, "gclid", !1);
            e = e || Qj(n, "gclsrc", !1);
            f = f || Qj(n, "wbraid", !1);
            g = g || Qj(n, "gbraid", !1);
            k = k || Qj(n, "gad_source", !1)
        }
        return gs(d, e, m, f, g, k)
    }

    function hs() {
        return fs(B.location.href, !0)
    }

    function gs(a, b, c, d, e, f) {
        var g = {},
            k = function(m, n) {
                g[n] || (g[n] = []);
                g[n].push(m)
            };
        g.gclid = a;
        g.gclsrc = b;
        g.dclid = c;
        if (a !== void 0 && a.match(Jr)) switch (b) {
            case void 0:
                k(a, "aw");
                break;
            case "aw.ds":
                k(a, "aw");
                k(a, "dc");
                break;
            case "ds":
                k(a, "dc");
                break;
            case "3p.ds":
                k(a, "dc");
                break;
            case "gf":
                k(a, "gf");
                break;
            case "ha":
                k(a, "ha")
        }
        c && k(c, "dc");
        d !== void 0 && Jr.test(d) && (g.wbraid = d, k(d, "gb"));
        e !== void 0 && Jr.test(e) && (g.gbraid = e, k(e, "ag"));
        f !== void 0 && Jr.test(f) && (g.gad_source = f, k(f, "gs"));
        return g
    }

    function is(a) {
        for (var b = hs(), c = !0, d = l(Object.keys(b)), e = d.next(); !e.done; e = d.next())
            if (b[e.value] !== void 0) {
                c = !1;
                break
            }
        c && (b = fs(B.document.referrer, !1), b.gad_source = void 0);
        js(b, !1, a)
    }

    function ks(a) {
        is(a);
        var b = es(B.location.href, !0, !1);
        b.length || (b = es(B.document.referrer, !1, !0));
        if (b.length) {
            var c = b[0];
            a = a || {};
            var d = ob(),
                e = rq(a, d, !0),
                f = Mr(),
                g = function() {
                    Nr(f) && e.expires !== void 0 && tq("gclid", {
                        value: {
                            value: c.value,
                            creationTimeMs: d,
                            linkDecorationSource: c.Oa
                        },
                        expires: Number(e.expires)
                    })
                };
            Dl(function() {
                g();
                Nr(f) || El(g, f)
            }, f)
        }
    }

    function js(a, b, c, d, e) {
        c = c || {};
        e = e || [];
        var f = Tr(c.prefix),
            g = d || ob(),
            k = Math.round(g / 1E3),
            m = Mr(),
            n = !1,
            p = !1,
            q = function() {
                if (Nr(m)) {
                    var r = rq(c, g, !0);
                    r.Jb = m;
                    for (var t = function(H, O) {
                            var K = Ur(H, f);
                            K && (hq(K, O, r), H !== "gb" && (n = !0))
                        }, v = function(H) {
                            var O = ["GCL", k, H];
                            e.length > 0 && O.push(e.join("."));
                            return O.join(".")
                        }, u = l(["aw", "dc", "gf", "ha", "gp"]), w = u.next(); !w.done; w = u.next()) {
                        var x = w.value;
                        a[x] && t(x, v(a[x][0]))
                    }
                    if (!n && a.gb) {
                        var y = a.gb[0],
                            A = Ur("gb", f);
                        !b && Qr(A).some(function(H) {
                            return H.T === y && H.labels && H.labels.length >
                                0
                        }) || t("gb", v(y))
                    }
                }
                if (!p && a.gbraid && Nr("ad_storage") && (p = !0, !n)) {
                    var C = a.gbraid,
                        D = Ur("ag", f);
                    if (b || !Vr(D).some(function(H) {
                            return H.T === C && H.labels && H.labels.length > 0
                        })) {
                        var E = {},
                            I = (E.k = C, E.i = "" + k, E.b = e, E);
                        Dr(D, I, c, g)
                    }
                }
                ls(a, f, g, c)
            };
        Dl(function() {
            q();
            Nr(m) || El(q, m)
        }, m)
    }

    function ls(a, b, c, d) {
        if (a.gad_source !== void 0 && Nr("ad_storage")) {
            if (ji(4)) {
                var e = Fc();
                if (e === "r" || e === "h") return
            }
            var f = a.gad_source,
                g = Ur("gs", b);
            if (g) {
                var k = Math.floor((ob() - (Ec() || 0)) / 1E3),
                    m;
                if (ji(9)) {
                    var n = Hr(),
                        p = {};
                    m = (p.k = f, p.i = "" + k, p.u = n, p)
                } else {
                    var q = {};
                    m = (q.k = f, q.i = "" + k, q)
                }
                Dr(g, m, d, c)
            }
        }
    }

    function ms(a, b) {
        var c = Uq(!0);
        Or(function() {
            for (var d = Tr(b.prefix), e = 0; e < a.length; ++e) {
                var f = a[e];
                if (Lr[f] !== void 0) {
                    var g = Ur(f, d),
                        k = c[g];
                    if (k) {
                        var m = Math.min(ns(k), ob()),
                            n;
                        b: {
                            for (var p = m, q = Xp(g, F.cookie, void 0, Mr()), r = 0; r < q.length; ++r)
                                if (ns(q[r]) > p) {
                                    n = !0;
                                    break b
                                }
                            n = !1
                        }
                        if (!n) {
                            var t = rq(b, m, !0);
                            t.Jb = Mr();
                            hq(g, k, t)
                        }
                    }
                }
            }
            js(gs(c.gclid, c.gclsrc), !1, b)
        }, Mr())
    }

    function os(a) {
        var b = ["ag"],
            c = Uq(!0),
            d = Tr(a.prefix);
        Or(function() {
            for (var e = 0; e < b.length; ++e) {
                var f = Ur(b[e], d);
                if (f) {
                    var g = c[f];
                    if (g) {
                        var k = yr(g);
                        if (k) {
                            var m = Yr(k);
                            m || (m = ob());
                            var n;
                            a: {
                                for (var p = m, q = Br(f), r = 0; r < q.length; ++r)
                                    if (Yr(q[r]) > p) {
                                        n = !0;
                                        break a
                                    }
                                n = !1
                            }
                            if (n) break;
                            k.i = "" + Math.round(m / 1E3);
                            Dr(f, k, a, m)
                        }
                    }
                }
            }
        }, ["ad_storage"])
    }

    function Ur(a, b) {
        var c = Lr[a];
        if (c !== void 0) return b + c
    }

    function ns(a) {
        return ps(a.split(".")).length !== 0 ? (Number(a.split(".")[1]) || 0) * 1E3 : 0
    }

    function Yr(a) {
        return a ? (Number(a.i) || 0) * 1E3 : 0
    }

    function Zr(a) {
        var b = ps(a.split("."));
        return b.length === 0 ? null : {
            version: b[0],
            T: b[2],
            timestamp: (Number(b[1]) || 0) * 1E3,
            labels: b.slice(3)
        }
    }

    function ps(a) {
        return a.length < 3 || a[0] !== "GCL" && a[0] !== "1" || !/^\d+$/.test(a[1]) || !Jr.test(a[2]) ? [] : a
    }

    function qs(a, b, c, d, e) {
        if (Array.isArray(b) && Wp(B)) {
            var f = Tr(e),
                g = function() {
                    for (var k = {}, m = 0; m < a.length; ++m) {
                        var n = Ur(a[m], f);
                        if (n) {
                            var p = Xp(n, F.cookie, void 0, Mr());
                            p.length && (k[n] = p.sort()[p.length - 1])
                        }
                    }
                    return k
                };
            Or(function() {
                ar(g, b, c, d)
            }, Mr())
        }
    }

    function rs(a, b, c, d) {
        if (Array.isArray(a) && Wp(B)) {
            var e = ["ag"],
                f = Tr(d),
                g = function() {
                    for (var k = {}, m = 0; m < e.length; ++m) {
                        var n = Ur(e[m], f);
                        if (!n) return {};
                        var p = Br(n);
                        if (p.length) {
                            var q = p.sort(function(r, t) {
                                return Yr(t) - Yr(r)
                            })[0];
                            k[n] = zr(q)
                        }
                    }
                    return k
                };
            Or(function() {
                ar(g, a, b, c)
            }, ["ad_storage"])
        }
    }

    function $r(a) {
        return a.filter(function(b) {
            return Jr.test(b.T)
        })
    }

    function ss(a, b) {
        if (Wp(B)) {
            for (var c = Tr(b.prefix), d = {}, e = 0; e < a.length; e++) Lr[a[e]] && (d[a[e]] = Lr[a[e]]);
            Or(function() {
                hb(d, function(f, g) {
                    var k = Xp(c + g, F.cookie, void 0, Mr());
                    k.sort(function(t, v) {
                        return ns(v) - ns(t)
                    });
                    if (k.length) {
                        var m = k[0],
                            n = ns(m),
                            p = ps(m.split(".")).length !== 0 ? m.split(".").slice(3) : [],
                            q = {},
                            r;
                        r = ps(m.split(".")).length !== 0 ? m.split(".")[2] : void 0;
                        q[f] = [r];
                        js(q, !0, b, n, p)
                    }
                })
            }, Mr())
        }
    }

    function ts(a) {
        var b = ["ag"],
            c = ["gbraid"];
        Or(function() {
            for (var d = Tr(a.prefix), e = 0; e < b.length; ++e) {
                var f = Ur(b[e], d);
                if (!f) break;
                var g = Br(f);
                if (g.length) {
                    var k = g.sort(function(q, r) {
                            return Yr(r) - Yr(q)
                        })[0],
                        m = Yr(k),
                        n = k.b,
                        p = {};
                    p[c[e]] = k.k;
                    js(p, !0, a, m, n)
                }
            }
        }, ["ad_storage"])
    }

    function us(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }

    function vs(a) {
        function b(k, m, n) {
            n && (k[m] = n)
        }
        if (Al()) {
            var c = hs(),
                d;
            a.includes("gad_source") && (d = c.gad_source !== void 0 ? c.gad_source : Uq(!1)._gs);
            if (us(c, a) || d) {
                var e = {};
                b(e, "gclid", c.gclid);
                b(e, "dclid", c.dclid);
                b(e, "gclsrc", c.gclsrc);
                b(e, "wbraid", c.wbraid);
                b(e, "gbraid", c.gbraid);
                br(function() {
                    return e
                }, 3);
                var f = {},
                    g = (f._up = "1", f);
                b(g, "_gs", d);
                br(function() {
                    return g
                }, 1)
            }
        }
    }

    function ws(a) {
        if (!ji(1)) return null;
        var b = Uq(!0).gad_source;
        if (b != null) return B.location.hash = "", b;
        if (ji(2)) {
            var c = Xj(B.location.href);
            b = Rj(c, "query", !1, void 0, "gad_source");
            if (b != null) return b;
            var d = hs();
            if (us(d, a)) return "0"
        }
        return null
    }

    function xs(a) {
        var b = ws(a);
        b != null && br(function() {
            var c = {};
            return c.gad_source = b, c
        }, 4)
    }

    function ys(a, b, c) {
        var d = [];
        if (b.length === 0) return d;
        for (var e = {}, f = 0; f < b.length; f++) {
            var g = b[f],
                k = g.type ? g.type : "gcl";
            (g.labels || []).indexOf(c) === -1 ? (a.push(0), e[k] || d.push(g)) : a.push(1);
            e[k] = !0
        }
        return d
    }

    function zs(a, b, c, d) {
        var e = [];
        c = c || {};
        if (!Nr(Mr())) return e;
        var f = Qr(a),
            g = ys(e, f, b);
        if (g.length && !d)
            for (var k = l(g), m = k.next(); !m.done; m = k.next()) {
                var n = m.value,
                    p = n.timestamp,
                    q = [n.version, Math.round(p / 1E3), n.T].concat(n.labels || [], [b]).join("."),
                    r = rq(c, p, !0);
                r.Jb = Mr();
                hq(a, q, r)
            }
        return e
    }

    function As(a, b) {
        var c = [];
        b = b || {};
        var d = Sr(b),
            e = ys(c, d, a);
        if (e.length)
            for (var f = l(e), g = f.next(); !g.done; g = f.next()) {
                var k = g.value,
                    m = Tr(b.prefix),
                    n = Ur(k.type, m);
                if (!n) break;
                var p = k,
                    q = p.version,
                    r = p.T,
                    t = p.labels,
                    v = p.timestamp,
                    u = Math.round(v / 1E3);
                if (k.type === "ag") {
                    var w = {},
                        x = (w.k = r, w.i = "" + u, w.b = (t || []).concat([a]), w);
                    Dr(n, x, b, v)
                } else if (k.type === "gb") {
                    var y = [q, u, r].concat(t || [], [a]).join("."),
                        A = rq(b, v, !0);
                    A.Jb = Mr();
                    hq(n, y, A)
                }
            }
        return c
    }

    function Bs(a, b) {
        var c = Tr(b),
            d = Ur(a, c);
        if (!d) return 0;
        var e;
        e = a === "ag" ? Vr(d) : Qr(d);
        for (var f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function Cs(a) {
        for (var b = 0, c = l(Object.keys(a)), d = c.next(); !d.done; d = c.next())
            for (var e = a[d.value], f = 0; f < e.length; f++) b = Math.max(b, Number(e[f].timestamp));
        return b
    }

    function Ds(a) {
        var b = Math.max(Bs("aw", a), Cs(Nr(Mr()) ? Gr() : {})),
            c = Math.max(Bs("gb", a), Cs(Nr(Mr()) ? Gr("_gac_gb", !0) : {}));
        c = Math.max(c, Bs("ag", a));
        return c > b
    };
    var Es = function(a, b) {
            b = b === void 0 ? !1 : b;
            var c = Km("ads_pageview", function() {
                return {}
            });
            if (c[a]) return !1;
            b || (c[a] = !0);
            return !0
        },
        Fs = function(a) {
            var b = Xj(a);
            return Bb("gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "), b, "0")
        },
        Ns = function(a, b, c, d, e) {
            var f = Tr(a.prefix);
            if (Es(f, !0)) {
                var g = hs(),
                    k = [],
                    m = g.gclid,
                    n = g.dclid,
                    p = g.gclsrc || "aw",
                    q = Gs(),
                    r = q.Ye,
                    t = q.sk;
                !m || p !== "aw.ds" && p !== "aw" && p !== "ds" && p !== "3p.ds" || k.push({
                    T: m,
                    Ze: p
                });
                n && k.push({
                    T: n,
                    Ze: "ds"
                });
                k.length === 2 && U(147);
                k.length === 0 &&
                    g.wbraid && k.push({
                        T: g.wbraid,
                        Ze: "gb"
                    });
                k.length === 0 && p === "aw.ds" && k.push({
                    T: "",
                    Ze: "aw.ds"
                });
                Hs(function() {
                    var v = W(Is());
                    if (v) {
                        hr(a);
                        var u = [],
                            w = v ? fr[ir(a.prefix)] : void 0;
                        w && u.push("auid=" + w);
                        if (W(Q.g.O)) {
                            e && u.push("userId=" + e);
                            var x = Um(Pm.zh);
                            if (x === void 0) Tm(Pm.Ah, !0);
                            else {
                                var y = Um(Pm.Le);
                                u.push("ga_uid=" + y + "." + x)
                            }
                        }
                        var A = F.referrer ? Rj(Xj(F.referrer), "host") : "",
                            C = v || !d ? k : [];
                        C.length === 0 && (Js.test(A) || Ks.test(A)) && C.push({
                            T: "",
                            Ze: ""
                        });
                        if (C.length !== 0 || r !== void 0) {
                            A && u.push("ref=" + encodeURIComponent(A));
                            var D = Ls();
                            u.push("url=" + encodeURIComponent(D));
                            u.push("tft=" + ob());
                            var E = Ec();
                            E !== void 0 && u.push("tfd=" + Math.round(E));
                            var I = ap(!0);
                            u.push("frm=" + I);
                            r !== void 0 && u.push("gad_source=" + encodeURIComponent(r));
                            t !== void 0 && u.push("gad_source_src=" + encodeURIComponent(t.toString()));
                            if (!c) {
                                var H = {};
                                c = Hn(xn(new wn(0), (H[Q.g.la] = mo.j[Q.g.la], H)))
                            }
                            u.push("gtm=" + Up({
                                za: b
                            }));
                            Hp() && u.push("gcs=" + Ip());
                            u.push("gcd=" + Mp(c));
                            Pp() && u.push("dma_cps=" + Np());
                            u.push("dma=" + Op());
                            Gp(c) ? u.push("npa=0") : u.push("npa=1");
                            Rp() && u.push("_ng=1");
                            kp(tp()) && u.push("tcfd=" + Qp());
                            var O = Ap();
                            O && u.push("gdpr=" + O);
                            var K = zp();
                            K && u.push("gdpr_consent=" + K);
                            T(25) && u.push("apve=0");
                            T(121) && Uq(!1)._up && u.push("gtm_up=1");
                            vj() && u.push("tag_exp=" + vj());
                            if (C.length > 0)
                                for (var Z = 0; Z < C.length; Z++) {
                                    var ca = C[Z],
                                        ba = ca.T,
                                        aa = ca.Ze;
                                    if (!Ms(a.prefix, aa + "." + ba, w !== void 0)) {
                                        var P = 'https://adservice.google.com/pagead/regclk?' + u.join("&");
                                        ba !== "" ? P = aa === "gb" ? P + "&wbraid=" + ba : P + "&gclid=" + ba + "&gclsrc=" + aa : aa === "aw.ds" && (P += "&gclsrc=aw.ds");
                                        yc(P)
                                    }
                                } else if (r !==
                                    void 0 && !Ms(a.prefix, "gad", w !== void 0)) {
                                    var ma = 'https://adservice.google.com/pagead/regclk?' + u.join("&");
                                    yc(ma)
                                }
                        }
                    }
                })
            }
        },
        Ms = function(a, b, c) {
            var d = Km("joined_auid", function() {
                    return {}
                }),
                e = (c ? a || "_gcl" : "") + "." + b;
            if (d[e]) return !0;
            d[e] = !0;
            return !1
        },
        Gs = function() {
            var a = Xj(B.location.href),
                b = void 0,
                c = void 0,
                d = Rj(a, "query", !1, void 0, "gad_source"),
                e, f = a.hash.replace("#", "").match(Os);
            e = f ? f[1] : void 0;
            d && e ? (b = d, c = 1) : d ? (b = d, c = 2) : e && (b = e, c = 3);
            return {
                Ye: b,
                sk: c
            }
        },
        Ls = function() {
            var a = ap(!1) === 1 ? B.top.location.href : B.location.href;
            return a = a.replace(/[\?#].*$/, "")
        },
        Ps = function(a) {
            var b = [];
            hb(a, function(c, d) {
                d = $r(d);
                for (var e = [], f = 0; f < d.length; f++) e.push(d[f].T);
                e.length && b.push(c + ":" + e.join(","))
            });
            return b.join(";")
        },
        Rs = function(a, b) {
            return Qs("dc", a, b)
        },
        Ss = function(a, b) {
            return Qs("aw", a, b)
        },
        Qs = function(a, b, c) {
            if (a === "aw" || a === "dc" || a === "gb") {
                var d = Yj("gcl" + a);
                if (d) return d.split(".")
            }
            var e = Tr(b);
            if (e === "_gcl") {
                var f = !W(Is()) && c,
                    g;
                g = hs()[a] || [];
                if (g.length > 0) return f ? ["0"] : g
            }
            var k = Ur(a, e);
            return k ? Pr(k) : []
        },
        Hs = function(a) {
            var b =
                Is();
            Cm(function() {
                a();
                W(b) || El(a, b)
            }, b)
        },
        Is = function() {
            return [Q.g.N, Q.g.O]
        },
        Js = /^(?:www\.)?google(?:\.com?)?(?:\.[a-z]{2}t?)?$/,
        Ks = /^www\.googleadservices\.com$/,
        Os = /^gad_source[_=](\d+)$/;

    function Ts() {
        return Km("dedupe_gclid", function() {
            return oq()
        })
    };
    var Us = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
        Vs = /^www.googleadservices.com$/;

    function Ws(a) {
        a || (a = Xs());
        return a.Ln ? !1 : a.Jm || a.Km || a.Nm || a.Lm || a.Ye || a.xm || a.Mm || a.Bm ? !0 : !1
    }

    function Xs() {
        var a = {},
            b = Uq(!0);
        a.Ln = !!b._up;
        var c = hs();
        a.Jm = c.aw !== void 0;
        a.Km = c.dc !== void 0;
        a.Nm = c.wbraid !== void 0;
        a.Lm = c.gbraid !== void 0;
        a.Mm = c.gclsrc === "aw.ds";
        a.Ye = Gs().Ye;
        var d = F.referrer ? Rj(Xj(F.referrer), "host") : "";
        a.Bm = Us.test(d);
        a.xm = Vs.test(d);
        return a
    };
    var Ys = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        Zs = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        $s = /^\d+\.fls\.doubleclick\.net$/,
        at = /;gac=([^;?]+)/,
        bt = /;gacgb=([^;?]+)/;

    function ct(a, b) {
        if ($s.test(F.location.host)) {
            var c = F.location.href.match(b);
            return c && c.length === 2 && c[1].match(Ys) ? decodeURIComponent(c[1]) : ""
        }
        for (var d = [], e = l(Object.keys(a)), f = e.next(); !f.done; f = e.next()) {
            for (var g = f.value, k = [], m = a[g], n = 0; n < m.length; n++) k.push(m[n].T);
            d.push(g + ":" + k.join(","))
        }
        return d.length > 0 ? d.join(";") : ""
    }

    function dt(a, b, c) {
        for (var d = Nr(Mr()) ? Gr("_gac_gb", !0) : {}, e = [], f = !1, g = l(Object.keys(d)), k = g.next(); !k.done; k = g.next()) {
            var m = k.value,
                n = zs("_gac_gb_" + m, a, b, c);
            f = f || n.length !== 0 && n.some(function(p) {
                return p === 1
            });
            e.push(m + ":" + n.join(","))
        }
        return {
            wm: f ? e.join(";") : "",
            vm: ct(d, bt)
        }
    }

    function et(a) {
        var b = F.location.href.match(new RegExp(";" + a + "=([^;?]+)"));
        return b && b.length === 2 && b[1].match(Zs) ? b[1] : void 0
    }

    function ft(a) {
        var b = ji(9),
            c = {},
            d, e, f;
        $s.test(F.location.host) && (d = et("gclgs"), e = et("gclst"), b && (f = et("gcllp")));
        if (d && e && (!b || f)) c.kg = d, c.mg = e, c.lg = f;
        else {
            var g = ob(),
                k = Vr((a || "_gcl") + "_gs"),
                m = k.map(function(q) {
                    return q.T
                }),
                n = k.map(function(q) {
                    return g - q.timestamp
                }),
                p = [];
            b && (p = k.map(function(q) {
                return q.Qd
            }));
            m.length > 0 && n.length > 0 && (!b || p.length > 0) && (c.kg = m.join("."), c.mg = n.join("."), b && p.length > 0 && (c.lg = p.join(".")))
        }
        return c
    }

    function gt(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        if ($s.test(F.location.host)) {
            var e = et(c);
            if (e) return [{
                T: e
            }]
        } else {
            if (b === "gclid") {
                var f = (a || "_gcl") + "_aw";
                return d ? ds(f) : Qr(f)
            }
            if (b === "wbraid") return Qr((a || "_gcl") + "_gb");
            if (b === "braids") return Sr({
                prefix: a
            })
        }
        return []
    }

    function ht(a) {
        return gt(a, "gclid", "gclaw").map(function(b) {
            return b.T
        }).join(".")
    }

    function it(a) {
        var b = gt(a, "gclid", "gclaw", !0),
            c = b.map(function(f) {
                return f.T
            }).join("."),
            d = b.map(function(f) {
                return f.Oa || 0
            }).join("."),
            e = b.map(function(f) {
                for (var g = 0, k = l(f.Vc || []), m = k.next(); !m.done; m = k.next()) {
                    var n = m.value;
                    n === 1 && (g |= 1);
                    n === 2 && (g |= 2)
                }
                return g.toString()
            }).join(".");
        return {
            T: c,
            tk: d,
            uk: e
        }
    }

    function jt(a) {
        return gt(a, "braids", "gclgb").map(function(b) {
            return b.T
        }).join(".")
    }

    function kt(a) {
        return $s.test(F.location.host) ? !(et("gclaw") || et("gac")) : Ds(a)
    }

    function lt(a, b, c) {
        var d;
        d = c ? As(a, b) : zs((b && b.prefix || "_gcl") + "_gb", a, b);
        return d.length === 0 || d.every(function(e) {
            return e === 0
        }) ? "" : d.join(".")
    };

    function mt() {
        var a = B.__uspapi;
        if ($a(a)) {
            var b = "";
            try {
                a("getUSPData", 1, function(c, d) {
                    if (d && c) {
                        var e = c.uspString;
                        e && RegExp("^[\\da-zA-Z-]{1,20}$").test(e) && (b = e)
                    }
                })
            } catch (c) {}
            return b
        }
    };
    var qt = function(a) {
            if (a.eventName === Q.g.ba && a.metadata.hit_type === "page_view")
                if (T(26)) {
                    var b = V(a.m, Q.g.fa) != null && V(a.m, Q.g.fa) !== !1 && !W([Q.g.N, Q.g.O]);
                    a.metadata.redact_click_ids = b;
                    var c = nt(a),
                        d = V(a.m, Q.g.sa) !== !1;
                    d || (a.j[Q.g.gj] = "1");
                    var e = Tr(c.prefix),
                        f = a.metadata.is_server_side_destination;
                    if (!a.metadata.consent_updated && !a.metadata.user_id_updated) {
                        var g = V(a.m, Q.g.eb),
                            k = V(a.m, Q.g.wa) || {};
                        ot({
                            Id: d,
                            Rd: k,
                            Wd: g,
                            wc: c
                        });
                        if (!f && !Es(e)) {
                            a.isAborted = !0;
                            return
                        }
                    }
                    if (f) a.isAborted = !0;
                    else {
                        a.j[Q.g.Dc] = Q.g.hc;
                        if (a.metadata.consent_updated) a.j[Q.g.Dc] = Q.g.kl, a.j[Q.g.bc] = "1";
                        else if (a.metadata.user_id_updated) a.j[Q.g.Dc] = Q.g.ql;
                        else {
                            var m = hs();
                            a.j[Q.g.de] = m.gclid;
                            a.j[Q.g.ne] = m.dclid;
                            a.j[Q.g.bj] = m.gclsrc;
                            a.j[Q.g.de] || a.j[Q.g.ne] || (a.j[Q.g.Bf] = m.wbraid, a.j[Q.g.Eg] = m.gbraid);
                            var n = Q.g.Ga,
                                p = F.referrer ? Rj(Xj(F.referrer), "host") : "";
                            a.j[n] = p;
                            var q = Q.g.oa,
                                r = Ls();
                            a.j[q] = r;
                            if (T(29) && gc) {
                                var t = Rj(Xj(gc), "host");
                                t && (a.j[Q.g.zj] = t)
                            }
                            var v = Gs(),
                                u = v.sk;
                            a.j[Q.g.Ui] = v.Ye;
                            a.j[Q.g.Vi] = u;
                            var w = Q.g.Qb,
                                x = ap(!0);
                            a.j[w] = x;
                            var y =
                                Xs();
                            Ws(y) && (a.j[Q.g.wd] = "1");
                            var A = Q.g.dj,
                                C = Ts();
                            a.j[A] = C;
                            Uq(!1)._up === "1" && (a.j[Q.g.tj] = "1")
                        }
                        Hl = !0;
                        a.j[Q.g.cb] = void 0;
                        a.j[Q.g.wb] = void 0;
                        var D = W([Q.g.N, Q.g.O]);
                        if (D) {
                            var E = Q.g.cb,
                                I = pt();
                            a.j[E] = I;
                            d && (hr(c), a.j[Q.g.wb] = fr[ir(c.prefix)])
                        }
                        a.j[Q.g.vb] = void 0;
                        a.j[Q.g.ab] = void 0;
                        if (!a.j[Q.g.de] && !a.j[Q.g.ne] && kt(e)) {
                            var H = Rr(c);
                            if (H.length > 0) {
                                var O = Q.g.vb,
                                    K = H.join(".");
                                a.j[O] = K
                            }
                        } else if (!a.j[Q.g.Bf] && D) {
                            var Z = Pr(e + "_aw");
                            if (Z.length > 0) {
                                var ca = Q.g.ab,
                                    ba = Z.join(".");
                                a.j[ca] = ba
                            }
                        }
                        if (T(32)) {
                            var aa = Q.g.uj,
                                P =
                                Fc();
                            a.j[aa] = P
                        }
                        a.m.isGtmEvent && (a.m.j[Q.g.la] = mo.j[Q.g.la]);
                        Gp(a.m) ? a.j[Q.g.Ub] = !1 : a.j[Q.g.Ub] = !0;
                        a.metadata.add_tag_timing = !0;
                        var ma = mt();
                        ma !== void 0 && (a.j[Q.g.Ed] = ma || "error");
                        var ia = Ap();
                        ia && (a.j[Q.g.mc] = ia);
                        var ja = zp();
                        ja && (a.j[Q.g.qc] = ja);
                        a.metadata.speculative = !1
                    }
                } else a.isAborted = !0
        },
        nt = function(a) {
            var b = {
                prefix: V(a.m, Q.g.kb) || V(a.m, Q.g.Fa),
                domain: V(a.m, Q.g.La),
                Ib: V(a.m, Q.g.Ma),
                flags: V(a.m, Q.g.Qa)
            };
            a.m.isGtmEvent && (b.path = V(a.m, Q.g.mb));
            return b
        },
        rt = function(a, b) {
            var c, d, e, f, g, k, m, n;
            c = a.Id;
            d = a.Rd;
            e = a.Wd;
            f = a.za;
            g = a.m;
            k = a.Td;
            m = a.ro;
            n = a.Tk;
            ot({
                Id: c,
                Rd: d,
                Wd: e,
                wc: b
            });
            c && m !== !0 && (n != null ? n = String(n) : n = void 0, Ns(b, f, g, k, n))
        },
        ot = function(a) {
            var b, c, d, e;
            b = a.Id;
            c = a.Rd;
            d = a.Wd;
            e = a.wc;
            b && (dr(c[Q.g.Ic], !!c[Q.g.U]) && (ms(st, e), os(e), qr(e)), T(111) && ap() !== 2 ? ks(e) : is(e), ss(st, e), ts(e));
            c[Q.g.U] && (qs(st, c[Q.g.U], c[Q.g.Sb], !!c[Q.g.zb], e.prefix), rs(c[Q.g.U], c[Q.g.Sb], !!c[Q.g.zb], e.prefix), rr(ir(e.prefix), c[Q.g.U], c[Q.g.Sb], !!c[Q.g.zb], e), rr("FPAU", c[Q.g.U], c[Q.g.Sb], !!c[Q.g.zb], e));
            d && (T(97) ? vs(tt) : vs(ut));
            xs(ut)
        },
        vt = function(a, b, c, d) {
            var e, f, g;
            e = a.Uk;
            f = a.callback;
            g = a.xk;
            if (typeof f === "function")
                if (e === Q.g.ab && g === void 0) {
                    var k = d(b.prefix, c);
                    k.length === 0 ? f(void 0) : k.length === 1 ? f(k[0]) : f(k)
                } else e === Q.g.wb ? (U(65), hr(b, !1), f(fr[ir(b.prefix)])) : f(g)
        },
        st = ["aw", "dc", "gb"],
        ut = ["aw", "dc", "gb", "ag"],
        tt = ["aw", "dc", "gb", "ag", "gad_source"];

    function wt(a) {
        var b = V(a.m, Q.g.Rb),
            c = V(a.m, Q.g.nc);
        b && !c ? (a.eventName !== Q.g.ba && a.eventName !== Q.g.Yc && U(131), a.isAborted = !0) : !b && c && (U(132), a.isAborted = !0)
    }

    function xt(a) {
        var b = W(Q.g.N) ? Jm.pscdl : "denied";
        b != null && (a.j[Q.g.Ef] = b)
    }

    function zt(a) {
        var b = ap(!0);
        a.j[Q.g.Qb] = b
    }

    function At(a) {
        Rp() && (a.j[Q.g.Gc] = 1)
    }

    function pt() {
        var a = F.title;
        if (a === void 0 || a === "") return "";
        var b = function(d) {
            try {
                return decodeURIComponent(d), !0
            } catch (e) {
                return !1
            }
        };
        a = encodeURIComponent(a);
        for (var c = 256; c > 0 && !b(a.substring(0, c));) c--;
        return decodeURIComponent(a.substring(0, c))
    }

    function Bt(a) {
        Ct(a, "ce", V(a.m, Q.g.Ma))
    }

    function Ct(a, b, c) {
        a.j[Q.g.Fd] || (a.j[Q.g.Fd] = {});
        a.j[Q.g.Fd][b] = c
    };
    var Dt = function(a) {
            var b = a && a[Q.g.Pg];
            return b && !!b[Q.g.cj]
        },
        Et = function(a) {
            if (a) switch (a._tag_mode) {
                case "CODE":
                    return "c";
                case "AUTO":
                    return "a";
                case "MANUAL":
                    return "m";
                default:
                    return "c"
            }
        };
    var Ft = function(a, b) {
            var c = a && !W([Q.g.N, Q.g.O]);
            return b && c ? "0" : b
        },
        It = function(a) {
            var b = a.wc === void 0 ? {} : a.wc,
                c = Tr(b.prefix);
            Es(c) && Cm(function() {
                function d(x, y, A) {
                    var C = W([Q.g.N, Q.g.O]),
                        D = m && C,
                        E = b.prefix || "_gcl",
                        I = Gt(),
                        H = (D ? E : "") + "." + (W(Q.g.N) ? 1 : 0) + "." + (W(Q.g.O) ? 1 : 0);
                    if (!I[H]) {
                        I[H] = !0;
                        var O = {},
                            K = function(ma, ia) {
                                if (ia || typeof ia === "number") O[ma] = ia.toString()
                            },
                            Z = "https://www.google.com";
                        Hp() && (K("gcs", Ip()), x && K("gcu", 1));
                        K("gcd", Mp(k));
                        vj() && K("tag_exp", vj());
                        if (Al()) {
                            K("rnd", Ts());
                            if ((!p || q && q !==
                                    "aw.ds") && C) {
                                var ca = Pr(E + "_aw");
                                K("gclaw", ca.join("."))
                            }
                            K("url", String(B.location).split(/[?#]/)[0]);
                            K("dclid", Ft(f, r));
                            C || (Z = "https://pagead2.googlesyndication.com")
                        }
                        Pp() && K("dma_cps", Np());
                        K("dma", Op());
                        K("npa", Gp(k) ? 0 : 1);
                        Rp() && K("_ng", 1);
                        kp(tp()) && K("tcfd", Qp());
                        K("gdpr_consent", zp() || "");
                        K("gdpr", Ap() || "");
                        Uq(!1)._up === "1" && K("gtm_up", 1);
                        K("gclid", Ft(f, p));
                        K("gclsrc", q);
                        if (!(O.hasOwnProperty("gclid") || O.hasOwnProperty("dclid") || O.hasOwnProperty("gclaw")) && (K("gbraid", Ft(f, t)), !O.hasOwnProperty("gbraid") &&
                                Al() && C)) {
                            var ba = Pr(E + "_gb");
                            ba.length > 0 && K("gclgb", ba.join("."))
                        }
                        K("gtm", Up({
                            za: k.eventMetadata.source_canonical_id,
                            gg: !g
                        }));
                        m && W(Q.g.N) && (hr(b || {}), D && K("auid", fr[ir(b.prefix)] || ""));
                        Ht || a.mk && K("did", a.mk);
                        a.Qh && K("gdid", a.Qh);
                        a.Oh && K("edid", a.Oh);
                        a.Uh !== void 0 && K("frm", a.Uh);
                        T(25) && K("apve", "0");
                        var aa = Object.keys(O).map(function(ma) {
                                return ma + "=" + encodeURIComponent(O[ma])
                            }),
                            P = Z + "/pagead/landing?" + aa.join("&");
                        yc(P);
                        u && g !== void 0 && mm({
                            targetId: g,
                            request: {
                                url: P,
                                parameterEncoding: 3,
                                endpoint: C ? 12 : 13
                            },
                            Ta: {
                                eventId: k.eventId,
                                priorityId: k.priorityId
                            },
                            hg: y === void 0 ? void 0 : {
                                eventId: y,
                                priorityId: A
                            }
                        })
                    }
                }
                var e = !!a.Jh,
                    f = !!a.Td,
                    g = a.targetId,
                    k = a.m,
                    m = a.og === void 0 ? !0 : a.og,
                    n = hs(),
                    p = n.gclid || "",
                    q = n.gclsrc,
                    r = n.dclid || "",
                    t = n.wbraid || "",
                    v = !e && ((!p || q && q !== "aw.ds" ? !1 : !0) || t),
                    u = Al();
                if (v || u)
                    if (u) {
                        var w = [Q.g.N, Q.g.O, Q.g.ra];
                        d();
                        (function() {
                            W(w) || Bm(function(x) {
                                d(!0, x.consentEventId, x.consentPriorityId)
                            }, w)
                        })()
                    } else d()
            }, [Q.g.N, Q.g.O, Q.g.ra])
        },
        Gt = function() {
            return Km("reported_gclid", function() {
                return {}
            })
        },
        Ht = !1;

    function Jt(a, b, c, d) {
        var e = oc(),
            f;
        if (e === 1) a: {
            var g = nj;g = g.toLowerCase();
            for (var k = "https://" + g, m = "http://" + g, n = 1, p = F.getElementsByTagName("script"), q = 0; q < p.length && q < 100; q++) {
                var r = p[q].src;
                if (r) {
                    r = r.toLowerCase();
                    if (r.indexOf(m) === 0) {
                        f = 3;
                        break a
                    }
                    n === 1 && r.indexOf(k) === 0 && (n = 2)
                }
            }
            f = n
        }
        else f = e;
        return (f === 2 || d || "http:" !== B.location.protocol ? a : b) + c
    };

    function Kt(a) {
        return typeof a !== "object" || a === null ? {} : a
    }

    function Lt(a) {
        return a === void 0 || a === null ? "" : typeof a === "object" ? a.toString() : String(a)
    }

    function Mt(a) {
        if (a !== void 0 && a !== null) return Lt(a)
    }

    function Nt(a) {
        return typeof a === "number" ? a : Mt(a)
    };
    var St = function(a, b) {
            if (a)
                if (Sp()) {} else if (a = z(a) ? an(Lk(a)) : an(Lk(a.id))) {
                var c = void 0,
                    d = !1,
                    e = V(b, Q.g.xj);
                if (e && Array.isArray(e)) {
                    c = [];
                    for (var f = 0; f < e.length; f++) {
                        var g = an(e[f]);
                        g && (c.push(g), (a.id === g.id || a.id === a.destinationId && a.destinationId === g.destinationId) && (d = !0))
                    }
                }
                if (!c || d) {
                    var k = V(b, Q.g.jh),
                        m;
                    if (k) {
                        m = Array.isArray(k) ? k : [k];
                        var n = V(b, Q.g.hh),
                            p = V(b, Q.g.ih),
                            q = V(b, Q.g.kh),
                            r = Mt(V(b, Q.g.wj)),
                            t = n || p,
                            v = 1;
                        a.prefix !==
                            "UA" || c || (v = 5);
                        for (var u = 0; u < m.length; u++)
                            if (u < v)
                                if (c) Ot(c, m[u], r, b, {
                                    Zb: t,
                                    options: q
                                });
                                else if (a.prefix === "AW" && a.ids[dn[2]]) T(153) ? Ot([a], m[u], r || "US", b, {
                            Zb: t,
                            options: q
                        }) : Pt(a.ids[dn[1]], a.ids[dn[2]], m[u], b, {
                            Zb: t,
                            options: q
                        });
                        else if (a.prefix === "UA")
                            if (T(153)) Ot([a], m[u], r || "US", b, {
                                Zb: t
                            });
                            else {
                                var w = a.destinationId,
                                    x = m[u],
                                    y = {
                                        Zb: t
                                    };
                                U(23);
                                if (x) {
                                    y = y || {};
                                    var A = Qt(Rt, y, w),
                                        C = {};
                                    y.Zb !== void 0 ? C.receiver = y.Zb : C.replace = x;
                                    C.ga_wpid = w;
                                    C.destination = x;
                                    A(2, nb(), C)
                                }
                            }
                    }
                }
            }
        },
        Ot = function(a, b, c, d, e) {
            U(21);
            if (b && c) {
                e =
                    e || {};
                for (var f = {
                        countryNameCode: c,
                        destinationNumber: b,
                        retrievalTime: nb()
                    }, g = 0; g < a.length; g++) {
                    var k = a[g];
                    Tt[k.id] || (k && k.prefix === "AW" && !f.adData && k.ids.length >= 2 ? (f.adData = {
                        ak: k.ids[dn[1]],
                        cl: k.ids[dn[2]]
                    }, Ut(f.adData, d), Tt[k.id] = !0) : k && k.prefix === "UA" && !f.gaData && (f.gaData = {
                        gaWpid: k.destinationId
                    }, Tt[k.id] = !0))
                }(f.gaData || f.adData) && Qt(Vt, e)(e.Zb, f, e.options)
            }
        },
        Pt = function(a, b, c, d, e) {
            U(22);
            if (c) {
                e = e || {};
                var f = Qt(Wt, e, a),
                    g = {
                        ak: a,
                        cl: b
                    };
                e.Zb === void 0 && (g.autoreplace = c);
                Ut(g, d);
                f(2, e.Zb, g, c, 0, nb(),
                    e.options)
            }
        },
        Ut = function(a, b) {
            T(7) && (a.dma = Op(), Pp() && (a.dmaCps = Np()), Gp(b) ? a.npa = "0" : a.npa = "1")
        },
        Qt = function(a, b, c) {
            if (B[a.functionName]) return b.gi && G(b.gi), B[a.functionName];
            var d = Xt();
            B[a.functionName] = d;
            if (a.additionalQueues)
                for (var e = 0; e < a.additionalQueues.length; e++) B[a.additionalQueues[e]] = B[a.additionalQueues[e]] || Xt();
            a.idKey && B[a.idKey] === void 0 && (B[a.idKey] = c);
            mc(Jt("https://", "http://", a.scriptUrl), b.gi, b.kn);
            return d
        },
        Xt = function() {
            function a() {
                a.q = a.q || [];
                a.q.push(arguments)
            }
            return a
        },
        Wt = {
            functionName: "_googWcmImpl",
            idKey: "_googWcmAk",
            scriptUrl: "www.gstatic.com/wcm/loader.js"
        },
        Rt = {
            functionName: "_gaPhoneImpl",
            idKey: "ga_wpid",
            scriptUrl: "www.gstatic.com/gaphone/loader.js"
        },
        Yt = {
            Yk: "9",
            Ql: "5"
        },
        Vt = {
            functionName: "_googCallTrackingImpl",
            additionalQueues: [Rt.functionName, Wt.functionName],
            scriptUrl: "www.gstatic.com/call-tracking/call-tracking_" + (Yt.Yk || Yt.Ql) + ".js"
        },
        Tt = {};

    function Zt(a) {
        return {
            getDestinationId: function() {
                return a.target.destinationId
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return a.j[b]
            },
            setHitData: function(b, c) {
                a.j[b] = c
            },
            setHitDataIfNotDefined: function(b, c) {
                a.j[b] === void 0 && (a.j[b] = c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                a.metadata[b] = c
            },
            isAborted: function() {
                return a.isAborted
            },
            abort: function() {
                a.isAborted = !0
            },
            getFromEventContext: function(b) {
                return V(a.m, b)
            },
            Wb: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.j)
            }
        }
    };
    var au = function(a) {
            var b = $t[T(136) && !wk ? Lk(a.target.destinationId) : a.target.destinationId];
            if (!a.isAborted && b)
                for (var c = Zt(a), d = 0; d < b.length; ++d) {
                    try {
                        b[d](c)
                    } catch (e) {
                        a.isAborted = !0
                    }
                    if (a.isAborted) break
                }
        },
        bu = function(a, b) {
            var c = $t[a];
            c || (c = $t[a] = []);
            c.push(b)
        },
        $t = {};
    var eu = function(a) {
            a = a || {};
            var b;
            if (W(cu)) {
                (b = du(a)) || (b = oq());
                var c = a,
                    d = ir(c.prefix);
                lr(c, b);
                delete fr[d];
                delete gr[d];
                kr(d, c.path, c.domain);
                return du(a)
            }
        },
        du = function(a) {
            if (W(cu)) {
                a = a || {};
                hr(a, !1);
                var b = gr[ir(Tr(a.prefix))];
                if (b && !(ob() - b.bi * 1E3 > 18E5)) {
                    var c = b.id,
                        d = c.split(".");
                    if (d.length === 2 && !(ob() - (Number(d[1]) || 0) * 1E3 > 864E5)) return c
                }
            }
        },
        cu = Q.g.N;

    function fu(a, b) {
        return arguments.length === 1 ? gu("set", a) : gu("set", a, b)
    }

    function hu(a, b) {
        return arguments.length === 1 ? gu("config", a) : gu("config", a, b)
    }

    function iu(a, b, c) {
        c = c || {};
        c[Q.g.oc] = a;
        return gu("event", b, c)
    }

    function gu() {
        return arguments
    };
    var ju = function() {
        var a = dc && dc.userAgent || "";
        if (a.indexOf("Safari") < 0 || /Chrome|Coast|Opera|Edg|Silk|Android/.test(a)) return !1;
        var b = (/Version\/([\d\.]+)/.exec(a) || [])[1] || "";
        if (b === "") return !1;
        for (var c = ["14", "1", "1"], d = b.split("."), e = 0; e < d.length; e++) {
            if (c[e] === void 0) return !0;
            if (d[e] !== c[e]) return Number(d[e]) > Number(c[e])
        }
        return d.length >= c.length
    };
    var ku = function() {
        this.messages = [];
        this.j = []
    };
    ku.prototype.enqueue = function(a, b, c) {
        var d = this.messages.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        var e = Object.assign({}, c, {
                eventId: b,
                priorityId: d,
                fromContainerExecution: !0
            }),
            f = {
                message: a,
                notBeforeEventId: b,
                priorityId: d,
                messageContext: e
            };
        this.messages.push(f);
        for (var g = 0; g < this.j.length; g++) try {
            this.j[g](f)
        } catch (k) {}
    };
    ku.prototype.listen = function(a) {
        this.j.push(a)
    };
    ku.prototype.get = function() {
        for (var a = {}, b = 0; b < this.messages.length; b++) {
            var c = this.messages[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    ku.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.messages.length; d++) {
            var e = this.messages[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.messages = c;
        return b
    };

    function lu(a, b, c) {
        c.eventMetadata = c.eventMetadata || {};
        c.eventMetadata.source_canonical_id = Pf.canonicalContainerId;
        mu().enqueue(a, b, c)
    }

    function nu() {
        var a = ou;
        mu().listen(a)
    }

    function mu() {
        return Km("mb", function() {
            return new ku
        })
    };

    function pu(a) {
        var b, c = B,
            d = [];
        try {
            c.navigation && c.navigation.entries && (d = c.navigation.entries())
        } catch (k) {}
        b = d;
        for (var e = b.length - 1; e >= 0; e--) {
            var f = b[e],
                g = f.url && f.url.match("[?&#]" + a + "=([^&#]+)");
            if (g && g.length === 2) return g[1]
        }
    };
    var qu, ru = !1;

    function su() {
        ru = !0;
        qu = qu || {}
    }

    function tu(a) {
        ru || su();
        return qu[a]
    }

    function uu() {
        var a = B.screen;
        return {
            width: a ? a.width : 0,
            height: a ? a.height : 0
        }
    }

    function vu(a) {
        if (F.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top === b.bottom || b.left === b.right || !B.getComputedStyle) return !0;
        var c = B.getComputedStyle(a, null);
        if (c.visibility === "hidden") return !0;
        for (var d = a, e = c; d;) {
            if (e.display === "none") return !0;
            var f = e.opacity,
                g = e.filter;
            if (g) {
                var k = g.indexOf("opacity(");
                k >= 0 && (g = g.substring(k + 8, g.indexOf(")", k)), g.charAt(g.length - 1) === "%" && (g = g.substring(0, g.length - 1)), f = String(Math.min(Number(g), Number(f))))
            }
            if (f !== void 0 && Number(f) <= 0) return !0;
            (d = d.parentElement) &&
            (e = B.getComputedStyle(d, null))
        }
        return !1
    }
    var xu = function(a) {
            var b = wu(),
                c = b.height,
                d = b.width,
                e = a.getBoundingClientRect(),
                f = e.bottom - e.top,
                g = e.right - e.left;
            return f && g ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) / g, 1)) * (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1)) : 0
        },
        wu = function() {
            var a = F.body,
                b = F.documentElement || a && a.parentElement,
                c, d;
            if (F.compatMode && F.compatMode !== "BackCompat") c = b ? b.clientHeight : 0, d = b ? b.clientWidth : 0;
            else {
                var e = function(f, g) {
                    return f && g ? Math.min(f, g) : Math.max(f, g)
                };
                c = e(b ? b.clientHeight : 0, a ?
                    a.clientHeight : 0);
                d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0)
            }
            return {
                width: d,
                height: c
            }
        };
    var Au = function(a) {
            if (yu) {
                if (a >= 0 && a < zu.length && zu[a]) {
                    var b;
                    (b = zu[a]) == null || b.disconnect();
                    zu[a] = void 0
                }
            } else B.clearInterval(a)
        },
        Du = function(a, b, c) {
            for (var d = 0; d < c.length; d++) c[d] > 1 ? c[d] = 1 : c[d] < 0 && (c[d] = 0);
            if (yu) {
                var e = !1;
                G(function() {
                    e || Bu(a, b, c)()
                });
                return Cu(function(f) {
                        e = !0;
                        for (var g = {
                                df: 0
                            }; g.df < f.length; g = {
                                df: g.df
                            }, g.df++) G(function(k) {
                            return function() {
                                a(f[k.df])
                            }
                        }(g))
                    },
                    b, c)
            }
            return B.setInterval(Bu(a, b, c), 1E3)
        },
        Bu = function(a, b, c) {
            function d(k, m) {
                var n = {
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        width: 0,
                        height: 0
                    },
                    p = {
                        boundingClientRect: k.getBoundingClientRect(),
                        intersectionRatio: m,
                        intersectionRect: n,
                        isIntersecting: m > 0,
                        rootBounds: n,
                        target: k,
                        time: ob()
                    };
                G(function() {
                    a(p)
                })
            }
            for (var e = [], f = [], g = 0; g < b.length; g++) e.push(0), f.push(-1);
            c.sort(function(k, m) {
                return k - m
            });
            return function() {
                for (var k = 0; k < b.length; k++) {
                    var m = xu(b[k]);
                    if (m > e[k])
                        for (; f[k] < c.length - 1 && m >= c[f[k] + 1];) d(b[k], m), f[k]++;
                    else if (m < e[k])
                        for (; f[k] >= 0 && m <= c[f[k]];) d(b[k], m), f[k]--;
                    e[k] = m
                }
            }
        },
        Cu = function(a, b, c) {
            for (var d = new B.IntersectionObserver(a, {
                    threshold: c
                }), e = 0; e < b.length; e++) d.observe(b[e]);
            for (var f = 0; f < zu.length; f++)
                if (!zu[f]) return zu[f] = d, f;
            return zu.push(d) - 1
        },
        zu = [],
        yu = !(!B.IntersectionObserver || !B.IntersectionObserverEntry);
    var Fu = function(a) {
            return a.tagName + ":" + a.isVisible + ":" + a.W.length + ":" + Eu.test(a.W)
        },
        Tu = function(a) {
            a = a || {
                Od: !0,
                Pd: !0,
                ug: void 0
            };
            a.Eb = a.Eb || {
                email: !0,
                phone: !1,
                address: !1
            };
            var b = Gu(a),
                c = Hu[b];
            if (c && ob() - c.timestamp < 200) return c.result;
            var d = Iu(),
                e = d.status,
                f = [],
                g, k, m = [];
            if (!T(34)) {
                if (a.Eb && a.Eb.email) {
                    var n = Ju(d.elements);
                    f = Ku(n, a && a.Te);
                    g = Lu(f);
                    n.length > 10 && (e = "3")
                }!a.ug && g && (f = [g]);
                for (var p = 0; p < f.length; p++) m.push(Mu(f[p], !!a.Od, !!a.Pd));
                m = m.slice(0, 10)
            } else if (a.Eb) {}
            g && (k = Mu(g, !!a.Od, !!a.Pd));
            var D = {
                elements: m,
                ki: k,
                status: e
            };
            Hu[b] = {
                timestamp: ob(),
                result: D
            };
            return D
        },
        Uu = function(a, b) {
            if (a) {
                var c = a.trim().replaceAll(/\s+/g, "").replaceAll(/(\d{2,})\./g, "$1").replaceAll(/-/g, "").replaceAll(/\((\d+)\)/g, "$1");
                if (b && c.match(/^\+?\d{3,7}$/)) return c;
                c.charAt(0) !== "+" && (c = "+" + c);
                if (c.match(/^\+\d{10,15}$/)) return c
            }
        },
        Wu = function(a) {
            var b = Vu(/^(\w|[- ])+$/)(a);
            if (!b) return b;
            var c = b.replaceAll(/[- ]+/g, "");
            return c.length > 10 ? void 0 : c
        },
        Vu = function(a) {
            return function(b) {
                var c = b.match(a);
                return c ? c[0].trim().toLowerCase() :
                    void 0
            }
        },
        Su = function(a, b, c) {
            var d = a.element,
                e = {
                    W: a.W,
                    type: a.ja,
                    tagName: d.tagName
                };
            b && (e.querySelector = Xu(d));
            c && (e.isVisible = !vu(d));
            return e
        },
        Mu = function(a, b, c) {
            return Su({
                element: a.element,
                W: a.W,
                ja: Ru.Mb
            }, b, c)
        },
        Gu = function(a) {
            var b = !(a == null || !a.Od) + "." + !(a == null || !a.Pd);
            a && a.Te && a.Te.length && (b += "." + a.Te.join("."));
            a && a.Eb && (b += "." + a.Eb.email + "." + a.Eb.phone + "." + a.Eb.address);
            return b
        },
        Lu = function(a) {
            if (a.length !== 0) {
                var b;
                b = Yu(a, function(c) {
                    return !Zu.test(c.W)
                });
                b = Yu(b, function(c) {
                    return c.element.tagName.toUpperCase() ===
                        "INPUT"
                });
                b = Yu(b, function(c) {
                    return !vu(c.element)
                });
                return b[0]
            }
        },
        Ku = function(a, b) {
            if (!b || b.length === 0) return a;
            for (var c = [], d = 0; d < a.length; d++) {
                for (var e = !0, f = 0; f < b.length; f++) {
                    var g = b[f];
                    if (g && $h(a[d].element, g)) {
                        e = !1;
                        break
                    }
                }
                e && c.push(a[d])
            }
            return c
        },
        Yu = function(a, b) {
            if (a.length <= 1) return a;
            var c = a.filter(b);
            return c.length === 0 ? a : c
        },
        Xu = function(a) {
            var b;
            if (a === F.body) b = "body";
            else {
                var c;
                if (a.id) c = "#" + a.id;
                else {
                    var d;
                    if (a.parentElement) {
                        var e;
                        a: {
                            var f = a.parentElement;
                            if (f) {
                                for (var g = 0; g < f.childElementCount; g++)
                                    if (f.children[g] ===
                                        a) {
                                        e = g + 1;
                                        break a
                                    }
                                e = -1
                            } else e = 1
                        }
                        d = Xu(a.parentElement) + ">:nth-child(" + e.toString() + ")"
                    } else d = "";
                    c = d
                }
                b = c
            }
            return b
        },
        Ju = function(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c],
                    e = d.textContent;
                d.tagName.toUpperCase() === "INPUT" && d.value && (e = d.value);
                if (e) {
                    var f = e.match($u);
                    if (f) {
                        var g = f[0],
                            k;
                        if (B.location) {
                            var m = Tj(B.location, "host", !0);
                            k = g.toLowerCase().indexOf(m) >= 0
                        } else k = !1;
                        k || b.push({
                            element: d,
                            W: g
                        })
                    }
                }
            }
            return b
        },
        Iu = function() {
            var a = [],
                b = F.body;
            if (!b) return {
                elements: a,
                status: "4"
            };
            for (var c = b.querySelectorAll("*"),
                    d = 0; d < c.length && d < 1E4; d++) {
                var e = c[d];
                if (!(av.indexOf(e.tagName.toUpperCase()) >= 0) && e.children instanceof HTMLCollection) {
                    for (var f = !1, g = 0; g < e.childElementCount && g < 1E4; g++)
                        if (!(bv.indexOf(e.children[g].tagName.toUpperCase()) >= 0)) {
                            f = !0;
                            break
                        }(!f || T(34) && cv.indexOf(e.tagName) !== -1) && a.push(e)
                }
            }
            return {
                elements: a,
                status: c.length > 1E4 ? "2" : "1"
            }
        },
        dv = !1;
    var $u = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
        Eu = /@(gmail|googlemail)\./i,
        Zu = /support|noreply/i,
        av = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
        bv = ["BR"],
        ev = gi('', 2),
        Ru = {
            Mb: "1",
            Mc: "2",
            Kc: "3",
            Lc: "4",
            ae: "5",
            Ie: "6",
            fg: "7",
            Ch: "8",
            wg: "9",
            wh: "10"
        },
        Hu = {},
        cv = ["INPUT", "SELECT"],
        fv = Vu(/^([^\x00-\x40\x5b-\x60\x7b-\xff]|[.-]|\s)+$/);
    var Lf;
    var Kv = Number('') || 5,
        Lv = Number('') || 50,
        Mv = db();
    var Ov = function(a, b) {
            a && (Nv("sid", a.targetId, b), Nv("cc", a.clientCount, b), Nv("tl", a.totalLifeMs, b), Nv("hc", a.heartbeatCount, b), Nv("cl", a.clientLifeMs, b))
        },
        Nv = function(a, b, c) {
            b != null && c.push(a + "=" + b)
        },
        Pv = function() {
            var a = F.referrer;
            if (a) {
                var b;
                return Rj(Xj(a), "host") === ((b = B.location) == null ? void 0 : b.host) ? 1 : 2
            }
            return 0
        },
        Qv = function(a) {
            this.P = a;
            this.H = 0
        };
    Qv.prototype.C = function(a, b, c, d) {
        var e = Pv(),
            f, g = [];
        f = B === B.top && e !== 0 && b ? (b == null ? void 0 : b.clientCount) >
            1 ? e === 2 ? 1 : 2 : e === 2 ? 0 : 3 : 4;
        a && Nv("si", a.ff, g);
        Nv("m", 0, g);
        Nv("iss", f, g);
        Nv("if", c, g);
        Ov(b, g);
        d && Nv("fm", encodeURIComponent(d.substring(0, Lv)), g);
        this.K(g);
    };
    Qv.prototype.j = function(a, b, c, d, e) {
        var f = [];
        Nv("m", 1, f);
        Nv("s", a, f);
        Nv("po", Pv(), f);
        b && (Nv("st", b.state, f), Nv("si", b.ff, f), Nv("sm", b.wf, f));
        Ov(c, f);
        Nv("c", d, f);
        e && Nv("fm", encodeURIComponent(e.substring(0, Lv)), f);
        this.K(f);
    };
    Qv.prototype.K = function(a) {
        a = a === void 0 ? [] : a;
        !lk || this.H >= Kv || (Nv("pid", Mv, a), Nv("bc", ++this.H, a), a.unshift("ctid=" + Pf.ctid + "&t=s"), this.P("https://www.googletagmanager.com/a?" + a.join("&")))
    };
    var Rv = {
        Tl: Number('') || 500,
        Gl: Number('') || 5E3,
        Pj: Number('20') || 10,
        bl: Number('') || 5E3
    };

    function Sv(a) {
        return a.performance && a.performance.now() || Date.now()
    }
    var Tv = function(a, b) {
        var c;
        var d = function(e, f, g) {
            g = g === void 0 ? {} : g;
            this.Ul = e;
            this.j = f;
            this.H = g;
            this.X = this.xa = this.heartbeatCount = this.Sl = 0;
            this.Qj = !1;
            this.C = {};
            this.id = String(Math.floor(Number.MAX_SAFE_INTEGER * Math.random()));
            this.state = 0;
            this.ff = Sv(this.j);
            this.wf = Sv(this.j);
            this.P = 10
        };
        d.prototype.init = function() {
            this.K(1);
            this.fb()
        };
        d.prototype.getState = function() {
            return {
                state: this.state,
                ff: Math.round(Sv(this.j) - this.ff),
                wf: Math.round(Sv(this.j) -
                    this.wf)
            }
        };
        d.prototype.K = function(e) {
            this.state !== e && (this.state = e, this.wf = Sv(this.j))
        };
        d.prototype.Tj = function() {
            return String(this.Sl++)
        };
        d.prototype.fb = function() {
            var e = this;
            this.heartbeatCount++;
            this.sc({
                type: 0,
                clientId: this.id,
                requestId: this.Tj(),
                maxDelay: this.Rj()
            }, function(f) {
                if (f.type === 0) {
                    var g;
                    if (((g = f.failure) == null ? void 0 : g.failureType) != null)
                        if (f.stats && (e.stats = f.stats), e.X++, f.isDead || e.X > Rv.Pj) {
                            var k = f.isDead && f.failure.failureType;
                            e.P = k || 10;
                            e.K(4);
                            e.Rl();
                            var m, n;
                            (n = (m = e.H).hn) == null ||
                                n.call(m, {
                                    failureType: k,
                                    data: f.failure.data
                                })
                        } else e.K(3), e.Vj();
                    else {
                        if (e.heartbeatCount > f.stats.heartbeatCount + Rv.Pj) {
                            e.heartbeatCount = f.stats.heartbeatCount;
                            var p, q;
                            (q = (p = e.H).onFailure) == null || q.call(p, {
                                failureType: 13
                            })
                        }
                        e.stats = f.stats;
                        var r = e.state;
                        e.K(2);
                        if (r !== 2)
                            if (e.Qj) {
                                var t, v;
                                (v = (t = e.H).vo) == null || v.call(t)
                            } else {
                                e.Qj = !0;
                                var u, w;
                                (w = (u = e.H).jn) == null || w.call(u)
                            }
                        e.X = 0;
                        e.Wl();
                        e.Vj()
                    }
                }
            })
        };
        d.prototype.Rj = function() {
            return this.state === 2 ? Rv.Gl : Rv.Tl
        };
        d.prototype.Vj = function() {
            var e = this;
            this.j.setTimeout(function() {
                    e.fb()
                },
                Math.max(0, this.Rj() - (Sv(this.j) - this.xa)))
        };
        d.prototype.Zl = function(e, f, g) {
            var k = this;
            this.sc({
                type: 1,
                clientId: this.id,
                requestId: this.Tj(),
                command: e
            }, function(m) {
                if (m.type === 1)
                    if (m.result) f(m.result);
                    else {
                        var n, p, q, r = {
                                failureType: (q = (n = m.failure) == null ? void 0 : n.failureType) != null ? q : 12,
                                data: (p = m.failure) == null ? void 0 : p.data
                            },
                            t, v;
                        (v = (t = k.H).onFailure) == null || v.call(t, r);
                        g(r)
                    }
            })
        };
        d.prototype.sc = function(e, f) {
            var g = this;
            if (this.state === 4) e.failure = {
                failureType: this.P
            }, f(e);
            else {
                var k = this.state !== 2 &&
                    e.type !== 0,
                    m = e.requestId,
                    n, p = this.j.setTimeout(function() {
                        var r = g.C[m];
                        r && g.Oj(r, 7)
                    }, (n = e.maxDelay) != null ? n : Rv.bl),
                    q = {
                        request: e,
                        Kk: f,
                        Gk: k,
                        dn: p
                    };
                this.C[m] = q;
                k || this.sendRequest(q)
            }
        };
        d.prototype.sendRequest = function(e) {
            this.xa = Sv(this.j);
            e.Gk = !1;
            this.Ul(e.request)
        };
        d.prototype.Wl = function() {
            for (var e = l(Object.keys(this.C)), f = e.next(); !f.done; f = e.next()) {
                var g = this.C[f.value];
                g.Gk && this.sendRequest(g)
            }
        };
        d.prototype.Rl = function() {
            for (var e = l(Object.keys(this.C)), f = e.next(); !f.done; f = e.next()) this.Oj(this.C[f.value],
                this.P)
        };
        d.prototype.Oj = function(e, f) {
            this.eg(e);
            var g = e.request;
            g.failure = {
                failureType: f
            };
            e.Kk(g)
        };
        d.prototype.eg = function(e) {
            delete this.C[e.request.requestId];
            this.j.clearTimeout(e.dn)
        };
        d.prototype.Hm = function(e) {
            this.xa = Sv(this.j);
            var f = this.C[e.requestId];
            if (f) this.eg(f), f.Kk(e);
            else {
                var g, k;
                (k = (g = this.H).onFailure) == null || k.call(g, {
                    failureType: 14
                })
            }
        };
        c = new d(a, B, b);
        return c
    };
    var Uv;
    var Vv = function() {
            Uv || (Uv = new Qv(function(a) {
                return void rc(a)
            }));
            return Uv
        },
        Wv = function(a) {
            var b = a.substring(0, a.indexOf("/_/service_worker"));
            return "&1p=1" + (b ? "&path=" + encodeURIComponent(b) : "")
        },
        Xv = function(a) {
            var b = a,
                c = uj.X;
            b ? (b.charAt(b.length - 1) !== "/" && (b += "/"), a = b + c) : a = "https://www.googletagmanager.com/static/service_worker/" + c + "/";
            var d;
            try {
                d = new URL(a)
            } catch (e) {
                return null
            }
            return d.protocol !== "https:" ? null : d
        },
        Yv = function(a) {
            var b = Um(Pm.Zj);
            return b && b[a]
        },
        Zv = function(a, b, c, d, e) {
            var f = this;
            this.C = d;
            this.P = this.K = !1;
            this.X = null;
            this.initTime = c;
            this.j = 15;
            this.H = this.im(a);
            B.setTimeout(function() {
                f.initialize()
            }, 1E3);
            G(function() {
                f.Rm(a, b, e)
            })
        };
    h = Zv.prototype;
    h.delegate = function(a, b, c) {
        this.getState() !== 2 ? (this.C.j(this.j, {
            state: this.getState(),
            ff: this.initTime,
            wf: Math.round(ob()) - this.initTime
        }, void 0, a.commandType), c({
            failureType: this.j
        })) : this.H.Zl(a, b, c)
    };
    h.getState = function() {
        return this.H.getState().state
    };
    h.Rm = function(a, b, c) {
        var d = B.location.origin,
            e = this,
            f = pc();
        try {
            var g = f.contentDocument.createElement("iframe"),
                k = a.pathname,
                m = k[k.length - 1] === "/" ? a.toString() : a.toString() + "/",
                n = b ? Wv(k) : "",
                p;
            T(130) && (p = {
                sandbox: "allow-same-origin allow-scripts"
            });
            pc(m + "sw_iframe.html?origin=" + encodeURIComponent(d) + n + (c ? "&e=1" : ""), void 0, p, void 0, g);
            var q = function() {
                f.contentDocument.body.appendChild(g);
                g.addEventListener("load", function() {
                    e.X = g.contentWindow;
                    f.contentWindow.addEventListener("message", function(r) {
                        r.origin === a.origin && e.H.Hm(r.data)
                    });
                    e.initialize()
                })
            };
            f.contentDocument.readyState === "complete" ? q() : f.contentWindow.addEventListener("load",
                function() {
                    q()
                })
        } catch (r) {
            f.parentElement.removeChild(f), this.j = 11, this.C.C(void 0, void 0, this.j, r.toString())
        }
    };
    h.im = function(a) {
        var b = this,
            c = Tv(function(d) {
                var e;
                (e = b.X) == null || e.postMessage(d, a.origin)
            }, {
                jn: function() {
                    b.K = !0;
                    b.C.C(c.getState(), c.stats)
                },
                hn: function(d) {
                    b.K ? (b.j = (d == null ? void 0 : d.failureType) || 10, b.C.j(b.j, c.getState(), c.stats, void 0, d == null ? void 0 : d.data)) : (b.j = (d == null ? void 0 : d.failureType) || 4, b.C.C(c.getState(), c.stats, b.j, d == null ? void 0 : d.data))
                },
                onFailure: function(d) {
                    b.j = d.failureType;
                    b.C.j(b.j, c.getState(), c.stats, d.command, d.data)
                }
            });
        return c
    };
    h.initialize = function() {
        this.P || this.H.init();
        this.P = !0
    };

    function $v() {
        var a = Of(Lf.j, "", function() {
            return {}
        });
        try {
            return a("internal_sw_allowed"), !0
        } catch (b) {
            return !1
        }
    }

    function aw(a, b, c) {
        c = c === void 0 ? !1 : c;
        var d = B.location.origin;
        if (!d || !$v()) return;
        yj() && (a = "" + d + xj() + "/_/service_worker");
        var e = Xv(a);
        if (e === null || Yv(e.origin)) return;
        if (!ec()) {
            Vv().C(void 0, void 0, 6);
            return
        }
        var f = new Zv(e, !!a, b || Math.round(ob()), Vv(), c),
            g;
        a: {
            var k = Pm.Zj,
                m = {},
                n = Sm(k);
            if (!n) {
                n = Sm(k, !0);
                if (!n) {
                    g = void 0;
                    break a
                }
                n.set(m)
            }
            g = n.get()
        }
        g[e.origin] = f;
    }
    var bw = function(a, b, c, d) {
        var e;
        if ((e = Yv(a)) == null || !e.delegate) {
            var f = ec() ? 16 : 6;
            Vv().j(f, void 0, void 0, b.commandType);
            d({
                failureType: f
            });
            return
        }
        Yv(a).delegate(b, c, d);
    };

    function cw(a, b, c, d, e) {
        var f = Xv();
        if (f === null) {
            d(ec() ? 16 : 6);
            return
        }
        var g, k = (g = Yv(f.origin)) == null ? void 0 : g.initTime,
            m = Math.round(ob()),
            n = {
                commandType: 0,
                params: {
                    url: a,
                    method: 0,
                    templates: b,
                    body: "",
                    processResponse: !1,
                    sinceInit: k ? m - k : void 0
                }
            };
        e && (n.params.encryptionKeyString = e);
        bw(f.origin, n, function(p) {
            c(p)
        }, function(p) {
            d(p.failureType)
        });
    }

    function dw(a, b, c, d) {
        var e = Xv(a);
        if (e === null) {
            d("_is_sw=f" + (ec() ? 16 : 6) + "te");
            return
        }
        var f = b ? 1 : 0,
            g = Math.round(ob()),
            k, m = (k = Yv(e.origin)) == null ? void 0 : k.initTime,
            n = m ? g - m : void 0;
        bw(e.origin, {
            commandType: 0,
            params: {
                url: a,
                method: f,
                templates: c,
                body: b || "",
                processResponse: !0,
                sinceInit: n,
                attributionReporting: !0
            }
        }, function() {}, function(p) {
            var q = "_is_sw=f" + p.failureType,
                r, t = (r = Yv(e.origin)) == null ? void 0 : r.getState();
            t !== void 0 && (q += "s" + t);
            d(n ? q + ("t" + n) : q + "te")
        });
    }
    var ew = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            e < 128 ? b[c++] = e : (e < 2048 ? b[c++] = e >> 6 | 192 : ((e & 64512) == 55296 && d + 1 < a.length && (a.charCodeAt(d + 1) & 64512) == 56320 ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    };
    Oo();
    Xo() || Lo("iPod");
    Lo("iPad");
    !Lo("Android") || Po() || Oo() || No() || Lo("Silk");
    Po();
    !Lo("Safari") || Po() || (Mo() ? 0 : Lo("Coast")) || No() || (Mo() ? 0 : Lo("Edge")) || (Mo() ? Ko("Microsoft Edge") : Lo("Edg/")) || (Mo() ? Ko("Opera") : Lo("OPR")) || Oo() || Lo("Silk") || Lo("Android") || Yo();
    var fw = {},
        gw = null,
        hw = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                e > 255 && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            f === void 0 && (f = 0);
            if (!gw) {
                gw = {};
                for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), k = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; m < 5; m++) {
                    var n = g.concat(k[m].split(""));
                    fw[m] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        gw[q] === void 0 && (gw[q] = p)
                    }
                }
            }
            for (var r = fw[f], t = Array(Math.floor(b.length / 3)), v = r[64] || "", u = 0, w = 0; u < b.length - 2; u += 3) {
                var x = b[u],
                    y = b[u + 1],
                    A = b[u + 2],
                    C = r[x >> 2],
                    D = r[(x & 3) << 4 | y >> 4],
                    E = r[(y & 15) << 2 | A >> 6],
                    I = r[A & 63];
                t[w++] = "" + C + D + E + I
            }
            var H = 0,
                O = v;
            switch (b.length - u) {
                case 2:
                    H = b[u + 1], O = r[(H & 15) << 2] || v;
                case 1:
                    var K = b[u];
                    t[w] = "" + r[K >> 2] + r[(K & 3) << 4 | H >> 4] + O + v
            }
            return t.join("")
        };
    var iw = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function jw(a) {
        var b;
        return (b = a.google_tag_data) != null ? b : a.google_tag_data = {}
    }

    function kw() {
        var a = B.google_tag_data,
            b;
        if (a != null && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function lw() {
        var a, b;
        return (b = (a = B.google_tag_data) == null ? void 0 : a.uach_promise) != null ? b : null
    }

    function mw(a) {
        var b, c;
        return typeof((b = a.navigator) == null ? void 0 : (c = b.userAgentData) == null ? void 0 : c.getHighEntropyValues) === "function"
    }

    function nw() {
        var a = B;
        if (!mw(a)) return null;
        var b = jw(a);
        if (b.uach_promise) return b.uach_promise;
        var c = a.navigator.userAgentData.getHighEntropyValues(iw).then(function(d) {
            b.uach != null || (b.uach = d);
            return d
        });
        return b.uach_promise = c
    };
    var pw = function(a, b) {
            if (a)
                for (var c = ow(a), d = l(Object.keys(c)), e = d.next(); !e.done; e = d.next()) {
                    var f = e.value;
                    b.j[f] = c[f]
                }
        },
        ow = function(a) {
            var b = {};
            b[Q.g.Uf] = a.architecture;
            b[Q.g.Vf] = a.bitness;
            a.fullVersionList && (b[Q.g.Wf] = a.fullVersionList.map(function(c) {
                return encodeURIComponent(c.brand || "") + ";" + encodeURIComponent(c.version || "")
            }).join("|"));
            b[Q.g.Xf] = a.mobile ? "1" : "0";
            b[Q.g.Yf] = a.model;
            b[Q.g.Zf] = a.platform;
            b[Q.g.cg] = a.platformVersion;
            b[Q.g.dg] = a.wow64 ? "1" : "0";
            return b
        },
        rw = function(a) {
            var b = qw.Kn,
                c = function(g, k) {
                    try {
                        a(g, k)
                    } catch (m) {}
                },
                d = kw();
            if (d) c(d);
            else {
                var e = lw();
                if (e) {
                    b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1E3);
                    var f = B.setTimeout(function() {
                        c.hf || (c.hf = !0, U(106), c(null, Error("Timeout")))
                    }, b);
                    e.then(function(g) {
                        c.hf || (c.hf = !0, U(104), B.clearTimeout(f), c(g))
                    }).catch(function(g) {
                        c.hf || (c.hf = !0, U(105), B.clearTimeout(f), c(null, g))
                    })
                } else c(null)
            }
        },
        tw = function() {
            if (mw(B) && (sw = ob(), !lw())) {
                var a = nw();
                a && (a.then(function() {
                    U(95)
                }), a.catch(function() {
                    U(96)
                }))
            }
        },
        sw;

    function uw(a) {
        var b;
        b = b === void 0 ? document : b;
        var c;
        return !((c = b.featurePolicy) == null || !c.allowedFeatures().includes(a))
    };

    function vw() {
        return uw("join-ad-interest-group") && $a(dc.joinAdInterestGroup)
    }

    function ww(a, b, c) {
        var d = ii[3] === void 0 ? 1 : ii[3],
            e = 'iframe[data-tagging-id="' + b + '"]',
            f = [];
        try {
            if (d === 1) {
                var g = F.querySelector(e);
                g && (f = [g])
            } else f = Array.from(F.querySelectorAll(e))
        } catch (r) {}
        var k;
        a: {
            try {
                k = F.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]');
                break a
            } catch (r) {}
            k = void 0
        }
        var m = k,
            n = ((m == null ? void 0 : m.length) || 0) >= (ii[2] === void 0 ? 50 : ii[2]),
            p;
        if (p = f.length >= 1) {
            var q = Number(f[f.length - 1].dataset.loadTime);
            q !== void 0 && ob() - q < (ii[1] === void 0 ? 6E4 : ii[1]) ? (Va("TAGGING",
                9), p = !0) : p = !1
        }
        if (p) return !1;
        if (d === 1)
            if (f.length >= 1) xw(f[0]);
            else {
                if (n) return Va("TAGGING", 10), !1
            }
        else f.length >= d ? xw(f[0]) : n && xw(m[0]);
        pc(a, c, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: ob()
        });
        return !0
    }

    function xw(a) {
        try {
            a.parentNode.removeChild(a)
        } catch (b) {}
    }

    function yw() {
        return "https://td.doubleclick.net"
    };

    function zw(a) {
        var b = a.location.href;
        if (a === a.top) return {
            url: b,
            Wm: !0
        };
        var c = !1,
            d = a.document;
        d && d.referrer && (b = d.referrer, a.parent === a.top && (c = !0));
        var e = a.location.ancestorOrigins;
        if (e) {
            var f = e[e.length - 1];
            f && b.indexOf(f) === -1 && (c = !1, b = f)
        }
        return {
            url: b,
            Wm: c
        }
    };
    var Aw = function() {
            return [Q.g.N, Q.g.O]
        },
        Cw = function(a) {
            T(26) && a.eventName === Q.g.ba && Bw(a, "page_view") && !a.metadata.consent_updated && !a.m.isGtmEvent ? St(a.target, a.m) : Bw(a, "call_conversion") && (St(a.target, a.m), a.isAborted = !0)
        },
        Ew = function(a) {
            var b;
            if (a.eventName !== "gtag.config" && a.metadata.send_user_data_hit) switch (a.metadata.hit_type) {
                case "user_data_web":
                    b = 97;
                    Dw(a);
                    break;
                case "user_data_lead":
                    b = 98;
                    Dw(a);
                    break;
                case "conversion":
                    b = 99
            }!a.metadata.speculative && b && U(b);
            a.metadata.speculative === !0 && (a.isAborted = !0)
        },
        Fw = function(a) {
            if (!a.metadata.consent_updated && T(31) && Bw(a, ["conversion"])) {
                var b = Xs();
                Ws(b) && (a.j[Q.g.wd] = "1", a.metadata.add_tag_timing = !0)
            }
        },
        Gw = function(a) {
            Bw(a, ["conversion"]) && a.m.eventMetadata.is_external_event && (a.j[Q.g.Lj] = !0)
        },
        Hw = function(a) {
            var b = W(Aw());
            switch (a.metadata.hit_type) {
                case "user_data_lead":
                case "user_data_web":
                    a.isAborted = !b || !!a.metadata.consent_updated;
                    break;
                case "remarketing":
                    a.isAborted = !b;
                    break;
                case "conversion":
                    a.metadata.consent_updated && (a.j[Q.g.bc] = !0)
            }
        },
        Iw = function(a) {
            if (Bw(a, ["conversion"])) {
                var b = a.metadata.cookie_options;
                if (T(70) && yj()) {
                    var c = a.metadata.user_data;
                    if (Ai(c)) {
                        eu(b);
                        var d = {},
                            e = {
                                eventMetadata: (d.hit_type_override = "user_data_web", d.user_data = c, d.is_eme_enabled = !0, d),
                                noGtmEvent: !0
                            },
                            f = iu(a.target.destinationId, a.eventName, a.m.j);
                        lu(f, a.m.eventId, e);
                        a.metadata.user_data = void 0
                    } else a.metadata.is_eme_enabled = !0
                }
                var g = du(b);
                if (g && !a.j[Q.g.Ca]) {
                    var k = oq(a.j[Q.g.lb]);
                    a.j[Q.g.Ca] = k
                }
                g && (a.j[Q.g.Bb] = g, a.metadata.send_ccm_parallel_ping = !0)
            }
        },
        Jw = function(a) {
            yj() || jj ||
                dk(a.m) || (T(128) || T(68) || T(69)) && aw(void 0, Math.round(ob()), T(127))
        },
        Kw = function(a) {
            if (Bw(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"]) && a.metadata.conversion_linker_enabled && W(Q.g.N)) {
                var b = !T(3);
                if (a.metadata.hit_type !== "remarketing" || b) {
                    var c = a.metadata.cookie_options;
                    hr(c, a.metadata.hit_type === "conversion" && a.eventName !== Q.g.Za);
                    W(Q.g.O) && (a.j[Q.g.wb] = fr[ir(c.prefix)])
                }
            }
        },
        Mw = function(a) {
            Bw(a, ["conversion", "user_data_lead", "user_data_web"]) && Lw(a)
        },
        Nw = function(a) {
            if (Bw(a, ["conversion"])) {
                var b = !!a.metadata.redact_ads_data && !W(Aw());
                a.metadata.redact_click_ids = b
            }
        },
        Ow = function(a) {
            Bw(a, ["conversion"]) && Uq(!1)._up === "1" && (a.j[Q.g.ze] = !0)
        },
        Pw = function(a) {
            if (Bw(a, ["conversion", "remarketing"])) {
                var b = mt();
                b !== void 0 && (a.j[Q.g.Ed] = b || "error");
                var c = Ap();
                c && (a.j[Q.g.mc] = c);
                var d = zp();
                d && (a.j[Q.g.qc] = d)
            }
        },
        Qw = function(a) {
            if (Bw(a, ["conversion", "remarketing"]) && B.__gsaExp && B.__gsaExp.id) {
                var b = B.__gsaExp.id;
                if ($a(b)) try {
                    var c = Number(b());
                    isNaN(c) || (a.j[Q.g.ah] = c)
                } catch (d) {}
            }
        },
        Rw = function(a) {
            au(a);
        },
        Sw = function(a) {
            T(49) && Bw(a, "conversion") && (a.copyToHitData(Q.g.Ig), a.copyToHitData(Q.g.Jg), a.copyToHitData(Q.g.Hg))
        },
        Tw = function(a) {
            Bw(a, "conversion") && (a.copyToHitData(Q.g.xd), a.copyToHitData(Q.g.nd), a.copyToHitData(Q.g.Cd), a.copyToHitData(Q.g.te), a.copyToHitData(Q.g.Cc), a.copyToHitData(Q.g.sd))
        },
        Uw = function(a) {
            if (Bw(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])) {
                var b = a.m;
                if (Bw(a, ["conversion", "remarketing"])) {
                    var c = V(b, Q.g.Ab);
                    if (c ===
                        !0 || c === !1) a.j[Q.g.Ab] = c
                }
                Gp(b) ? a.j[Q.g.Ub] = !1 : (a.j[Q.g.Ub] = !0, Bw(a, "remarketing") && (a.isAborted = !0))
            }
        },
        Vw = function(a) {
            if (Bw(a, ["conversion", "remarketing"])) {
                var b = a.metadata.hit_type === "conversion";
                b && a.eventName !== Q.g.Ka || (a.copyToHitData(Q.g.da), b && (a.copyToHitData(Q.g.me), a.copyToHitData(Q.g.je), a.copyToHitData(Q.g.ke), a.copyToHitData(Q.g.ie), a.j[Q.g.Fg] = a.eventName, T(113) && (a.copyToHitData(Q.g.Nf), a.copyToHitData(Q.g.Lf), a.copyToHitData(Q.g.Mf))))
            }
        },
        Ww = function(a) {
            var b = T(10),
                c = a.m,
                d, e, f;
            if (!b) {
                var g =
                    un(c, Q.g.ia);
                d = yb(Rc(g) ? g : {})
            }
            var k = un(c, Q.g.ia, 1),
                m = un(c, Q.g.ia, 2);
            e = yb(Rc(k) ? k : {}, ".");
            f = yb(Rc(m) ? m : {}, ".");
            b || (a.j[Q.g.Ae] = d);
            a.j[Q.g.ob] = e;
            a.j[Q.g.nb] = f
        },
        Xw = function(a) {
            if (a != null) {
                var b = String(a).substring(0, 512),
                    c = b.indexOf("#");
                return c === -1 ? b : b.substring(0, c)
            }
            return ""
        },
        Yw = function(a) {
            if (Bw(a, "conversion") && W(Q.g.N) && (a.j[Q.g.vb] || a.j[Q.g.Fc])) {
                var b = a.j[Q.g.lb],
                    c = Sc(a.metadata.cookie_options, null),
                    d = Tr(c.prefix);
                c.prefix = d === "_gcl" ? "" : d;
                if (a.j[Q.g.vb]) {
                    var e = lt(b, c, !a.metadata.gbraid_cookie_marked);
                    a.metadata.gbraid_cookie_marked = !0;
                    e && (a.j[Q.g.sh] = e)
                }
                if (a.j[Q.g.Fc]) {
                    var f = dt(b, c).wm;
                    f && (a.j[Q.g.Vg] = f)
                }
            }
        },
        Zw = function(a) {
            if (a.eventName === Q.g.Za && !a.m.isGtmEvent) {
                if (!a.metadata.consent_updated && Bw(a, "conversion")) {
                    var b = V(a.m, Q.g.Pb);
                    if (typeof b !== "function") return;
                    var c = String(V(a.m, Q.g.yb)),
                        d = a.j[c],
                        e = V(a.m, c);
                    c === Q.g.ab || c === Q.g.wb ? vt({
                        Uk: c,
                        callback: b,
                        xk: e
                    }, a.metadata.cookie_options, a.metadata.redact_ads_data, Ss) : b(d || e)
                }
                a.isAborted = !0
            }
        },
        $w = function(a) {
            if (!Fv(a, "hasPreAutoPiiCcdRule", !1) &&
                Bw(a, "conversion") && W(Q.g.N)) {
                var b = V(a.m, Q.g.se) || {},
                    c = a.j[Q.g.md],
                    d;
                if (!(d = Dt(b[String(a.j[Q.g.lb])])))
                    if (Vl())
                        if (dv) d = !0;
                        else {
                            var e = tu("AW-" + c);
                            d = !!e && !!e.preAutoPii
                        }
                else d = !1;
                if (d) {
                    var f = ob(),
                        g = Tu({
                            Od: !0,
                            Pd: !0,
                            ug: !0
                        });
                    if (g.elements.length !== 0) {
                        for (var k = [], m = 0; m < g.elements.length; ++m) {
                            var n = g.elements[m];
                            k.push(n.querySelector + "*" + Fu(n) + "*" + n.type)
                        }
                        var p = Q.g.ph,
                            q = k.join("~");
                        a.j[p] = q;
                        var r = g.ki;
                        if (r) {
                            a.j[Q.g.qh] = r.querySelector;
                            var t = Q.g.oh,
                                v = Fu(r);
                            a.j[t] = v
                        }
                        a.j[Q.g.nh] = String(ob() - f);
                        a.j[Q.g.rh] =
                            g.status
                    }
                }
            }
        },
        ax = function(a) {
            if (a.eventName === Q.g.ba && !a.metadata.consent_updated && (a.metadata.is_config_command = !0, Bw(a, "conversion") && (a.metadata.speculative = !0), !Bw(a, "remarketing") || V(a.m, Q.g.ic) !== !1 && V(a.m, Q.g.Na) !== !1 || (a.metadata.speculative = !0), Bw(a, "landing_page"))) {
                var b = V(a.m, Q.g.wa) || {},
                    c = V(a.m, Q.g.eb),
                    d = a.metadata.conversion_linker_enabled,
                    e = a.metadata.redact_ads_data,
                    f = {
                        Id: d,
                        Rd: b,
                        Wd: c,
                        za: a.metadata.source_canonical_id,
                        m: a.m,
                        Td: e,
                        Tk: V(a.m, Q.g.Ea)
                    },
                    g = a.metadata.cookie_options;
                rt(f, g);
                St(a.target, a.m);
                It({
                    Jh: !1,
                    Td: e,
                    targetId: a.target.id,
                    m: a.m,
                    wc: d ? g : void 0,
                    og: d,
                    mk: a.j[Q.g.Ae],
                    Qh: a.j[Q.g.ob],
                    Oh: a.j[Q.g.nb],
                    Uh: a.j[Q.g.Qb]
                });
                a.isAborted = !0
            }
        },
        bx = function(a) {
            Bw(a, ["conversion", "remarketing"]) && (a.m.isGtmEvent ? a.metadata.hit_type !== "conversion" && a.eventName && (a.j[Q.g.Dc] = a.eventName) : a.j[Q.g.Dc] = a.eventName, hb(a.m.j, function(b, c) {
                Lh[b.split(".")[0]] || (a.j[b] = c)
            }))
        },
        cx = function(a) {
            if (!T(136) || wk || !a.m.isGtmEvent) {
                var b = !a.metadata.send_user_data_hit && Bw(a, ["conversion", "user_data_web"]),
                    c = !Fv(a, "ccd_add_1p_data", !1) && Bw(a, "user_data_lead");
                if ((b || c) && W(Q.g.N)) {
                    var d = a.metadata.hit_type === "conversion",
                        e = a.m,
                        f = void 0,
                        g = V(e, Q.g.Da);
                    if (d) {
                        var k = V(e, Q.g.he) === !0,
                            m = (V(e, Q.g.se) || {})[String(a.j[Q.g.lb])];
                        if (k || m) {
                            var n;
                            var p;
                            m ? p = Mj(m, g) : (p = B.enhanced_conversion_data) && U(154);
                            var q = (m || {}).enhanced_conversions_mode,
                                r;
                            if (p) {
                                if (q === "manual") switch (p._tag_mode) {
                                    case "CODE":
                                        r = "c";
                                        break;
                                    case "AUTO":
                                        r = "a";
                                        break;
                                    case "MANUAL":
                                        r = "m";
                                        break;
                                    default:
                                        r = "c"
                                } else r = q === "automatic" ? Dt(m) ? "a" : "m" : "c";
                                n = {
                                    W: p,
                                    Sk: r
                                }
                            } else n = {
                                W: p,
                                Sk: void 0
                            };
                            var t = n,
                                v = t.Sk;
                            f = t.W;
                            a.j[Q.g.Dd] = v
                        }
                    } else if (a.m.isGtmEvent) {
                        Dw(a);
                        a.metadata.user_data = g;
                        a.j[Q.g.Dd] = Et(g);
                        return
                    }
                    a.metadata.user_data = f
                }
            }
        },
        dx = function(a) {
            if (Fv(a, "ccd_add_1p_data", !1) && W(Aw())) {
                var b = a.m.C[Q.g.Ee];
                if (Nj(b)) {
                    var c = V(a.m, Q.g.Da);
                    if (c === null) a.metadata.user_data_from_code = null;
                    else if (b.enable_code && Rc(c) && (a.metadata.user_data_from_code = c), Rc(b.selectors)) {
                        var d = Lj(b.selectors);
                        a.metadata.user_data_from_manual = d
                    }
                }
            }
        },
        ex = function(a) {
            var b = V(a.m, Q.g.sa) !==
                !1;
            a.metadata.conversion_linker_enabled = b;
            var c = nt(a);
            a.metadata.cookie_options = c;
            var d = V(a.m, Q.g.fa) != null && V(a.m, Q.g.fa) !== !1;
            a.metadata.redact_ads_data = d;
            var e = Gp(a.m);
            a.metadata.allow_ad_personalization = e
        },
        gx = function(a) {
            if (Bw(a, ["conversion", "remarketing"]) && T(35)) {
                var b = function(d) {
                    return T(37) ? (Va("fdr", d), !0) : !1
                };
                if (W(Q.g.N) || b(0))
                    if (W(Q.g.O) || b(1))
                        if (V(a.m, Q.g.Aa) !== !1 || b(2))
                            if (Gp(a.m) || b(3))
                                if (V(a.m, Q.g.ic) !== !1 || b(4)) {
                                    var c;
                                    T(38) ? c = a.eventName === Q.g.ba ? V(a.m, Q.g.Na) : void 0 : c = V(a.m, Q.g.Na);
                                    if (c !== !1 || b(5))
                                        if (vw() || b(6)) T(37) && Ya() ? (fx(a, Q.g.mj, Xa("fdr")), delete Ua.fdr) : (a.j[Q.g.Qg] = "1", a.metadata.send_fledge_experiment = !0)
                                }
            }
        },
        hx = function(a) {
            Bw(a, ["conversion"]) && W(Q.g.O) && (B._gtmpcm === !0 || ju() ? a.j[Q.g.jc] = "2" : T(40) && uw("attribution-reporting") && (a.j[Q.g.jc] = "1"))
        },
        ix = function(a) {
            if (!mw(B)) U(87);
            else if (sw !== void 0) {
                U(85);
                var b = kw();
                b ? pw(b, a) : U(86)
            }
        },
        jx = function(a) {
            var b = ["conversion", "remarketing"];
            b.push("page_view", "user_data_lead", "user_data_web");
            if (Bw(a, b) && W(Q.g.O)) {
                a.copyToHitData(Q.g.Ea);
                var c = Um(Pm.zh);
                if (c === void 0) Tm(Pm.Ah, !0);
                else {
                    var d = Um(Pm.Le);
                    a.j[Q.g.Rf] = d + "." + c
                }
            }
        },
        kx = function(a) {
            Bw(a, ["conversion", "remarketing"]) && (a.copyToHitData(Q.g.Ca), a.copyToHitData(Q.g.ma), a.copyToHitData(Q.g.Ba))
        },
        lx = function(a) {
            if (!a.metadata.consent_updated && Bw(a, ["conversion", "remarketing"])) {
                var b = ap(!1);
                a.j[Q.g.Qb] = b;
                var c = V(a.m, Q.g.oa);
                c || (c = b === 1 ? B.top.location.href : B.location.href);
                var d = Q.g.oa,
                    e = Xw(c);
                a.j[d] = e;
                a.copyToHitData(Q.g.Ga, F.referrer);
                var f = Q.g.cb,
                    g = pt();
                a.j[f] = g;
                a.copyToHitData(Q.g.Ra);
                var k = uu();
                a.j[Q.g.Tb] = k.width + "x" + k.height;
                var m = cp(),
                    n = zw(m);
                if (n.url && c !== n.url) {
                    var p = Q.g.Sf,
                        q = Xw(n.url);
                    a.j[p] = q
                }
            }
        },
        mx = function(a) {
            Bw(a, ["conversion", "remarketing"])
        },
        ox = function(a) {
            if (Bw(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])) {
                var b = a.j[Q.g.lb],
                    c = V(a.m, Q.g.Df) === !0;
                c && (a.metadata.remarketing_only = !0);
                switch (a.metadata.hit_type) {
                    case "conversion":
                        !c && b && Dw(a);
                        nx() && (a.metadata.is_gcp_conversion = !0);
                        if (nx() ? 0 : T(155)) a.metadata.is_fallback_aw_conversion_ping_allowed = !0;
                        break;
                    case "user_data_lead":
                    case "user_data_web":
                        !c && b && (a.isAborted = !0);
                        break;
                    case "remarketing":
                        !c && b || Dw(a)
                }
                Bw(a, ["conversion", "remarketing"]) && (a.j[Q.g.Kj] = a.metadata.is_gcp_conversion ? "www.google.com" : "www.googleadservices.com")
            }
        },
        nx = function() {
            return dc.userAgent.toLowerCase().indexOf("firefox") !== -1 || ic("Edg/") || ic("EdgA/") || ic("EdgiOS/")
        },
        px = function(a) {
            var b = a.target.ids[dn[1]];
            if (b) {
                a.j[Q.g.md] = b;
                var c = a.target.ids[dn[2]];
                c && (a.j[Q.g.lb] = c)
            } else a.isAborted = !0
        },
        Dw = function(a) {
            a.metadata.speculative_in_message ||
                (a.metadata.speculative = !1)
        },
        Bw = function(a, b) {
            Array.isArray(b) || (b = [b]);
            return b.indexOf(a.metadata.hit_type) >= 0
        };
    var Lw = function(a) {
        if (T(97) && Bw(a, ["conversion"])) {
            var b = Q.g.Cj,
                c = Uq(!1)._gs;
            a.j[b] = c
        }
        if (T(23)) {
            var d = W(Q.g.N) && W(Q.g.O),
                e = a.metadata.redact_ads_data && !d,
                f = Q.g.aj,
                g = pu("gclsrc");
            a.j[f] = g;
            var k = Q.g.Xi,
                m = pu("gad_source");
            a.j[k] = m;
            var n = pu("gbraid");
            n && (a.j[Q.g.Yi] = e ? "0" : n);
            var p = pu("gclid");
            p && (a.j[Q.g.Zi] = d ? p : "0");
            var q = pu("dclid");
            q && (a.j[Q.g.Wi] = d ? q : "0")
        }
        if (T(18)) {
            var r = V(a.m, Q.g.oa);
            r || (r = ap(!1) === 1 ? B.top.location.href : B.location.href);
            var t, v = Xj(r),
                u = Rj(v, "query", !1, void 0, "gclid");
            if (!u) {
                var w =
                    v.hash.replace("#", "");
                u = u || Qj(w, "gclid", !1)
            }(t = u ? u.length : void 0) && (a.j[Q.g.Ti] = t)
        }
        if (W(Q.g.N) && a.metadata.conversion_linker_enabled) {
            var x = a.metadata.cookie_options,
                y = Tr(x.prefix);
            y === "_gcl" && (y = "");
            var A = ft(y);
            a.j[Q.g.Zc] = A.kg;
            a.j[Q.g.dd] = A.mg;
            T(132) && (a.j[Q.g.bd] = A.lg);
            if (kt(y)) {
                var C = jt(y);
                C && (a.j[Q.g.vb] = C);
                if (!y) {
                    var D = a.j[Q.g.lb];
                    x = Sc(x, null);
                    x.prefix = y;
                    var E = dt(D, x, !0).vm;
                    E && (a.j[Q.g.Fc] = E)
                }
            } else {
                var I = "";
                if (T(111) && a.metadata.hit_type === "conversion" && ap() !== 2) {
                    var H = it(y);
                    H.T && (I = H.T);
                    H.tk &&
                        (a.j[Q.g.be] = H.tk);
                    H.uk && (a.j[Q.g.ce] = H.uk)
                } else I = ht(y);
                I && (a.j[Q.g.ab] = I);
                if (!y) {
                    var O = ct(Nr(Mr()) ? Gr() : {}, at);
                    O && (a.j[Q.g.xe] = O)
                }
            }
        }
    };

    function qx(a, b, c) {
        var d, e = a.GooglebQhCsO;
        e || (e = {}, a.GooglebQhCsO = e);
        d = e;
        if (d[b]) return !1;
        d[b] = [];
        d[b][0] = c;
        return !0
    };

    function rx(a, b, c, d, e, f) {
        var g = To(c, "fmt");
        if (d) {
            var k = To(c, "random"),
                m = To(c, "label") || "";
            if (!k) return !1;
            var n = hw(decodeURIComponent(m.replace(/\+/g, " ")) + ":" + decodeURIComponent(k.replace(/\+/g, " ")));
            if (!qx(a, n, d)) return !1
        }
        g && Number(g) !== 4 && (c = Vo(c, "rfmt", g));
        var p = Vo(c, "fmt", 4);
        mc(p, function() {
            a.google_noFurtherRedirects && d && (a.google_noFurtherRedirects = null, d())
        }, e, f, b.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var sx = {},
        tx = (sx[1] = {}, sx[2] = {}, sx[3] = {}, sx[4] = {}, sx);

    function ux(a, b, c) {
        var d = vx(c);
        d && (tx[b][d] = a)
    }

    function wx(a) {
        switch (a) {
            case "script-src":
            case "script-src-elem":
                return 1;
            case "frame-src":
                return 4;
            case "connect-src":
                return 2;
            case "img-src":
                return 3
        }
    }

    function vx(a) {
        var b = a;
        a[0] === "/" && (b = B.location.origin + a);
        try {
            var c = new URL(b);
            return c.origin + c.pathname
        } catch (d) {}
    }

    function xx(a) {
        var b = ya.apply(1, arguments);
        T(57) && mk && (ux(a, 2, b[0]), ux(a, 3, b[0]));
        yc.apply(null, ua(b))
    }

    function yx(a) {
        var b = ya.apply(1, arguments);
        T(57) && mk && ux(a, 2, b[0]);
        return zc.apply(null, ua(b))
    }

    function zx(a) {
        var b = ya.apply(1, arguments);
        T(57) && mk && ux(a, 3, b[0]);
        qc.apply(null, ua(b))
    }

    function Ax(a) {
        var b = ya.apply(1, arguments),
            c = b[0];
        T(57) && mk && (ux(a, 2, c), ux(a, 3, c));
        return Bc.apply(null, ua(b))
    }

    function Bx(a) {
        var b = ya.apply(1, arguments);
        T(57) && mk && ux(a, 1, b[2]);
        return rx.apply(null, ua(b))
    }

    function Cx(a) {
        var b = ya.apply(1, arguments);
        T(57) && mk && ux(a, 4, b[0]);
        ww.apply(null, ua(b))
    }
    var Ex = function(a, b) {
            for (var c = {}, d = function(p, q) {
                    var r;
                    r = q === !0 ? "1" : q === !1 ? "0" : encodeURIComponent(String(q));
                    c[p] = r
                }, e = l(Object.keys(a.j)), f = e.next(); !f.done; f = e.next()) {
                var g = f.value,
                    k = a.j[g],
                    m = Dx[g];
                m && k !== void 0 && k !== "" && (!a.metadata.redact_click_ids || g !== Q.g.de && g !== Q.g.ne && g !== Q.g.Bf && g !== Q.g.Eg || (k = "0"), d(m, k))
            }
            d("gtm", Up({
                za: a.metadata.source_canonical_id
            }));
            Hp() && d("gcs", Ip());
            d("gcd", Mp(a.m));
            Pp() && d("dma_cps", Np());
            d("dma", Op());
            kp(tp()) && d("tcfd", Qp());
            vj() && d("tag_exp", vj());
            if (a.metadata.add_tag_timing) {
                d("tft",
                    ob());
                var n = Ec();
                n !== void 0 && d("tfd", Math.round(n))
            }
            T(26) && d("apve", "1");
            (T(27) || T(28)) && d("apvf", Cc() ? T(28) ? "f" : "sb" : "nf");
            T(110) && co[1] === 1 && !go[1].isConsentGranted() && (c.limited_ads = "1");
            b(c)
        },
        Fx = function(a) {
            Ex(a, function(b) {
                if (a.metadata.hit_type === "page_view") {
                    var c = [];
                    hb(b, function(k, m) {
                        c.push(k + "=" + m)
                    });
                    var d = ek(W([Q.g.N, Q.g.O]) ? "https://www.google.com" : "https://pagead2.googlesyndication.com", !0) + "/ccm/collect?" + c.join("&"),
                        e = W([Q.g.N, Q.g.O]) ? 45 : 46,
                        f = a.m;
                    mm({
                        targetId: a.target.destinationId,
                        request: {
                            url: d,
                            parameterEncoding: 2,
                            endpoint: e
                        },
                        Ta: {
                            eventId: f.eventId,
                            priorityId: f.priorityId
                        },
                        hg: {
                            eventId: a.metadata.consent_event_id,
                            priorityId: a.metadata.consent_priority_id
                        }
                    });
                    var g = {
                        destinationId: a.target.destinationId,
                        endpoint: e,
                        eventId: f.eventId,
                        priorityId: f.priorityId
                    };
                    T(28) && Cc() ? Ax(g, d, void 0, {
                        yk: !0
                    }, function() {}, function() {
                        zx(g, d + "&img=1")
                    }) : yx(g, d) || zx(g, d + "&img=1");
                    if ($a(a.m.onSuccess)) a.m.onSuccess()
                }
            })
        },
        Gx = {},
        Dx = (Gx[Q.g.bc] = "gcu", Gx[Q.g.vb] = "gclgb", Gx[Q.g.ab] = "gclaw", Gx[Q.g.Ui] = "gad_source",
            Gx[Q.g.Vi] = "gad_source_src", Gx[Q.g.de] = "gclid", Gx[Q.g.bj] = "gclsrc", Gx[Q.g.Eg] = "gbraid", Gx[Q.g.Bf] = "wbraid", Gx[Q.g.wb] = "auid", Gx[Q.g.dj] = "rnd", Gx[Q.g.gj] = "ncl", Gx[Q.g.Kg] = "gcldc", Gx[Q.g.ne] = "dclid", Gx[Q.g.nb] = "edid", Gx[Q.g.Dc] = "en", Gx[Q.g.mc] = "gdpr", Gx[Q.g.ob] = "gdid", Gx[Q.g.Gc] = "_ng", Gx[Q.g.tj] = "gtm_up", Gx[Q.g.Qb] = "frm", Gx[Q.g.wd] = "lps", Gx[Q.g.Ae] = "did", Gx[Q.g.uj] = "navt", Gx[Q.g.oa] = "dl", Gx[Q.g.Ga] = "dr", Gx[Q.g.cb] = "dt", Gx[Q.g.zj] = "scrsrc", Gx[Q.g.Rf] = "ga_uid", Gx[Q.g.qc] = "gdpr_consent", Gx[Q.g.Ea] = "uid",
            Gx[Q.g.Ed] = "us_privacy", Gx[Q.g.Ub] = "npa", Gx);
    var Hx = {
        J: {
            zi: "ads_conversion_hit",
            Zd: "container_execute_start",
            Ci: "container_setup_end",
            xg: "container_setup_start",
            Ai: "container_blocking_end",
            Bi: "container_execute_end",
            Di: "container_yield_end",
            yg: "container_yield_start",
            Fj: "event_execute_end",
            Ej: "event_evaluation_end",
            th: "event_evaluation_start",
            Gj: "event_setup_end",
            Fe: "event_setup_start",
            Ij: "ga4_conversion_hit",
            He: "page_load",
            fo: "pageview",
            uc: "snippet_load",
            dk: "tag_callback_error",
            ek: "tag_callback_failure",
            fk: "tag_callback_success",
            gk: "tag_execute_end",
            Gd: "tag_execute_start"
        }
    };

    function Ix() {
        function a(c, d) {
            var e = Xa(d);
            e && b.push([c, e])
        }
        var b = [];
        a("u", "GTM");
        a("ut", "TAGGING");
        a("h", "HEALTH");
        return b
    };
    var Jx = !1;

    function sy(a, b) {}

    function ty(a, b) {}

    function uy(a, b) {}

    function vy(a, b) {}

    function wy() {
        var a = {};
        return a
    }

    function ky(a) {
        a = a === void 0 ? !0 : a;
        var b = {};
        return b
    }

    function xy() {}

    function yy(a, b) {}

    function zy(a, b, c) {}

    function Ay() {}
    var By = function(a, b) {
            var c = Number((a || "").split(".").pop());
            return uj.j && c > 0 && c % 100 < b
        },
        Cy = function(a) {
            var b = a.metadata.hit_type,
                c = a.metadata.user_data;
            if (uj.j && B.location.protocol === "https:" && Ai(c)) {
                var d = a.metadata.cookie_options;
                if (b === "user_data_web" && qi.pk > 0) return eu(d);
                if (b === "conversion" && qi.nk > 0) return du(d)
            }
        },
        Dy = function(a) {
            if (a !== void 0) return Math.round(a / 10) * 10
        },
        Ey = function(a) {
            for (var b = {}, c = 0; c < a.length; c++) {
                var d = a[c],
                    e = void 0;
                if (d.hasOwnProperty("google_business_vertical")) {
                    e = d.google_business_vertical;
                    var f = {};
                    b[e] = b[e] || (f.google_business_vertical = e, f)
                } else e = "", b.hasOwnProperty(e) || (b[e] = {});
                var g = b[e],
                    k;
                for (k in d) k !== "google_business_vertical" && (k in g || (g[k] = []), g[k].push(d[k]))
            }
            return Object.keys(b).map(function(m) {
                return b[m]
            })
        },
        Fy = function(a) {
            if (!a || !a.length) return [];
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                if (d) {
                    var e = {};
                    b.push((e.id = Th(d), e.origin = d.origin, e.destination = d.destination, e.start_date = d.start_date, e.end_date = d.end_date, e.location_id = d.location_id, e.google_business_vertical =
                        d.google_business_vertical, e))
                }
            }
            return b
        },
        Th = function(a) {
            a.item_id != null && (a.id != null ? (U(138), a.id !== a.item_id && U(148)) : U(153));
            return T(22) ? Uh(a) : a.id
        },
        Hy = function(a, b) {
            var c = Gy(b);
            return "" + a + (a && c ? ";" : "") + c
        },
        Gy = function(a) {
            if (!a || typeof a !== "object" || typeof a.join === "function") return "";
            var b = [];
            hb(a, function(c, d) {
                var e, f;
                if (Array.isArray(d)) {
                    for (var g = [], k = 0; k < d.length; ++k) {
                        var m = Iy(d[k]);
                        m !== void 0 && g.push(m)
                    }
                    f = g.length !== 0 ? g.join(",") : void 0
                } else f = Iy(d);
                e = f;
                var n = Iy(c);
                n && e !== void 0 && b.push(n +
                    "=" + e)
            });
            return b.join(";")
        },
        Iy = function(a) {
            var b = typeof a;
            if (a != null && b !== "object" && b !== "function") return String(a).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=")
        },
        Jy = function(a, b) {
            var c = [],
                d = function(f, g) {
                    var k = bg[f] === !0;
                    g == null || !k && g === "" || (g === !0 && (g = 1), g === !1 && (g = 0), c.push(f + "=" + encodeURIComponent(g)))
                },
                e = a.metadata.hit_type;
            e !== "conversion" && e !== "remarketing" && e !== "ga_conversion" || d("random", a.metadata.event_start_timestamp_ms);
            hb(b, d);
            return c.join("&")
        },
        Ky = function(a, b) {
            var c =
                a.metadata.hit_type,
                d = a.j[Q.g.md],
                e = W([Q.g.N, Q.g.O]),
                f = [],
                g, k, m = Sp() ? 2 : 3;
            yj() && T(86) && (m = 5);
            var n = void 0,
                p = function(x) {
                    f.push(x)
                };
            switch (c) {
                case "conversion":
                    k = "/pagead/conversion";
                    var q = "";
                    e ? a.metadata.is_gcp_conversion ? (g = "https://www.google.com", k = "/pagead/1p-conversion", n = 8) : (g = "https://www.googleadservices.com", n = 5) : (g = "https://pagead2.googlesyndication.com", n = 6);
                    a.metadata.is_gcp_conversion && (q = "&gcp=1&sscte=1&ct_cookie_present=1");
                    var r = {
                        Ua: "" + ek(g, !0) + k + "/" + d + "/?" + Jy(a, b) + q,
                        format: m,
                        Ya: !0,
                        endpoint: n
                    };
                    W(Q.g.O) && (r.attributes = {
                        attributionsrc: ""
                    });
                    e && a.metadata.is_fallback_aw_conversion_ping_allowed && (r.Ve = "" + ek("https://www.google.com", !0) + "/pagead/1p-conversion/" + d + "/?" + Jy(a, b) + "&gcp=1&sscte=1&ct_cookie_present=1", r.Ue = 8);
                    p(r);
                    if (a.metadata.send_ccm_parallel_ping) {
                        n = a.metadata.is_gcp_conversion ? 23 : 22;
                        var t;
                        b.eme && !T(11) ? (t = {}, rb(t, b), t.eme = "*") : t = b;
                        p({
                            Ua: "" + ek(g, !0) + "/ccm/conversion/" + d + "/?" + Jy(a, t) + q,
                            format: 2,
                            Ya: !0,
                            endpoint: n
                        })
                    }
                    a.metadata.is_gcp_conversion && e && (q = "&gcp=1&ct_cookie_present=1",
                        p({
                            Ua: "" + ek("https://googleads.g.doubleclick.net") + "/pagead/viewthroughconversion/" + d + "/?" + Jy(a, b) + q,
                            format: m,
                            Ya: !0,
                            endpoint: 9
                        }));
                    break;
                case "remarketing":
                    var v = b.data || "",
                        u = Ey(Fy(a.j[Q.g.da]));
                    if (u.length) {
                        for (var w = 0; w < u.length; w++) b.data = Hy(v, u[w]), p({
                                Ua: "" + ek("https://googleads.g.doubleclick.net") + "/pagead/viewthroughconversion/" + d + "/?" + Jy(a, b),
                                format: m,
                                Ya: !0,
                                endpoint: 9
                            }), a.metadata.send_fledge_experiment && p({
                                Ua: "" + yw() + "/td/rul/" + d + "?" + Jy(a, b),
                                format: 4,
                                Ya: !1,
                                endpoint: 44
                            }), a.metadata.event_start_timestamp_ms +=
                            1;
                        a.metadata.send_fledge_experiment = !1
                    } else p({
                        Ua: "" + ek("https://googleads.g.doubleclick.net") + "/pagead/viewthroughconversion/" + d + "/?" + Jy(a, b),
                        format: m,
                        Ya: !0,
                        endpoint: 9
                    });
                    break;
                case "user_data_lead":
                    p({
                        Ua: "" + ek("https://google.com") + "/pagead/form-data/" + d + "?" + Jy(a, b),
                        format: 1,
                        Ya: !0,
                        endpoint: 11
                    });
                    break;
                case "user_data_web":
                    p({
                        Ua: "" + ek("https://google.com") + "/ccm/form-data/" + d + "?" + Jy(a, b),
                        format: 1,
                        Ya: !0,
                        endpoint: 21
                    });
                    break;
                case "ga_conversion":
                    e ? (g = "https://www.google.com", n = 54) : (g = "https://pagead2.googlesyndication.com",
                        n = 55), p({
                        Ua: "" + ek(g, !0) + "/measurement/conversion/?" + Jy(a, b),
                        format: 5,
                        Ya: !0,
                        endpoint: n
                    })
            }
            Sp() || c !== "conversion" && c !== "remarketing" || !a.metadata.send_fledge_experiment || (T(36) && c === "conversion" && (b.ct_cookie_present = 0), p({
                Ua: "" + yw() + "/td/rul/" + d + "?" + Jy(a, b),
                format: 4,
                Ya: !1,
                endpoint: 44
            }));
            return {
                Om: f
            }
        },
        My = function(a, b, c, d, e, f, g, k) {
            var m = c.metadata.is_fallback_aw_conversion_ping_allowed && b === 3;
            m || Ly(a, c, e);
            ty(c.m.eventId, c.eventName);
            var n = function() {
                    f && (f(), m && Ly(a, c, e))
                },
                p = {
                    destinationId: c.target.destinationId,
                    endpoint: e,
                    priorityId: c.m.priorityId,
                    eventId: c.m.eventId
                };
            switch (b) {
                case 1:
                    xx(p, a);
                    f && f();
                    break;
                case 2:
                    zx(p, a, n, g, k);
                    break;
                case 3:
                    var q = !1;
                    try {
                        q = Bx(p, B, F, a, n, g, k)
                    } catch (v) {
                        q = !1
                    }
                    q || My(a, 2, c, d, e, n, g, k);
                    break;
                case 4:
                    var r = "AW-" + c.j[Q.g.md],
                        t = c.j[Q.g.lb];
                    t && (r = r + "/" + t);
                    Cx(p, a, r);
                    break;
                case 5:
                    Ax(p, a, void 0, void 0, f, g)
            }
        },
        Ly = function(a, b, c) {
            var d = b.m;
            mm({
                targetId: b.target.destinationId,
                request: {
                    url: a,
                    parameterEncoding: 3,
                    endpoint: c
                },
                Ta: {
                    eventId: d.eventId,
                    priorityId: d.priorityId
                },
                hg: {
                    eventId: b.metadata.consent_event_id,
                    priorityId: b.metadata.consent_priority_id
                }
            })
        },
        Ny = function(a, b) {
            var c = !0;
            switch (a) {
                case "conversion":
                    c = !1;
                    break;
                case "user_data_lead":
                    c = !T(12);
                    break;
                case "user_data_web":
                    c = !T(13)
            }
            return c ? b.replace(/./g, "*") : b
        },
        Oy = function(a, b) {
            switch (a) {
                case "conversion":
                    return T(4) ? !1 : uj.j && T(74) || !uj.j && T(75) || By(b, qi.nk) || T(73) && T(105) ? !0 : T(66) || T(67) || T(68) || T(69);
                case "user_data_lead":
                    return T(76);
                case "user_data_web":
                    return T(5) ? !1 : uj.j && T(78) || !uj.j && T(79) || By(b, qi.pk) ? !0 : T(77) && (T(105) || T(127));
                default:
                    return !1
            }
        },
        Py = function(a) {
            if (!a.j[Q.g.be] || !a.j[Q.g.ce]) return "";
            var b = a.j[Q.g.be].split("."),
                c = a.j[Q.g.ce].split(".");
            if (!b.length || !c.length || b.length !== c.length) return "";
            for (var d = [], e = 0; e < b.length; ++e) d.push(b[e] + "_" + c[e]);
            return d.join(".")
        },
        Sy = function(a, b, c) {
            var d = zi(a.metadata.user_data),
                e = yi(d, c),
                f = e.vg,
                g = e.Wc,
                k = e.na,
                m = e.qk,
                n = e.encryptionKeyString,
                p = [];
            c !== 0 && c !== 1 && c !== 2 || p.push("&em=" + f);
            var q = {
                Lk: function() {
                    return !0
                },
                Wc: g,
                Qk: p,
                zk: d,
                na: k
            };
            c === 1 && (p.push("&eme=" + m), q.encryptionKeyString = n, q.ui = function(r,
                t) {
                return function(v) {
                    var u;
                    var w = a.metadata.user_data;
                    u = c === 0 ? Mi(w, !1) : c === 1 ? Mi(w, !0, !0) : void 0;
                    var x = Qy(t.Ua, a, b, v),
                        y = Ry(t, a, b, x, c, r);
                    u ? u.then(y) : y(void 0)
                }
            });
            return q
        },
        Ry = function(a, b, c, d, e, f) {
            return function(g) {
                if (e === 0 || e === 1 || e === 2) {
                    var k = (g == null ? 0 : g.Va) ? g.Va : Ji({
                        Sd: []
                    }).Va;
                    d += "&em=" + encodeURIComponent(k)
                }
                My(d, a.format, b, c, a.endpoint, a.Ya ? f : void 0, void 0, a.attributes)
            }
        },
        Qy = function(a, b, c, d) {
            var e = a;
            if (d) {
                var f = Up({
                    za: b.metadata.source_canonical_id,
                    Mk: d
                });
                e = e.replace(c.gtm, f)
            }
            return e
        },
        Uy = function(a) {
            var b = Oh[Q.g.lb];
            a[b] = "ecwexp_" + a[b]
        },
        Xy = function(a, b, c, d, e, f) {
            var g = new Vy(2, d),
                k = f ? 2 : 1;
            (function(v, u) {
                var w = Mi(b, u, !0, f);
                w ? w.then(Wy(a, v, d)).then(function() {
                    e(v, {
                        vi: g
                    })
                }) : e(v, {
                    vi: g
                })
            })(Object.assign({}, c), !1);
            var m = zi(b),
                n = yi(m, k),
                p = n.Wc,
                q = n.na,
                r = n.encryptionKeyString,
                t = ["&em=" + n.vg, "&eme=" + n.qk];
            Uy(c);
            e(c, {
                serviceWorker: {
                    Lk: function(v) {
                        var u = v.endpoint;
                        return u === 5 || u === 8
                    },
                    Wc: p,
                    Qk: t,
                    zk: m,
                    encryptionKeyString: r,
                    na: q,
                    ui: function(v, u) {
                        return function(w) {
                            var x = Qy(u.Ua, d, c, w);
                            x += "&_swf=1";
                            var y = Mi(b, !0, !0, f),
                                A = Ry(u, d, c, x, k, v);
                            y ? y.then(A) : A(void 0)
                        }
                    }
                },
                vi: g
            })
        },
        Yy = function(a, b, c, d, e, f) {
            function g(k, m) {
                m && Uy(k);
                var n = Mi(b, m, !0, f);
                n ? n.then(Wy(a, k, d)).then(function() {
                    e(k)
                }) : e(k)
            }
            g(Object.assign({}, c), !1);
            g(c, !0)
        },
        Zy = function(a, b, c, d, e) {
            (function(f) {
                var g = Mi(b);
                g ? g.then(Wy(a,
                    f, d)).then(function() {
                    e(f)
                }) : e(f)
            })(Object.assign({}, c));
            Uy(c);
            c.ec_mode = void 0;
            e(c)
        },
        Wy = function(a, b, c) {
            return function(d) {
                var e = d.Va;
                T(122) || (b.em = e);
                (T(65) || T(105)) && d.na && d.time !== void 0 && (b._ht = Ty(Dy(d.time), e));
                d.na && $y(a, b, c);
            }
        },
        Ty = function(a, b) {
            return ["t." + (a != null ? a : ""), "l." + Dy(b.length)].join("~")
        },
        $y = function(a, b, c) {
            if (a === "user_data_web") {
                var d = eu(c.metadata.cookie_options);
                b.ecsid = d
            }
        },
        bz = function(a, b, c, d, e) {
            if (T(104)) {
                var f = Mi(d, !1);
                az(f, a, b, c, e);
                return !0
            }
            if (T(105)) {
                var g = Mi(d, Oy(b));
                az(g, a, b, c, e);
                return !0
            }
            return !1
        },
        cz = function(a, b, c, d, e) {
            var f = T(67);
            if (b === "conversion" && (T(66) || f)) return Yy(b,
                d, c, a, e, f), !0;
            var g = T(69);
            return b === "conversion" && (T(68) || g) ? (Xy(b, d, c, a, e, g), !0) : b === "conversion" && T(71) ? (Zy(b, d, c, a, e), !0) : !1
        },
        dz = function(a, b, c, d) {
            if (!T(62) || b !== "user_data_web") return !1;
            c.random = ob();
            var e = Object.assign({}, c),
                f = Sy(a, c, 0),
                g = Sy(a, e, 1);
            f.na && $y(b, c, a);
            d(c, {
                serviceWorker: f
            });
            d(e, {
                serviceWorker: g
            });
            return !0
        },
        az = function(a, b, c, d, e) {
            if (a) try {
                a.then(Wy(c, d, b)).then(function() {
                    e(d)
                });
                return
            } catch (f) {}
            e(d)
        },
        ez = function(a, b, c, d, e) {
            var f = b.Ua,
                g = b.format,
                k = b.Ya,
                m = b.attributes,
                n = b.endpoint;
            return function(p) {
                Ii(c.zk).then(function(q) {
                    var r = Ji(q),
                        t = Qy(f, e, d, p);
                    My(t + "&em=" + encodeURIComponent(r.Va), g, e, d, n, k ? a : void 0, void 0, m)
                })
            }
        },
        gz = function(a) {
            if (a.metadata.hit_type === "page_view") Fx(a);
            else {
                var b = T(24) ? qb(a.m.onFailure) : void 0;
                fz(a, function(c, d) {
                    T(122) && delete c.em;
                    for (var e = Ky(a, c).Om, f = ((d == null ? void 0 : d.vi) || new Vy(1, a)).C(e.filter(function(A) {
                            return A.Ya
                        }).length), g = {}, k = 0; k < e.length; g = {
                            Ve: void 0,
                            Ue: void 0,
                            Xd: void 0,
                            Dh: void 0,
                            Nh: void 0
                        }, k++) {
                        var m = e[k],
                            n = m.Ua,
                            p = m.format;
                        g.Xd = m.Ya;
                        g.Dh = m.attributes;
                        g.Nh = m.endpoint;
                        g.Ve = m.Ve;
                        g.Ue = m.Ue;
                        var q = void 0,
                            r = (q = d) == null ? void 0 : q.serviceWorker;
                        if (r)
                            if (r.Lk(e[k])) {
                                var t = r.ui ? r.ui(f, e[k]) : ez(f, e[k], r, c, a),
                                    v = r,
                                    u = v.Wc,
                                    w = v.encryptionKeyString,
                                    x = "" + n + v.Qk.join("");
                                cw(x, u, function(A) {
                                    return function(C) {
                                        Ly(C.data, a, A.Nh);
                                        A.Xd && typeof f === "function" && f()
                                    }
                                }(g), t, w)
                            } else f();
                        else {
                            var y = b;
                            g.Ve && g.Ue && (y = function(A) {
                                return function() {
                                    My(A.Ve, 5, a, c, A.Ue, A.Xd ? f : void 0, A.Xd ? b : void 0, A.Dh)
                                }
                            }(g));
                            My(n, p, a, c, g.Nh, g.Xd ? f : void 0, g.Xd ? y : void 0, g.Dh)
                        }
                    }
                })
            }
        },
        Vy = function(a, b) {
            this.j = a;
            this.onSuccess = b.m.onSuccess
        };
    Vy.prototype.C = function(a) {
        var b = this;
        return zb(function() {
            b.H()
        }, a || 1)
    };
    Vy.prototype.H = function() {
        this.j--;
        if ($a(this.onSuccess) && this.j === 0) this.onSuccess()
    };
    var fz = function(a, b) {
        var c = a.metadata.hit_type,
            d = {},
            e = {},
            f = a.metadata.event_start_timestamp_ms;
        c === "conversion" || c === "remarketing" ? (d.cv = "11", d.fst = f, d.fmt = 3, d.bg = "ffffff", d.guid = "ON", d.async = "1") : c === "ga_conversion" && (d.cv = "11", d.tid = a.target.destinationId, d.fst = f, d.fmt = 6, d.en = a.eventName);
        if (c === "conversion") {
            var g = yq();
            g > 0 && (d.gcl_ctr = g)
        }
        var k = ws(["aw", "dc"]);
        k != null && (d.gad_source = k);
        d.gtm = Up({
            za: a.metadata.source_canonical_id
        });
        c !== "remarketing" && Hp() && (d.gcs = Ip());
        d.gcd = Mp(a.m);
        Pp() && (d.dma_cps = Np());
        d.dma = Op();
        kp(tp()) && (d.tcfd = Qp());
        vj() && (d.tag_exp = vj());
        T(110) && co[1] === 1 && !go[1].isConsentGranted() && (d.limited_ads = "1");
        a.j[Q.g.Tb] && Ph(a.j[Q.g.Tb], d);
        a.j[Q.g.Ra] && Rh(a.j[Q.g.Ra], d);
        var m = a.metadata.redact_click_ids,
            n = function(Z, ca) {
                var ba = a.j[ca];
                ba && (d[Z] = m ? Fs(ba) : ba)
            };
        n("url",
            Q.g.oa);
        n("ref", Q.g.Ga);
        n("top", Q.g.Sf);
        var p = Py(a);
        p && (d.gclaw_src = p);
        for (var q = l(Object.keys(a.j)), r = q.next(); !r.done; r = q.next()) {
            var t = r.value,
                v = a.j[t];
            if (Oh.hasOwnProperty(t)) {
                var u = Oh[t];
                u && (d[u] = v)
            } else e[t] = v
        }
        Ym(d, a.j[Q.g.Fd]);
        var w = a.j[Q.g.xd];
        w !== void 0 && w !== "" && (d.vdnc = String(w));
        var x = a.j[Q.g.sd];
        x !== void 0 && (d.shf = x);
        var y = a.j[Q.g.Cc];
        y !== void 0 && (d.delc = y);
        if (T(31) && a.metadata.add_tag_timing) {
            d.tft = ob();
            var A = Ec();
            A !== void 0 && (d.tfd = Math.round(A))
        }
        c !== "ga_conversion" && (d.data = Gy(e));
        var C = a.j[Q.g.da];
        !C || c !== "conversion" && c !== "ga_conversion" || (d.iedeld = Xh(C), d.item = Sh(C));
        if (c !== "conversion" && c !== "user_data_lead" && c !== "user_data_web" || !a.metadata.user_data) b(d);
        else if (!W(Q.g.O) || T(21) && !W(Q.g.N)) d.ec_mode = void 0, b(d);
        else {
            var D = Cy(a);
            if (c !== "conversion" && T(128) && !T(122)) {
                if (d.gtm = Up({
                        za: a.metadata.source_canonical_id,
                        Mk: 3
                    }), !dz(a, c, d, b)) {
                    var E = a.metadata.is_eme_enabled || Oy(c, D),
                        I = Sy(a, d, E ? 1 : 0);
                    I.na && $y(c, d, a);
                    b(d, {
                        serviceWorker: I
                    })
                }
            } else {
                var H = a.metadata.user_data;
                if (!cz(a,
                        c, d, H, b) && !bz(a, c, d, H, b)) {
                    var O = !!a.metadata.is_eme_enabled || Oy(c, D),
                        K = Mi(H, O);
                    az(K, a, c, d, b)
                }
            }
        }
    };

    function hz(a, b) {
        if (data.entities) {
            var c = data.entities[a];
            if (c) return c[b]
        }
    };

    function iz(a, b, c) {
        c = c === void 0 ? !1 : c;
        jz().addRestriction(0, a, b, c)
    }

    function kz(a, b, c) {
        c = c === void 0 ? !1 : c;
        jz().addRestriction(1, a, b, c)
    }

    function lz() {
        var a = Hk();
        return jz().getRestrictions(1, a)
    }
    var mz = function() {
            this.container = {};
            this.j = {}
        },
        nz = function(a, b) {
            var c = a.container[b];
            c || (c = {
                _entity: {
                    internal: [],
                    external: []
                },
                _event: {
                    internal: [],
                    external: []
                }
            }, a.container[b] = c);
            return c
        };
    mz.prototype.addRestriction = function(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        if (!d || !this.j[b]) {
            var e = nz(this, b);
            a === 0 ? d ? e._entity.external.push(c) : e._entity.internal.push(c) : a === 1 && (d ? e._event.external.push(c) : e._event.internal.push(c))
        }
    };
    mz.prototype.getRestrictions = function(a, b) {
        var c = nz(this, b);
        if (a === 0) {
            var d, e;
            return [].concat(ua((c == null ? void 0 : (d = c._entity) == null ? void 0 : d.internal) || []), ua((c == null ? void 0 : (e = c._entity) == null ? void 0 : e.external) || []))
        }
        if (a === 1) {
            var f, g;
            return [].concat(ua((c == null ? void 0 : (f = c._event) == null ? void 0 : f.internal) || []), ua((c == null ? void 0 : (g = c._event) == null ? void 0 : g.external) || []))
        }
        return []
    };
    mz.prototype.getExternalRestrictions = function(a, b) {
        var c = nz(this, b),
            d, e;
        return a === 0 ? (c == null ? void 0 : (d = c._entity) == null ? void 0 : d.external) || [] : (c == null ? void 0 : (e = c._event) == null ? void 0 : e.external) || []
    };
    mz.prototype.removeExternalRestrictions = function(a) {
        var b = nz(this, a);
        b._event && (b._event.external = []);
        b._entity && (b._entity.external = []);
        this.j[a] = !0
    };

    function jz() {
        return Km("r", function() {
            return new mz
        })
    };
    var oz = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        pz = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        qz = {
            cl: ["ecl"],
            customPixels: ["customScripts",
                "html"
            ],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        rz = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");

    function sz() {
        var a = Ej("gtm.allowlist") || Ej("gtm.whitelist");
        a && U(9);
        hj && (a = ["google", "gtagfl", "lcl", "zone"]);
        oz.test(B.location && B.location.hostname) && (hj ? U(116) : (U(117), tz && (a = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."))));
        var b = a && sb(lb(a), pz),
            c = Ej("gtm.blocklist") || Ej("gtm.blacklist");
        c || (c = Ej("tagTypeBlacklist")) && U(3);
        c ? U(8) : c = [];
        oz.test(B.location && B.location.hostname) && (c = lb(c), c.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
        lb(c).indexOf("google") >= 0 && U(2);
        var d = c && sb(lb(c), qz),
            e = {};
        return function(f) {
            var g = f && f[Ke.qa];
            if (!g || typeof g !== "string") return !0;
            g = g.replace(/^_*/, "");
            if (e[g] !== void 0) return e[g];
            var k = rj[g] || [],
                m = !0;
            if (a) {
                var n;
                if (n = m) a: {
                    if (b.indexOf(g) < 0)
                        if (k && k.length > 0)
                            for (var p = 0; p < k.length; p++) {
                                if (b.indexOf(k[p]) < 0) {
                                    U(11);
                                    n = !1;
                                    break a
                                }
                            } else {
                                n = !1;
                                break a
                            }
                    n = !0
                }
                m = n
            }
            var q = !1;
            if (c) {
                var r = d.indexOf(g) >= 0;
                if (r) q = r;
                else {
                    var t = eb(d, k || []);
                    t && U(10);
                    q = t
                }
            }
            var v = !m || q;
            v || !(k.indexOf("sandboxedScripts") >= 0) || b && b.indexOf("sandboxedScripts") !==
                -1 || (v = eb(d, rz));
            return e[g] = v
        }
    }
    var tz = !1;
    tz = !0;

    function uz() {
        wk && iz(Hk(), function(a) {
            var b = vf(a.entityId),
                c;
            if (yf(b)) {
                var d = b[Ke.qa];
                if (!d) throw Error("Error: No function name given for function call.");
                var e = mf[d];
                c = !!e && !!e.runInSiloedMode
            } else c = !!hz(b[Ke.qa], 4);
            return c
        })
    }

    function vz(a, b, c, d, e) {
        if (!wz()) {
            var f = d.siloed ? Ck(a) : a;
            if (!Rk(f)) {
                Tk(f, d, e);
                var g = xz(a),
                    k = T(139) ? function() {
                        sk().container[f] && (sk().container[f].state = 3);
                        yz()
                    } : void 0;
                if (yj()) mc(xj() + "/" + g, void 0, k);
                else {
                    var m = tb(a, "GTM-"),
                        n = ck(),
                        p = c ? "/gtag/js" : "/gtm.js",
                        q = bk(b, p + g);
                    if (!q) {
                        var r = bj.Af + p;
                        n && gc && m && (r = gc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                        q = Jt("https://", "http://", r + g)
                    }
                    mc(q, void 0, k)
                }
            }
        }
    }

    function yz() {
        Vk() || hb(Wk(), function(a, b) {
            zz(a, b.transportUrl, b.context);
            U(92)
        })
    }

    function zz(a, b, c, d) {
        if (!wz()) {
            var e = c.siloed ? Ck(a) : a;
            if (!Sk(e))
                if (!T(139) && c.siloed || !Vk())
                    if (c.siloed && Uk({
                            ctid: e,
                            isDestination: !0
                        }), sk().destination[e] = {
                            state: 1,
                            context: c,
                            parent: Kk()
                        }, rk({
                            ctid: e,
                            isDestination: !0
                        }, d), yj()) mc(xj() + ("/gtd" + xz(a, !0)));
                    else {
                        var f = "/gtag/destination" + xz(a, !0),
                            g = bk(b, f);
                        g || (g = Jt("https://", "http://", bj.Af + f));
                        mc(g)
                    }
            else sk().destination[e] = {
                state: 0,
                transportUrl: b,
                context: c,
                parent: Kk()
            }, rk({
                ctid: e,
                isDestination: !0
            }, d), U(91)
        }
    }

    function xz(a, b) {
        b = b === void 0 ? !1 : b;
        var c = "?id=" + encodeURIComponent(a) + "&l=" + bj.Lb;
        if (!tb(a, "GTM-") || b) c += "&cx=c";
        c += "&gtm=" + Up();
        ck() && (c += "&sign=" + bj.yh);
        var d = uj.C;
        d === 1 ? c += "&fps=fc" : d === 2 && (c += "&fps=fe");
        return c
    }

    function wz() {
        if (Sp()) {
            return !0
        }
        return !1
    };
    var Az = function() {
        this.C = 0;
        this.j = {}
    };
    Az.prototype.addListener = function(a, b, c) {
        var d = ++this.C;
        this.j[a] = this.j[a] || {};
        this.j[a][String(d)] = {
            listener: b,
            Kb: c
        };
        return d
    };
    Az.prototype.removeListener = function(a, b) {
        var c = this.j[a],
            d = String(b);
        if (!c || !c[d]) return !1;
        delete c[d];
        return !0
    };
    var Cz = function(a, b) {
        var c = [];
        hb(Bz.j[a], function(d, e) {
            c.indexOf(e.listener) < 0 && (e.Kb === void 0 || b.indexOf(e.Kb) >= 0) && c.push(e.listener)
        });
        return c
    };

    function Dz(a, b, c) {
        return {
            entityType: a,
            indexInOriginContainer: b,
            nameInOriginContainer: c,
            originContainerId: Fk()
        }
    };
    var Fz = function(a, b) {
            this.j = !1;
            this.K = [];
            this.eventData = {
                tags: []
            };
            this.P = !1;
            this.C = this.H = 0;
            Ez(this, a, b)
        },
        Gz = function(a, b, c, d) {
            if (dj.hasOwnProperty(b) || b === "__zone") return -1;
            var e = {};
            Rc(d) && (e = Sc(d, e));
            e.id = c;
            e.status = "timeout";
            return a.eventData.tags.push(e) - 1
        },
        Hz = function(a, b, c, d) {
            var e = a.eventData.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        Iz = function(a) {
            if (!a.j) {
                for (var b = a.K, c = 0; c < b.length; c++) b[c]();
                a.j = !0;
                a.K.length = 0
            }
        },
        Ez = function(a, b, c) {
            b !== void 0 && a.Ne(b);
            c && B.setTimeout(function() {
                    Iz(a)
                },
                Number(c))
        };
    Fz.prototype.Ne = function(a) {
        var b = this,
            c = qb(function() {
                G(function() {
                    a(Fk(), b.eventData)
                })
            });
        this.j ? c() : this.K.push(c)
    };
    var Jz = function(a) {
            a.H++;
            return qb(function() {
                a.C++;
                a.P && a.C >= a.H && Iz(a)
            })
        },
        Kz = function(a) {
            a.P = !0;
            a.C >= a.H && Iz(a)
        };
    var Lz = {};

    function Mz() {
        return B[Nz()]
    }
    var Oz = function(a) {
            if (Al()) {
                var b = Mz();
                b(a + "require", "linker");
                b(a + "linker:passthrough", !0)
            }
        },
        Pz = function(a) {
            B.GoogleAnalyticsObject || (B.GoogleAnalyticsObject = a || "ga");
            var b = B.GoogleAnalyticsObject;
            if (B[b]) B.hasOwnProperty(b);
            else {
                var c = function() {
                    var d = ya.apply(0, arguments);
                    c.q = c.q || [];
                    c.q.push(d)
                };
                c.l = Number(nb());
                B[b] = c
            }
            return B[b]
        };

    function Nz() {
        return B.GoogleAnalyticsObject || "ga"
    }

    function Qz() {
        var a = Fk();
    }

    function Rz(a, b) {
        return function() {
            var c = Mz(),
                d = c && c.getByName && c.getByName(a);
            if (d) {
                var e = d.get("sendHitTask");
                d.set("sendHitTask", function(f) {
                    var g = f.get("hitPayload"),
                        k = f.get("hitCallback"),
                        m = g.indexOf("&tid=" + b) < 0;
                    m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                    e(f);
                    m && (f.set("hitPayload", g, !0), f.set("hitCallback", k, !0), f.set("_x_19", void 0, !0), e(f))
                })
            }
        }
    }
    var Xz = ["es", "1"],
        Yz = {},
        Zz = {};

    function $z(a, b) {
        if (lk) {
            var c;
            c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
            Yz[a] = [
                ["e", c],
                ["eid", a]
            ];
            Vn(a)
        }
    }

    function aA(a) {
        var b = a.eventId,
            c = a.Xc;
        if (!Yz[b]) return [];
        var d = [];
        Zz[b] || d.push(Xz);
        d.push.apply(d, ua(Yz[b]));
        c && (Zz[b] = !0);
        return d
    };
    var bA = {},
        cA = {},
        dA = {};

    function eA(a, b, c, d) {
        lk && T(117) && ((d === void 0 ? 0 : d) ? (dA[b] = dA[b] || 0, ++dA[b]) : c !== void 0 ? (cA[a] = cA[a] || {}, cA[a][b] = Math.round(c)) : (bA[a] = bA[a] || {}, bA[a][b] = (bA[a][b] || 0) + 1))
    }

    function fA(a) {
        var b = a.eventId,
            c = a.Xc,
            d = bA[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete bA[b];
        return e.length ? [
            ["md", e.join(".")]
        ] : []
    }

    function gA(a) {
        var b = a.eventId,
            c = a.Xc,
            d = cA[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete cA[b];
        return e.length ? [
            ["mtd", e.join(".")]
        ] : []
    }

    function hA() {
        for (var a = [], b = l(Object.keys(dA)), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            a.push("" + d + dA[d])
        }
        return a.length ? [
            ["mec", a.join(".")]
        ] : []
    };
    var iA = {},
        jA = {};

    function kA(a, b, c) {
        if (lk && b) {
            var d = fk(b);
            iA[a] = iA[a] || [];
            iA[a].push(c + d);
            var e = (yf(b) ? "1" : "2") + d;
            jA[a] = jA[a] || [];
            jA[a].push(e);
            Vn(a)
        }
    }

    function lA(a) {
        var b = a.eventId,
            c = a.Xc,
            d = [],
            e = iA[b] || [];
        e.length && d.push(["tr", e.join(".")]);
        var f = jA[b] || [];
        f.length && d.push(["ti", f.join(".")]);
        c && (delete iA[b], delete jA[b]);
        return d
    };

    function mA(a, b, c, d) {
        var e = kf[a],
            f = nA(a, b, c, d);
        if (!f) return null;
        var g = zf(e[Ke.bk], c, []);
        if (g && g.length) {
            var k = g[0];
            f = mA(k.index, {
                onSuccess: f,
                onFailure: k.rk === 1 ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function nA(a, b, c, d) {
        function e() {
            function w() {
                Ol(3);
                var I = ob() - E;
                kA(c.id, f, "7");
                Hz(c.vc, C, "exception", I);
                T(102) && zy(c, f, Hx.J.dk);
                D || (D = !0, k())
            }
            if (f[Ke.Ll]) k();
            else {
                var x = xf(f, c, []),
                    y = x[Ke.Zk];
                if (y != null)
                    for (var A = 0; A < y.length; A++)
                        if (!W(y[A])) {
                            k();
                            return
                        }
                var C = Gz(c.vc, String(f[Ke.qa]), Number(f[Ke.Me]), x[Ke.METADATA]),
                    D = !1;
                x.vtp_gtmOnSuccess = function() {
                    if (!D) {
                        D = !0;
                        var I = ob() - E;
                        kA(c.id, kf[a], "5");
                        Hz(c.vc, C, "success", I);
                        T(102) && zy(c, f, Hx.J.fk);
                        g()
                    }
                };
                x.vtp_gtmOnFailure = function() {
                    if (!D) {
                        D = !0;
                        var I = ob() -
                            E;
                        kA(c.id, kf[a], "6");
                        Hz(c.vc, C, "failure", I);
                        T(102) && zy(c, f, Hx.J.ek);
                        k()
                    }
                };
                x.vtp_gtmTagId = f.tag_id;
                x.vtp_gtmEventId = c.id;
                c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
                kA(c.id, f, "1");
                T(102) && yy(c, f);
                var E = ob();
                try {
                    Af(x, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (I) {
                    w(I)
                }
                T(102) && zy(c, f, Hx.J.gk)
            }
        }
        var f = kf[a],
            g = b.onSuccess,
            k = b.onFailure,
            m = b.terminate;
        if (c.isBlocked(f)) return null;
        var n = zf(f[Ke.hk], c, []);
        if (n && n.length) {
            var p = n[0],
                q = mA(p.index, {
                    onSuccess: g,
                    onFailure: k,
                    terminate: m
                }, c, d);
            if (!q) return null;
            g = q;
            k = p.rk ===
                2 ? m : q
        }
        if (f[Ke.Sj] || f[Ke.Nl]) {
            var r = f[Ke.Sj] ? lf : c.Dn,
                t = g,
                v = k;
            if (!r[a]) {
                var u = oA(a, r, qb(e));
                g = u.onSuccess;
                k = u.onFailure
            }
            return function() {
                r[a](t, v)
            }
        }
        return e
    }

    function oA(a, b, c) {
        var d = [],
            e = [];
        b[a] = pA(d, e, c);
        return {
            onSuccess: function() {
                b[a] = qA;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = rA;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function pA(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function qA(a) {
        a()
    }

    function rA(a, b) {
        b()
    };
    var uA = function(a, b) {
        for (var c = [], d = 0; d < kf.length; d++)
            if (a[d]) {
                var e = kf[d];
                var f = Jz(b.vc);
                try {
                    var g = mA(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var k = e[Ke.qa];
                        if (!k) throw Error("Error: No function name given for function call.");
                        var m = mf[k];
                        c.push({
                            Pk: d,
                            Ek: (m ? m.priorityOverride || 0 : 0) || hz(e[Ke.qa], 1) || 0,
                            execute: g
                        })
                    } else sA(d, b), f()
                } catch (p) {
                    f()
                }
            }
        c.sort(tA);
        for (var n = 0; n < c.length; n++) c[n].execute();
        return c.length >
            0
    };

    function vA(a, b) {
        if (!Bz) return !1;
        var c = a["gtm.triggers"] && String(a["gtm.triggers"]),
            d = Cz(a.event, c ? String(c).split(",") : []);
        if (!d.length) return !1;
        for (var e = 0; e < d.length; ++e) {
            var f = Jz(b);
            try {
                d[e](a, f)
            } catch (g) {
                f()
            }
        }
        return !0
    }

    function tA(a, b) {
        var c, d = b.Ek,
            e = a.Ek;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (c !== 0) f = c;
        else {
            var g = a.Pk,
                k = b.Pk;
            f = g > k ? 1 : g < k ? -1 : 0
        }
        return f
    }

    function sA(a, b) {
        if (lk) {
            var c = function(d) {
                var e = b.isBlocked(kf[d]) ? "3" : "4",
                    f = zf(kf[d][Ke.bk], b, []);
                f && f.length && c(f[0].index);
                kA(b.id, kf[d], e);
                var g = zf(kf[d][Ke.hk], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var wA = !1,
        Bz;

    function xA() {
        Bz || (Bz = new Az);
        return Bz
    }

    function yA(a) {
        var b = a["gtm.uniqueEventId"],
            c = a["gtm.priorityId"],
            d = a.event;
        if (T(102)) {}
        if (d === "gtm.js") {
            if (wA) return !1;
            wA = !0
        }
        var e = !1,
            f = lz(),
            g = Sc(a, null);
        if (!f.every(function(t) {
                return t({
                    originalEventData: g
                })
            })) {
            if (d !== "gtm.js" && d !== "gtm.init" && d !== "gtm.init_consent") return !1;
            e = !0
        }
        $z(b, d);
        var k = a.eventCallback,
            m = a.eventTimeout,
            n = {
                id: b,
                priorityId: c,
                name: d,
                isBlocked: zA(g, e),
                Dn: [],
                logMacroError: function() {
                    U(6);
                    Ol(0)
                },
                cachedModelValues: AA(),
                vc: new Fz(function() {
                    if (T(102)) {}
                    k &&
                        k.apply(k, Array.prototype.slice.call(arguments, 0))
                }, m),
                originalEventData: g
            };
        T(117) && lk && (n.reportMacroDiscrepancy = eA);
        T(102) && uy(n.id, n.name);
        var p = Gf(n);
        T(102) && vy(n.id, n.name);
        e && (p = BA(p));
        if (T(102)) {}
        var q = uA(p, n),
            r = vA(a, n.vc);
        Kz(n.vc);
        d !== "gtm.js" && d !== "gtm.sync" || Qz();
        return CA(p, q) || r
    }

    function AA() {
        var a = {};
        a.event = Jj("event", 1);
        a.ecommerce = Jj("ecommerce", 1);
        a.gtm = Jj("gtm");
        a.eventModel = Jj("eventModel");
        return a
    }

    function zA(a, b) {
        var c = sz();
        return function(d) {
            if (c(d)) return !0;
            var e = d && d[Ke.qa];
            if (!e || typeof e !== "string") return !0;
            e = e.replace(/^_*/, "");
            var f, g = Hk();
            f = jz().getRestrictions(0, g);
            var k = a;
            b && (k = Sc(a, null), k["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER);
            for (var m = rj[e] || [], n = l(f), p = n.next(); !p.done; p = n.next()) {
                var q = p.value;
                try {
                    if (!q({
                            entityId: e,
                            securityGroups: m,
                            originalEventData: k
                        })) return !0
                } catch (r) {
                    return !0
                }
            }
            return !1
        }
    }

    function BA(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(kf[c][Ke.qa]);
                if (cj[d] || kf[c][Ke.Ol] !== void 0 || hz(d, 2)) b[c] = !0
            }
        return b
    }

    function CA(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && kf[c] && !dj[String(kf[c][Ke.qa])]) return !0;
        return !1
    }

    function DA() {
        T(8) && xA().addListener("gtm.init", function(a, b) {
            uj.P = !0;
            il();
            b()
        })
    };

    function EA() {
        var a, b = Xj(B.location.href);
        (a = b.hostname + b.pathname) && el("dl", encodeURIComponent(a));
        var c;
        var d = Pf.ctid;
        if (d) {
            var e = vk.Ge ? 1 : 0,
                f, g = Jk(Kk());
            f = g && g.context;
            c = d + ";" + Pf.canonicalContainerId + ";" + (f && f.fromContainerExecution ? 1 : 0) + ";" + (f && f.source || 0) + ";" + e
        } else c = void 0;
        var k = c;
        k && el("tdp", k);
        var m = ap(!0);
        m !== void 0 && el("frm", String(m))
    };
    var FA = !1,
        GA = 0,
        HA = [];

    function IA(a) {
        if (!FA) {
            var b = F.createEventObject,
                c = F.readyState === "complete",
                d = F.readyState === "interactive";
            if (!a || a.type !== "readystatechange" || c || !b && d) {
                FA = !0;
                for (var e = 0; e < HA.length; e++) G(HA[e])
            }
            HA.push = function() {
                for (var f = ya.apply(0, arguments), g = 0; g < f.length; g++) G(f[g]);
                return 0
            }
        }
    }

    function JA() {
        if (!FA && GA < 140) {
            GA++;
            try {
                var a, b;
                (b = (a = F.documentElement).doScroll) == null || b.call(a, "left");
                IA()
            } catch (c) {
                B.setTimeout(JA, 50)
            }
        }
    }

    function KA() {
        FA = !1;
        GA = 0;
        if (F.readyState === "interactive" && !F.createEventObject || F.readyState === "complete") IA();
        else {
            sc(F, "DOMContentLoaded", IA);
            sc(F, "readystatechange", IA);
            if (F.createEventObject && F.documentElement.doScroll) {
                var a = !0;
                try {
                    a = !B.frameElement
                } catch (b) {}
                a && JA()
            }
            sc(B, "load", IA)
        }
    }

    function LA(a) {
        FA ? a() : HA.push(a)
    };
    var MA = 0;
    var NA = {},
        OA = {};

    function PA(a, b) {
        for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
                ji: void 0,
                Rh: void 0
            }, f++) {
            var g = a[f];
            if (g.indexOf("-") >= 0) {
                if (e.ji = an(g, b), e.ji) {
                    var k = xk ? xk : Ek();
                    cb(k, function(r) {
                        return function(t) {
                            return r.ji.destinationId === t
                        }
                    }(e)) ? c.push(g) : d.push(g)
                }
            } else {
                var m = NA[g] || [];
                e.Rh = {};
                m.forEach(function(r) {
                    return function(t) {
                        r.Rh[t] = !0
                    }
                }(e));
                for (var n = Ak(), p = 0; p < n.length; p++)
                    if (e.Rh[n[p]]) {
                        c = c.concat(Dk());
                        break
                    }
                var q = OA[g] || [];
                q.length && (c = c.concat(q))
            }
        }
        return {
            bn: c,
            gn: d
        }
    }

    function QA(a) {
        hb(NA, function(b, c) {
            var d = c.indexOf(a);
            d >= 0 && c.splice(d, 1)
        })
    }

    function RA(a) {
        hb(OA, function(b, c) {
            var d = c.indexOf(a);
            d >= 0 && c.splice(d, 1)
        })
    }
    var SA = "HA GF G UA AW DC MC".split(" "),
        TA = !1,
        UA = !1;

    function VA(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Om()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var WA = void 0,
        XA = void 0;

    function YA(a, b, c) {
        var d = Sc(a, null);
        d.eventId = void 0;
        d.inheritParentConfig = void 0;
        Object.keys(b).some(function(f) {
            return b[f] !== void 0
        }) && U(136);
        var e = Sc(b, null);
        Sc(c, e);
        lu(hu(Ak()[0], e), a.eventId, d)
    }

    function ZA(a) {
        for (var b = l([Q.g.Jc, Q.g.Cb]), c = b.next(); !c.done; c = b.next()) {
            var d = c.value,
                e = a && a[d] || mo.j[d];
            if (e) return e
        }
    }
    var $A = {
            config: function(a, b) {
                var c = VA(a, b);
                if (!(a.length < 2) && z(a[1])) {
                    var d = {};
                    if (a.length > 2) {
                        if (a[2] !== void 0 && !Rc(a[2]) || a.length > 3) return;
                        d = a[2]
                    }
                    var e = an(a[1], b.isGtmEvent);
                    if (e) {
                        var f, g, k;
                        a: {
                            if (!vk.Ge) {
                                var m = Jk(Kk());
                                if (Xk(m)) {
                                    var n = m.parent,
                                        p = n.isDestination;
                                    k = {
                                        nn: Jk(n),
                                        Zm: p
                                    };
                                    break a
                                }
                            }
                            k = void 0
                        }
                        var q = k;
                        q && (f = q.nn, g = q.Zm);
                        $z(c.eventId, "gtag.config");
                        var r = e.destinationId,
                            t = e.id !== r;
                        if (t ? Dk().indexOf(r) === -1 : Ak().indexOf(r) === -1) {
                            if (!b.inheritParentConfig && !d[Q.g.Rb]) {
                                var v = ZA(d);
                                if (t) zz(r, v, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                });
                                else if (f !== void 0 && f.containers.indexOf(r) !== -1) {
                                    var u = d;
                                    WA ? YA(b, u, WA) : XA || (XA = Sc(u, null))
                                } else vz(r, v, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        } else {
                            if (f && (U(128), g && U(130), b.inheritParentConfig)) {
                                var w;
                                var x = d;
                                XA ? (YA(b, XA, x), w = !1) : (!x[Q.g.rc] && fj && WA || (WA = Sc(x, null)), w = !0);
                                w && f.containers && f.containers.join(",");
                                return
                            }
                            mk && (MA === 1 && (cl.mcc = !1), MA = 2);
                            if (fj && !t && !d[Q.g.rc]) {
                                var y = UA;
                                UA = !0;
                                if (y) return
                            }
                            TA || U(43);
                            if (!b.noTargetGroup)
                                if (t) {
                                    RA(e.id);
                                    var A = e.id,
                                        C = d[Q.g.ye] || "default";
                                    C = String(C).split(",");
                                    for (var D = 0; D < C.length; D++) {
                                        var E = OA[C[D]] || [];
                                        OA[C[D]] = E;
                                        E.indexOf(A) < 0 && E.push(A)
                                    }
                                } else {
                                    QA(e.id);
                                    var I = e.id,
                                        H = d[Q.g.ye] || "default";
                                    H = H.toString().split(",");
                                    for (var O = 0; O < H.length; O++) {
                                        var K = NA[H[O]] || [];
                                        NA[H[O]] = K;
                                        K.indexOf(I) < 0 && K.push(I)
                                    }
                                }
                            delete d[Q.g.ye];
                            var Z = b.eventMetadata || {};
                            Z.hasOwnProperty("is_external_event") || (Z.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata = Z;
                            delete d[Q.g.ud];
                            for (var ca = t ? [e.id] : Dk(), ba = 0; ba < ca.length; ba++) {
                                var aa =
                                    d,
                                    P = ca[ba],
                                    ma = Sc(b, null),
                                    ia = an(P, ma.isGtmEvent);
                                ia && mo.push("config", [aa], ia, ma)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (a.length === 3) {
                    U(39);
                    var c = VA(a, b),
                        d = a[1],
                        e;
                    if (T(134)) {
                        var f = {},
                            g = Kt(a[2]),
                            k;
                        for (k in g)
                            if (g.hasOwnProperty(k)) {
                                var m = g[k];
                                f[k] = k === Q.g.Yd ? Array.isArray(m) ? NaN : Number(m) : k === Q.g.sb ? (Array.isArray(m) ? m : [m]).map(Lt) : Mt(m)
                            }
                        e = f
                    } else e = a[2];
                    var n = e;
                    b.fromContainerExecution || (n[Q.g.O] && U(139), n[Q.g.ra] && U(140));
                    d === "default" ? wm(n) : d === "update" ? ym(n, c) : d === "declare" && b.fromContainerExecution && vm(n)
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(a.length < 2) && z(c)) {
                    var d = void 0;
                    if (a.length > 2) {
                        if (!Rc(a[2]) && a[2] !== void 0 || a.length > 3) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        g = (f.event = c, f);
                    e && (g.eventModel = Sc(e, null), e[Q.g.ud] && (g.eventCallback = e[Q.g.ud]), e[Q.g.ve] && (g.eventTimeout = e[Q.g.ve]));
                    var k = VA(a, b),
                        m = k.eventId,
                        n = k.priorityId;
                    g["gtm.uniqueEventId"] = m;
                    n && (g["gtm.priorityId"] = n);
                    if (c === "optimize.callback") return g.eventModel = g.eventModel || {}, g;
                    var p;
                    var q = d,
                        r = q && q[Q.g.oc];
                    r === void 0 && (r = Ej(Q.g.oc, 2), r === void 0 && (r =
                        "default"));
                    if (z(r) || Array.isArray(r)) {
                        var t;
                        t = b.isGtmEvent ? z(r) ? [r] : r : r.toString().replace(/\s+/g, "").split(",");
                        var v = PA(t, b.isGtmEvent),
                            u = v.bn,
                            w = v.gn;
                        if (w.length)
                            for (var x = ZA(q), y = 0; y < w.length; y++) {
                                var A = an(w[y], b.isGtmEvent);
                                if (A) {
                                    var C = A.destinationId,
                                        D;
                                    if (D = T(137)) {
                                        var E;
                                        if (!(E = tb(C, "siloed_"))) {
                                            var I = A.destinationId,
                                                H = sk().destination[I];
                                            E = !!H && H.state === 0
                                        }
                                        D = E
                                    }
                                    D || zz(C, x, {
                                        source: 3,
                                        fromContainerExecution: b.fromContainerExecution
                                    })
                                }
                            }
                        p = bn(u, b.isGtmEvent)
                    } else p = void 0;
                    var O = p;
                    if (O) {
                        $z(m, c);
                        for (var K = [], Z = 0; Z < O.length; Z++) {
                            var ca = O[Z],
                                ba = Sc(b, null);
                            if (SA.indexOf(Lk(ca.prefix)) !== -1) {
                                var aa = Sc(d, null),
                                    P = ba.eventMetadata || {};
                                P.hasOwnProperty("is_external_event") || (P.is_external_event = !ba.fromContainerExecution);
                                ba.eventMetadata = P;
                                delete aa[Q.g.ud];
                                no(c, aa, ca.id, ba);
                                mk && P.source_canonical_id === void 0 && MA === 0 && (el("mcc", "1"), MA = 1)
                            }
                            K.push(ca.id)
                        }
                        g.eventModel = g.eventModel || {};
                        O.length > 0 ? g.eventModel[Q.g.oc] = K.join() : delete g.eventModel[Q.g.oc];
                        TA || U(43);
                        b.noGtmEvent === void 0 && b.eventMetadata && b.eventMetadata.syn_or_mod &&
                            (b.noGtmEvent = !0);
                        g.eventModel[Q.g.nc] && (b.noGtmEvent = !0);
                        return b.noGtmEvent ? void 0 : g
                    }
                }
            },
            get: function(a, b) {
                U(53);
                if (a.length === 4 && z(a[1]) && z(a[2]) && $a(a[3])) {
                    var c = an(a[1], b.isGtmEvent),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        TA || U(43);
                        var f = ZA();
                        if (!cb(Dk(), function(k) {
                                return c.destinationId === k
                            })) zz(c.destinationId, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                        else if (SA.indexOf(Lk(c.prefix)) !== -1) {
                            VA(a, b);
                            var g = {};
                            Sc((g[Q.g.yb] = d, g[Q.g.Pb] = e, g), null);
                            oo(d, function(k) {
                                    G(function() {
                                        e(k)
                                    })
                                },
                                c.id, b)
                        }
                    }
                }
            },
            js: function(a, b) {
                if (a.length === 2 && a[1].getTime) {
                    TA = !0;
                    var c = VA(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function(a) {
                if (a.length === 3 && z(a[1]) && $a(a[2])) {
                    if (Mf(a[1], a[2]), U(74), a[1] === "all") {
                        U(75);
                        var b = !1;
                        try {
                            b = a[2](Fk(), "unknown", {})
                        } catch (c) {}
                        b || U(76)
                    }
                } else U(73)
            },
            set: function(a, b) {
                var c = void 0;
                a.length === 2 && Rc(a[1]) ? c = Sc(a[1], null) : a.length === 3 && z(a[1]) && (c = {}, Rc(a[2]) || Array.isArray(a[2]) ?
                    c[a[1]] = Sc(a[2], null) : c[a[1]] = a[2]);
                if (c) {
                    var d = VA(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    Sc(c, null);
                    var g = Sc(c, null);
                    mo.push("set", [g], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        aB = {
            policy: !0
        };
    var cB = function(a) {
        if (bB(a)) return a;
        this.value = a
    };
    cB.prototype.getUntrustedMessageValue = function() {
        return this.value
    };
    var bB = function(a) {
        return !a || Pc(a) !== "object" || Rc(a) ? !1 : "getUntrustedMessageValue" in a
    };
    cB.prototype.getUntrustedMessageValue = cB.prototype.getUntrustedMessageValue;
    var dB = !1,
        eB = [];

    function fB() {
        if (!dB) {
            dB = !0;
            for (var a = 0; a < eB.length; a++) G(eB[a])
        }
    }

    function gB(a) {
        dB ? G(a) : eB.push(a)
    };
    var hB = 0,
        iB = {},
        jB = [],
        kB = [],
        lB = !1,
        mB = !1;

    function nB(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }

    function oB(a, b, c) {
        a.eventCallback = b;
        c && (a.eventTimeout = c);
        return pB(a)
    }

    function qB(a, b) {
        if (!ab(b) || b < 0) b = 0;
        var c = Jm[bj.Lb],
            d = 0,
            e = !1,
            f = void 0;
        f = B.setTimeout(function() {
            e || (e = !0, a());
            f = void 0
        }, b);
        return function() {
            var g = c ? c.subscribers : 1;
            ++d === g && (f && (B.clearTimeout(f), f = void 0), e || (a(), e = !0))
        }
    }

    function rB(a, b) {
        var c = a._clear || b.overwriteModelFields;
        hb(a, function(e, f) {
            e !== "_clear" && (c && Hj(e), Hj(e, f))
        });
        oj || (oj = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        typeof d !== "number" && (d = Om(), a["gtm.uniqueEventId"] = d, Hj("gtm.uniqueEventId", d));
        return yA(a)
    }

    function sB(a) {
        if (a == null || typeof a !== "object") return !1;
        if (a.event) return !0;
        if (ib(a)) {
            var b = a[0];
            if (b === "config" || b === "event" || b === "js" || b === "get") return !0
        }
        return !1
    }

    function tB() {
        var a;
        if (kB.length) a = kB.shift();
        else if (jB.length) a = jB.shift();
        else return;
        var b;
        var c = a;
        if (lB || !sB(c.message)) b = c;
        else {
            lB = !0;
            var d = c.message["gtm.uniqueEventId"];
            typeof d !== "number" && (T(107) && (Om(), Om()), d = c.message["gtm.uniqueEventId"] = Om());
            var e = {},
                f = {
                    message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                    messageContext: {
                        eventId: d - 2
                    }
                },
                g = {},
                k = {
                    message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
                    messageContext: {
                        eventId: d - 1
                    }
                };
            jB.unshift(k, c);
            T(8) || mk && il();
            b = f
        }
        return b
    }

    function uB() {
        for (var a = !1, b; !mB && (b = tB());) {
            mB = !0;
            delete Bj.eventModel;
            Dj();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (d == null) mB = !1;
            else {
                e.fromContainerExecution && Ij();
                try {
                    if ($a(d)) try {
                        d.call(Fj)
                    } catch (v) {} else if (Array.isArray(d)) {
                        if (z(d[0])) {
                            var f = d[0].split("."),
                                g = f.pop(),
                                k = d.slice(1),
                                m = Ej(f.join("."), 2);
                            if (m != null) try {
                                m[g].apply(m, k)
                            } catch (v) {}
                        }
                    } else {
                        var n = void 0;
                        if (ib(d)) a: {
                            if (d.length && z(d[0])) {
                                var p = $A[d[0]];
                                if (p && (!e.fromContainerExecution || !aB[d[0]])) {
                                    n = p(d, e);
                                    break a
                                }
                            }
                            n = void 0
                        }
                        else n = d;
                        n && (a = rB(n, e) || a)
                    }
                } finally {
                    e.fromContainerExecution && Dj(!0);
                    var q = d["gtm.uniqueEventId"];
                    if (typeof q === "number") {
                        for (var r = iB[String(q)] || [], t = 0; t < r.length; t++) kB.push(vB(r[t]));
                        r.length && kB.sort(nB);
                        delete iB[String(q)];
                        q > hB && (hB = q)
                    }
                    mB = !1
                }
            }
        }
        return !a
    }

    function wB() {
        if (T(102)) {
            var a = !uj.H;
        }
        var b = uB();
        if (T(102)) {}
        try {
            var c = Fk(),
                d = B[bj.Lb].hide;
            if (d && d[c] !== void 0 && d.end) {
                d[c] = !1;
                var e = !0,
                    f;
                for (f in d)
                    if (d.hasOwnProperty(f) && d[f] ===
                        !0) {
                        e = !1;
                        break
                    }
                e && (d.end(), d.end = null)
            }
        } catch (g) {}
        return b
    }

    function ou(a) {
        if (hB < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            iB[b] = iB[b] || [];
            iB[b].push(a)
        } else kB.push(vB(a)), kB.sort(nB), G(function() {
            mB || uB()
        })
    }

    function vB(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }

    function xB() {
        function a(f) {
            var g = {};
            if (bB(f)) {
                var k = f;
                f = bB(k) ? k.getUntrustedMessageValue() : void 0;
                g.fromContainerExecution = !0
            }
            return {
                message: f,
                messageContext: g
            }
        }
        var b = hc(bj.Lb, []),
            c = Nm();
        c.pruned === !0 && U(83);
        iB = mu().get();
        nu();
        LA(function() {
            if (!c.gtmDom) {
                c.gtmDom = !0;
                var f = {};
                b.push((f.event = "gtm.dom", f))
            }
        });
        gB(function() {
            if (!c.gtmLoad) {
                c.gtmLoad = !0;
                var f = {};
                b.push((f.event = "gtm.load", f))
            }
        });
        c.subscribers = (c.subscribers || 0) + 1;
        var d = b.push;
        b.push = function() {
            var f;
            if (Jm.SANDBOXED_JS_SEMAPHORE > 0) {
                f = [];
                for (var g = 0; g < arguments.length; g++) f[g] = new cB(arguments[g])
            } else f = [].slice.call(arguments, 0);
            var k = f.map(function(q) {
                return a(q)
            });
            jB.push.apply(jB, k);
            var m = d.apply(b, f),
                n = Math.max(100, Number("1000") || 300);
            if (this.length > n)
                for (U(4), c.pruned = !0; this.length > n;) this.shift();
            var p = typeof m !== "boolean" || m;
            return uB() && p
        };
        var e = b.slice(0).map(function(f) {
            return a(f)
        });
        jB.push.apply(jB, e);
        if (!uj.H) {
            if (T(102)) {}
            G(wB)
        }
    }
    var pB = function(a) {
        return B[bj.Lb].push(a)
    };

    function yB() {
        var a;
        var b = Ik();
        if (b)
            if (b.canonicalContainerId) a = b.canonicalContainerId;
            else {
                var c, d = b.scriptContainerId || ((c = b.destinations) == null ? void 0 : c[0]);
                a = d ? "_" + d : void 0
            }
        else a = void 0;
        var e = a;
        e && el("pcid", e)
    };
    var zB = /^(https?:)?\/\//;

    function AB() {
        var a;
        var b = Jk(Kk());
        if (b) {
            for (; b.parent;) {
                var c = Jk(b.parent);
                if (!c) break;
                b = c
            }
            a = b
        } else a = void 0;
        var d = a;
        if (!d) U(144);
        else if (T(61) || d.canonicalContainerId) {
            var e;
            a: {
                var f, g = (f = d.scriptElement) == null ? void 0 : f.src;
                if (g) {
                    var k;
                    try {
                        var m;
                        k = (m = Gc()) == null ? void 0 : m.getEntriesByType("resource")
                    } catch (w) {}
                    if (k) {
                        for (var n = -1, p = l(k), q = p.next(); !q.done; q = p.next()) {
                            var r = q.value;
                            if (r.initiatorType === "script") {
                                n += 1;
                                var t = r.name,
                                    v = g;
                                T(60) && (t = t.replace(zB, ""), v = v.replace(zB, ""));
                                if (t === v) {
                                    e = n;
                                    break a
                                }
                            }
                        }
                        U(146)
                    } else U(145)
                }
                e =
                void 0
            }
            var u = e;
            u !== void 0 && (d.canonicalContainerId && el("rtg", String(d.canonicalContainerId)), el("slo", String(u)), el("hlo", d.htmlLoadOrder || "-1"), el("lst", String(d.loadScriptType || "0")))
        }
    };

    function VB() {};
    var WB = function() {};
    WB.prototype.toString = function() {
        return "undefined"
    };
    var XB = new WB;
    var ZB = function() {
            Km("rm", function() {
                return {}
            })[Hk()] = function(a) {
                if (YB.hasOwnProperty(a)) return YB[a]
            }
        },
        bC = function(a, b, c) {
            if (a instanceof $B) {
                var d = a,
                    e = d.resolve,
                    f = b,
                    g = String(Om());
                aC[g] = [f, c];
                a = e.call(d, g);
                b = Za
            }
            return {
                Pm: a,
                onSuccess: b
            }
        },
        cC = function(a) {
            var b = a ? 0 : 1;
            return function(c) {
                U(a ? 134 : 135);
                var d = aC[c];
                if (d && typeof d[b] === "function") d[b]();
                aC[c] = void 0
            }
        },
        $B = function(a) {
            this.valueOf = this.toString;
            this.resolve = function(b) {
                for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === XB ? b : a[d]);
                return c.join("")
            }
        };
    $B.prototype.toString = function() {
        return this.resolve("undefined")
    };
    var YB = {},
        aC = {};

    function dC(a, b) {
        function c(g) {
            var k = Xj(g),
                m = Rj(k, "protocol"),
                n = Rj(k, "host", !0),
                p = Rj(k, "port"),
                q = Rj(k, "path").toLowerCase().replace(/\/$/, "");
            if (m === void 0 || m === "http" && p === "80" || m === "https" && p === "443") m = "web", p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function eC(a) {
        return fC(a) ? 1 : 0
    }

    function fC(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = Sc(a, {});
                Sc({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (eC(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return og(b, c);
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var g = 0; g < kg.length; g++) {
                            var k = kg[g];
                            if (b[k] != null) {
                                f = b[k](c);
                                break a
                            }
                        }
                    } catch (m) {}
                    f = !1
                }
                return f;
            case "_ew":
                return lg(b, c);
            case "_eq":
                return pg(b, c);
            case "_ge":
                return qg(b, c);
            case "_gt":
                return sg(b, c);
            case "_lc":
                return String(b).split(",").indexOf(String(c)) >=
                    0;
            case "_le":
                return rg(b, c);
            case "_lt":
                return tg(b, c);
            case "_re":
                return ng(b, c, a.ignore_case);
            case "_sw":
                return ug(b, c);
            case "_um":
                return dC(b, c)
        }
        return !1
    };

    function gC() {
        var a;
        a = a === void 0 ? "" : a;
        var b, c;
        return ((b = data) == null ? 0 : (c = b.blob) == null ? 0 : c.hasOwnProperty(1)) ? String(data.blob[1]) : a
    };

    function hC() {
        var a = [
            ["cv", T(141) ? gC() : "39"],
            ["rv", bj.xh],
            ["tc", kf.filter(function(b) {
                return b
            }).length]
        ];
        bj.Je && a.push(["x", bj.Je]);
        vj() && a.push(["tag_exp", vj()]);
        return a
    };

    function iC() {
        T(57) && mk && B.addEventListener("securitypolicyviolation", function(a) {
            if (a.disposition === "enforce") {
                var b = wx(a.effectiveDirective);
                if (b) {
                    var c;
                    var d = vx(a.blockedURI);
                    c = d ? tx[b][d] : void 0;
                    c && (jl[String(c.endpoint)] = !0, el("csp", Object.keys(jl).join("~")))
                }
            }
        })
    };
    var jC = {},
        kC = {};

    function lC(a, b) {
        var c = mC(void 0);
        if (lk) {
            var d = String(c) + b;
            jC[a] = jC[a] || [];
            jC[a].push(d);
            kC[a] = kC[a] || [];
            kC[a].push("p" + b)
        }
    }

    function nC(a) {
        var b = a.eventId,
            c = a.Xc,
            d = [],
            e = jC[b] || [];
        e.length && d.push(["hf", e.join(".")]);
        var f = kC[b] || [];
        f.length && d.push(["ht", f.join(".")]);
        c && (delete jC[b], delete kC[b]);
        return d
    };

    function oC() {
        return !1
    }

    function pC() {
        var a = {};
        return function(b, c, d) {}
    };

    function qC() {
        var a = rC;
        return function(b, c, d) {
            var e = d && d.event;
            b === "__html" && T(106) || sC(c);
            var f = tb(b, "__cvt_") ? void 0 : 1,
                g = new Ma;
            hb(c, function(r, t) {
                var v = gd(t, void 0, f);
                v === void 0 && t !== void 0 && U(44);
                g.set(r, v)
            });
            a.j.j.C = Ef();
            var k = {
                kk: Tf(b),
                eventId: e == null ? void 0 : e.id,
                priorityId: e !== void 0 ? e.priorityId : void 0,
                Ne: e !== void 0 ? function(r) {
                    e.vc.Ne(r)
                } : void 0,
                qb: function() {
                    return b
                },
                log: function() {},
                tm: {
                    index: d == null ? void 0 : d.index,
                    type: d == null ? void 0 : d.type,
                    name: d == null ? void 0 : d.name
                },
                wn: !!hz(b, 3),
                originalEventData: e ==
                    null ? void 0 : e.originalEventData
            };
            e && e.cachedModelValues && (k.cachedModelValues = {
                gtm: e.cachedModelValues.gtm,
                ecommerce: e.cachedModelValues.ecommerce
            });
            if (oC()) {
                var m = pC(),
                    n, p;
                k.Xa = {
                    wi: [],
                    Oe: {},
                    Gb: function(r, t, v) {
                        t === 1 && (n = r);
                        t === 7 && (p = v);
                        m(r, t, v)
                    },
                    rg: oh()
                };
                k.log = function(r) {
                    var t = ya.apply(1, arguments);
                    n && m(n, 4, {
                        level: r,
                        source: p,
                        message: t
                    })
                }
            }
            var q = Ee(a, k, [b, g]);
            a.j.j.C = void 0;
            q instanceof Aa && (q.type === "return" ? q = q.data : q = void 0);
            return J(q, void 0, f)
        }
    }

    function sC(a) {
        var b = a.gtmOnSuccess,
            c = a.gtmOnFailure;
        $a(b) && (a.gtmOnSuccess = function() {
            G(b)
        });
        $a(c) && (a.gtmOnFailure = function() {
            G(c)
        })
    };

    function tC(a) {}
    tC.F = "internal.addAdsClickIds";

    function uC(a, b) {
        var c = this;
    }
    uC.publicName = "addConsentListener";
    var vC = !1;

    function wC(a) {
        for (var b = 0; b < a.length; ++b)
            if (vC) try {
                a[b]()
            } catch (c) {
                U(77)
            } else a[b]()
    }

    function xC(a, b, c) {
        var d = this,
            e;
        return e
    }
    xC.F = "internal.addDataLayerEventListener";

    function yC(a, b, c) {}
    yC.publicName = "addDocumentEventListener";

    function zC(a, b, c, d) {}
    zC.publicName = "addElementEventListener";

    function AC(a) {
        return a.D.j
    };

    function BC(a) {}
    BC.publicName = "addEventCallback";
    var CC = function(a) {
            return typeof a === "string" ? a : String(Om())
        },
        FC = function(a, b) {
            DC(a, "init", !1) || (EC(a, "init", !0), b())
        },
        DC = function(a, b, c) {
            var d = GC(a);
            return pb(d, b, c)
        },
        HC = function(a, b, c, d) {
            var e = GC(a),
                f = pb(e, b, d);
            e[b] = c(f)
        },
        EC = function(a, b, c) {
            GC(a)[b] = c
        },
        GC = function(a) {
            var b = Km("autoEventsSettings", function() {
                return {}
            });
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        IC = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": Dc(a, "className"),
                "gtm.elementId": a.for || uc(a, "id") || "",
                "gtm.elementTarget": a.formTarget ||
                    Dc(a, "target") || ""
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || Dc(a, "href") || a.src || a.code || a.codebase || "";
            return d
        };
    var KC = function(a, b, c) {
            if (!a.elements) return 0;
            for (var d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) {
                var g = a.elements[e];
                if (JC(g)) {
                    if (g.dataset[c] === d) return f;
                    f++
                }
            }
            return 0
        },
        LC = function(a) {
            if (a.form) {
                var b;
                return ((b = a.form) == null ? 0 : b.tagName) ? a.form : F.getElementById(a.form)
            }
            return xc(a, ["form"], 100)
        },
        JC = function(a) {
            var b = a.tagName.toLowerCase();
            return MC.indexOf(b) < 0 || b === "input" && NC.indexOf(a.type.toLowerCase()) >= 0 ? !1 : !0
        },
        MC = ["input", "select", "textarea"],
        NC = ["button", "hidden", "image", "reset",
            "submit"
        ];

    function RC(a) {}
    RC.F = "internal.addFormAbandonmentListener";

    function SC(a, b, c, d) {}
    SC.F = "internal.addFormData";
    var TC = {},
        UC = [],
        VC = {},
        WC = 0,
        XC = 0;

    function dD(a, b) {}
    dD.F = "internal.addFormInteractionListener";

    function kD(a, b) {}
    kD.F = "internal.addFormSubmitListener";

    function pD(a) {}
    pD.F = "internal.addGaSendListener";

    function qD(a) {
        if (!a) return {};
        var b = a.tm;
        return Dz(b.type, b.index, b.name)
    }

    function rD(a) {
        return a ? {
            originatingEntity: qD(a)
        } : {}
    };
    var tD = function(a, b, c) {
            sD().updateZone(a, b, c)
        },
        vD = function(a, b, c, d, e, f) {
            var g = sD();
            c = c && sb(c, uD);
            for (var k = g.createZone(a, c), m = 0; m < b.length; m++) {
                var n = String(b[m]);
                if (g.registerChild(n, Fk(), k)) {
                    var p = n,
                        q = a,
                        r = d,
                        t = e,
                        v = f;
                    if (tb(p, "GTM-")) vz(p, void 0, !1, {
                        source: 1,
                        fromContainerExecution: !0
                    });
                    else {
                        var u = gu("js", nb());
                        vz(p, void 0, !0, {
                            source: 1,
                            fromContainerExecution: !0
                        });
                        var w = {
                            originatingEntity: t,
                            inheritParentConfig: v
                        };
                        T(145) || lu(u, q, w);
                        lu(hu(p, r), q, w)
                    }
                }
            }
            return k
        },
        sD = function() {
            return Km("zones", function() {
                return new wD
            })
        },
        xD = {
            zone: 1,
            cn: 1,
            css: 1,
            ew: 1,
            eq: 1,
            ge: 1,
            gt: 1,
            lc: 1,
            le: 1,
            lt: 1,
            re: 1,
            sw: 1,
            um: 1
        },
        uD = {
            cl: ["ecl"],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"]
        },
        wD = function() {
            this.j = {};
            this.C = {};
            this.H = 0
        };
    h = wD.prototype;
    h.isActive = function(a, b) {
        for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
        if (!c) return !0;
        if (!this.isActive([c.ii], b)) return !1;
        for (var e = 0; e < c.yf.length; e++)
            if (this.C[c.yf[e]].Nd(b)) return !0;
        return !1
    };
    h.getIsAllowedFn = function(a, b) {
        if (!this.isActive(a, b)) return function() {
            return !1
        };
        for (var c, d = 0; d < a.length &&
            !(c = this.j[a[d]]); d++);
        if (!c) return function() {
            return !0
        };
        for (var e = [], f = 0; f < c.yf.length; f++) {
            var g = this.C[c.yf[f]];
            g.Nd(b) && e.push(g)
        }
        if (!e.length) return function() {
            return !1
        };
        var k = this.getIsAllowedFn([c.ii], b);
        return function(m, n) {
            n = n || [];
            if (!k(m, n)) return !1;
            for (var p = 0; p < e.length; ++p)
                if (e[p].H(m, n)) return !0;
            return !1
        }
    };
    h.unregisterChild = function(a) {
        for (var b = 0; b < a.length; b++) delete this.j[a[b]]
    };
    h.createZone = function(a, b) {
        var c = String(++this.H);
        this.C[c] = new yD(a, b);
        return c
    };
    h.updateZone = function(a,
        b, c) {
        var d = this.C[a];
        d && d.K(b, c)
    };
    h.registerChild = function(a, b, c) {
        var d = this.j[a];
        if (!d && Jm[a] || !d && Rk(a) || d && d.ii !== b) return !1;
        if (d) return d.yf.push(c), !1;
        this.j[a] = {
            ii: b,
            yf: [c]
        };
        return !0
    };
    var yD = function(a, b) {
        this.C = null;
        this.j = [{
            eventId: a,
            Nd: !0
        }];
        if (b) {
            this.C = {};
            for (var c = 0; c < b.length; c++) this.C[b[c]] = !0
        }
    };
    yD.prototype.K = function(a, b) {
        var c = this.j[this.j.length - 1];
        a <= c.eventId || c.Nd !== b && this.j.push({
            eventId: a,
            Nd: b
        })
    };
    yD.prototype.Nd = function(a) {
        for (var b = this.j.length - 1; b >= 0; b--)
            if (this.j[b].eventId <=
                a) return this.j[b].Nd;
        return !1
    };
    yD.prototype.H = function(a, b) {
        b = b || [];
        if (!this.C || xD[a] || this.C[a]) return !0;
        for (var c = 0; c < b.length; ++c)
            if (this.C[b[c]]) return !0;
        return !1
    };

    function zD(a) {
        var b = Jm.zones;
        return b ? b.getIsAllowedFn(Ak(), a) : function() {
            return !0
        }
    }

    function AD() {
        var a = Jm.zones;
        a && a.unregisterChild(Ak())
    }

    function BD() {
        kz(Hk(), function(a) {
            var b = a.originalEventData["gtm.uniqueEventId"],
                c = Jm.zones;
            return c ? c.isActive(Ak(), b) : !0
        });
        iz(Hk(), function(a) {
            var b, c;
            b = a.entityId;
            c = a.securityGroups;
            return zD(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c)
        })
    };
    var CD = function(a, b) {
        this.tagId = a;
        this.Qe = b
    };

    function DD(a, b) {
        var c = this,
            d = void 0;
        if (!M(a) || !Eg(b) && !Gg(b)) throw L(this.getName(), ["string", "Object|undefined"], arguments);
        var e = J(b, this.D, 1) || {},
            f = e.firstPartyUrl,
            g = e.onLoad,
            k = e.loadByDestination === !0,
            m = e.isGtmEvent === !0,
            n = e.siloed === !0;
        d = n ? Ck(a) : a;
        wC([function() {
            N(c, "load_google_tags", a, f)
        }]);
        if (k) {
            if (Sk(a)) return d
        } else if (Rk(a)) return d;
        var p = 6,
            q = AC(this);
        m && (p = 7);
        q.qb() === "__zone" && (p = 1);
        var r = {
                source: p,
                fromContainerExecution: !0,
                siloed: n
            },
            t = function(v) {
                iz(v, function(u) {
                    for (var w = jz().getExternalRestrictions(0, Hk()), x = l(w), y = x.next(); !y.done; y = x.next()) {
                        var A = y.value;
                        if (!A(u)) return !1
                    }
                    return !0
                }, !0);
                kz(v, function(u) {
                    for (var w = jz().getExternalRestrictions(1, Hk()), x = l(w), y = x.next(); !y.done; y = x.next()) {
                        var A = y.value;
                        if (!A(u)) return !1
                    }
                    return !0
                }, !0);
                g && g(new CD(a, v))
            };
        k ? zz(a, f, r, t) : vz(a, f, !tb(a, "GTM-"), r, t);
        g && q.qb() === "__zone" && vD(Number.MIN_SAFE_INTEGER, [a], null, {}, qD(AC(this)));
        return d
    }
    DD.F = "internal.loadGoogleTag";

    function ED(a) {
        return new Zc("", function(b) {
            var c = this.evaluate(b);
            if (c instanceof Zc) return new Zc("", function() {
                var d = ya.apply(0, arguments),
                    e = this,
                    f = Sc(AC(this), null);
                f.eventId = a.eventId;
                f.priorityId = a.priorityId;
                f.originalEventData = a.originalEventData;
                var g = d.map(function(m) {
                        return e.evaluate(m)
                    }),
                    k = Ia(this.D);
                k.j = f;
                return c.hb.apply(c, [k].concat(ua(g)))
            })
        })
    };

    function FD(a, b, c) {
        var d = this;
    }
    FD.F = "internal.addGoogleTagRestriction";
    var GD = {},
        HD = [];

    function OD(a, b) {}
    OD.F = "internal.addHistoryChangeListener";

    function PD(a, b, c) {}
    PD.publicName = "addWindowEventListener";

    function QD(a, b) {
        if (!M(a) || !M(b)) throw L(this.getName(), ["string", "string"], arguments);
        N(this, "access_globals", "write", a);
        N(this, "access_globals", "read", b);
        var c = a.split("."),
            d = b.split("."),
            e = [B, F],
            f = vb(c, e),
            g = vb(d, e);
        if (f === void 0 || g === void 0) return !1;
        f[c[c.length - 1]] = g[d[d.length - 1]];
        return !0
    }
    QD.publicName = "aliasInWindow";

    function RD(a, b, c) {}
    RD.F = "internal.appendRemoteConfigParameter";

    function SD(a) {
        var b;
        if (!M(a)) throw L(this.getName(), ["string", "...any"], arguments);
        N(this, "access_globals", "execute", a);
        for (var c = a.split("."), d = B, e = d[c[0]], f = 1; e && f < c.length; f++)
            if (d = e, e = e[c[f]], d === B || d === F) return;
        if (Pc(e) !== "function") return;
        for (var g = [], k = 1; k < arguments.length; k++) g.push(J(arguments[k], this.D, 2));
        var m = (0, this.D.H)(e, d, g);
        b = gd(m, this.D, 2);
        b === void 0 && m !== void 0 && U(45);
        return b
    }
    SD.publicName = "callInWindow";

    function TD(a) {}
    TD.publicName = "callLater";

    function UD(a) {}
    UD.F = "callOnDomReady";

    function VD(a) {}
    VD.F = "callOnWindowLoad";

    function WD(a, b) {
        var c;
        return c
    }
    WD.F = "internal.computeGtmParameter";

    function XD(a, b) {
        var c = this;
    }
    XD.F = "internal.consentScheduleFirstTry";

    function YD(a, b) {
        var c = this;
    }
    YD.F = "internal.consentScheduleRetry";

    function ZD(a) {
        var b;
        return b
    }
    ZD.F = "internal.copyFromCrossContainerData";

    function $D(a, b) {
        var c;
        if (!M(a) || !Og(b) && b !== null && !Gg(b)) throw L(this.getName(), ["string", "number|undefined"], arguments);
        N(this, "read_data_layer", a);
        c = (b || 2) !== 2 ? Ej(a, 1) : Gj(a, [B, F]);
        var d = gd(c, this.D, tb(AC(this).qb(), "__cvt_") ? 2 : 1);
        d === void 0 && c !== void 0 && U(45);
        return d
    }
    $D.publicName = "copyFromDataLayer";

    function aE(a) {
        var b = void 0;
        return b
    }
    aE.F = "internal.copyFromDataLayerCache";

    function bE(a) {
        var b;
        if (!M(a)) throw L(this.getName(), ["string"], arguments);
        N(this, "access_globals", "read", a);
        var c = a.split("."),
            d = vb(c, [B, F]);
        if (!d) return;
        var e = d[c[c.length - 1]];
        b = gd(e, this.D, 2);
        b === void 0 && e !== void 0 && U(45);
        return b
    }
    bE.publicName = "copyFromWindow";

    function cE(a) {
        var b = void 0;
        return gd(b, this.D, 1)
    }
    cE.F = "internal.copyKeyFromWindow";
    var dE = function(a, b, c) {
            var d = this;
            this.eventName = b;
            this.m = c;
            this.j = {};
            this.isAborted = !1;
            this.TEST_ONLY = {
                getMetadata: function() {
                    return d.metadata
                },
                setMetadata: function(e) {
                    d.metadata = e
                },
                getHitData: function() {
                    return d.j
                },
                setHitData: function(e) {
                    d.j = e
                }
            };
            this.target = a;
            this.metadata = Sc(c.eventMetadata || {}, {})
        },
        fx = function(a, b, c) {
            a.j[b] = c
        },
        eE = function(a, b) {
            b = b === void 0 ? {} : b;
            return Sc(a.j, b)
        };
    dE.prototype.copyToHitData = function(a, b, c) {
        var d = V(this.m, a);
        d === void 0 && (d = b);
        if (d !== void 0 && c !== void 0 && z(d) && T(92)) try {
            d = c(d)
        } catch (e) {}
        d !== void 0 && (this.j[a] = d)
    };
    var fE = function(a, b, c) {
            a.metadata[b] = c
        },
        gE = function(a, b) {
            b = b === void 0 ? {} : b;
            return Sc(a.metadata, b)
        },
        Fv = function(a, b, c) {
            var d = a.target.destinationId;
            T(136) && !wk && (d = Lk(d));
            var e = tu(d);
            return e && e[b] !== void 0 ? e[b] : c
        };

    function hE(a, b) {
        var c;
        return c
    }
    hE.F = "internal.copyPreHit";

    function iE(a, b) {
        var c = null;
        if (!M(a) || !M(b)) throw L(this.getName(), ["string", "string"], arguments);
        N(this, "access_globals", "readwrite", a);
        N(this, "access_globals", "readwrite", b);
        var d = [B, F],
            e = a.split("."),
            f = vb(e, d),
            g = e[e.length - 1];
        if (f === void 0) throw Error("Path " + a + " does not exist.");
        var k = f[g];
        if (k) return $a(k) ? gd(k, this.D, 2) : null;
        var m;
        k = function() {
            if (!$a(m.push)) throw Error("Object at " + b + " in window is not an array.");
            m.push.call(m, arguments)
        };
        f[g] = k;
        var n = b.split("."),
            p = vb(n, d),
            q = n[n.length - 1];
        if (p === void 0) throw Error("Path " + n + " does not exist.");
        m = p[q];
        m === void 0 && (m = [], p[q] = m);
        c = function() {
            k.apply(k, Array.prototype.slice.call(arguments, 0))
        };
        return gd(c, this.D, 2)
    }
    iE.publicName = "createArgumentsQueue";

    function jE(a) {
        return gd(function(c) {
            var d = Mz();
            if (typeof c === "function") d(function() {
                c(function(f, g, k) {
                    var m =
                        Mz(),
                        n = m && m.getByName && m.getByName(f);
                    return (new B.gaplugins.Linker(n)).decorate(g, k)
                })
            });
            else if (Array.isArray(c)) {
                var e = String(c[0]).split(".");
                b[e.length === 1 ? e[0] : e[1]] && d.apply(null, c)
            } else if (c === "isLoaded") return !!d.loaded
        }, this.D, 1)
    }
    jE.F = "internal.createGaCommandQueue";

    function kE(a) {
        if (!M(a)) throw L(this.getName(), ["string"], arguments);
        N(this, "access_globals", "readwrite", a);
        var b = a.split("."),
            c = vb(b, [B, F]),
            d = b[b.length - 1];
        if (!c) throw Error("Path " + a + " does not exist.");
        var e = c[d];
        e === void 0 && (e = [], c[d] = e);
        return gd(function() {
            if (!$a(e.push)) throw Error("Object at " + a + " in window is not an array.");
            e.push.apply(e, Array.prototype.slice.call(arguments, 0))
        }, this.D, tb(AC(this).qb(),
            "__cvt_") ? 2 : 1)
    }
    kE.publicName = "createQueue";

    function lE(a, b) {
        var c = null;
        return c
    }
    lE.F = "internal.createRegex";

    function mE() {
        var a = {};
        return a
    };

    function nE(a) {}
    nE.F = "internal.declareConsentState";

    function oE(a) {
        var b = "";
        return b
    }
    oE.F = "internal.decodeUrlHtmlEntities";

    function pE(a, b, c) {
        var d;
        return d
    }
    pE.F = "internal.decorateUrlWithGaCookies";

    function qE() {}
    qE.F = "internal.deferCustomEvents";

    function rE(a) {
        var b;
        N(this, "detect_user_provided_data", "auto");
        var c = J(a) || {},
            d = Tu({
                Od: !!c.includeSelector,
                Pd: !!c.includeVisibility,
                Te: c.excludeElementSelectors,
                Eb: c.fieldFilters,
                ug: !!c.selectMultipleElements
            });
        b = new Ma;
        var e = new Vc;
        b.set("elements", e);
        for (var f = d.elements, g = 0; g < f.length; g++) e.push(sE(f[g]));
        d.ki !== void 0 && b.set("preferredEmailElement", sE(d.ki));
        b.set("status", d.status);
        if (T(126) && c.performDataLayerSearch) {}
        return b
    }
    var tE = function(a) {
            switch (a) {
                case Ru.Mb:
                    return "email";
                case Ru.Mc:
                    return "phone_number";
                case Ru.Kc:
                    return "first_name";
                case Ru.Lc:
                    return "last_name";
                case Ru.Ch:
                    return "street";
                case Ru.wg:
                    return "city";
                case Ru.wh:
                    return "region";
                case Ru.Ie:
                    return "postal_code";
                case Ru.ae:
                    return "country"
            }
        },
        sE = function(a) {
            var b = new Ma;
            b.set("userData", a.W);
            b.set("tagName", a.tagName);
            a.querySelector !== void 0 && b.set("querySelector", a.querySelector);
            a.isVisible !== void 0 && b.set("isVisible", a.isVisible);
            if (T(34)) {} else switch (a.type) {
                case Ru.Mb:
                    b.set("type", "email")
            }
            return b
        };
    rE.F = "internal.detectUserProvidedData";
    var uE = function(a) {
            var b = xc(a, ["button", "input"], 50);
            if (!b) return null;
            var c = String(b.tagName).toLowerCase();
            if (c === "button") return b;
            if (c === "input") {
                var d = uc(b, "type");
                if (d === "button" || d === "submit" || d === "image" || d === "file" || d === "reset") return b
            }
            return null
        },
        vE = function(a, b, c) {
            var d = c.target;
            if (d) {
                var e = DC(a, "individualElementIds", []);
                if (e.length > 0) {
                    var f = IC(d, b, e);
                    pB(f)
                }
                var g = !1,
                    k = DC(a, "commonButtonIds", []);
                if (k.length > 0) {
                    var m = uE(d);
                    if (m) {
                        var n = IC(m, b, k);
                        pB(n);
                        g = !0
                    }
                }
                var p = DC(a, "selectorToTriggerIds", {}),
                    q;
                for (q in p)
                    if (p.hasOwnProperty(q)) {
                        var r = g ? p[q].filter(function(u) {
                            return k.indexOf(u) === -1
                        }) : p[q];
                        if (r.length !== 0) {
                            var t = $h(d, q);
                            if (t) {
                                var v = IC(t, b, r);
                                pB(v)
                            }
                        }
                    }
            }
        };

    function wE(a, b) {
        if (!Fg(a)) throw L(this.getName(), ["Object|undefined", "any"], arguments);
        var c = a ? J(a) : {},
            d = kb(c.matchCommonButtons),
            e = !!c.cssSelector,
            f = CC(b);
        N(this, "detect_click_events", c.matchCommonButtons, c.cssSelector);
        var g = c.useV2EventName ? "gtm.click-v2" : "gtm.click",
            k = c.useV2EventName ? "ecl" : "cl",
            m = function(p) {
                p.push(f);
                return p
            };
        if (e || d) {
            if (d && HC(k, "commonButtonIds", m, []), e) {
                var n = mb(String(c.cssSelector));
                HC(k, "selectorToTriggerIds",
                    function(p) {
                        p.hasOwnProperty(n) || (p[n] = []);
                        m(p[n]);
                        return p
                    }, {})
            }
        } else HC(k, "individualElementIds", m, []);
        FC(k, function() {
            sc(F, "click", function(p) {
                vE(k, g, p)
            }, !0)
        });
        return f
    }
    wE.F = "internal.enableAutoEventOnClick";
    var zE = function(a) {
            if (!xE) {
                var b = function() {
                    var c = F.body;
                    if (c)
                        if (yE)(new MutationObserver(function() {
                            for (var e = 0; e < xE.length; e++) G(xE[e])
                        })).observe(c, {
                            childList: !0,
                            subtree: !0
                        });
                        else {
                            var d = !1;
                            sc(c, "DOMNodeInserted", function() {
                                d || (d = !0, G(function() {
                                    d = !1;
                                    for (var e = 0; e < xE.length; e++) G(xE[e])
                                }))
                            })
                        }
                };
                xE = [];
                F.body ? b() : G(b)
            }
            xE.push(a)
        },
        yE = !!B.MutationObserver,
        xE;
    var AE = function(a) {
            a.has("PollingId") && (B.clearInterval(Number(a.get("PollingId"))), a.remove("PollingId"))
        },
        CE = function(a, b, c, d) {
            function e() {
                if (!vu(a.target)) {
                    b.has("RecentOnScreen") || b.set("RecentOnScreen", "" + BE().toString());
                    b.has("FirstOnScreen") || b.set("FirstOnScreen", "" + BE().toString());
                    var g = 0;
                    b.has("TotalVisibleTime") && (g = Number(b.get("TotalVisibleTime")));
                    g += 100;
                    b.set("TotalVisibleTime", "" + g.toString());
                    if (g >= c) {
                        var k = IC(a.target, "gtm.elementVisibility", [b.uid]),
                            m = xu(a.target);
                        k["gtm.visibleRatio"] =
                            Math.round(m * 1E3) / 10;
                        k["gtm.visibleTime"] = c;
                        k["gtm.visibleFirstTime"] = Number(b.get("FirstOnScreen"));
                        k["gtm.visibleLastTime"] = Number(b.get("RecentOnScreen"));
                        pB(k);
                        d()
                    }
                }
            }
            if (!b.has("PollingId") && (c === 0 && e(), !b.has("HasFired"))) {
                var f = B.setInterval(e, 100);
                b.set("PollingId", String(f))
            }
        },
        BE = function() {
            var a = Number(Ej("gtm.start", 2)) || 0;
            return ob() - a
        },
        DE = function(a, b) {
            this.element = a;
            this.uid = b
        };
    DE.prototype.has = function(a) {
        return !!this.element.dataset["gtmVis" + a + this.uid]
    };
    DE.prototype.get = function(a) {
        return this.element.dataset["gtmVis" +
            a + this.uid]
    };
    DE.prototype.set = function(a, b) {
        this.element.dataset["gtmVis" + a + this.uid] = b
    };
    DE.prototype.remove = function(a) {
        delete this.element.dataset["gtmVis" + a + this.uid]
    };

    function EE(a, b) {
        var c = function(v) {
                var u = new DE(v.target, p);
                v.intersectionRatio >= n ? u.has("HasFired") || CE(v, u, m, q === "ONCE" ? function() {
                    for (var w = 0; w < r.length; w++) {
                        var x = new DE(r[w], p);
                        x.set("HasFired", "1");
                        AE(x)
                    }
                    Au(t);
                    if (k) {
                        var y = d;
                        if (xE)
                            for (var A = 0; A < xE.length; A++) xE[A] === y && xE.splice(A, 1)
                    }
                } : function() {
                    u.set("HasFired", "1");
                    AE(u)
                }) : (AE(u), q === "MANY_PER_ELEMENT" && u.has("HasFired") && (u.remove("HasFired"), u.remove("TotalVisibleTime")),
                    u.remove("RecentOnScreen"))
            },
            d = function() {
                var v = !1,
                    u = null;
                if (f === "CSS") {
                    try {
                        u = Yh(g)
                    } catch (A) {}
                    v = !!u && r.length !== u.length
                } else if (f === "ID") {
                    var w = F.getElementById(g);
                    w && (u = [w], v = r.length !== 1 || r[0] !== w)
                }
                u || (u = [], v = r.length > 0);
                if (v) {
                    for (var x = 0; x < r.length; x++) AE(new DE(r[x], p));
                    r = [];
                    for (var y = 0; y < u.length; y++) r.push(u[y]);
                    t >= 0 && Au(t);
                    r.length > 0 && (t = Du(c, r, [n]))
                }
            };
        if (!Fg(a)) throw L(this.getName(), ["Object|undefined", "any"], arguments);
        N(this, "detect_element_visibility_events");
        var e = a ? J(a) : {},
            f = e.selectorType,
            g;
        switch (f) {
            case "ID":
                g = String(e.id);
                break;
            case "CSS":
                g = String(e.selector);
                break;
            default:
                throw Error("Unrecognized element selector type " + f + ". Must be one of 'ID' or 'CSS'.");
        }
        var k = !!e.useDomChangeListener,
            m = Number(e.onScreenDuration) || 0,
            n = (Number(e.onScreenRatio) || 50) / 100,
            p = CC(b),
            q = e.firingFrequency,
            r = [],
            t = -1;
        d();
        k && zE(d);
        return p
    }
    EE.F = "internal.enableAutoEventOnElementVisibility";

    function FE() {}
    FE.F = "internal.enableAutoEventOnError";
    var GE = {},
        HE = [],
        IE = {},
        JE = 0,
        KE = 0;

    function QE(a, b) {
        var c = this;
        return d
    }
    QE.F = "internal.enableAutoEventOnFormInteraction";
    var RE = function(a, b, c, d, e) {
            var f = DC("fsl", c ? "nv.mwt" : "mwt", 0),
                g;
            g = c ? DC("fsl", "nv.ids", []) : DC("fsl", "ids", []);
            if (!g.length) return !0;
            var k = IC(a, "gtm.formSubmit", g),
                m = a.action;
            m && m.tagName && (m = a.cloneNode(!1).action);
            U(121);
            if (m === "https://www.facebook.com/tr/") return U(122), !0;
            k["gtm.elementUrl"] = m;
            k["gtm.formCanceled"] = c;
            a.getAttribute("name") != null && (k["gtm.interactedFormName"] = a.getAttribute("name"));
            e && (k["gtm.formSubmitElement"] = e, k["gtm.formSubmitElementText"] = e.value);
            if (d && f) {
                if (!oB(k, qB(b,
                        f), f)) return !1
            } else oB(k, function() {}, f || 2E3);
            return !0
        },
        SE = function() {
            var a = [],
                b = function(c) {
                    return cb(a, function(d) {
                        return d.form === c
                    })
                };
            return {
                store: function(c, d) {
                    var e = b(c);
                    e ? e.button = d : a.push({
                        form: c,
                        button: d
                    })
                },
                get: function(c) {
                    var d = b(c);
                    if (d) return d.button
                }
            }
        },
        TE = function(a) {
            var b = a.target;
            return b && b !== "_self" && b !== "_parent" && b !== "_top" ? !1 : !0
        },
        UE = function() {
            var a = SE(),
                b = HTMLFormElement.prototype.submit;
            sc(F, "click", function(c) {
                var d = c.target;
                if (d) {
                    var e = xc(d, ["button", "input"], 100);
                    if (e && (e.type ===
                            "submit" || e.type === "image") && e.name && uc(e, "value")) {
                        var f = LC(e);
                        f && a.store(f, e)
                    }
                }
            }, !1);
            sc(F, "submit", function(c) {
                var d = c.target;
                if (!d) return c.returnValue;
                var e = c.defaultPrevented || c.returnValue === !1,
                    f = TE(d) && !e,
                    g = a.get(d),
                    k = !0;
                if (RE(d, function() {
                        if (k) {
                            var m = null,
                                n = {};
                            g && (m = F.createElement("input"), m.type = "hidden", m.name = g.name, m.value = g.value, d.appendChild(m), g.hasAttribute("formaction") && (n.action = d.getAttribute("action"), Wb(d, g.getAttribute("formaction"))), g.hasAttribute("formenctype") && (n.enctype =
                                d.getAttribute("enctype"), d.setAttribute("enctype", g.getAttribute("formenctype"))), g.hasAttribute("formmethod") && (n.method = d.getAttribute("method"), d.setAttribute("method", g.getAttribute("formmethod"))), g.hasAttribute("formvalidate") && (n.validate = d.getAttribute("validate"), d.setAttribute("validate", g.getAttribute("formvalidate"))), g.hasAttribute("formtarget") && (n.target = d.getAttribute("target"), d.setAttribute("target", g.getAttribute("formtarget"))));
                            b.call(d);
                            m && (d.removeChild(m), n.hasOwnProperty("action") &&
                                Wb(d, n.action), n.hasOwnProperty("enctype") && d.setAttribute("enctype", n.enctype), n.hasOwnProperty("method") && d.setAttribute("method", n.method), n.hasOwnProperty("validate") && d.setAttribute("validate", n.validate), n.hasOwnProperty("target") && d.setAttribute("target", n.target))
                        }
                    }, e, f, g)) k = !1;
                else return e || (c.preventDefault && c.preventDefault(), c.returnValue = !1), !1;
                return c.returnValue
            }, !1);
            HTMLFormElement.prototype.submit = function() {
                var c = this,
                    d = !0;
                RE(c, function() {
                    d && b.call(c)
                }, !1, TE(c)) && (b.call(c), d = !1)
            }
        };

    function VE(a, b) {
        var c = this;
        if (!Fg(a)) throw L(this.getName(), ["Object|undefined", "any"], arguments);
        var d = a && a.get("waitForTags");
        wC([function() {
            N(c, "detect_form_submit_events", {
                waitForTags: !!d
            })
        }]);
        var e = a && a.get("checkValidation"),
            f = CC(b);
        if (d) {
            var g = Number(a.get("waitForTagsTimeout"));
            g > 0 && isFinite(g) || (g = 2E3);
            var k = function(n) {
                return Math.max(g, n)
            };
            HC("fsl", "mwt", k, 0);
            e || HC("fsl", "nv.mwt", k, 0)
        }
        var m = function(n) {
            n.push(f);
            return n
        };
        HC("fsl", "ids", m, []);
        e || HC("fsl", "nv.ids", m, []);
        DC("fsl", "init", !1) || (UE(), EC("fsl", "init", !0));
        return f
    }
    VE.F = "internal.enableAutoEventOnFormSubmit";

    function $E() {
        var a = this;
    }
    $E.F = "internal.enableAutoEventOnGaSend";
    var aF = {},
        bF = [];

    function iF(a, b) {
        var c = this;
        return f
    }
    iF.F = "internal.enableAutoEventOnHistoryChange";
    var jF = ["http://", "https://", "javascript:", "file://"];
    var kF = function(a, b) {
            if (a.which === 2 || a.ctrlKey || a.shiftKey || a.altKey || a.metaKey) return !1;
            var c = Dc(b, "href");
            if (c.indexOf(":") !== -1 && !jF.some(function(k) {
                    return tb(c, k)
                })) return !1;
            var d = c.indexOf("#"),
                e = Dc(b, "target");
            if (e && e !== "_self" && e !== "_parent" && e !== "_top" || d === 0) return !1;
            if (d > 0) {
                var f = Uj(Xj(c)),
                    g = Uj(Xj(B.location.href));
                return f !== g
            }
            return !0
        },
        lF = function(a, b) {
            for (var c = Rj(Xj((b.attributes && b.attributes.formaction ? b.formAction : "") || b.action || Dc(b, "href") || b.src || b.code || b.codebase || ""), "host"),
                    d = 0; d < a.length; d++) try {
                if ((new RegExp(a[d])).test(c)) return !1
            } catch (e) {}
            return !0
        },
        mF = function() {
            function a(c) {
                var d = c.target;
                if (d && c.which !== 3 && !(c.j || c.timeStamp && c.timeStamp === b)) {
                    b = c.timeStamp;
                    d = xc(d, ["a", "area"], 100);
                    if (!d) return c.returnValue;
                    var e = c.defaultPrevented || c.returnValue === !1,
                        f = DC("lcl", e ? "nv.mwt" : "mwt", 0),
                        g;
                    g = e ? DC("lcl", "nv.ids", []) : DC("lcl", "ids", []);
                    for (var k = [], m = 0; m < g.length; m++) {
                        var n = g[m],
                            p = DC("lcl", "aff.map", {})[n];
                        p && !lF(p, d) || k.push(n)
                    }
                    if (k.length) {
                        var q = kF(c, d),
                            r = IC(d, "gtm.linkClick",
                                k);
                        r["gtm.elementText"] = vc(d);
                        r["gtm.willOpenInNewWindow"] = !q;
                        if (q && !e && f && d.href) {
                            var t = !!cb(String(Dc(d, "rel") || "").split(" "), function(x) {
                                    return x.toLowerCase() === "noreferrer"
                                }),
                                v = B[(Dc(d, "target") || "_self").substring(1)],
                                u = !0,
                                w = qB(function() {
                                    var x;
                                    if (x = u && v) {
                                        var y;
                                        a: if (t) {
                                            var A;
                                            try {
                                                A = new MouseEvent(c.type, {
                                                    bubbles: !0
                                                })
                                            } catch (C) {
                                                if (!F.createEvent) {
                                                    y = !1;
                                                    break a
                                                }
                                                A = F.createEvent("MouseEvents");
                                                A.initEvent(c.type, !0, !0)
                                            }
                                            A.j = !0;
                                            c.target.dispatchEvent(A);
                                            y = !0
                                        } else y = !1;
                                        x = !y
                                    }
                                    x && (v.location.href = Dc(d,
                                        "href"))
                                }, f);
                            if (oB(r, w, f)) u = !1;
                            else return c.preventDefault && c.preventDefault(), c.returnValue = !1
                        } else oB(r, function() {}, f || 2E3);
                        return !0
                    }
                }
            }
            var b = 0;
            sc(F, "click", a, !1);
            sc(F, "auxclick", a, !1)
        };

    function nF(a, b) {
        var c = this;
        if (!Fg(a)) throw L(this.getName(), ["Object|undefined", "any"], arguments);
        var d = J(a);
        wC([function() {
            N(c, "detect_link_click_events", d)
        }]);
        var e = d && !!d.waitForTags,
            f = d && !!d.checkValidation,
            g = d ? d.affiliateDomains : void 0,
            k = CC(b);
        if (e) {
            var m = Number(d.waitForTagsTimeout);
            m > 0 && isFinite(m) || (m = 2E3);
            var n = function(q) {
                return Math.max(m, q)
            };
            HC("lcl", "mwt", n, 0);
            f || HC("lcl", "nv.mwt", n, 0)
        }
        var p = function(q) {
            q.push(k);
            return q
        };
        HC("lcl", "ids", p, []);
        f || HC("lcl", "nv.ids", p, []);
        g && HC("lcl", "aff.map", function(q) {
            q[k] = g;
            return q
        }, {});
        DC("lcl", "init", !1) || (mF(), EC("lcl", "init", !0));
        return k
    }
    nF.F = "internal.enableAutoEventOnLinkClick";
    var oF, pF;

    function AF(a, b) {
        var c = this;
        return d
    }
    AF.F = "internal.enableAutoEventOnScroll";

    function BF(a) {
        return function() {
            if (a.limit && a.ei >= a.limit) a.pg && B.clearInterval(a.pg);
            else {
                a.ei++;
                var b = ob();
                pB({
                    event: a.eventName,
                    "gtm.timerId": a.pg,
                    "gtm.timerEventNumber": a.ei,
                    "gtm.timerInterval": a.interval,
                    "gtm.timerLimit": a.limit,
                    "gtm.timerStartTime": a.Ok,
                    "gtm.timerCurrentTime": b,
                    "gtm.timerElapsedTime": b - a.Ok,
                    "gtm.triggers": a.Jn
                })
            }
        }
    }

    function CF(a, b) {
        return f
    }
    CF.F = "internal.enableAutoEventOnTimer";
    var Yb = wa(["data-gtm-yt-inspected-"]),
        EF = ["www.youtube.com", "www.youtube-nocookie.com"],
        FF, GF = !1;

    function QF(a, b) {
        var c = this;
        return e
    }
    QF.F = "internal.enableAutoEventOnYouTubeActivity";

    function RF(a, b) {
        if (!M(a) || !Fg(b)) throw L(this.getName(), ["string", "Object|undefined"], arguments);
        var c = b ? J(b) : {},
            d = a,
            e = !1;
        return e
    }
    RF.F = "internal.evaluateBooleanExpression";
    var SF;

    function TF(a) {
        var b = !1;
        return b
    }
    TF.F = "internal.evaluateMatchingRules";
    var UF = function(a) {
            switch (a) {
                case "page_view":
                    return [Bt, At, Cw, qt, jx, Ww, Jw, Rw];
                case "call_conversion":
                    return [At, Cw];
                case "conversion":
                    return [wt, At, ex, px, bx, ox, mx, lx, kx, jx, Ww, Vw, Tw, Sw, Qw, Gw, Fw, Uw, Jw, ax, Pw, Ow, Mw, dx, $w, Bt, xt, Zw, Kw, ix, Rw, cx, Ew, Iw, Yw, Nw, gx, hx, Hw];
                case "landing_page":
                    return [wt, At, ex, px, Ww, zt, Jw, ax, dx, xt, Bt, Zw, ix, Rw, cx, Ew, Hw];
                case "remarketing":
                    return [wt, At, ex, px, bx, ox, mx, lx, kx, jx, Ww, Vw, Qw, Uw, Jw, ax, Pw, dx, xt, Bt, Zw, Kw, ix, Rw, cx, Ew, gx, Hw];
                case "user_data_lead":
                    return [wt, At, ex, px, ox, jx, Ww, Uw,
                        Jw, zt, ax, Mw, dx, xt, Bt, Zw, Kw, ix, Rw, cx, Ew, Hw
                    ];
                case "user_data_web":
                    return [wt, At, ex, px, ox, jx, Ww, Uw, Jw, zt, ax, Mw, dx, xt, Bt, Zw, Kw, ix, Rw, cx, Ew, Hw];
                default:
                    return [wt, At, ex, px, bx, ox, mx, lx, kx, jx, Ww, Vw, Tw, Sw, Qw, Gw, Fw, Uw, Jw, ax, Pw, Ow, Mw, dx, $w, xt, Bt, Zw, Kw, ix, Rw, cx, Ew, Iw, Yw, Nw, gx, hx, Hw]
            }
        },
        VF = function(a) {
            for (var b = UF(a.metadata.hit_type), c = 0; c < b.length && (b[c](a), !a.isAborted); c++);
        },
        WF = function(a, b, c, d) {
            var e = new dE(b, c, d);
            e.metadata.hit_type = a;
            e.metadata.speculative = !0;
            e.metadata.event_start_timestamp_ms = ob();
            e.metadata.speculative_in_message =
                d.eventMetadata.speculative;
            return e
        },
        XF = function(a, b, c, d) {
            function e(t, v) {
                for (var u = l(k), w = u.next(); !w.done; w = u.next()) {
                    var x = w.value;
                    x.isAborted = !1;
                    x.metadata.speculative = !0;
                    x.metadata.consent_updated = !0;
                    x.metadata.event_start_timestamp_ms = ob();
                    x.metadata.consent_event_id = t;
                    x.metadata.consent_priority_id = v
                }
            }

            function f(t) {
                for (var v = {}, u = 0; u < k.length; v = {
                        Sa: void 0
                    }, u++)
                    if (v.Sa = k[u], !t || t(v.Sa.metadata.hit_type))
                        if (!v.Sa.metadata.consent_updated || v.Sa.metadata.hit_type === "page_view" || W(q)) VF(k[u]),
                            v.Sa.metadata.speculative || v.Sa.isAborted || (gz(v.Sa), v.Sa.metadata.hit_type === "page_view" && v.Sa.j[Q.g.Rf] === void 0 && r === void 0 && (r = Vm(Pm.Le, function(w) {
                                return function() {
                                    W(Q.g.O) && (w.Sa.metadata.user_id_updated = !0, w.Sa.metadata.consent_updated = !1, w.Sa.j[Q.g.bc] = void 0, f(function(x) {
                                        return x === "page_view"
                                    }), w.Sa.metadata.user_id_updated = !1, Wm(Pm.Le, r), r = void 0)
                                }
                            }(v))))
            }
            var g = d.isGtmEvent && a === "" ? {
                id: "",
                prefix: "",
                destinationId: "",
                ids: []
            } : an(a, d.isGtmEvent);
            if (g) {
                var k = [];
                if (d.eventMetadata.hit_type_override) {
                    var m =
                        d.eventMetadata.hit_type_override;
                    Array.isArray(m) || (m = [m]);
                    for (var n = 0; n < m.length; n++) {
                        var p = WF(m[n], g, b, d);
                        p.metadata.speculative = !1;
                        k.push(p)
                    }
                } else b === Q.g.ba && (T(26) ? k.push(WF("page_view", g, b, d)) : k.push(WF("landing_page", g, b, d))), k.push(WF("conversion", g, b, d)), k.push(WF("user_data_lead", g, b, d)), k.push(WF("user_data_web", g, b, d)), k.push(WF("remarketing", g, b, d));
                var q = [Q.g.N, Q.g.O],
                    r = void 0;
                Cm(function() {
                    f();
                    var t = T(30) && !W([Q.g.ra]);
                    if (!W(q) || t) {
                        var v = q;
                        t && (v = [].concat(ua(v), [Q.g.ra]));
                        Bm(function(u) {
                            var w,
                                x, y;
                            w = u.consentEventId;
                            x = u.consentPriorityId;
                            y = u.consentTypes;
                            e(w, x);
                            y && y.length === 1 && y[0] === Q.g.ra ? f(function(A) {
                                return A === "remarketing"
                            }) : f()
                        }, v)
                    }
                }, q)
            }
        };

    function AG() {
        return Bp(7) && Bp(9) && Bp(10)
    };
    var EG = function(a, b) {
            if (!b.isGtmEvent) {
                var c = V(b, Q.g.yb),
                    d = V(b, Q.g.Pb),
                    e = V(b, c);
                if (e === void 0) {
                    var f = void 0;
                    BG.hasOwnProperty(c) ? f = BG[c] : CG.hasOwnProperty(c) && (f = CG[c]);
                    f === 1 && (f = DG(c));
                    z(f) ? Mz()(function() {
                        var g, k, m, n = (m = (g = Mz()) == null ? void 0 : (k = g.getByName) == null ? void 0 : k.call(g, a)) == null ? void 0 : m.get(f);
                        d(n)
                    }) : d(void 0)
                } else d(e)
            }
        },
        FG = function(a, b) {
            var c = a[Q.g.Sb],
                d = b + ".",
                e = a[Q.g.U] || "",
                f = c === void 0 ? !!a.use_anchor : c === "fragment",
                g = !!a[Q.g.zb];
            e = String(e).replace(/\s+/g, "").split(",");
            var k = Mz();
            k(d + "require", "linker");
            k(d + "linker:autoLink", e, f, g)
        },
        JG = function(a, b, c) {
            if (!c.isGtmEvent || !GG[a]) {
                var d = !W(Q.g.R),
                    e = function(f) {
                        var g = "gtm" + String(Om()),
                            k, m = Mz(),
                            n = HG(b, "", c),
                            p, q = n.createOnlyFields._useUp;
                        if (c.isGtmEvent || IG(b, n.createOnlyFields)) {
                            c.isGtmEvent && (k = n.createOnlyFields, n.gtmTrackerName && (k.name = g));
                            m(function() {
                                var t, v = m == null ? void 0 : (t = m.getByName) == null ? void 0 : t.call(m, b);
                                v && (p = v.get("clientId"));
                                if (!c.isGtmEvent) {
                                    var u;
                                    m == null || (u = m.remove) == null || u.call(m, b)
                                }
                            });
                            m("create", a, c.isGtmEvent ?
                                k : n.createOnlyFields);
                            d && W(Q.g.R) && (d = !1, m(function() {
                                var t, v, u = (t = Mz()) == null ? void 0 : (v = t.getByName) == null ? void 0 : v.call(t, c.isGtmEvent ? g : b);
                                !u || u.get("clientId") == p && q || (c.isGtmEvent ? (n.fieldsToSet["&gcu"] = "1", n.fieldsToSet["&sst.gcut"] = Jh[f]) : (n.fieldsToSend["&gcu"] = "1", n.fieldsToSend["&sst.gcut"] = Jh[f]), u.set(n.fieldsToSet),
                                    c.isGtmEvent ? u.send("pageview") : u.send("pageview", n.fieldsToSend))
                            }));
                            c.isGtmEvent && m(function() {
                                var t;
                                m == null || (t = m.remove) == null || t.call(m, g)
                            })
                        }
                    };
                Bm(function() {
                    return void e(Q.g.R)
                }, Q.g.R);
                Bm(function() {
                    return void e(Q.g.N)
                }, Q.g.N);
                Bm(function() {
                    return void e(Q.g.O)
                }, Q.g.O);
                c.isGtmEvent && (GG[a] = !0)
            }
        },
        KG = function(a, b) {
            ck() && b && (a[Q.g.xb] = b)
        },
        TG = function(a, b, c) {
            function d() {
                var K = ya.apply(0, arguments);
                K[0] = v ? v + "." + K[0] : "" + K[0];
                r.apply(window, K)
            }

            function e(K) {
                function Z(ia, ja) {
                    for (var Ga = 0; ja && Ga <
                        ja.length; Ga++) d(ia, ja[Ga])
                }
                var ca = c.isGtmEvent,
                    ba = ca ? LG(u) : MG(b, c);
                if (ba) {
                    var aa = {};
                    KG(aa, K);
                    d("require", "ec", "ec.js", aa);
                    ca && ba.Kh && d("set", "&cu", ba.Kh);
                    var P = ba.action;
                    if (ca || P === "impressions")
                        if (Z("ec:addImpression", ba.wk), !ca) return;
                    if (P === "promo_click" || P === "promo_view" || ca && ba.tf) {
                        var ma = ba.tf;
                        Z("ec:addPromo", ma);
                        if (ma && ma.length > 0 && P === "promo_click") {
                            ca ? d("ec:setAction", P, ba.Db) : d("ec:setAction", P);
                            return
                        }
                        if (!ca) return
                    }
                    P !== "promo_view" && P !== "impressions" && (Z("ec:addProduct", ba.Sc), d("ec:setAction",
                        P, ba.Db))
                }
            }

            function f(K) {
                if (K) {
                    var Z = {};
                    if (Rc(K))
                        for (var ca in NG) NG.hasOwnProperty(ca) && OG(NG[ca], ca, K[ca], Z);
                    KG(Z, y);
                    d("require", "linkid", Z)
                }
            }

            function g() {
                if (Sp()) {} else {
                    var K = V(c, Q.g.vj);
                    K && (d("require", K, {
                        dataLayer: bj.Lb
                    }), d("require", "render"))
                }
            }

            function k() {
                var K = V(c, Q.g.od);
                r(function() {
                    if (!c.isGtmEvent && Rc(K)) {
                        var Z = u.fieldsToSend,
                            ca, ba, aa = (ca = t()) == null ? void 0 : (ba = ca.getByName) == null ? void 0 : ba.call(ca, v),
                            P;
                        for (P in K)
                            if (K[P] !=
                                null && /^(dimension|metric)\d+$/.test(P)) {
                                var ma = void 0,
                                    ia = (ma = aa) == null ? void 0 : ma.get(DG(K[P]));
                                PG(Z, P, ia)
                            }
                    }
                })
            }

            function m(K, Z, ca) {
                ca && (Z = String(Z));
                u.fieldsToSend[K] = Z
            }

            function n() {
                if (u.displayfeatures) {
                    var K = "_dc_gtm_" + p.replace(/[^A-Za-z0-9-]/g, "");
                    d("require", "displayfeatures", void 0, {
                        cookieName: K
                    })
                }
            }
            var p = a,
                q, r = c.isGtmEvent ? Pz(V(c, "gaFunctionName")) : Pz();
            if ($a(r)) {
                var t = Mz,
                    v;
                v = c.isGtmEvent ? V(c, "name") || V(c, "gtmTrackerName") : "gtag_" + p.split("-").join("_");
                var u = HG(v, b, c);
                !c.isGtmEvent && IG(v, u.createOnlyFields) &&
                    (r(function() {
                        var K, Z;
                        t() && ((K = t()) == null || (Z = K.remove) == null || Z.call(K, v))
                    }), QG[v] = !1);
                r("create", p, u.createOnlyFields);
                var w = c.isGtmEvent && u.fieldsToSet[Q.g.xb];
                if (!c.isGtmEvent && u.createOnlyFields[Q.g.xb] || w) {
                    var x = bk(c.isGtmEvent ? u.fieldsToSet[Q.g.xb] : u.createOnlyFields[Q.g.xb], "/analytics.js");
                    x && (q = x)
                }
                var y = c.isGtmEvent ? u.fieldsToSet[Q.g.xb] : u.createOnlyFields[Q.g.xb];
                if (y) {
                    var A = c.isGtmEvent ? u.fieldsToSet[Q.g.we] : u.createOnlyFields[Q.g.we];
                    A && !QG[v] && (QG[v] = !0, r(Rz(v, A)))
                }
                c.isGtmEvent ? u.enableRecaptcha &&
                    d("require", "recaptcha", "recaptcha.js") : (k(), f(u.linkAttribution));
                var C = u[Q.g.wa];
                C && C[Q.g.U] && FG(C, v);
                d("set", u.fieldsToSet);
                if (c.isGtmEvent) {
                    if (u.enableLinkId) {
                        var D = {};
                        KG(D, y);
                        d("require", "linkid", "linkid.js", D)
                    }
                    JG(p, v, c)
                }
                if (b === Q.g.hc)
                    if (c.isGtmEvent) {
                        n();
                        if (u.remarketingLists) {
                            var E = "_dc_gtm_" + p.replace(/[^A-Za-z0-9-]/g, "");
                            d("require", "adfeatures", {
                                cookieName: E
                            })
                        }
                        e(y);
                        d("send", "pageview");
                        u.createOnlyFields._useUp && Oz(v + ".")
                    } else g(), d("send", "pageview", u.fieldsToSend);
                else b === Q.g.ba ? (g(),
                    St(p, c), V(c, Q.g.eb) && (vs(["aw", "dc"]), Oz(v + ".")), xs(["aw", "dc"]), u.sendPageView != 0 && d("send", "pageview", u.fieldsToSend), JG(p, v, c)) : b === Q.g.Za ? EG(v, c) : b === "screen_view" ? d("send", "screenview", u.fieldsToSend) : b === "timing_complete" ? (u.fieldsToSend.hitType = "timing", m("timingCategory", u.eventCategory, !0), c.isGtmEvent ? m("timingVar", u.timingVar, !0) : m("timingVar", u.name, !0), m("timingValue", jb(u.value)), u.eventLabel !== void 0 && m("timingLabel", u.eventLabel, !0), d("send", u.fieldsToSend)) : b === "exception" ? d("send",
                    "exception", u.fieldsToSend) : b === "" && c.isGtmEvent || (b === "track_social" && c.isGtmEvent ? (u.fieldsToSend.hitType = "social", m("socialNetwork", u.socialNetwork, !0), m("socialAction", u.socialAction, !0), m("socialTarget", u.socialTarget, !0)) : ((c.isGtmEvent || RG[b]) && e(y), c.isGtmEvent && n(), u.fieldsToSend.hitType = "event", m("eventCategory", u.eventCategory, !0), m("eventAction", u.eventAction || b, !0), u.eventLabel !== void 0 && m("eventLabel", u.eventLabel, !0), u.value !== void 0 && m("eventValue", jb(u.value))), d("send", u.fieldsToSend));
                var I = q && !c.eventMetadata.suppress_script_load;
                if (!SG && (!c.isGtmEvent || I)) {
                    q = q || "https://www.google-analytics.com/analytics.js";
                    SG = !0;
                    var H = function() {
                            c.onFailure()
                        },
                        O = function() {
                            var K;
                            ((K = t()) == null ? 0 : K.loaded) || H()
                        };
                    Sp() ? G(O) : mc(q, O, H)
                }
            } else G(c.onFailure)
        },
        UG = function(a, b, c, d) {
            Cm(function() {
                TG(a, b, d)
            }, [Q.g.R, Q.g.N])
        },
        IG = function(a, b) {
            var c = VG[a];
            VG[a] = Sc(b, null);
            if (!c) return !1;
            for (var d in b)
                if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c)
                if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
            return !1
        },
        MG = function(a, b) {
            function c(v) {
                return {
                    id: d(Q.g.Ca),
                    affiliation: d(Q.g.Ng),
                    revenue: d(Q.g.ma),
                    tax: d(Q.g.Hf),
                    shipping: d(Q.g.sd),
                    coupon: d(Q.g.Og),
                    list: d(Q.g.Gf) || d(Q.g.rd) || v
                }
            }
            for (var d = function(v) {
                    return V(b, v)
                }, e = d(Q.g.da), f, g = 0; e && g < e.length && !(f = e[g][Q.g.Gf] || e[g][Q.g.rd]); g++);
            var k = d(Q.g.od);
            if (Rc(k))
                for (var m = 0; e && m < e.length; ++m) {
                    var n = e[m],
                        p;
                    for (p in k) k.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && k[p] != null && PG(n, p, n[k[p]])
                }
            var q = null,
                r = d(Q.g.kj);
            if (a === Q.g.Ka || a === Q.g.Bc) q = {
                action: a,
                Db: c(),
                Sc: WG(e)
            };
            else if (a === Q.g.yc) q = {
                action: "add",
                Db: c(),
                Sc: WG(e)
            };
            else if (a === Q.g.zc) q = {
                action: "remove",
                Db: c(),
                Sc: WG(e)
            };
            else if (a === Q.g.Pa) q = {
                action: "detail",
                Db: c(f),
                Sc: WG(e)
            };
            else if (a === Q.g.tb) q = {
                action: "impressions",
                wk: WG(e)
            };
            else if (a === Q.g.ub) q = {
                action: "promo_view",
                tf: WG(r) || WG(e)
            };
            else if (a === "select_content" && r && r.length > 0 || a === Q.g.Nb) q = {
                action: "promo_click",
                tf: WG(r) || WG(e)
            };
            else if (a === "select_content" || a === Q.g.Ac) q = {
                action: "click",
                Db: {
                    list: d(Q.g.Gf) || d(Q.g.rd) || f
                },
                Sc: WG(e)
            };
            else if (a === Q.g.fc || a === "checkout_progress") {
                var t = {
                    step: a === Q.g.fc ? 1 : d(Q.g.Ff),
                    option: d(Q.g.oe)
                };
                q = {
                    action: "checkout",
                    Sc: WG(e),
                    Db: Sc(c(), t)
                }
            } else a === "set_checkout_option" && (q = {
                action: "checkout_option",
                Db: {
                    step: d(Q.g.Ff),
                    option: d(Q.g.oe)
                }
            });
            q && (q.Kh = d(Q.g.Ba));
            return q
        },
        LG = function(a) {
            var b = a.gtmEcommerceData;
            if (!b) return null;
            var c = {};
            b.currencyCode && (c.Kh = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d = b.impressions;
                c.wk = b.translateIfKeyEquals === "impressions" ? WG(d) : d
            }
            if (b.promoView) {
                c.action =
                    "promo_view";
                var e = b.promoView.promotions;
                c.tf = b.translateIfKeyEquals === "promoView" ? WG(e) : e
            }
            if (b.promoClick) {
                var f = b.promoClick;
                c.action = "promo_click";
                var g = f.promotions;
                c.tf = b.translateIfKeyEquals === "promoClick" ? WG(g) : g;
                c.Db = f.actionField;
                return c
            }
            for (var k in b)
                if (b[k] !== void 0 && k !== "translateIfKeyEquals" && k !== "impressions" && k !== "promoView" && k !== "promoClick" && k !== "currencyCode") {
                    c.action = k;
                    var m = b[k].products;
                    c.Sc = b.translateIfKeyEquals === "products" ? WG(m) : m;
                    c.Db = b[k].actionField;
                    break
                }
            return Object.keys(c).length ?
                c : null
        },
        WG = function(a) {
            function b(e) {
                function f(k, m) {
                    for (var n = 0; n < m.length; n++) {
                        var p = m[n];
                        if (e[p]) {
                            g[k] = e[p];
                            break
                        }
                    }
                }
                var g = Sc(e, null);
                f("id", ["id", "item_id", "promotion_id"]);
                f("name", ["name", "item_name", "promotion_name"]);
                f("brand", ["brand", "item_brand"]);
                f("variant", ["variant", "item_variant"]);
                f("list", ["list_name", "item_list_name"]);
                f("position", ["list_position", "creative_slot", "index"]);
                (function() {
                    if (e.category) g.category = e.category;
                    else {
                        for (var k = "", m = 0; m < XG.length; m++) e[XG[m]] !== void 0 && (k &&
                            (k += "/"), k += e[XG[m]]);
                        k && (g.category = k)
                    }
                })();
                f("listPosition", ["list_position"]);
                f("creative", ["creative_name"]);
                f("list", ["list_name"]);
                f("position", ["list_position", "creative_slot"]);
                return g
            }
            for (var c = [], d = 0; a && d < a.length; d++) a[d] && Rc(a[d]) && c.push(b(a[d]));
            return c.length ? c : void 0
        },
        HG = function(a, b, c) {
            var d = function(K) {
                    return V(c, K)
                },
                e = {},
                f = {},
                g = {},
                k = {},
                m = YG(d(Q.g.lj));
            !c.isGtmEvent && m && PG(f, "exp", m);
            g["&gtm"] = Up({
                za: c.eventMetadata.source_canonical_id,
                gg: !0
            });
            c.isGtmEvent || (g._no_slc = !0);
            Al() &&
                (k._cs = ZG);
            var n = d(Q.g.od);
            if (!c.isGtmEvent && Rc(n))
                for (var p in n)
                    if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && n[p] != null) {
                        var q = d(String(n[p]));
                        q !== void 0 && PG(f, p, q)
                    }
            for (var r = !c.isGtmEvent, t = tn(c), v = 0; v < t.length; ++v) {
                var u = t[v];
                if (c.isGtmEvent) {
                    var w = d(u);
                    $G.hasOwnProperty(u) ? e[u] = w : aH.hasOwnProperty(u) ? k[u] = w : g[u] = w
                } else {
                    var x = void 0;
                    u !== Q.g.ia ? x = d(u) : x = un(c, u);
                    if (bH.hasOwnProperty(u)) OG(bH[u], u, x, e);
                    else if (cH.hasOwnProperty(u)) OG(cH[u], u, x, g);
                    else if (CG.hasOwnProperty(u)) OG(CG[u],
                        u, x, f);
                    else if (BG.hasOwnProperty(u)) OG(BG[u], u, x, k);
                    else if (/^(dimension|metric|content_group)\d+$/.test(u)) OG(1, u, x, f);
                    else if (u === Q.g.ia) {
                        if (!dH) {
                            var y = yb(x);
                            y && (f["&did"] = y)
                        }
                        var A = void 0,
                            C = void 0;
                        b === Q.g.ba ? A = yb(un(c, u), ".") : (A = yb(un(c, u, 1), "."), C = yb(un(c, u, 2), "."));
                        A && (f["&gdid"] = A);
                        C && (f["&edid"] = C)
                    } else u === Q.g.Fa && t.indexOf(Q.g.kc) < 0 && (k.cookieName = String(x) + "_ga");
                    T(151) && eH[u] && (c.H.hasOwnProperty(u) || b === Q.g.ba && c.j.hasOwnProperty(u)) && (r = !1)
                }
            }
            T(151) && r && (f["&jsscut"] = "1");
            d(Q.g.Cf) !== !1 &&
                d(Q.g.ib) !== !1 && AG() || (g.allowAdFeatures = !1);
            g.allowAdPersonalizationSignals = Gp(c);
            !c.isGtmEvent && d(Q.g.eb) && (k._useUp = !0);
            if (c.isGtmEvent) {
                k.name = k.name || e.gtmTrackerName;
                var D = g.hitCallback;
                g.hitCallback = function() {
                    $a(D) && D();
                    c.onSuccess()
                }
            } else {
                PG(k, "cookieDomain", "auto");
                PG(g, "forceSSL", !0);
                PG(e, "eventCategory", fH(b));
                gH[b] && PG(f, "nonInteraction", !0);
                b === "login" || b === "sign_up" || b === "share" ? PG(e, "eventLabel", d(Q.g.bh)) : b === "search" || b === "view_search_results" ? PG(e, "eventLabel", d(Q.g.Aj)) : b === "select_content" &&
                    PG(e, "eventLabel", d(Q.g.fj));
                var E = e[Q.g.wa] || {},
                    I = E[Q.g.Ic];
                I || I != 0 && E[Q.g.U] ? k.allowLinker = !0 : I === !1 && PG(k, "useAmpClientId", !1);
                f.hitCallback = c.onSuccess;
                k.name = a
            }
            Hp() && (g["&gcs"] = Ip());
            g["&gcd"] = Mp(c);
            Al() && (W(Q.g.R) || (k.storage = "none"), W([Q.g.N, Q.g.O]) || (g.allowAdFeatures = !1, k.storeGac = !1));
            Pp() && (g["&dma_cps"] = Np());
            g["&dma"] = Op();
            kp(tp()) && (g["&tcfd"] = Qp());
            vj() && (g["&tag_exp"] = vj());
            var H = dk(c) || d(Q.g.xb),
                O = d(Q.g.we);
            H && (c.isGtmEvent || (k[Q.g.xb] = H), k._cd2l = !0);
            O && !c.isGtmEvent && (k[Q.g.we] =
                O);
            e.fieldsToSend = f;
            e.fieldsToSet = g;
            e.createOnlyFields = k;
            return e
        },
        ZG = function(a) {
            return W(a)
        },
        YG = function(a) {
            if (Array.isArray(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (d != null) {
                        var e = d.id,
                            f = d.variant;
                        e != null && f != null && b.push(String(e) + "." + String(f))
                    }
                }
                return b.length > 0 ? b.join("!") : void 0
            }
        },
        PG = function(a, b, c) {
            a.hasOwnProperty(b) || (a[b] = c)
        },
        fH = function(a) {
            var b = "general";
            hH[a] ? b = "ecommerce" : iH[a] ? b = "engagement" : a === "exception" && (b = "error");
            return b
        },
        DG = function(a) {
            return a && z(a) ? a.replace(/(_[a-z])/g,
                function(b) {
                    return b[1].toUpperCase()
                }) : a
        },
        OG = function(a, b, c, d) {
            if (c !== void 0)
                if (jH[b] && (c = kb(c)), b !== "anonymize_ip" || c || (c = void 0), a === 1) d[DG(b)] = c;
                else if (z(a)) d[a] = c;
            else
                for (var e in a) a.hasOwnProperty(e) && c[e] !== void 0 && (d[a[e]] = c[e])
        },
        dH = !1;
    var SG = !1,
        QG = {},
        GG = {},
        kH = {},
        eH = (kH[Q.g.la] = 1, kH[Q.g.ib] = 1, kH[Q.g.La] = 1, kH[Q.g.Ma] = 1, kH[Q.g.Qa] = 1, kH[Q.g.kc] = 1, kH[Q.g.mb] = 1, kH[Q.g.Fa] = 1, kH[Q.g.Ob] = 1,
            kH[Q.g.fh] = 1, kH[Q.g.oa] = 1, kH[Q.g.yd] = 1, kH[Q.g.Ga] = 1, kH[Q.g.cb] = 1, kH),
        lH = {},
        BG = (lH.client_storage = "storage", lH.sample_rate = 1, lH.site_speed_sample_rate = 1, lH.store_gac = 1, lH.use_amp_client_id = 1, lH[Q.g.jb] = 1, lH[Q.g.sa] = "storeGac", lH[Q.g.La] = 1, lH[Q.g.Ma] = 1, lH[Q.g.Qa] = 1, lH[Q.g.kc] = 1, lH[Q.g.mb] = 1, lH[Q.g.Ob] = 1, lH),
        mH = {},
        aH = (mH._cs = 1, mH._useUp = 1, mH.allowAnchor = 1, mH.allowLinker = 1, mH.alwaysSendReferrer = 1, mH.clientId = 1, mH.cookieDomain = 1, mH.cookieExpires = 1, mH.cookieFlags = 1, mH.cookieName = 1, mH.cookiePath = 1, mH.cookieUpdate =
            1, mH.legacyCookieDomain = 1, mH.legacyHistoryImport = 1, mH.name = 1, mH.sampleRate = 1, mH.siteSpeedSampleRate = 1, mH.storage = 1, mH.storeGac = 1, mH.useAmpClientId = 1, mH._cd2l = 1, mH),
        cH = {
            anonymize_ip: 1
        },
        nH = {},
        CG = (nH.campaign = {
                content: "campaignContent",
                id: "campaignId",
                medium: "campaignMedium",
                name: "campaignName",
                source: "campaignSource",
                term: "campaignKeyword"
            }, nH.app_id = 1, nH.app_installer_id = 1, nH.app_name = 1, nH.app_version = 1, nH.description = "exDescription", nH.fatal = "exFatal", nH.language = 1, nH.page_hostname = "hostname", nH.transport_type =
            "transport", nH[Q.g.Ba] = "currencyCode", nH[Q.g.eh] = 1, nH[Q.g.oa] = "location", nH[Q.g.yd] = "page", nH[Q.g.Ga] = "referrer", nH[Q.g.cb] = "title", nH[Q.g.Pf] = 1, nH[Q.g.Ea] = 1, nH),
        oH = {},
        bH = (oH.content_id = 1, oH.event_action = 1, oH.event_category = 1, oH.event_label = 1, oH.link_attribution = 1, oH.name = 1, oH[Q.g.wa] = 1, oH[Q.g.bh] = 1, oH[Q.g.Na] = 1, oH[Q.g.ma] = 1, oH),
        $G = {
            displayfeatures: 1,
            enableLinkId: 1,
            enableRecaptcha: 1,
            eventAction: 1,
            eventCategory: 1,
            eventLabel: 1,
            gaFunctionName: 1,
            gtmEcommerceData: 1,
            gtmTrackerName: 1,
            linker: 1,
            remarketingLists: 1,
            socialAction: 1,
            socialNetwork: 1,
            socialTarget: 1,
            timingVar: 1,
            value: 1
        },
        XG = ["item_category", "item_category2", "item_category3", "item_category4", "item_category5"],
        pH = {},
        NG = (pH.levels = 1, pH[Q.g.Ma] = "duration", pH[Q.g.kc] = 1, pH),
        qH = {},
        jH = (qH.anonymize_ip = 1, qH.fatal = 1, qH.send_page_view = 1, qH.store_gac = 1, qH.use_amp_client_id = 1, qH[Q.g.sa] = 1, qH[Q.g.eh] = 1, qH),
        rH = {},
        RG = (rH.checkout_progress = 1, rH.select_content = 1, rH.set_checkout_option = 1, rH[Q.g.yc] = 1, rH[Q.g.zc] = 1, rH[Q.g.fc] = 1, rH[Q.g.Ac] = 1, rH[Q.g.tb] = 1, rH[Q.g.Nb] = 1, rH[Q.g.ub] =
            1, rH[Q.g.Ka] = 1, rH[Q.g.Bc] = 1, rH[Q.g.Pa] = 1, rH),
        sH = {},
        hH = (sH.checkout_progress = 1, sH.set_checkout_option = 1, sH[Q.g.Ag] = 1, sH[Q.g.Bg] = 1, sH[Q.g.yc] = 1, sH[Q.g.zc] = 1, sH[Q.g.Cg] = 1, sH[Q.g.fc] = 1, sH[Q.g.Ka] = 1, sH[Q.g.Bc] = 1, sH[Q.g.Dg] = 1, sH),
        tH = {},
        iH = (tH.generate_lead = 1, tH.login = 1, tH.search = 1, tH.select_content = 1, tH.share = 1, tH.sign_up = 1, tH.view_search_results = 1, tH[Q.g.Ac] = 1, tH[Q.g.tb] = 1, tH[Q.g.Nb] = 1, tH[Q.g.ub] = 1, tH[Q.g.Pa] = 1, tH),
        uH = {},
        gH = (uH.view_search_results = 1, uH[Q.g.tb] = 1, uH[Q.g.ub] = 1, uH[Q.g.Pa] = 1, uH),
        VG = {};

    function vH(a, b, c, d) {}
    vH.F = "internal.executeEventProcessor";

    function wH(a) {
        var b;
        if (!M(a)) throw L(this.getName(), ["string"], arguments);
        N(this, "unsafe_run_arbitrary_javascript");
        try {
            var c = B.google_tag_manager;
            c && typeof c.e === "function" && (b = c.e(a))
        } catch (d) {}
        return gd(b, this.D, 1)
    }
    wH.F = "internal.executeJavascriptString";

    function xH(a) {
        var b;
        return b
    };

    function yH(a) {
        var b = {};
        return gd(b)
    }
    yH.F = "internal.getAdsCookieWritingOptions";

    function zH(a) {
        var b = !1;
        return b
    }
    zH.F = "internal.getAllowAdPersonalization";

    function AH(a, b) {
        b = b === void 0 ? !0 : b;
        var c;
        return c
    }
    AH.F = "internal.getAuid";
    var BH = null;

    function CH() {
        var a = new Ma;
        return a
    }
    CH.publicName = "getContainerVersion";

    function DH(a, b) {
        b = b === void 0 ? !0 : b;
        var c;
        return c
    }
    DH.publicName = "getCookieValues";

    function EH() {
        return Ql()
    }
    EH.F = "internal.getCountryCode";

    function FH() {
        var a = [];
        return gd(a)
    }
    FH.F = "internal.getDestinationIds";

    function GH(a) {
        var b = new Ma;
        return b
    }
    GH.F = "internal.getDeveloperIds";

    function HH(a, b) {
        var c = null;
        return c
    }
    HH.F = "internal.getElementAttribute";

    function IH(a) {
        var b = null;
        return b
    }
    IH.F = "internal.getElementById";

    function JH(a) {
        var b = "";
        return b
    }
    JH.F = "internal.getElementInnerText";

    function KH(a, b) {
        var c = null;
        return gd(c)
    }
    KH.F = "internal.getElementProperty";

    function LH(a) {
        var b;
        return b
    }
    LH.F = "internal.getElementValue";

    function MH(a) {
        var b = 0;
        return b
    }
    MH.F = "internal.getElementVisibilityRatio";

    function NH(a) {
        var b = null;
        return b
    }
    NH.F = "internal.getElementsByCssSelector";

    function OH(a) {
        var b;
        if (!M(a)) throw L(this.getName(), ["string"], arguments);
        N(this, "read_event_data", a);
        var c;
        a: {
            var d = a,
                e = AC(this).originalEventData;
            if (e) {
                for (var f = e, g = {}, k = {}, m = {}, n = [], p = d.split("\\\\"), q = 0; q < p.length; q++) {
                    for (var r = p[q].split("\\."), t = 0; t < r.length; t++) {
                        for (var v = r[t].split("."), u = 0; u < v.length; u++) n.push(v[u]), u !== v.length - 1 && n.push(m);
                        t !== r.length - 1 && n.push(k)
                    }
                    q !== p.length - 1 && n.push(g)
                }
                for (var w = [], x = "", y = l(n), A = y.next(); !A.done; A =
                    y.next()) {
                    var C = A.value;
                    C === m ? (w.push(x), x = "") : x = C === g ? x + "\\" : C === k ? x + "." : x + C
                }
                x && w.push(x);
                for (var D = l(w), E = D.next(); !E.done; E = D.next()) {
                    if (f == null) {
                        c = void 0;
                        break a
                    }
                    f = f[E.value]
                }
                c = f
            } else c = void 0
        }
        b = gd(c, this.D, 1);
        return b
    }
    OH.F = "internal.getEventData";
    var PH = {};
    PH.enableAWFledge = T(35);
    PH.enableAdsConversionValidation = T(20);
    PH.enableAdsSupernovaParams = T(31);
    PH.enableAutoPhoneAndAddressDetection = T(33);
    PH.enableAutoPiiOnPhoneAndAddress = T(34);
    PH.enableCachedEcommerceData = T(43);
    PH.enableCloudRecommentationsErrorLogging = T(44);
    PH.enableCloudRecommentationsSchemaIngestion = T(45);
    PH.enableCloudRetailInjectPurchaseMetadata = T(47);
    PH.enableCloudRetailLogging = T(46);
    PH.enableCloudRetailPageCategories = T(48);
    PH.enableConsentDisclosureActivity = T(50);
    PH.enableDCFledge = T(58);
    PH.enableDataLayerSearchExperiment = T(126);
    PH.enableDecodeUri = T(92);
    PH.enableDeferAllEnhancedMeasurement = T(59);
    PH.enableFormSkipValidation = T(85);
    PH.enableGa4OutboundClicksFix = T(95);
    PH.enableGaAdsConversions = T(119);
    PH.enableGaAdsConversionsClientId = T(118);
    PH.enableLimitedDataModes = T(110);
    PH.enableMerchantRenameForBasketData = T(113);
    PH.enableUnsiloedModeGtmTags = T(138);
    PH.enableUrlDecodeEventUsage = T(140);
    PH.enableZoneConfigInChildContainers = T(142);
    PH.useEnableAutoEventOnFormApis = T(154);
    PH.autoPiiEligible = Vl();

    function QH() {
        return gd(PH)
    }
    QH.F = "internal.getFlags";

    function RH() {
        return new dd(XB)
    }
    RH.F = "internal.getHtmlId";

    function SH(a) {
        var b;
        return b
    }
    SH.F = "internal.getIframingState";

    function TH(a, b) {
        var c = {};
        return gd(c)
    }
    TH.F = "internal.getLinkerValueFromLocation";

    function UH() {
        var a = new Ma;
        return a
    }
    UH.F = "internal.getPrivacyStrings";

    function VH(a, b) {
        var c;
        return c
    }
    VH.F = "internal.getProductSettingsParameter";

    function WH(a, b) {
        var c;
        return c
    }
    WH.publicName = "getQueryParameters";

    function XH(a, b) {
        var c;
        return c
    }
    XH.publicName = "getReferrerQueryParameters";

    function YH(a) {
        var b = "";
        return b
    }
    YH.publicName = "getReferrerUrl";

    function ZH() {
        return Rl()
    }
    ZH.F = "internal.getRegionCode";

    function $H(a, b) {
        var c;
        return c
    }
    $H.F = "internal.getRemoteConfigParameter";

    function aI() {
        var a = new Ma;
        a.set("width", 0);
        a.set("height", 0);
        return a
    }
    aI.F = "internal.getScreenDimensions";

    function bI() {
        var a = "";
        return a
    }
    bI.F = "internal.getTopSameDomainUrl";

    function cI() {
        var a = "";
        return a
    }
    cI.F = "internal.getTopWindowUrl";

    function dI(a) {
        var b = "";
        return b
    }
    dI.publicName = "getUrl";

    function eI() {
        N(this, "get_user_agent");
        return dc.userAgent
    }
    eI.F = "internal.getUserAgent";

    function fI() {
        var a;
        return a ? gd(ow(a)) : a
    }
    fI.F = "internal.getUserAgentClientHints";

    function nI() {
        return B.gaGlobal = B.gaGlobal || {}
    }

    function oI() {
        var a = nI();
        a.hid = a.hid || db();
        return a.hid
    }

    function pI(a, b) {
        var c = nI();
        if (c.vid === void 0 || b && !c.from_cookie) c.vid = a, c.from_cookie = b
    };

    function LI(a) {
        if (Iv(a) || yj()) a.j[Q.g.Dj] = Rl() || Ql();
        !Iv(a) && yj() && (a.j[Q.g.Mj] = "::")
    }

    function MI(a) {
        if (T(87) && yj()) {
            Bt(a);
            Ct(a, "cpf", Nt(V(a.m, Q.g.Fa)));
            var b = V(a.m, Q.g.Ob);
            Ct(a, "cu", b === !0 ? 1 : b === !1 ? 0 : void 0);
            Ct(a, "cf", Nt(V(a.m, Q.g.Qa)));
            Ct(a, "cd", mq(Mt(V(a.m, Q.g.La)), Mt(V(a.m, Q.g.mb))))
        }
    };
    var bJ = function(a) {
            this.H = a;
            this.j = ""
        },
        cJ = function(a, b) {
            a.C = b;
            return a
        },
        dJ = function(a, b) {
            b = a.j + b;
            for (var c = b.indexOf("\n\n"); c !== -1;) {
                var d = a,
                    e;
                a: {
                    var f = l(b.substring(0, c).split("\n")),
                        g = f.next().value,
                        k = f.next().value;
                    if (g.indexOf("event: message") === 0 && k.indexOf("data: ") === 0) try {
                        e = JSON.parse(k.substring(k.indexOf(":") + 1));
                        break a
                    } catch (H) {}
                    e = void 0
                }
                var m = d,
                    n = e;
                if (n) {
                    var p = n.send_pixel,
                        q = n.options,
                        r = m.H;
                    if (p) {
                        var t = p || [];
                        if (Array.isArray(t))
                            for (var v = Rc(q) ? q : {}, u = l(t), w = u.next(); !w.done; w = u.next()) r(w.value,
                                v)
                    }
                    var x = n.create_iframe,
                        y = n.options,
                        A = m.C;
                    if (x && A) {
                        var C = x || [];
                        if (Array.isArray(C))
                            for (var D = Rc(y) ? y : {}, E = l(C), I = E.next(); !I.done; I = E.next()) A(I.value, D)
                    }
                }
                b = b.substring(c + 2);
                c = b.indexOf("\n\n")
            }
            a.j = b
        };

    function eJ(a) {
        var b = a.search;
        return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
    };
    var SJ = window,
        TJ = document,
        UJ = function(a) {
            var b = SJ._gaUserPrefs;
            if (b && b.ioo && b.ioo() || TJ.documentElement.hasAttribute("data-google-analytics-opt-out") || a && SJ["ga-disable-" + a] === !0) return !0;
            try {
                var c = SJ.external;
                if (c && c._gaUserPrefs && c._gaUserPrefs == "oo") return !0
            } catch (p) {}
            for (var d = [], e = String(TJ.cookie).split(";"), f = 0; f < e.length; f++) {
                var g = e[f].split("="),
                    k = g[0].replace(/^\s*|\s*$/g, "");
                if (k && k == "AMP_TOKEN") {
                    var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                    m && (m = decodeURIComponent(m));
                    d.push(m)
                }
            }
            for (var n =
                    0; n < d.length; n++)
                if (d[n] == "$OPT_OUT") return !0;
            return TJ.getElementById("__gaOptOutExtension") ? !0 : !1
        };

    function eK(a) {
        hb(a, function(c) {
            c.charAt(0) === "_" && delete a[c]
        });
        var b = a[Q.g.pb] || {};
        hb(b, function(c) {
            c.charAt(0) === "_" && delete b[c]
        })
    }

    function LK(a, b) {}

    function MK(a, b) {
        var c = function() {};
        return c
    }

    function NK(a, b, c) {};
    var OK = MK;
    var PK = function(a, b, c) {
        for (var d = 0; d < b.length; d++) a.hasOwnProperty(b[d]) && (a[String(b[d])] = c(a[String(b[d])]))
    };

    function QK(a, b, c) {
        var d = this;
        if (!M(a) || !Fg(b) || !Fg(c)) throw L(this.getName(), ["string", "Object|undefined", "Object|undefined"], arguments);
        var e = b ? J(b) : {};
        wC([function() {
            return N(d, "configure_google_tags", a, e)
        }]);
        var f = c ? J(c) : {},
            g = AC(this);
        f.originatingEntity = qD(g);
        lu(hu(a, e), g.eventId, f);
    }
    QK.F = "internal.gtagConfig";

    function RK() {
        var a = {};
        return a
    };

    function TK(a, b) {}
    TK.publicName = "gtagSet";

    function UK() {
        var a = {};
        return a
    };

    function VK(a, b) {}
    VK.publicName = "injectHiddenIframe";
    var mC = function() {
        var a = 0;
        return function(b) {
            switch (b) {
                case 1:
                    a |= 1;
                    break;
                case 2:
                    a |= 2;
                    break;
                case 3:
                    a |= 4
            }
            return a
        }
    }();

    function WK(a, b, c, d, e) {
        var f = this;
        if (!((M(a) || Kg(a)) && Hg(b) && Hg(c) && Ng(d) && Ng(e))) throw L(this.getName(), ["string|OpaqueValue", "function", "function", "boolean|undefined", "boolean|undefined"], arguments);
        var g = AC(this);
        d && mC(3), e && (mC(1), mC(2)), lC(g.eventId, g.qb());
        if (d && e) throw Error("useIframe and supportDocumentWrite cannot both be true.");
        N(this, "unsafe_inject_arbitrary_html", d, e);
        var k = T(106) ? function() {
                return void b.invoke(f.D)
            } : J(b, this.D),
            m = T(106) ? function() {
                return void c.invoke(f.D)
            } : J(c, this.D),
            n = J(a, this.D, 1);
        XK(n, k, m, !!d, !!e, g);
    }
    var YK = function(a, b, c, d) {
            return function() {
                try {
                    if (b.length > 0) {
                        var e = b.shift(),
                            f = YK(a, b, c, d),
                            g = e;
                        if (String(g.nodeName).toUpperCase() === "SCRIPT" && g.type === "text/gtmscript") {
                            var k = g.text || g.textContent || g.innerHTML || "",
                                m = g.getAttribute("data-gtmsrc"),
                                n = g.charset || "";
                            m ? mc(m, f, d, {
                                async: !1,
                                id: e.id,
                                text: k,
                                charset: n
                            }, a) : (g = F.createElement("script"), g.async = !1, g.type = "text/javascript", g.id = e.id, g.text = k, g.charset = n, f && (g.onload = f), a.insertBefore(g, null));
                            m || f()
                        } else if (e.innerHTML && e.innerHTML.toLowerCase().indexOf("<script") >=
                            0) {
                            for (var p = []; e.firstChild;) p.push(e.removeChild(e.firstChild));
                            a.insertBefore(e, null);
                            YK(e, p, f, d)()
                        } else a.insertBefore(e, null), f()
                    } else c()
                } catch (q) {
                    d()
                }
            }
        },
        XK = function(a, b, c, d, e, f) {
            if (F.body) {
                var g = bC(a, b, c);
                a = g.Pm;
                b = g.onSuccess;
                if (d) {} else e ?
                    ZK(a, b, c) : YK(F.body, wc(a), b, c)()
            } else B.setTimeout(function() {
                XK(a, b, c, d, e, f)
            })
        };
    WK.F = "internal.injectHtml";
    var $K = {};
    var aL = function(a, b, c, d, e, f) {
        f ? e[f] ? (e[f][0].push(c), e[f][1].push(d)) : (e[f] = [
            [c],
            [d]
        ], mc(a, function() {
            for (var g = e[f][0], k = 0; k < g.length; k++) G(g[k]);
            g.push = function(m) {
                G(m);
                return 0
            }
        }, function() {
            for (var g = e[f][1], k = 0; k < g.length; k++) G(g[k]);
            e[f] = null
        }, b)) : mc(a, c, d, b)
    };

    function bL(a, b, c, d) {
        if (!Sp()) {
            if (!(M(a) && Ig(b) && Ig(c) && Lg(d))) throw L(this.getName(), ["string", "function|undefined", "function|undefined", "string|undefined"], arguments);
            N(this, "inject_script", a);
            var e = this.D;
            aL(a, void 0, function() {
                b && b.hb(e)
            }, function() {
                c && c.hb(e)
            }, $K, d)
        }
    }
    var cL = {
            dl: 1,
            id: 1
        },
        dL = {};

    function eL(a, b, c, d) {}
    bL.publicName = "injectScript";
    eL.F = "internal.injectScript";

    function fL(a) {
        var b = !0;
        return b
    }
    fL.publicName = "isConsentGranted";

    function gL(a) {
        var b = !1;
        return b
    }
    gL.F = "internal.isDebugMode";

    function hL() {
        return Tl()
    }
    hL.F = "internal.isDmaRegion";

    function iL(a) {
        var b = !1;
        return b
    }
    iL.F = "internal.isEntityInfrastructure";

    function jL() {
        var a = !1;
        return a
    }
    jL.F = "internal.isLandingPage";

    function kL() {
        var a = jh(function(b) {
            AC(this).log("error", b)
        });
        a.publicName = "JSON";
        return a
    };

    function lL(a) {
        var b = void 0;
        return gd(b)
    }
    lL.F = "internal.legacyParseUrl";

    function mL() {
        try {
            var a = B.localStorage;
            a.setItem("localstorage.test", "localstorage.test");
            a.removeItem("localstorage.test");
            return !0
        } catch (b) {}
        return !1
    }
    var nL = {
        getItem: function(a) {
            var b = null;
            a = String(a), N(this, "access_local_storage", "read", a), b = B.localStorage.getItem(a);
            return b
        },
        setItem: function(a, b) {
            a = String(a);
            N(this, "access_local_storage", "write", a);
            try {
                return B.localStorage.setItem(a, String(b)), !0
            } catch (c) {}
            return !1
        },
        removeItem: function(a) {
            a = String(a), N(this, "access_local_storage", "write", a), B.localStorage.removeItem(a);
        }
    };

    function oL() {
        try {
            N(this, "logging")
        } catch (c) {
            return
        }
        if (!console) return;
        for (var a = Array.prototype.slice.call(arguments, 0), b = 0; b < a.length; b++) a[b] = J(a[b], this.D);
        console.log.apply(console, a);
    }
    oL.publicName = "logToConsole";

    function pL(a, b) {}
    pL.F = "internal.mergeRemoteConfig";

    function qL(a, b, c) {
        c = c === void 0 ? !0 : c;
        var d = [];
        return gd(d)
    }
    qL.F = "internal.parseCookieValuesFromString";

    function rL(a) {
        var b = void 0;
        return b
    }
    rL.publicName = "parseUrl";

    function sL(a) {}
    sL.F = "internal.processAsNewEvent";

    function tL(a, b, c) {
        var d;
        return d
    }
    tL.F = "internal.pushToDataLayer";

    function uL(a) {
        var b = ya.apply(1, arguments),
            c = !1;
        if (!M(a)) throw L(this.getName(), ["string"], arguments);
        for (var d = [this, a], e = l(b), f = e.next(); !f.done; f = e.next()) d.push(J(f.value, this.D, 1));
        try {
            N.apply(null, d), c = !0
        } catch (g) {
            return !1
        }
        return c
    }
    uL.publicName = "queryPermission";

    function vL(a) {
        var b = this;
    }
    vL.F = "internal.queueAdsTransmission";

    function wL() {
        var a = "";
        return a
    }
    wL.publicName = "readCharacterSet";

    function xL() {
        return bj.Lb
    }
    xL.F = "internal.readDataLayerName";

    function yL() {
        var a = "";
        return a
    }
    yL.publicName = "readTitle";

    function zL(a, b) {
        var c = this;
    }
    zL.F = "internal.registerCcdCallback";

    function AL(a) {
        return !0
    }
    AL.F = "internal.registerDestination";
    var BL = ["config", "event", "get", "set"];

    function CL(a, b, c) {}
    CL.F = "internal.registerGtagCommandListener";

    function DL(a, b) {
        var c = !1;
        return c
    }
    DL.F = "internal.removeDataLayerEventListener";

    function EL(a, b) {}
    EL.F = "internal.removeFormData";

    function FL() {}
    FL.publicName = "resetDataLayer";

    function GL(a, b, c) {
        var d = void 0;
        return d
    }
    GL.F = "internal.scrubUrlParams";

    function HL(a) {}
    HL.F = "internal.sendAdsHit";

    function IL(a, b, c, d) {}
    IL.F = "internal.sendGtagEvent";

    function JL(a, b, c) {}
    JL.publicName = "sendPixel";

    function KL(a, b) {}
    KL.F = "internal.setAnchorHref";

    function LL(a) {}
    LL.F = "internal.setContainerConsentDefaults";

    function ML(a, b, c, d) {
        var e = this;
        d = d === void 0 ? !0 : d;
        var f = !1;
        return f
    }
    ML.publicName = "setCookie";

    function NL(a) {}
    NL.F = "internal.setCorePlatformServices";

    function OL(a, b) {}
    OL.F = "internal.setDataLayerValue";

    function PL(a) {}
    PL.publicName = "setDefaultConsentState";

    function QL(a, b) {}
    QL.F = "internal.setDelegatedConsentType";

    function RL(a, b) {}
    RL.F = "internal.setFormAction";

    function SL(a, b, c) {
        c = c === void 0 ? !1 : c;
    }
    SL.F = "internal.setInCrossContainerData";

    function TL(a, b, c) {
        if (!M(a) || !Ng(c)) throw L(this.getName(), ["string", "any", "boolean|undefined"], arguments);
        N(this, "access_globals", "readwrite", a);
        var d = a.split("."),
            e = vb(d, [B, F]),
            f = d.pop();
        if (e && (e[String(f)] === void 0 || c)) return e[String(f)] = J(b, this.D, 2), !0;
        return !1
    }
    TL.publicName = "setInWindow";

    function UL(a, b, c) {}
    UL.F = "internal.setProductSettingsParameter";

    function VL(a, b, c) {}
    VL.F = "internal.setRemoteConfigParameter";
    var WL = {
            unspecified: 0,
            limited: 1,
            none: 2
        },
        XL = {
            unspecified: 0,
            ads: 1,
            analytics: 2,
            monitoring: 3
        };

    function YL(a, b) {}
    YL.F = "internal.setTransmissionMode";

    function ZL(a, b, c, d) {
        var e = this;
    }
    ZL.publicName = "sha256";

    function $L(a, b, c) {}
    $L.F = "internal.sortRemoteConfigParameters";

    function aM(a, b) {
        var c = void 0;
        return c
    }
    aM.F = "internal.subscribeToCrossContainerData";
    var bM = {},
        cM = {};
    bM.getItem = function(a) {
        var b = null;
        return b
    };
    bM.setItem = function(a, b) {};
    bM.removeItem = function(a) {};
    bM.clear = function() {};
    bM.publicName = "templateStorage";

    function dM(a, b) {
        var c = !1;
        return c
    }
    dM.F = "internal.testRegex";

    function eM(a) {
        var b;
        return b
    };

    function fM(a) {
        var b;
        return b
    }
    fM.F = "internal.unsiloId";

    function gM(a, b) {
        var c;
        return c
    }
    gM.F = "internal.unsubscribeFromCrossContainerData";

    function hM(a) {}
    hM.publicName = "updateConsentState";
    var iM;

    function jM(a, b, c) {
        iM = iM || new uh;
        iM.add(a, b, c)
    }

    function kM(a, b) {
        var c = iM = iM || new uh;
        if (c.j.hasOwnProperty(a)) throw Error("Attempting to add a private function which already exists: " + a + ".");
        if (c.contains(a)) throw Error("Attempting to add a private function with an existing API name: " + a + ".");
        c.j[a] = $a(b) ? Rg(a, b) : Sg(a, b)
    }

    function lM() {
        return function(a) {
            var b;
            var c = iM;
            if (c.contains(a)) b = c.get(a, this);
            else {
                var d;
                if (d = c.j.hasOwnProperty(a)) {
                    var e = !1,
                        f = this.D.j;
                    if (f) {
                        var g = f.qb();
                        if (g) {
                            g.indexOf("__cvt_") !== 0 && (e = !0);
                        }
                    } else e = !0;
                    d = e
                }
                if (d) {
                    var k = c.j.hasOwnProperty(a) ? c.j[a] : void 0;
                    b = k
                } else throw Error(a + " is not a valid API name.");
            }
            return b
        }
    };

    function mM() {
        var a = function(c) {
                return void kM(c.F, c)
            },
            b = function(c) {
                return void jM(c.publicName, c)
            };
        b(uC);
        b(BC);
        b(QD);
        b(SD);
        b(TD);
        b($D);
        b(bE);
        b(iE);
        b(kL());
        b(kE);
        b(CH);
        b(DH);
        b(WH);
        b(XH);
        b(YH);
        b(dI);
        b(TK);
        b(VK);
        b(bL);
        b(fL);
        b(oL);
        b(rL);
        b(uL);
        b(wL);
        b(yL);
        b(JL);
        b(ML);
        b(PL);
        b(TL);
        b(ZL);
        b(bM);
        b(hM);
        jM("Math", Wg());
        jM("Object", sh);
        jM("TestHelper", xh());
        jM("assertApi", Tg);
        jM("assertThat", Ug);
        jM("decodeUri", Yg);
        jM("decodeUriComponent", Zg);
        jM("encodeUri", $g);
        jM("encodeUriComponent", ah);
        jM("fail", fh);
        jM("generateRandom",
            gh);
        jM("getTimestamp", hh);
        jM("getTimestampMillis", hh);
        jM("getType", ih);
        jM("makeInteger", kh);
        jM("makeNumber", lh);
        jM("makeString", mh);
        jM("makeTableMap", nh);
        jM("mock", qh);
        jM("mockObject", rh);
        jM("fromBase64", xH, !("atob" in B));
        jM("localStorage", nL, !mL());
        jM("toBase64", eM, !("btoa" in B));
        a(tC);
        a(xC);
        a(SC);
        a(dD);
        a(kD);
        a(pD);
        a(FD);
        a(OD);
        a(RD);
        a(UD);
        a(VD);
        a(WD);
        a(XD);
        a(YD);
        a(ZD);
        a(aE);
        a(cE);
        a(hE);
        a(jE);
        a(lE);
        a(nE);
        a(oE);
        a(pE);
        a(qE);
        a(rE);
        a(wE);
        a(EE);
        a(FE);
        a(QE);
        a(VE);
        a($E);
        a(iF);
        a(nF);
        a(AF);
        a(CF);
        a(QF);
        a(RF);
        a(TF);
        a(vH);
        a(wH);
        a(yH);
        a(zH);
        a(AH);
        a(EH);
        a(FH);
        a(GH);
        a(HH);
        a(IH);
        a(JH);
        a(KH);
        a(LH);
        a(MH);
        a(NH);
        a(OH);
        a(QH);
        a(RH);
        a(SH);
        a(TH);
        a(UH);
        a(VH);
        a(ZH);
        a($H);
        a(aI);
        a(bI);
        a(cI);
        a(fI);
        a(QK);
        a(WK);
        a(eL);
        a(gL);
        a(hL);
        a(iL);
        a(jL);
        a(lL);
        a(DD);
        a(pL);
        a(qL);
        a(sL);
        a(tL);
        a(vL);
        a(xL);
        a(zL);
        a(AL);
        a(CL);
        a(DL);
        a(EL);
        a(wh);
        a(GL);
        a(HL);
        a(IL);
        a(KL);
        a(LL);
        a(NL);
        a(OL);
        a(QL);
        a(RL);
        a(SL);
        a(UL);
        a(VL);
        a(YL);
        a($L);
        a(aM);
        a(dM);
        a(fM);
        a(gM);
        kM("internal.CrossContainerSchema", mE());
        kM("internal.GtagSchema", RK());
        kM("internal.IframingStateSchema",
            UK());
        return lM()
    };
    var rC;

    function nM() {
        var a = data.sandboxed_scripts,
            b = data.security_groups;
        a: {
            var c = data.runtime || [],
                d = data.runtime_lines;rC = new Ce;oM();ff = qC();
            var e = rC,
                f = mM(),
                g = new $c("require", f);g.Ha();e.j.j.set("require", g);
            for (var k = [], m = 0; m < c.length; m++) {
                var n = c[m];
                if (!Array.isArray(n) || n.length < 3) {
                    if (n.length === 0) continue;
                    break a
                }
                d && d[m] && d[m].length && Cf(n, d[m]);
                try {
                    rC.execute(n), T(117) && lk && n[0] === 50 && k.push(n[1])
                } catch (t) {}
            }
            T(117) && (tf = k)
        }
        if (a && a.length)
            for (var p = ["sandboxedScripts"], q = 0; q < a.length; q++) {
                var r = a[q].replace(/^_*/,
                    "");
                rj[r] = p
            }
        pM(b)
    }

    function oM() {
        rC.j.j.H = function(a, b, c) {
            Jm.SANDBOXED_JS_SEMAPHORE = Jm.SANDBOXED_JS_SEMAPHORE || 0;
            Jm.SANDBOXED_JS_SEMAPHORE++;
            try {
                return a.apply(b, c)
            } finally {
                Jm.SANDBOXED_JS_SEMAPHORE--
            }
        }
    }

    function pM(a) {
        a && hb(a, function(b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                rj[e] = rj[e] || [];
                rj[e].push(b)
            }
        })
    };

    function qM(a) {
        lu(fu("developer_id." + a, !0), 0, {})
    };
    var rM = Array.isArray;

    function sM(a, b) {
        return Sc(a, b || null)
    }

    function X(a) {
        return window.encodeURIComponent(a)
    }

    function tM(a, b, c) {
        rc(a, b, c)
    }

    function uM(a, b) {
        if (!a) return !1;
        var c = Rj(Xj(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                f > 0 && e.charAt(0) !== "." && (f--, e = "." + e);
                if (f >= 0 && c.indexOf(e, f) === f) return !0
            }
        }
        return !1
    }

    function vM(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
        return e ? d : null
    }
    var EM = B.clearTimeout,
        FM = B.setTimeout;

    function GM(a, b, c) {
        if (Sp()) {
            b && G(b)
        } else return mc(a, b, c)
    }

    function HM() {
        return B.location.href
    }

    function IM(a, b) {
        return Ej(a, b || 2)
    }

    function JM(a, b) {
        B[a] = b
    }

    function KM(a, b, c) {
        b && (B[a] === void 0 || c && !B[a]) && (B[a] = b);
        return B[a]
    }

    function LM(a, b) {
        if (Sp()) {
            b && G(b)
        } else pc(a, b)
    }

    var MM = {};
    var Y = {
        securityGroups: {}
    };
    Y.securityGroups.f = ["google"], Y.__f = function(a) {
        var b = IM("gtm.referrer", 1) || F.referrer;
        return b ? a.vtp_component && a.vtp_component != "URL" ? Rj(Xj(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : Uj(Xj(String(b))) : String(b)
    }, Y.__f.o = "f", Y.__f.isVendorTemplate = !0, Y.__f.priorityOverride = 0, Y.__f.isInfrastructure = !0, Y.__f.runInSiloedMode = !1;

    Y.securityGroups.access_globals = ["google"],
        function() {
            function a(b, c, d) {
                var e = {
                    key: d,
                    read: !1,
                    write: !1,
                    execute: !1
                };
                switch (c) {
                    case "read":
                        e.read = !0;
                        break;
                    case "write":
                        e.write = !0;
                        break;
                    case "readwrite":
                        e.read = e.write = !0;
                        break;
                    case "execute":
                        e.execute = !0;
                        break;
                    default:
                        throw Error("Invalid " + b + " request " + c);
                }
                return e
            }(function(b) {
                Y.__access_globals = b;
                Y.__access_globals.o = "access_globals";
                Y.__access_globals.isVendorTemplate = !0;
                Y.__access_globals.priorityOverride = 0;
                Y.__access_globals.isInfrastructure = !1;
                Y.__access_globals.runInSiloedMode = !1
            })(function(b) {
                for (var c = b.vtp_keys || [], d = b.vtp_createPermissionError, e = [], f = [], g = [], k = 0; k < c.length; k++) {
                    var m = c[k],
                        n = m.key;
                    m.read && e.push(n);
                    m.write && f.push(n);
                    m.execute && g.push(n)
                }
                return {
                    assert: function(p, q, r) {
                        if (!z(r)) throw d(p, {}, "Key must be a string.");
                        if (q === "read") {
                            if (e.indexOf(r) > -1) return
                        } else if (q === "write") {
                            if (f.indexOf(r) > -1) return
                        } else if (q === "readwrite") {
                            if (f.indexOf(r) > -1 && e.indexOf(r) > -1) return
                        } else if (q === "execute") {
                            if (g.indexOf(r) > -1) return
                        } else throw d(p, {}, "Operation must be either 'read', 'write', or 'execute', was " + q);
                        throw d(p, {}, "Prohibited " + q + " on global variable: " + r + ".");
                    },
                    M: a
                }
            })
        }();
    Y.securityGroups.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Y.__u = b;
                Y.__u.o = "u";
                Y.__u.isVendorTemplate = !0;
                Y.__u.priorityOverride = 0;
                Y.__u.isInfrastructure = !0;
                Y.__u.runInSiloedMode = !1
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : IM("gtm.url", 1)) || HM();
                var d = b[a("vtp_component")];
                if (!d || d == "URL") return Uj(Xj(String(c)));
                var e = Xj(String(c)),
                    f;
                if (d === "QUERY") a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        k = b[a("vtp_queryKey").toString()] ||
                        "",
                        m = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;n = g ? Array.isArray(k) ? k : String(k).replace(/\s+/g, "").split(",") : [String(k)];
                    for (var p = 0; p < n.length; p++) {
                        var q = Rj(e, "QUERY", void 0, void 0, n[p]);
                        if (q != void 0 && (!m || q !== "")) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = Rj(e, d, d == "HOST" ? b[a("vtp_stripWww")] : void 0, d == "PATH" ? b[a("vtp_defaultPages")] : void 0);
                return f
            })
        }();
    Y.securityGroups.v = ["google"], Y.__v = function(a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = IM(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
        return c !== void 0 ? c : a.vtp_defaultValue
    }, Y.__v.o = "v", Y.__v.isVendorTemplate = !0, Y.__v.priorityOverride = 0, Y.__v.isInfrastructure = !0, Y.__v.runInSiloedMode = !1;

    Y.securityGroups.access_local_storage = ["google"],
        function() {
            function a(b, c, d) {
                var e = {
                    key: d,
                    read: !1,
                    write: !1
                };
                switch (c) {
                    case "read":
                        e.read = !0;
                        break;
                    case "write":
                        e.write = !0;
                        break;
                    case "readwrite":
                        e.read = e.write = !0;
                        break;
                    default:
                        throw Error("Invalid " + b + " request " + c);
                }
                return e
            }(function(b) {
                Y.__access_local_storage = b;
                Y.__access_local_storage.o = "access_local_storage";
                Y.__access_local_storage.isVendorTemplate = !0;
                Y.__access_local_storage.priorityOverride = 0;
                Y.__access_local_storage.isInfrastructure = !1;
                Y.__access_local_storage.runInSiloedMode = !1
            })(function(b) {
                for (var c = b.vtp_keys || [], d = b.vtp_createPermissionError, e = [], f = [], g = 0; g < c.length; g++) {
                    var k = c[g],
                        m = k.key;
                    k.read && e.push(m);
                    k.write && f.push(m)
                }
                return {
                    assert: function(n, p, q) {
                        if (!z(q)) throw d(n, {}, "Key must be a string.");
                        if (p === "read") {
                            if (e.indexOf(q) > -1) return
                        } else if (p === "write") {
                            if (f.indexOf(q) > -1) return
                        } else if (p === "readwrite") {
                            if (f.indexOf(q) > -1 && e.indexOf(q) > -1) return
                        } else throw d(n, {}, "Operation must be either 'read', 'write', or 'readwrite', was " + p);
                        throw d(n, {}, "Prohibited " +
                            p + " on local storage key: " + q + ".");
                    },
                    M: a
                }
            })
        }();
    Y.securityGroups.read_event_data = ["google"],
        function() {
            function a(b, c) {
                return {
                    key: c
                }
            }(function(b) {
                Y.__read_event_data = b;
                Y.__read_event_data.o = "read_event_data";
                Y.__read_event_data.isVendorTemplate = !0;
                Y.__read_event_data.priorityOverride = 0;
                Y.__read_event_data.isInfrastructure = !1;
                Y.__read_event_data.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_eventDataAccess,
                    d = b.vtp_keyPatterns || [],
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f, g) {
                        if (g != null && !z(g)) throw e(f, {
                            key: g
                        }, "Key must be a string.");
                        if (c !== "any") {
                            try {
                                if (c === "specific" && g != null && jg(g, d)) return
                            } catch (k) {
                                throw e(f, {
                                    key: g
                                }, "Invalid key filter.");
                            }
                            throw e(f, {
                                key: g
                            }, "Prohibited read from event data.");
                        }
                    },
                    M: a
                }
            })
        }();
    Y.securityGroups.gclidw = ["google"],
        function() {
            var a = ["aw", "dc", "gf", "ha", "gb"];
            (function(b) {
                Y.__gclidw = b;
                Y.__gclidw.o = "gclidw";
                Y.__gclidw.isVendorTemplate = !0;
                Y.__gclidw.priorityOverride = 100;
                Y.__gclidw.isInfrastructure = !1;
                Y.__gclidw.runInSiloedMode = !1
            })(function(b) {
                G(b.vtp_gtmOnSuccess);
                var c, d, e, f;
                b.vtp_enableCookieOverrides && (e = b.vtp_cookiePrefix, c = b.vtp_path, d = b.vtp_domain, f = b.vtp_cookieFlags);
                var g = IM(Q.g.fa);
                g = g != void 0 && g !== !1;
                if (T(26)) {
                    var k = {},
                        m = (k[Q.g.Fa] = e, k[Q.g.mb] = c, k[Q.g.La] = d, k[Q.g.Qa] =
                            f, k[Q.g.fa] = g, k);
                    b.vtp_enableUrlPassthrough && (m[Q.g.eb] = !0);
                    if (b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
                        var n = {};
                        m[Q.g.wa] = (n[Q.g.Ic] = b.vtp_acceptIncoming, n[Q.g.U] = b.vtp_linkerDomains.toString().replace(/\s+/g, "").split(","), n[Q.g.Sb] = b.vtp_urlPosition, n[Q.g.zb] = b.vtp_formDecoration, n)
                    }
                    var p = Hn(Gn(Fn(En(xn(new wn(b.vtp_gtmEventId, b.vtp_gtmPriorityId), m), Za), Za), !0));
                    p.eventMetadata.hit_type_override = "page_view";
                    XF("", Q.g.ba, Date.now(), p)
                } else {
                    var q = {
                        prefix: e,
                        path: c,
                        domain: d,
                        flags: f
                    };
                    if (!b.vtp_enableCrossDomain ||
                        b.vtp_acceptIncoming !== !1)
                        if (b.vtp_enableCrossDomain || cr()) ms(a, q), qr(q);
                    T(111) && ap() !== 2 ? ks(q) : is(q);
                    ss(["aw", "dc"], q);
                    Ns(q, void 0, void 0, g);
                    if (b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
                        var r = b.vtp_linkerDomains.toString().replace(/\s+/g, "").split(",");
                        qs(a, r, b.vtp_urlPosition, !!b.vtp_formDecoration, q.prefix);
                        rr(ir(q.prefix), r, b.vtp_urlPosition, !!b.vtp_formDecoration, q);
                        rr("FPAU", r, b.vtp_urlPosition, !!b.vtp_formDecoration, q)
                    }!yj() && !jj && T(128) && aw(void 0, Math.round(ob()), T(127));
                    It({
                        m: Hn(new wn(b.vtp_gtmEventId,
                            b.vtp_gtmPriorityId)),
                        Jh: !1,
                        Td: g,
                        wc: q,
                        og: !0
                    });
                    Hl = !0;
                    b.vtp_enableUrlPassthrough && vs(["aw", "dc", "gb"]);
                    xs(["aw", "dc", "gb"])
                }
            })
        }();
    Y.securityGroups.aev = ["google"],
        function() {
            function a(r, t, v, u, w) {
                w || (w = "element");
                var x = t + "." + v,
                    y;
                if (n.hasOwnProperty(x)) y = n[x];
                else {
                    var A = r[w];
                    if (A && (y = u(A), n[x] = y, p.push(x), p.length > 35)) {
                        var C = p.shift();
                        delete n[C]
                    }
                }
                return y
            }

            function b(r, t, v) {
                var u = r[q[t]];
                return u !== void 0 ? u : v
            }

            function c(r, t) {
                if (!r) return !1;
                var v = d(HM());
                Array.isArray(t) || (t = String(t || "").replace(/\s+/g, "").split(","));
                for (var u = [v], w = 0; w < t.length; w++) {
                    var x = t[w];
                    if (x.hasOwnProperty("is_regex"))
                        if (x.is_regex) try {
                            x = new RegExp(x.domain)
                        } catch (C) {
                            continue
                        } else x =
                            x.domain;
                    var y = d(r);
                    if (x instanceof RegExp) {
                        if (x.test(y)) return !1
                    } else {
                        var A = x;
                        if (A.length != 0) {
                            if (y.indexOf(A) >= 0) return !1;
                            u.push(d(A))
                        }
                    }
                }
                return !uM(r, u)
            }

            function d(r) {
                m.test(r) || (r = "http://" + r);
                return Rj(Xj(r), "HOST", !0)
            }

            function e(r, t, v, u) {
                switch (r) {
                    case "SUBMIT_TEXT":
                        return a(t, v, "FORM." + r, f, "formSubmitElement") || u;
                    case "LENGTH":
                        var w = a(t, v, "FORM." + r, g);
                        return w === void 0 ? u : w;
                    case "INTERACTED_FIELD_ID":
                        return k(t, "id", u);
                    case "INTERACTED_FIELD_NAME":
                        return k(t, "name", u);
                    case "INTERACTED_FIELD_TYPE":
                        return k(t,
                            "type", u);
                    case "INTERACTED_FIELD_POSITION":
                        var x = t.interactedFormFieldPosition;
                        return x === void 0 ? u : x;
                    case "INTERACT_SEQUENCE_NUMBER":
                        var y = t.interactSequenceNumber;
                        return y === void 0 ? u : y;
                    default:
                        return u
                }
            }

            function f(r) {
                switch (r.tagName.toLowerCase()) {
                    case "input":
                        return uc(r, "value");
                    case "button":
                        return vc(r);
                    default:
                        return null
                }
            }

            function g(r) {
                if (r.tagName.toLowerCase() === "form" && r.elements) {
                    for (var t = 0, v = 0; v < r.elements.length; v++) JC(r.elements[v]) && t++;
                    return t
                }
            }

            function k(r, t, v) {
                var u = r.interactedFormField;
                return u && uc(u, t) || v
            }
            var m = /^https?:\/\//i,
                n = {},
                p = [],
                q = {
                    ATTRIBUTE: "elementAttribute",
                    CLASSES: "elementClasses",
                    ELEMENT: "element",
                    ID: "elementId",
                    HISTORY_CHANGE_SOURCE: "historyChangeSource",
                    HISTORY_NEW_STATE: "newHistoryState",
                    HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
                    HISTORY_OLD_STATE: "oldHistoryState",
                    HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
                    TARGET: "elementTarget"
                };
            (function(r) {
                Y.__aev = r;
                Y.__aev.o = "aev";
                Y.__aev.isVendorTemplate = !0;
                Y.__aev.priorityOverride = 0;
                Y.__aev.isInfrastructure = !0;
                Y.__aev.runInSiloedMode = !1
            })(function(r) {
                var t = r.vtp_gtmEventId,
                    v = r.vtp_defaultValue,
                    u = r.vtp_varType,
                    w = r.vtp_gtmCachedValues.gtm;
                switch (u) {
                    case "TAG_NAME":
                        var x = w.element;
                        return x && x.tagName || v;
                    case "TEXT":
                        return a(w, t, u, vc) || v;
                    case "URL":
                        var y;
                        a: {
                            var A = String(w.elementUrl || v || ""),
                                C = Xj(A),
                                D = String(r.vtp_component || "URL");
                            switch (D) {
                                case "URL":
                                    y = A;
                                    break a;
                                case "IS_OUTBOUND":
                                    y = c(A, r.vtp_affiliatedDomains);
                                    break a;
                                default:
                                    y = Rj(C, D, r.vtp_stripWww, r.vtp_defaultPages, r.vtp_queryKey)
                            }
                        }
                        return y;
                    case "ATTRIBUTE":
                        var E;
                        if (r.vtp_attribute ===
                            void 0) E = b(w, u, v);
                        else {
                            var I = w.element;
                            E = I && uc(I, r.vtp_attribute) || v || ""
                        }
                        return E;
                    case "MD":
                        var H = r.vtp_mdValue,
                            O = a(w, t, "MD", zM);
                        return H && O ? wM(O, H) || v : O || v;
                    case "FORM":
                        return e(String(r.vtp_component || "SUBMIT_TEXT"), w, t, v);
                    default:
                        return b(w, u, v)
                }
            })
        }();
    Y.securityGroups.read_data_layer = ["google"],
        function() {
            function a(b, c) {
                return {
                    key: c
                }
            }(function(b) {
                Y.__read_data_layer = b;
                Y.__read_data_layer.o = "read_data_layer";
                Y.__read_data_layer.isVendorTemplate = !0;
                Y.__read_data_layer.priorityOverride = 0;
                Y.__read_data_layer.isInfrastructure = !1;
                Y.__read_data_layer.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_allowedKeys || "specific",
                    d = b.vtp_keyPatterns || [],
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f, g) {
                        if (!z(g)) throw e(f, {}, "Keys must be strings.");
                        if (c !==
                            "any") {
                            try {
                                if (jg(g, d)) return
                            } catch (k) {
                                throw e(f, {}, "Invalid key filter.");
                            }
                            throw e(f, {}, "Prohibited read from data layer variable: " + g + ".");
                        }
                    },
                    M: a
                }
            })
        }();
    Y.securityGroups.detect_element_visibility_events = ["google"],
        function() {
            function a() {
                return {}
            }(function(b) {
                Y.__detect_element_visibility_events = b;
                Y.__detect_element_visibility_events.o = "detect_element_visibility_events";
                Y.__detect_element_visibility_events.isVendorTemplate = !0;
                Y.__detect_element_visibility_events.priorityOverride = 0;
                Y.__detect_element_visibility_events.isInfrastructure = !1;
                Y.__detect_element_visibility_events.runInSiloedMode = !1
            })(function() {
                return {
                    assert: function() {},
                    M: a
                }
            })
        }();



    Y.securityGroups.gaawe = ["google"],
        function() {
            function a(f, g, k) {
                for (var m = 0; m < g.length; m++) f.hasOwnProperty(g[m]) && (f[g[m]] = k(f[g[m]]))
            }

            function b(f, g, k) {
                var m = {},
                    n = function(v, u) {
                        m[v] = m[v] || u
                    },
                    p = function(v, u, w) {
                        w = w === void 0 ? !1 : w;
                        c.push(6);
                        if (v) {
                            m.items = m.items || [];
                            for (var x = {}, y = 0; y < v.length; x = {
                                    pf: void 0
                                }, y++) x.pf = {}, hb(v[y], function(C) {
                                return function(D, E) {
                                    w && D === "id" ? C.pf.promotion_id = E : w && D === "name" ? C.pf.promotion_name = E : C.pf[D] = E
                                }
                            }(x)), m.items.push(x.pf)
                        }
                        if (u)
                            for (var A in u) d.hasOwnProperty(A) ? n(d[A],
                                u[A]) : n(A, u[A])
                    },
                    q;
                f.vtp_getEcommerceDataFrom === "dataLayer" ? (q = f.vtp_gtmCachedValues.eventModel) || (q = f.vtp_gtmCachedValues.ecommerce) : (q = f.vtp_ecommerceMacroData, Rc(q) && q.ecommerce && !q.items && (q = q.ecommerce));
                if (Rc(q)) {
                    var r = !1,
                        t;
                    for (t in q) q.hasOwnProperty(t) && (r || (c.push(5), r = !0), t === "currencyCode" ? n("currency", q.currencyCode) : t === "impressions" && g === Q.g.tb ? p(q.impressions, null) : t === "promoClick" && g === Q.g.Nb ? p(q.promoClick.promotions, q.promoClick.actionField, !0) : t === "promoView" && g === Q.g.ub ? p(q.promoView.promotions,
                        q.promoView.actionField, !0) : e.hasOwnProperty(t) ? g === e[t] && p(q[t].products, q[t].actionField) : m[t] = q[t]);
                    sM(m, k)
                }
            }
            var c = [],
                d = {
                    id: "transaction_id",
                    revenue: "value",
                    list: "item_list_name"
                },
                e = {
                    click: "select_item",
                    detail: "view_item",
                    add: "add_to_cart",
                    remove: "remove_from_cart",
                    checkout: "begin_checkout",
                    checkout_option: "checkout_option",
                    purchase: "purchase",
                    refund: "refund"
                };
            (function(f) {
                Y.__gaawe = f;
                Y.__gaawe.o = "gaawe";
                Y.__gaawe.isVendorTemplate = !0;
                Y.__gaawe.priorityOverride = 0;
                Y.__gaawe.isInfrastructure = !1;
                Y.__gaawe.runInSiloedMode = !1
            })(function(f) {
                var g;
                g = f.vtp_migratedToV2 ? String(f.vtp_measurementIdOverride) : String(f.vtp_measurementIdOverride || f.vtp_measurementId);
                if (z(g) && g.indexOf("G-") === 0) {
                    var k = String(f.vtp_eventName),
                        m = {};
                    c = [];
                    f.vtp_sendEcommerceData && (Dh.hasOwnProperty(k) || k === "checkout_option") && b(f, k, m);
                    var n = f.vtp_eventSettingsVariable;
                    if (n)
                        for (var p in n) n.hasOwnProperty(p) && (m[p] = n[p]);
                    if (f.vtp_eventSettingsTable) {
                        var q = vM(f.vtp_eventSettingsTable, "parameter", "parameterValue"),
                            r;
                        for (r in q) m[r] = q[r]
                    }
                    var t = vM(f.vtp_eventParameters,
                            "name", "value"),
                        v;
                    for (v in t) t.hasOwnProperty(v) && (m[v] = t[v]);
                    var u = f.vtp_userDataVariable;
                    u && (m[Q.g.Da] = u);
                    if (m.hasOwnProperty(Q.g.pb) || f.vtp_userProperties) {
                        var w = m[Q.g.pb] || {};
                        sM(vM(f.vtp_userProperties, "name", "value"), w);
                        m[Q.g.pb] = w
                    }
                    var x = {
                        originatingEntity: Dz(1, f.vtp_gtmEntityIndex, f.vtp_gtmEntityName)
                    };
                    if (c.length > 0) {
                        var y = {};
                        x.eventMetadata = (y.event_usage = c, y)
                    }
                    a(m, Eh, function(C) {
                        return kb(C)
                    });
                    a(m, Gh, function(C) {
                        return Number(C)
                    });
                    var A = f.vtp_gtmEventId;
                    x.noGtmEvent = !0;
                    lu(iu(g, k, m), A, x);
                    G(f.vtp_gtmOnSuccess)
                } else G(f.vtp_gtmOnFailure)
            })
        }();



    Y.securityGroups.detect_link_click_events = ["google"],
        function() {
            function a(b, c) {
                return {
                    options: c
                }
            }(function(b) {
                Y.__detect_link_click_events = b;
                Y.__detect_link_click_events.o = "detect_link_click_events";
                Y.__detect_link_click_events.isVendorTemplate = !0;
                Y.__detect_link_click_events.priorityOverride = 0;
                Y.__detect_link_click_events.isInfrastructure = !1;
                Y.__detect_link_click_events.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_allowWaitForTags,
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e, f) {
                        if (!c &&
                            f && f.waitForTags) throw d(e, {}, "Prohibited option waitForTags.");
                    },
                    M: a
                }
            })
        }();
    Y.securityGroups.detect_form_submit_events = ["google"],
        function() {
            function a(b, c) {
                return {
                    options: c
                }
            }(function(b) {
                Y.__detect_form_submit_events = b;
                Y.__detect_form_submit_events.o = "detect_form_submit_events";
                Y.__detect_form_submit_events.isVendorTemplate = !0;
                Y.__detect_form_submit_events.priorityOverride = 0;
                Y.__detect_form_submit_events.isInfrastructure = !1;
                Y.__detect_form_submit_events.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_allowWaitForTags,
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e, f) {
                        if (!c &&
                            f && f.waitForTags) throw d(e, {}, "Prohibited option waitForTags.");
                    },
                    M: a
                }
            })
        }();
    Y.securityGroups.load_google_tags = ["google"],
        function() {
            function a(b, c, d) {
                return {
                    tagId: c,
                    firstPartyUrl: d
                }
            }(function(b) {
                Y.__load_google_tags = b;
                Y.__load_google_tags.o = "load_google_tags";
                Y.__load_google_tags.isVendorTemplate = !0;
                Y.__load_google_tags.priorityOverride = 0;
                Y.__load_google_tags.isInfrastructure = !1;
                Y.__load_google_tags.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_allowedTagIds || "specific",
                    d = b.vtp_allowFirstPartyUrls || !1,
                    e = b.vtp_allowedFirstPartyUrls || "specific",
                    f = b.vtp_urls || [],
                    g = b.vtp_tagIds || [],
                    k = b.vtp_createPermissionError;
                return {
                    assert: function(m, n, p) {
                        (function(q) {
                            if (!z(q)) throw k(m, {}, "Tag ID must be a string.");
                            if (c !== "any" && (c !== "specific" || g.indexOf(q) === -1)) throw k(m, {}, "Prohibited Tag ID: " + q + ".");
                        })(n);
                        (function(q) {
                            if (q !== void 0) {
                                if (!z(q)) throw k(m, {}, "First party URL must be a string.");
                                if (d) {
                                    if (e === "any") return;
                                    if (e === "specific") try {
                                        if (Ag(Xj(q), f)) return
                                    } catch (r) {
                                        throw k(m, {}, "Invalid first party URL filter.");
                                    }
                                }
                                throw k(m, {}, "Prohibited first party URL: " + q);
                            }
                        })(p)
                    },
                    M: a
                }
            })
        }();


    Y.securityGroups.detect_user_provided_data = ["google"],
        function() {
            function a(b, c) {
                return {
                    dataSource: c
                }
            }(function(b) {
                Y.__detect_user_provided_data = b;
                Y.__detect_user_provided_data.o = "detect_user_provided_data";
                Y.__detect_user_provided_data.isVendorTemplate = !0;
                Y.__detect_user_provided_data.priorityOverride = 0;
                Y.__detect_user_provided_data.isInfrastructure = !1;
                Y.__detect_user_provided_data.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_createPermissionError;
                return {
                    assert: function(d, e) {
                        if (e !== "auto" && e !== "manual" &&
                            e !== "code") throw c(d, {}, "Unknown user provided data source.");
                        if (b.vtp_limitDataSources)
                            if (e !== "auto" || b.vtp_allowAutoDataSources) {
                                if (e === "manual" && !b.vtp_allowManualDataSources) throw c(d, {}, "Detection of user provided data via manually specified CSS selectors is not allowed.");
                                if (e === "code" && !b.vtp_allowCodeDataSources) throw c(d, {}, "Detection of user provided data from an in-page variable is not allowed.");
                            } else throw c(d, {}, "Automatic detection of user provided data is not allowed.");
                    },
                    M: a
                }
            })
        }();



    Y.securityGroups.ua = ["google"],
        function() {
            function a(n, p) {
                for (var q in n)
                    if (!k[q] && n.hasOwnProperty(q)) {
                        var r = g[q] ? kb(n[q]) : n[q];
                        q != "anonymizeIp" || r || (r = void 0);
                        p[q] = r
                    }
            }

            function b(n) {
                var p = {};
                n.vtp_gaSettings && sM(vM(n.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), p);
                sM(vM(n.vtp_fieldsToSet, "fieldName", "value"), p);
                kb(p.urlPassthrough) && (p._useUp = !0);
                n.vtp_transportUrl && (p._x_19 = n.vtp_transportUrl);
                return p
            }

            function c(n, p) {
                return p === void 0 ? p : n(p)
            }

            function d(n, p, q) {}

            function e(n, p) {
                if (!f && (!yj() && !jj || !p._x_19 || n.vtp_useDebugVersion || n.vtp_useInternalVersion)) {
                    var q = n.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
                    n.vtp_useInternalVersion && !n.vtp_useDebugVersion && (q = "internal/" + q);
                    f = !0;
                    var r = n.vtp_gtmOnFailure,
                        t = bk(p._x_19, "/analytics.js"),
                        v = Jt("https:", "http:", "//www.google-analytics.com/" + q, p && !!p.forceSSL);
                    GM(q === "analytics.js" && t ? t : v, function() {
                        var u = Mz();
                        u && u.loaded ||
                            r();
                    }, r)
                }
            }
            var f, g = {
                    allowAnchor: !0,
                    allowLinker: !0,
                    alwaysSendReferrer: !0,
                    anonymizeIp: !0,
                    cookieUpdate: !0,
                    exFatal: !0,
                    forceSSL: !0,
                    javaEnabled: !0,
                    legacyHistoryImport: !0,
                    nonInteraction: !0,
                    useAmpClientId: !0,
                    useBeacon: !0,
                    storeGac: !0,
                    allowAdFeatures: !0,
                    allowAdPersonalizationSignals: !0,
                    _cd2l: !0
                },
                k = {
                    urlPassthrough: !0
                },
                m = function(n) {
                    function p() {
                        if (n.vtp_doubleClick || n.vtp_advertisingFeaturesType == "DISPLAY_FEATURES") w.displayfeatures = !0
                    }
                    var q = {},
                        r = {},
                        t = {};
                    if (n.vtp_gaSettings) {
                        var v = n.vtp_gaSettings;
                        sM(vM(v.vtp_contentGroup, "index", "group"), q);
                        sM(vM(v.vtp_dimension, "index", "dimension"), r);
                        sM(vM(v.vtp_metric, "index", "metric"), t);
                        var u = sM(v);
                        u.vtp_fieldsToSet = void 0;
                        u.vtp_contentGroup = void 0;
                        u.vtp_dimension = void 0;
                        u.vtp_metric = void 0;
                        n = sM(n, u)
                    }
                    sM(vM(n.vtp_contentGroup, "index", "group"), q);
                    sM(vM(n.vtp_dimension, "index", "dimension"), r);
                    sM(vM(n.vtp_metric, "index", "metric"), t);
                    var w = b(n),
                        x = String(n.vtp_trackingId || ""),
                        y = "",
                        A = "",
                        C = "";
                    n.vtp_setTrackerName &&
                        typeof n.vtp_trackerName == "string" ? n.vtp_trackerName !== "" && (C = n.vtp_trackerName, A = C + ".") : (C = "gtm" + String(Om()), A = C + ".");
                    var D = function(ia, ja) {
                        for (var Ga in ja) ja.hasOwnProperty(Ga) && (w[ia + Ga] = ja[Ga])
                    };
                    D("contentGroup", q);
                    D("dimension", r);
                    D("metric", t);
                    n.vtp_enableEcommerce && (y = n.vtp_gtmCachedValues.event, w.gtmEcommerceData = d(n, w, y));
                    if (n.vtp_trackType === "TRACK_EVENT") y = "track_event", p(), w.eventCategory = String(n.vtp_eventCategory), w.eventAction = String(n.vtp_eventAction), w.eventLabel = c(String, n.vtp_eventLabel),
                        w.value = c(jb, n.vtp_eventValue);
                    else if (n.vtp_trackType == "TRACK_PAGEVIEW") {
                        if (y = Q.g.hc, p(), n.vtp_advertisingFeaturesType == "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" && (w.remarketingLists = !0), n.vtp_autoLinkDomains) {
                            var E = {};
                            E[Q.g.U] = n.vtp_autoLinkDomains;
                            E.use_anchor = n.vtp_useHashAutoLink;
                            E[Q.g.zb] = n.vtp_decorateFormsAutoLink;
                            w[Q.g.wa] = E
                        }
                    } else n.vtp_trackType === "TRACK_SOCIAL" ? (y = "track_social", w.socialNetwork = String(n.vtp_socialNetwork), w.socialAction = String(n.vtp_socialAction), w.socialTarget = String(n.vtp_socialActionTarget)) :
                        n.vtp_trackType == "TRACK_TIMING" && (y = "timing_complete", w.eventCategory = String(n.vtp_timingCategory), w.timingVar = String(n.vtp_timingVar), w.value = jb(n.vtp_timingValue), w.eventLabel = c(String, n.vtp_timingLabel));
                    n.vtp_enableRecaptcha && (w.enableRecaptcha = !0);
                    n.vtp_enableLinkId && (w.enableLinkId = !0);
                    var I = {};
                    a(w, I);
                    w.name || (I.gtmTrackerName = C);
                    I.gaFunctionName = n.vtp_functionName;
                    n.vtp_nonInteraction !== void 0 && (I.nonInteraction = n.vtp_nonInteraction);
                    var H = Hn(Gn(Fn(En(xn(new wn(n.vtp_gtmEventId, n.vtp_gtmPriorityId),
                        I), n.vtp_gtmOnSuccess), n.vtp_gtmOnFailure), !0));
                    n.vtp_useDebugVersion && n.vtp_useInternalVersion && (H.eventMetadata.suppress_script_load = !0);
                    UG(x, y, Date.now(), H);
                    var O = Pz(n.vtp_functionName);
                    if ($a(O)) {
                        var K = function(ia) {
                            var ja = [].slice.call(arguments, 0);
                            ja[0] = A + ja[0];
                            O.apply(window, ja)
                        };
                        if (n.vtp_trackType == "TRACK_TRANSACTION") {} else if (n.vtp_trackType == "DECORATE_LINK") {} else if (n.vtp_trackType == "DECORATE_FORM") {} else if (n.vtp_trackType == "TRACK_DATA") {}
                        e(n, w)
                    } else G(n.vtp_gtmOnFailure)
                };
            Y.__ua = m;
            Y.__ua.o = "ua";
            Y.__ua.isVendorTemplate = !0;
            Y.__ua.priorityOverride = 0;
            Y.__ua.isInfrastructure = !1;
            Y.__ua.runInSiloedMode = !1
        }();
    Y.securityGroups.inject_script = ["google"],
        function() {
            function a(b, c) {
                return {
                    url: c
                }
            }(function(b) {
                Y.__inject_script = b;
                Y.__inject_script.o = "inject_script";
                Y.__inject_script.isVendorTemplate = !0;
                Y.__inject_script.priorityOverride = 0;
                Y.__inject_script.isInfrastructure = !1;
                Y.__inject_script.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_urls || [],
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e, f) {
                        if (!z(f)) throw d(e, {}, "Script URL must be a string.");
                        try {
                            if (Ag(Xj(f), c)) return
                        } catch (g) {
                            throw d(e, {}, "Invalid script URL filter.");
                        }
                        throw d(e, {}, "Prohibited script URL: " + f);
                    },
                    M: a
                }
            })
        }();
    Y.securityGroups.unsafe_run_arbitrary_javascript = ["google"],
        function() {
            function a() {
                return {}
            }(function(b) {
                Y.__unsafe_run_arbitrary_javascript = b;
                Y.__unsafe_run_arbitrary_javascript.o = "unsafe_run_arbitrary_javascript";
                Y.__unsafe_run_arbitrary_javascript.isVendorTemplate = !0;
                Y.__unsafe_run_arbitrary_javascript.priorityOverride = 0;
                Y.__unsafe_run_arbitrary_javascript.isInfrastructure = !1;
                Y.__unsafe_run_arbitrary_javascript.runInSiloedMode = !1
            })(function() {
                return {
                    assert: function() {},
                    M: a
                }
            })
        }();

    Y.securityGroups.gas = ["google"], Y.__gas = function(a) {
        var b = sM(a),
            c = b;
        c[Ke.qa] = null;
        c[Ke.vh] = null;
        var d = b = c;
        d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
        var e = d.vtp_cookieDomain;
        e !== void 0 && (d.vtp_fieldsToSet.push({
            fieldName: "cookieDomain",
            value: e
        }), delete d.vtp_cookieDomain);
        return b
    }, Y.__gas.o = "gas", Y.__gas.isVendorTemplate = !0, Y.__gas.priorityOverride = 0, Y.__gas.isInfrastructure = !1, Y.__gas.runInSiloedMode = !1;


    Y.securityGroups.awct = ["google"],
        function() {
            function a(b, c, d) {
                return function(e, f, g, k) {
                    k = k === void 0 ? !1 : k;
                    var m = d === "DATA_LAYER" ? IM(g) : b[f];
                    k && m == null || (c[e] = m)
                }
            }(function(b) {
                Y.__awct = b;
                Y.__awct.o = "awct";
                Y.__awct.isVendorTemplate = !0;
                Y.__awct.priorityOverride = 0;
                Y.__awct.isInfrastructure = !1;
                Y.__awct.runInSiloedMode = !1
            })(function(b) {
                var c = !b.hasOwnProperty("vtp_enableConversionLinker") || !!b.vtp_enableConversionLinker,
                    d = !!b.vtp_enableEnhancedConversions || !!b.vtp_enableEnhancedConversion,
                    e = vM(b.vtp_customVariables,
                        "varName", "value") || {},
                    f = b.vtp_conversionCookiePrefix;
                T(138) && f === "_gcl" && (f = void 0);
                var g = {},
                    k = (g[Q.g.ma] = b.vtp_conversionValue || 0, g[Q.g.Ba] = b.vtp_currencyCode, g[Q.g.Ca] = b.vtp_orderId, g[Q.g.kb] = f, g[Q.g.sa] = c, g[Q.g.he] = d, g[Q.g.fa] = IM(Q.g.fa), g[Q.g.ia] = IM("developer_id"), g);
                k[Q.g.Aa] = IM(Q.g.Aa), k[Q.g.la] = IM(Q.g.la), k[Q.g.ic] = IM(Q.g.ic), k[Q.g.Na] = IM(Q.g.Na);
                b.vtp_rdp && (k[Q.g.Ab] = !0);
                if (b.vtp_enableCustomParams)
                    for (var m in e) Lh.hasOwnProperty(m) ||
                        (k[m] = e[m]);
                if (b.vtp_enableProductReporting) {
                    var n = a(b, k, b.vtp_productReportingDataSource);
                    n(Q.g.me, "vtp_awMerchantId", "aw_merchant_id");
                    n(Q.g.je, "vtp_awFeedCountry", "aw_feed_country");
                    n(Q.g.ke, "vtp_awFeedLanguage", "aw_feed_language");
                    T(113) && (n(Q.g.Nf, "vtp_awMerchantId", "merchant_id", !0), n(Q.g.Lf, "vtp_awFeedCountry", "merchant_feed_label", !0), n(Q.g.Mf, "vtp_awFeedLanguage", "merchant_feed_language", !0));
                    n(Q.g.ie, "vtp_discount", "discount");
                    n(Q.g.da, "vtp_items", "items")
                }
                b.vtp_enableShippingData && (k[Q.g.Cd] =
                    b.vtp_deliveryPostalCode, k[Q.g.te] = b.vtp_estimatedDeliveryDate, k[Q.g.Cc] = b.vtp_deliveryCountry, k[Q.g.sd] = b.vtp_shippingFee);
                b.vtp_transportUrl && (k[Q.g.Cb] = b.vtp_transportUrl);
                if (b.vtp_enableNewCustomerReporting) {
                    var p = a(b, k, b.vtp_newCustomerReportingDataSource);
                    p(Q.g.xd, "vtp_awNewCustomer", "new_customer");
                    p(Q.g.nd, "vtp_awCustomerLTV", "customer_lifetime_value")
                }
                var q = "AW-" + b.vtp_conversionId,
                    r = q + "/" + b.vtp_conversionLabel,
                    t = !(T(138) && Zk(q) === 1);
                t && zz(q, b.vtp_transportUrl, {
                    source: 7,
                    fromContainerExecution: !0,
                    siloed: !0
                });
                var v = b.vtp_cssProvidedEnhancedConversionValue || b.vtp_enhancedConversionObject;
                v && (k[Q.g.Da] = v);
                if (t) {
                    var u;
                    a: {
                        if (b.vtp_enableEnhancedConversion) {
                            var w = b.vtp_cssProvidedEnhancedConversionValue || b.vtp_enhancedConversionObject;
                            if (w) {
                                u = {
                                    enhanced_conversions_mode: "manual",
                                    enhanced_conversions_manual_var: w
                                };
                                break a
                            }
                        }
                        u = void 0
                    }
                    var x = u;
                    if (x) {
                        var y = {};
                        k[Q.g.se] = (y[b.vtp_conversionLabel] = x, y)
                    }
                }
                var A = {},
                    C = {
                        eventMetadata: (A.hit_type_override = "conversion", A),
                        noGtmEvent: !0,
                        isGtmEvent: !0,
                        onSuccess: b.vtp_gtmOnSuccess,
                        onFailure: b.vtp_gtmOnFailure
                    };
                lu(iu(t ? Ck(r) : r, Q.g.Ka, k), b.vtp_gtmEventId, C)
            })
        }();
    Y.securityGroups.unsafe_inject_arbitrary_html = ["google"],
        function() {
            function a(b, c, d) {
                return {
                    useIframe: c,
                    supportDocumentWrite: d
                }
            }(function(b) {
                Y.__unsafe_inject_arbitrary_html = b;
                Y.__unsafe_inject_arbitrary_html.o = "unsafe_inject_arbitrary_html";
                Y.__unsafe_inject_arbitrary_html.isVendorTemplate = !0;
                Y.__unsafe_inject_arbitrary_html.priorityOverride = 0;
                Y.__unsafe_inject_arbitrary_html.isInfrastructure = !1;
                Y.__unsafe_inject_arbitrary_html.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_createPermissionError;
                return {
                    assert: function(d, e, f) {
                        if (e && f) throw c(d, {}, "Only one of useIframe and supportDocumentWrite can be true.");
                        if (e !== void 0 && typeof e !== "boolean") throw c(d, {}, "useIframe must be a boolean.");
                        if (f !== void 0 && typeof f !== "boolean") throw c(d, {}, "supportDocumentWrite must be a boolean.");
                    },
                    M: a
                }
            })
        }();

    Y.securityGroups.detect_click_events = ["google"],
        function() {
            function a(b, c, d) {
                return {
                    matchCommonButtons: c,
                    cssSelector: d
                }
            }(function(b) {
                Y.__detect_click_events = b;
                Y.__detect_click_events.o = "detect_click_events";
                Y.__detect_click_events.isVendorTemplate = !0;
                Y.__detect_click_events.priorityOverride = 0;
                Y.__detect_click_events.isInfrastructure = !1;
                Y.__detect_click_events.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_createPermissionError;
                return {
                    assert: function(d, e, f) {
                        if (e !== void 0 && typeof e !== "boolean") throw c(d, {}, "matchCommonButtons must be a boolean.");
                        if (f !== void 0 && typeof f !== "string") throw c(d, {}, "cssSelector must be a string.");
                    },
                    M: a
                }
            })
        }();
    Y.securityGroups.logging = ["google"],
        function() {
            function a() {
                return {}
            }(function(b) {
                Y.__logging = b;
                Y.__logging.o = "logging";
                Y.__logging.isVendorTemplate = !0;
                Y.__logging.priorityOverride = 0;
                Y.__logging.isInfrastructure = !1;
                Y.__logging.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_environments || "debug",
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e) {
                        var f;
                        if (f = c !== "all" && !0) {
                            var g = !1;
                            f = !g
                        }
                        if (f) throw d(e, {}, "Logging is not enabled in all environments");
                    },
                    M: a
                }
            })
        }();

    Y.securityGroups.configure_google_tags = ["google"],
        function() {
            function a(b, c, d) {
                return {
                    tagId: c,
                    configuration: d
                }
            }(function(b) {
                Y.__configure_google_tags = b;
                Y.__configure_google_tags.o = "configure_google_tags";
                Y.__configure_google_tags.isVendorTemplate = !0;
                Y.__configure_google_tags.priorityOverride = 0;
                Y.__configure_google_tags.isInfrastructure = !1;
                Y.__configure_google_tags.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_allowedTagIds || "specific",
                    d = b.vtp_tagIds || [],
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f,
                        g) {
                        if (!z(g)) throw e(f, {}, "Tag ID must be a string.");
                        if (c !== "any" && (c !== "specific" || d.indexOf(g) === -1)) throw e(f, {}, "Prohibited configuration for Tag ID: " + g + ".");
                    },
                    M: a
                }
            })
        }();





    var Mm = {
        dataLayer: Fj,
        callback: function(a) {
            qj.hasOwnProperty(a) && $a(qj[a]) && qj[a]();
            delete qj[a]
        },
        bootstrap: 0
    };
    Mm.onHtmlSuccess = cC(!0), Mm.onHtmlFailure = cC(!1);

    function NM() {
        Lm();
        Pk();
        yz();
        rb(rj, Y.securityGroups);
        var a = Jk(Kk()),
            b, c = a == null ? void 0 : (b = a.context) == null ? void 0 : b.source;
        km(c, a == null ? void 0 : a.parent);
        c !== 2 && c !== 4 && c !== 3 || U(142);
        ZB(), pf({
            Um: function(d) {
                return d === XB
            },
            jm: function(d) {
                return new $B(d)
            },
            Vm: function(d) {
                for (var e = !1, f = !1, g = 2; g < d.length; g++) e = e || d[g] === 8, f = f || d[g] === 16;
                return e && f
            },
            qn: function(d) {
                var e;
                if (d === XB) e = d;
                else {
                    var f = Om();
                    YB[f] = d;
                    e = 'google_tag_manager["rm"]["' + Hk() + '"](' + f + ")"
                }
                return e
            }
        });
        sf = {
            gm: Jf
        }
    }
    var OM = !1;
    (function(a) {
        function b() {
            n = F.documentElement.getAttribute("data-tag-assistant-present");
            Yl(n) && (m = k.Hj)
        }

        function c() {
            m && gc ? g(m) : a()
        }
        if (!B["__TAGGY_INSTALLED"]) {
            var d = !1;
            if (F.referrer) {
                var e = Xj(F.referrer);
                d = Tj(e, "host") === "cct.google"
            }
            if (!d) {
                var f = Xp("googTaggyReferrer");
                d = !(!f.length || !f[0].length)
            }
            d && (B["__TAGGY_INSTALLED"] = !0, mc("https://cct.google/taggy/agent.js"))
        }
        var g = function(v) {
                var u = "GTM",
                    w = "GTM";
                hj && (u = "OGT", w = "GTAG");
                var x = B["google.tagmanager.debugui2.queue"];
                x || (x = [], B["google.tagmanager.debugui2.queue"] = x, mc("https://" + bj.Af + "/debug/bootstrap?id=" + Pf.ctid + "&src=" + w + "&cond=" + v + "&gtm=" + Up()));
                var y = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: gc,
                        containerProduct: u,
                        debug: !1,
                        id: Pf.ctid,
                        targetRef: {
                            ctid: Pf.ctid,
                            isDestination: yk()
                        },
                        aliases: Bk(),
                        destinations: zk()
                    }
                };
                y.data.resume = function() {
                    a()
                };
                bj.al && (y.data.initialPublish = !0);
                x.push(y)
            },
            k = {
                Fl: 1,
                Jj: 2,
                Xj: 3,
                Ji: 4,
                Hj: 5
            };
        k[k.Fl] = "GTM_DEBUG_LEGACY_PARAM";
        k[k.Jj] = "GTM_DEBUG_PARAM";
        k[k.Xj] = "REFERRER";
        k[k.Ji] = "COOKIE";
        k[k.Hj] = "EXTENSION_PARAM";
        var m = void 0,
            n = void 0,
            p = Rj(B.location, "query", !1, void 0, "gtm_debug");
        Yl(p) && (m = k.Jj);
        if (!m && F.referrer) {
            var q = Xj(F.referrer);
            Tj(q, "host") === "tagassistant.google.com" && (m = k.Xj)
        }
        if (!m) {
            var r = Xp("__TAG_ASSISTANT");
            r.length && r[0].length && (m = k.Ji)
        }
        m || b();
        if (!m && Xl(n)) {
            var t = !1;
            sc(F, "TADebugSignal", function() {
                t || (t = !0, b(), c())
            }, !1);
            B.setTimeout(function() {
                t || (t = !0, b(), c())
            }, 200)
        } else c()
    })(function() {
        try {
            if (OM || !Yk()) {
                wj();
                uj.K = "";
                uj.sc = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
                uj.xa = "ad_storage|analytics_storage|ad_user_data";
                uj.X = "5230";
                uj.X = "5230";
                Nk();
                if (T(102)) {}
                hi[8] = !0;
                var a = Km("debugGroupId", function() {
                    return String(Math.floor(Number.MAX_SAFE_INTEGER *
                        Math.random()))
                });
                rm(a);
                Im();
                up();
                Xm();
                if (Qk()) {
                    AD();
                    jz().removeExternalRestrictions(Hk());
                } else {
                    tw();
                    uz();
                    qf();
                    mf = Y;
                    nf = eC;
                    Lf = new Sf;
                    nM();
                    NM();
                    Fm();
                    xB();
                    KA();
                    dB = !1;
                    F.readyState === "complete" ? fB() : sc(B, "load", fB);
                    DA();
                    lk && (Kn(Yn), B.setInterval(Xn,
                        864E5), Kn(hC), Kn(aA), Kn(Ix), Kn(ao), Kn(nC), Kn(lA), T(117) && (Kn(fA), Kn(gA), Kn(hA)), iC());
                    mk && (nl(), qn(), EA(), AB(), yB(), T(42) && (el("bt", String(uj.j ? 2 : jj ? 1 : 0)), el("ct", String(uj.j ? 0 : jj ? 1 : Sp() ? 2 : 3))));
                    VB();
                    Ol(1);
                    BD();
                    pj = ob();
                    Mm.bootstrap = pj;
                    uj.H && wB();
                    if (T(102)) {}
                    T(131) &&
                        (typeof B.name === "string" && tb(B.name, "web-pixel-sandbox-CUSTOM") && Hc() ? qM("dMDg0Yz") : B.Shopify && Hc() && qM("dNTU0Yz"))
                }
            }
        } catch (b) {
            Ol(4), Un()
        }
    });

})()