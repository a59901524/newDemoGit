// var baseUrl = 'http://www.youdiyouli.cn/api/'; //正式地址
// var baseUrl = 'http://www.yujianlian.com/api/'; // 分拆测试服



var baseUrl = 'http://api3.xinhuahua.cn/api/'; //正式地址



//var baseUrl = 'https://www.medozp.com/api/'; //正式地址
// var baseUrl = 'https://api.develop.medozp.com/api/'; // 测试地址
var VideoBaseUrl = 'http://yjvideo.stockhome.com.cn/'; //视频域名

/************************登录注册******************************已完成*/
var sendMsgUrl = baseUrl + 'base/sms'; //发送验证码
var registerUrl = baseUrl + 'user/create'; //注册
var mobileLoginUrl = baseUrl + 'user/login'; //登录
var accessTokenUrl = baseUrl + 'token/accessToken'; //获取token
var getuserinfoUrl = baseUrl + 'user/info'; //获取用户信息
var agreement_JXA = baseUrl + 'article/detail' //参数id=4注册协议     id=5关于HDC
    /************************home******************************已完成*/
var RegistrationIdUrl = baseUrl + 'user/update_push' //绑定极光推送
var orchardNoticeUrl = baseUrl + 'article/newest_notice'; //首页公告
var homevideoUrl = baseUrl + 'home/index'; //首页推荐视频列表
var homehotvideoUrl = baseUrl + 'home/hot_list'; //首页热门列表
var homenearvideoUrl = baseUrl + 'home/near_list'; //首页附近列表
var homeglobalvideoUrl = baseUrl + 'home/global_list'; //首页全球互联列表
var searchUrl = baseUrl + 'home/search'; //首页搜索
var historyUrl = baseUrl + 'home/search_history'; //搜索历史列表
var delsearchUrl = baseUrl + 'home/delete_search_history'; //删除搜索历史
var playVideocountUrl = baseUrl + 'video/add_look_count'; //视频播放量
var checkvideolooklogUrl = baseUrl + 'video/check_look_task'; //检查每日任务是否完成
var addvideolooklogUrl = baseUrl + 'video/look_task'; //每日看视频任务
var focusUrl = baseUrl + 'user/focus'; //关注操作
var likevideoUrl = baseUrl + 'video/add_like_count'; //点赞视频，取消视频
var shareCountUrl = baseUrl + 'video/add_share_count'; //累加分享视频次数
var getshareVideoUrl = baseUrl + 'video/share_url'; //返回商品分享链接
var delVideoUrl = baseUrl + 'video/video_delete'; //删除我发布的视频
var give_video_giftUrl = baseUrl + 'video/give_gift'; //打赏
var commentListUrl = baseUrl + 'video/comment'; //首页视频评论列表
var commentVideoUrl = baseUrl + 'video/add_comment'; //首页视频评论
var delhomecacheUrl = baseUrl + 'home/delete_home_cache'; //清除首页推荐视频缓存
var updateuserlabelUrl = baseUrl + 'user/update_tags'; //更新标签
/************************拍摄视频******************************已完成*/
var gettokenUrl = baseUrl + 'Qny/get_token'; //获取七牛云token
var getmuCateUrl = baseUrl + 'Music/category_list'; //音乐类别列表
var hotMusicUrl = baseUrl + 'Music/hot_music_list'; //获取热门歌曲前10条
var mycolMusicUrl = baseUrl + 'Music/like_music_list'; //我收藏的音乐列表
var colMusicUrl = baseUrl + 'Music/like_music'; //收藏音乐
var searchMusicUrl = baseUrl + 'Music/search_music'; //搜索音乐

/************************发布摄视频*******************************/
var addVideoUrl = baseUrl + 'Video/add'; //发布视频
var videoLabel = baseUrl + 'video/video_tags'; //获取视频标签列表
var checkTodayVideo = baseUrl + 'Video/video_today'; //检测今天是否发布过视频
var putList = baseUrl + 'video/video_price'; //获取推送量价格列表
var checkCityFreeVideo = baseUrl + 'video/video_months'; //视频上热门城市合伙人（专利）
var getQuhao = baseUrl + 'base/country_list'; //获取区号 //全球国家
var GloballyUrl = baseUrl + 'base/region_global'; //根据国家ID获取城市
var getCityUrl = baseUrl + 'base/get_city_by_position'; //根据经纬度获取城市名称
var addVorderUrl = baseUrl + 'video/add_order'; //视频上热门 video/add_video_order
/************************message*******************************/
var system_notice_listUrl = baseUrl + 'Notice/system_notice_list'; //获取系统消息
var my_notice_listUrl = baseUrl + 'Notice/my_notice_list'; //获取官方消息
var my_like_listUrl = baseUrl + 'Notice/my_like_list'; //我的点赞消息列表
var my_fans_listUrl = baseUrl + 'User/my_fans_list'; //我的粉丝列表
var at_me_listUrl = baseUrl + 'Notice/at_me_list'; //@本人消息列表
var get_comment_listUrl = baseUrl + 'Video/get_comment_list'; //获取所有评论列表

// 下面已对接
var getchatnoticeUrl = baseUrl + 'article/get_assistant_list'; //获取小助手消息
var search_focus_user_listUrl = baseUrl + 'user/search_focus_list'; //搜索我关注的列表
var fanlistUrl = baseUrl + 'user/fans_list'; //我的粉丝
var idollistUrl = baseUrl + 'user/focus_list'; //我的关注

/************************个人信息*******************************/
var videouserInfo = baseUrl + 'video/info'; //个人信息
var editInfoUrl = baseUrl + 'video/save_info'; //编辑个人信息
var updatetipsstatus = baseUrl + 'user/update_tips_status'; //不再显示新手教程
/************************个人中心*******************************/
var signInUrl = baseUrl + 'user/sign'; //签到
var recordUrl = baseUrl + 'user/record'; //账单中心
var headimgUrl = baseUrl + 'user/update_avatar'; //修改头像
var shareIndexUrl = baseUrl + 'user/share'; //推广招募
var bankList = baseUrl + 'user/bank_list'; //银行列表
var bingBankUrl = baseUrl + 'user/bind_bank'; //绑定银行卡
var bingWechat = baseUrl + 'user/bind_wechat'; //绑定微信
var bindAlipay = baseUrl + 'user/bind_alipay'; //绑定支付宝
var bindEth = baseUrl + 'user/bind_eth'; //绑定Eth
var exchangeUrl = baseUrl + 'user/change'; //获取转换信息
var feedcateUrl = baseUrl + 'feedback/category_list'; //反馈类型
var myAskcateUrl = baseUrl + 'feedback/add'; //添加反馈/投诉
var getfeedbacklistUrl = baseUrl + 'feedback/feedback_list'; //反馈列表
var getreplylistUrl = baseUrl + 'feedback/reply_list'; //反馈回复列表
var replyUrl = baseUrl + 'feedback/reply'; //提交反馈回复
var closefeedbackUrl = baseUrl + 'feedback/close_feedback'; //关闭反馈
var updatePwdUrl = baseUrl + 'user/update_password'; //修改密码
var forgetPwdUrl = baseUrl + 'user/forget_password'; //忘记登录密码
var taskIndexUrl = baseUrl + 'user/task_center'; //每日任务
var gettaskUrl = baseUrl + 'user/get_task'; //领取任务
var posttaskUrl = baseUrl + 'user/submit_task'; //提交任务
var getUnionsUrl = baseUrl + 'unions/get_unions'; //查公会
var upDateAvatar = baseUrl + 'unions/update_avatar'; //公会头像修改
var editUnionsUrl = baseUrl + 'unions/update_unions'; //编辑公会信息
var getsxywxUrl = baseUrl + 'user/get_college_wechat'; //商学院微信
var aboutUsUrl = baseUrl + 'base/about_us'; //关于HDC
var helplistUrl = baseUrl + 'Article/article_list'; //帮助中心7 消息公告6 分享千聊10
var advicesdetailUrl = baseUrl + 'Article/detail'; //消息公告详情
var myTeamList = baseUrl + 'user/my_team_list'; //我的全部团队成员列表
var myUnderlingList = baseUrl + 'user/my_underling_list'; //我的团队列表
var primary_List_Ysm = baseUrl + 'user/my_underling_primary_list'; // 我的直推已认证成员列表
var primary_List_Wsm = baseUrl + 'user/my_underling_not_primary_list'; // 我的直推未认证成员列表
/************************ 认证******************************已完成*/
var faceCertifyUrl = baseUrl + 'user/face_certify_ff'; //支付宝刷脸认证
var checkCertifyUrl = baseUrl + 'user/check_face_certify'; //支付宝刷脸认证结果查询
var getPaySignStr = baseUrl + 'alipay/alipay'; //支付接口
var getupsmrzlevel = baseUrl + 'user/upgrade'; //中级高级认证
var wildcertifyUrl = baseUrl + 'user/auth'; //上传证件认证
/************************ 森林市场***************************已完成****/
var productListUrl = baseUrl + 'forest/market'; //森林市场
var productBuyUrl = baseUrl + 'forest/buy'; // 购买矿机

/************************ 我的森林******************************已完成*/
var myTypeProListUrl = baseUrl + 'forest/profit'; //我的森林我的收益
var myProListUrl = baseUrl + 'forest/my_forest'; //我的森林列表
var myProDetailUrl = baseUrl + 'forest/detail'; //我的森林详情
var getmyProUrl = baseUrl + 'forest/get_profit'; //领取HDC,一个收益记录
var getdeatilallUrl = baseUrl + 'forest/get_forest_profit'; // 一件领取HDC,领取用户某一森林的所有收益(详情)
var getmywhole = baseUrl + 'Forest/get_all_profit'; //一键领取HDC,领取某一型号的用户森林的所有收益(首页)

/************************交易中心*******************************已完成*/
var getJyzxUrl =  baseUrl +  'Trade/index'; //交易中心首页
var tradeListUrl =  baseUrl +  'Trade/my_orders'; //我的订单,交易信箱
var getOrderUrl =  baseUrl +  'Trade/orders'; //交易中心列表
var putOrderUrl =  baseUrl +  'Trade/create'; //挂买卖单  挂单
var tradeUrl = baseUrl + 'Trade/matching'; //交易中心列表购买/卖出 匹配订单

var getBuyerBusy = baseUrl + 'trade/is_buyer_busy'; //交易中心列表卖出 检查买家是否繁忙
var tradeUser = baseUrl + 'user/user_info'; //交易买家资料卖家资料
var getPingzhengUrl = baseUrl + 'trade/info'; //交易中心获取买家凭证
var buyerConfirmUrl = baseUrl + 'Trade/pay'; //交易中心买家确认支付
var sellerConfirmUrl = baseUrl + 'Trade/confirm'; //交易中心卖家确认
var delOrderUrl = baseUrl + 'Trade/cancel'; //交易中心取消挂单
/************************应用中心*******************************/
var  getadlistUrl  =  baseUrl  +  'adv/adv_list';  //轮播图广告
var getcjtg = baseUrl + 'Members/turntable_send_reward'; //返回的奖励糖果
var getzpcj = baseUrl + 'Members/turntable'; //转盘的奖励

var TelrechargeUrl = baseUrl + 'tel/recharge'; //话费充值
var TeltypeUrl = baseUrl + 'tel/type'; //话费充值类型
var TelqueryUrl = baseUrl + 'tel/query'; //话费充值记录

var yqueryUrl = baseUrl + 'sinopec/query'; // 查加油卡充值记录
var rechargeUrl = baseUrl + 'sinopec/recharge'; // 充值
var sinopectypeUrl = baseUrl + 'sinopec/type'; // 加油卡类型
var JXA_payUrl = baseUrl + 'base/change_JXA'; // 计算所需HDC

var addReward = baseUrl + 'bounty/add'; // 发布悬赏  已对好接口
var getRewardUrl = baseUrl + 'bounty/bounty_list'; // 获取悬赏任务列表
var getrewarddesUrl = baseUrl + 'bounty/bounty_info'; // 获取悬赏任务详情
var acceptrewardUrl = baseUrl + 'bounty/accept_bounty'; // 领取悬赏任务
var subrewardUrl = baseUrl + 'bounty/submit_accept'; // 提交悬赏任务
var rewardCenterUrl = baseUrl + 'bounty/bounty_center'; // 悬赏任务中心
var mypublishUrl = baseUrl + 'bounty/my_publish'; // 我发布的任务
var myacceptUrl = baseUrl + 'bounty/my_accept'; // 我领取的任务

var releaseacceptUrl = baseUrl + 'bounty/release_accept'; // 释放超时的领取
var cancelrewardUrl = baseUrl + 'bounty/cancel_bounty'; // 取消发布任务
var verifyrewardUrl = baseUrl + 'bounty/verify_accept'; // 审核任务
var appealrewardUrl = baseUrl + 'bounty/appeal_accept'; // 申诉任务
var getacceptUrl = baseUrl + 'bounty/accept_info'; //获取已领取任务详细
// var getacceptUrl = baseUrl + 'bounty/accept_list'; //获取已领取列表   现在用不上
// accept_list 获取已领取列表
// accept_info 获取已领取任务详细
var partnerApply = baseUrl + 'partner/apply'; //城市合伙人申请
var positionUrl = baseUrl + 'position/position'; //获取地址城市列表  全球国家
var belongcityUrl = baseUrl + 'members/update_belong_city'; //绑定用户地址信息
var getcollegelistUrl = baseUrl + 'college/college_list'; //商学院信息列表
var getcollegeUrl = baseUrl + 'college/detail'; //商学院信息详情
/************************留言聊天*******************************/
var getchatListUrl = baseUrl + 'chat/get_chat_user_list'; //获取聊天列表
var getChatUrl = baseUrl + 'chat/get_chat'; //获取和某人的聊天记录
var sendChatUrl = baseUrl + 'chat/send_chat'; //发送聊天消息
var pullBlackUrl = baseUrl + 'Chat/pull_black'; //加入黑名单
var deletepullBlackUrl = baseUrl + 'Chat/delete_pull_black'; //移出黑名单
var getreportcateUrl = baseUrl + 'video/report_category'; //举报分类
var getreportUrl = baseUrl + 'video/report'; //举报用户


var GlobleLanguageContent = {}
var multiLang = new MultiLang()
multiLang.init({
    path: '../lib/language/',
    dataType: 'js',
    name: {
        'en': 'en_lang',
        'cn': 'cn_lang'
    },
    callback: function(data, langName) {
        GlobleLanguageContent = data
    }
})
