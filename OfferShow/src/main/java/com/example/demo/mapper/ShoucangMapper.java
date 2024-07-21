package com.example.demo.mapper;


public interface ShoucangMapper {
	
	// 添加到薪资收藏
	public boolean insertXinZiShouCang(String companyName,String universityName,String job,String major,String city,String wage,String qualification,String type,String detail,String profession,int reliability);
	
	// 添加到话题收藏
	public boolean insertHuaTiShouCang(String companyName,String companyName1,String companyName2,String job,String detail);

	// 取消薪资收藏
	public void deleteXinZiShouCang(String qualification, String detail);
	
	// 取消话题收藏
	public void deleteHuaTiShouCang(String detail);
}
