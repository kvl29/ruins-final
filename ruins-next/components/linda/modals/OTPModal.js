import React, { useEffect, useState, useRef } from 'react'
import { RiCloseLargeLine } from '@remixicon/react'
import { IoMdEye } from 'react-icons/io'
import { IoMdEyeOff } from 'react-icons/io'
import { MB_EDIT_EMAIL } from '@/components/config/api-path'
import { useAuth } from '@/contexts/auth-context'
import NotifyRed from '../notify/notify-red'
import NotifyGreen from '../notify/notify-green'
import Router, { useRouter } from 'next/router'

export default function OTPModal({setShowOTPModal, isVisible, onClose, newEmail }) {
  if (!isVisible) return null
  const router = useRouter()
  const { auth, logout } = useAuth()
  const [otpInputs, setOtpInputs] = useState(Array(5).fill(''))
  const inputRefs = useRef([])
  const [showRedNotification, setShowRedNotification] = useState(false)
  const [showGreenNotification, setShowGreenNotification] = useState(false)
  const [notificationText, setNotificationText] = useState('')
  const [processCompleted, setProcessCompleted] = useState(false)

  useEffect(() => {
    inputRefs.current[0].focus()
  }, [])

  const handleChange = (index, value) => {
    const newInputs = [...otpInputs]
    newInputs[index] = value
    setOtpInputs(newInputs)

    if (value !== '' && index < otpInputs.length - 1) {
      inputRefs.current[index + 1].focus()
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && otpInputs[index] === '') {
      inputRefs.current[index - 1].focus()
    }
  }

  const otpFields = otpInputs.map((input, index) => (
    <input
      key={index}
      ref={(ref) => (inputRefs.current[index] = ref)}
      type="text"
      className="flex w-1/5 bg-[#121517] text-white text-center text-base p-2 h-16 rounded focus:outline-none focus:border border-white"
      maxLength="1"
      value={input}
      onChange={(e) => handleChange(index, e.target.value)}
      onKeyDown={(e) => handleKeyDown(e, index)}
    />
  ))

  const verifyOTP = async () => {
    const otp = otpInputs.join('')

    const payload = { otp, newEmail }

    try {
      const r = await fetch(`${MB_EDIT_EMAIL}/${auth.id}`, {
        method: 'post',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const result = await r.json()

      if(!result.success) {
        setNotificationText('Invalid OTP')
        setShowRedNotification(true)
      } else {
        setNotificationText('Email updated successfully')
        setShowGreenNotification(true)
        setProcessCompleted(true)
      }
    } catch (ex) {
      console.log(ex)
    }
  }

  useEffect(()=>{
    if(processCompleted){
      setTimeout(async() => {
        await logout()
        setShowOTPModal(false)
        router.push('/member/account/login')
      }, 5000);
    }
  }, [processCompleted])

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-[1000] flex justify-center items-center">
        <div className="flex flex-col md:h-auto h-full relative md:justify-center items-center gap-[37px] py-8 px-8 bg-[#292929] md:rounded-md divide-slate-200 md:w-[400px]">
          <div className="flex items-start w-full">
            <div className="flex flex-col gap-[30px] w-full">
              <div className="flex">
                <div className="flex-none text-xl font-regular font-['IBM Plex Mono'] text-white ">
                  ENTER SECURITY CODE
                </div>
                <div className="flex-1"></div>
                <button className="flex-none"
                disabled={processCompleted}
                >
                  <RiCloseLargeLine className="text-white" onClick={onClose} />
                </button>
              </div>
              <div className="flex flex-col gap-[14px]">
                <div className="text-[14px]">
                  A security code has been sent to:
                </div>
                <div className="text-[14px] font-bold">
                  currentEmail@mgail.com
                </div>
              </div>
            </div>
          </div>
          <div className="gap-[25px] flex w-full flex-col">
            <form className="flex gap-4 items-center">{otpFields}</form>
            <button
              onClick={verifyOTP}
              className="bg-black hover:bg-[#7A7A7A] flex items-center justify-center w-full py-[18px] italic border border-white"
            >
              VERIFY OTP
            </button>

            <div className="text-[14px]">
              If you haven't received an email, check your spam folder
            </div>
            <div className="flex justify-center">
              <a href="#" className="underline hover:text-white text-[#9F9F9F]">
                Resend code
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='fixed bottom-0 w-full bg-black bg-opacity-50 z-[1001]'>
      <NotifyGreen
        onClose={() => {
          setShowGreenNotification(false)
        }}
        text={notificationText}
        show={showGreenNotification}
      />
      <NotifyRed
        onClose={() => {
          setShowRedNotification(false)
        }}
        text={notificationText}
        show={showRedNotification}
      />
      </div>
    </>
  )
}
