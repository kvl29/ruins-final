import Footer from '@/components/linda/footer/footer'
import Navbar from '@/components/linda/navbar/navbar'
import { useAuth } from '@/contexts/auth-context'
import { images } from '@/next.config'
import React, { useEffect, useState } from 'react'
import { TOUR_ADD_POST } from '@/components/config/api-path'

export default function AddPost() {
  const { auth } = useAuth()
  console.log(auth.id)
  // 定義表單資料
  const initialFormData = {
    user_id: auth.id,
    ruin_id: 0,
    event_date: '',
    max_groupsize: 0,
    event_period: 0,
    level_id: 0,
    title: '',
    description: '',
    content: '',
    images: [], // 存放圖片和說明
  }

  const [formData, setFormData] = useState(initialFormData)

  // 紀錄選取的圖片
  const handleImageChange = (e) => {
    const files = e.target.files
    const imageFiles = Array.from(files).map((file) => ({
      file,
      caption: '', // 初始化圖片說明
    }))
    setFormData({
      ...formData,
      images: imageFiles,
    })
  }

  // 更新圖片說明文字
  const handleCaptionChange = (e, index) => {
    const newImages = [...formData.images]
    newImages[index].caption = e.target.value
    setFormData({
      ...formData,
      images: newImages,
    })
  }

  // 等 auth.id 變化後更新 user_id
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      user_id: auth.id,
    }))
  }, [auth.id])

  // 取得輸入的表單資料
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // 處理表單送出
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const formDataToSend = new FormData(e.currentTarget)
    //   const formDataToSend = new FormData();
    // formDataToSend.append('tour_id', formData.tour_id);
    // formDataToSend.append('user_id', formData.user_id);
    // formDataToSend.append('ruin_id', formData.ruin_id);
    // formDataToSend.append('event_date', formData.event_date);
    // formDataToSend.append('max_groupsize', formData.max_groupsize);
    // formDataToSend.append('event_period', formData.event_period);
    // formDataToSend.append('level_id', formData.level_id);
    // formDataToSend.append('title', formData.title);
    // formDataToSend.append('description', formData.description);
    // formDataToSend.append('content', formData.content);

    // // Append images with their descriptions
    // images.forEach((image, index) => {
    //   formDataToSend.append(`image${index + 1}`, image.file);
    //   formDataToSend.append(`image_descrip${index + 1}`, image.image_descrip);
    // });

      // 向後端發出 POST
      const response = await fetch(`${TOUR_ADD_POST}${postId}`, {
        method: 'POST',
        body: formDataToSend,
      })
      if (!response.ok) {
        throw new Error('Failed to create post')  
      }
      console.log('Post created successfully')
      // 在這裡提示成功訊息
    } catch (error) {
      console.error('Error creating post:', error)
    }
  }

  return (
    <>
      <Navbar />
      <div className="pt-28 md:px-[150px] px-5">
        <form
          className="py-16 bg-gradient-to-t from-gray-400 to-gray-100 md:px-[150px] px-5"
          onSubmit={handleSubmit}
        >
          <div className=" bg-white md:grid place-items-center md:px-0 px-5 py-10 space-y-5">
            <div className="w-fit m-auto mb-10">
              <h1 className="text-xl font-semibold border-b border-b-black">
                發起探險行程
              </h1>
            </div>
            <div className="md:w-3/5 space-y-5">
              <div className="text-xl font-semibold">活動詳情</div>
              <div className="flex flex-col space-y-2">
                <div>
                  <label htmlFor="max_groupsize">出團人數：</label>
                  <input
                    id="max_groupsize"
                    name="max_groupsize"
                    value={formData.max_groupsize}
                    onChange={handleChange}
                    type="text"
                    className="text-black bg-zinc-100 rounded p-1 md:w-1/3 w-full"
                  />
                </div>
                <div>
                  <label htmlFor="event_date">出發時間：</label>
                  <input
                    id="event_date"
                    name="event_date"
                    value={formData.event_date}
                    onChange={handleChange}
                    type="datetime-local"
                    className="text-black bg-zinc-100 rounded py-1 md:w-1/3 w-full"
                  />
                </div>
                <div>
                  <label htmlFor="event_period">探險時長：</label>
                  <select
                    id="event_period"
                    name="event_period"
                    value={formData.event_period}
                    onChange={handleChange}
                    className="text-black bg-zinc-100 rounded py-1 md:w-1/3 w-full"
                  >
                    <option value="1">1小時</option>
                    <option value="2">2小時</option>
                    <option value="3">3小時</option>
                    <option value="4">4小時</option>
                    <option value="5">5小時</option>
                    <option value="6">6小時</option>
                    <option value="7">7小時</option>
                    <option value="8">8小時</option>
                    <option value="9">9小時</option>
                    <option value="10">10小時</option>
                    <option value="11">11小時</option>
                    <option value="12">12小時</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="level_id">探險難度：</label>
                  <select
                    id="level_id"
                    name="level_id"
                    value={formData.level_id}
                    onChange={handleChange}
                    className="text-black bg-zinc-100 rounded py-1 md:w-1/3 w-full"
                  >
                    <option value="1">簡單</option>
                    <option value="2">中等</option>
                    <option value="3">困難</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="ruin_id">廢墟名稱：</label>
                  <select
                    id="ruin_id"
                    name="ruin_id"
                    value={formData.ruin_id}
                    onChange={handleChange}
                    className="text-black bg-zinc-100 rounded py-1 md:w-1/3 w-full"
                  >
                    <option value="1">安和路飛碟屋</option>
                    <option value="2">頭汴坑警察官吏派出所</option>
                    <option value="3">飛宏象山國際聯誼中心</option>
                    <option value="4">社子大戲院</option>
                    <option value="5">麗庭莊園</option>
                  </select>
                </div>
              </div>
              <hr />
            </div>
            <div className="md:w-3/5 flex flex-col space-y-5">
              <h2 className="text-xl font-semibold">活動介紹</h2>
              <div className="md:flex">
                <label htmlFor="title">探險標題：</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  className="w-full bg-zinc-100 text-black rounded p-1"
                  onChange={handleChange}
                />
              </div>
              <div className="md:flex align-top">
                <label htmlFor="content">文章內容：</label>
                <textarea
                  id="content"
                  name="content"
                  cols="30"
                  rows="10"
                  value={formData.content}
                  className="w-full bg-zinc-100 text-black rounded p-1"
                  onChange={handleChange}
                ></textarea>
              </div>
              <hr />
            </div>
            <div className="md:w-3/5 flex flex-col space-y-3">
              <h2 className="text-xl font-semibold">上傳照片</h2>
              <label
                htmlFor="image"
                className=" bg-zinc-300 w-fit py-1 px-2 rounded hover:bg-zinc-400"
              >
                選擇圖片
              </label>
              <input
                type="file"
                id="image"
                name="images"
                accept="image/*"
                onChange={handleImageChange}
                multiple
                className="hidden"
              />
              <div className="flex flex-wrap justify-between">
                {formData.images.map((image, index) => (
                  <div key={index} className="flex flex-col mb-4 md:w-[30%]">
                    <img
                      src={URL.createObjectURL(image.file)}
                      alt={`Preview ${index + 1}`}
                      className="md:w-auto md:h-40 object-cover"
                    />
                    <input
                      type="text"
                      id={`caption${index + 1}`}
                      name={`image_descrip`}
                      className="text-black bg-zinc-100 rounded p-1 mt-2"
                      value={image.caption}
                      placeholder="請輸入圖片說明"
                      onChange={(e) => handleCaptionChange(e, index)}
                    />
                  </div>
                ))}
              </div>
              <hr />
            </div>
            <div className="md:w-3/5 flex flex-col space-y-3 pb-5">
              <h2 className="text-xl font-semibold">介紹自己</h2>
              {/* <label htmlFor="">選擇身分：</label>
            <select className="text-black">
              <option value="someOption">探險新手</option>
              <option value="otherOption">探險達人</option>
            </select> */}
              <textarea
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                cols="30"
                rows="10"
                className="text-black bg-zinc-100 rounded"
              ></textarea>
            </div>
            <button
              type="submit"
              className="md:w-[280px] w-full h-[75px] bg-black text-white mt-5 p-2 text-2xl font-semibold"
            >
              建立行程
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}
