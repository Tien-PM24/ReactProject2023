import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./style/detail_room.css";

function HotelDetail() {
    return (
        <div className="body-detail">
            <h2>1 phòng nghủ trong căn hộ Lyon Presqu'en xinh đẹp</h2>
            <div className="pictureHotel">
                <div className="pictureLeft">
                    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-53505989/original/607235e0-45d3-4450-b507-b9b0477d68d9.jpeg?im_w=960" alt="" />
                </div>
                <div className="pictureRight">
                    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-53505989/original/d675cab7-7269-4e01-b917-10c4f564f6aa.jpeg?im_w=720" alt="" />
                    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-53505989/original/e5b3fbfb-4cda-4941-a8ea-0330fbe510ea.jpeg?im_w=720" alt="" style={{ borderRadius: "0 10px 0 0" }} />
                    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-53505989/original/7a2002a7-a8dd-4c4e-8da2-e0e4643dcf67.jpeg?im_w=720" alt="" />
                    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-53505989/original/5d5faa49-e54f-4139-9879-ce0adf6c478b.jpeg?im_w=720" alt="" style={{ borderRadius: "0 0 10px 0 " }} />
                </div>
            </div>
            <h3>Phòng trong căn hộ cho thuê của chủ nhà Superman</h3>
            <div className="describeRoom">
                <div className="roomService">
                    <div className="romBed">
                        <FontAwesomeIcon icon="fa-light fa-bed-front" />
                        1 giường đôi
                    </div>
                </div>
                <div className="roomService">
                    <div className="bathRoom">
                        <FontAwesomeIcon icon="fa-duotone fa-shower" />
                        Phòng tắm riêng
                    </div>
                </div>
                <div className="roomService">
                    <div className="house">
                        <FontAwesomeIcon icon="fa-regular fa-house-user" />
                        Chủ nhà sống tại đây nếu gặp ma thì alo tao ngay và luôn Ok
                    </div>
                </div>
            </div>
            <div className="moreDescribe">
                <div className="inRoom"></div>
                <div className="useRoom"></div>
                <div className="returnRoom"></div>
            </div>
            <div className="moreInformation">
                <div className="leftInformation"></div>
                <div className="rightInformation">
                    <h3>$123 / đêm</h3>
                    <div className="book-detail">
                        <div className="top-book">
                            <div className="time-start">
                                <h4>Nhận phòng</h4>
                                <p>6/7/2023</p>
                            </div>
                            <div className="time-end">
                                <h4>Trả phòng</h4>
                                <p>7/7/2023</p>
                            </div>
                        </div>
                        <div className="bottom-book">
                            <h4>Khách</h4>
                            <p>1 Khách</p>
                            <Se>
                                <h3>Người lớn</h3>
                                <h3>Trẻ em</h3>
                                <h3>Em bé</h3>
                                <h3>Thú cưng</h3>
                                <h4>Chỗ ở này cho phép tối đa 3 khách, không tính em bé. Không được phép mang thú cưng.</h4>
                            </Se>
                        </div>
                    </div>
                    <button>Đặt phòng</button>
                    <p>Bạn vẫn chưa bị trừ tiền</p>
                    <p>$123 x 5 đêm <span>$</span></p>
                    <p></p>
                    <p>Tổng trước thuế</p>
                </div>
            </div>
        </div>
    )
}

export default HotelDetail;