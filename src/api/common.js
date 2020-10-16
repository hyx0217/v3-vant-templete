import request from '@/utils/request'

//获取主题
export function getTopic(){
  return request({
    url:'/getTopic',
    method:'GET'
  })
}
//获取主题详情
export function getTopicDetail(params){
  return request({
    url:'/getTopicDetail',
    method:'GET',
    params
  })
}