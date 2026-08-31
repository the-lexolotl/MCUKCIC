import Image from 'next/image'

interface SocialIconProps {
  size?: number
  className?: string
}

export function FacebookIcon({ size = 24, className }: SocialIconProps) {
  return <Image src="/images/social/facebook.svg" alt="Facebook" width={size} height={size} className={className} />
}

export function DiscordIcon({ size = 24, className }: SocialIconProps) {
  return <Image src="/images/social/discord.svg" alt="Discord" width={size} height={size} className={className} />
}

export function InstagramIcon({ size = 24, className }: SocialIconProps) {
  return <Image src="/images/social/instagram.svg" alt="Instagram" width={size} height={size} className={className} />
}

export function YoutubeIcon({ size = 24, className }: SocialIconProps) {
  return <Image src="/images/social/youtube.svg" alt="YouTube" width={size} height={size} className={className} />
}

export function LinkedinIcon({ size = 24, className }: SocialIconProps) {
  return <Image src="/images/social/linkedin.svg" alt="LinkedIn" width={size} height={size} className={className} />
}

export function BlueskyIcon({ size = 24, className }: SocialIconProps) {
  return <Image src="/images/social/bluesky.svg" alt="Bluesky" width={size} height={size} className={className} />
}