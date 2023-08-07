"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { HoverCards } from "./HoverCards";

const urls = {
  linkedin: "https://www.linkedin.com/company/echosec-00/",
  instagram: "https://www.instagram.com/echo.sec/",
  discord: "https://discord.gg/qZC9hq3ZA",
  github: "https://github.com/EchoSec00"
}

import echosecLogo from "@/assets/logo_echosec_preta.svg";
import linkedinLogo from "@/assets/logo_linkedin.svg";
import instagramLogo from "@/assets/logo_instagram.svg";
import discordLogo from "@/assets/icons8-discord.svg";
import githubLogo from "@/assets/logo_github.svg";
import { gitHubFollowers } from "@/services/apis";

export default async function HoverCardAsync() {
  const [followersGithub, setFollowersGithub] = useState(0);
  const [followingGithub, setFollowingGithub] = useState(0);
  const [followersInstagram, setFollowersInstagram] = useState(0);
  const [followingInstagram, setFollowingInstagram] = useState(0);
  const [followersLinkedin, setFollowersLinkedin] = useState(0);
  const [followingLinkedin, setFollowingLinkedin] = useState(0);
  const [followersDiscord, setFollowersDiscord] = useState(0);
  const [followingDiscord, setFollowingDiscord] = useState(0);


  useEffect(() => {
    async function getFollowersGithub() {
      try {
        const response = await gitHubFollowers.get("/EchoS3c");
        setFollowersGithub(response.data.length);
      } catch (error) {
        return error;
      }
    }
    
    async function getFollowingGithub() {
      try {
        const response = await gitHubFollowers.get("/EchoS3c/following");
        setFollowingGithub(response.data.length);
      } catch (error) {
        return error;
      }
    }

    getFollowersGithub();
    getFollowingGithub();
  }, []);
  return (
    <div className="flex justify-center flex-col gap-y-4 mt-3">
      <HoverCards iconSocialMedia={linkedinLogo} iconLeague={echosecLogo} url={urls.linkedin} name='EchoSec' profile='EchoSec' description='teste' following={100} followers={10}/>
      <HoverCards iconSocialMedia={instagramLogo} iconLeague={echosecLogo} url={urls.instagram} name="@echo.sec" profile="EchoSec" description='teste' following={100} followers={10}/>
      <HoverCards iconSocialMedia={discordLogo} iconLeague={echosecLogo} url={urls.discord} name='EchoSec' profile='EchoSec' description='teste' following={100} followers={0}/>
      <HoverCards iconSocialMedia={githubLogo} iconLeague={echosecLogo} url={urls.github} name="EchoS3c" profile="EchoSec" description='teste' following={followingGithub} followers={followersGithub}/>
    </div>
  );
}