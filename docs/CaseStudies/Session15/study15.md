---
title: Case | Tea App
description: "case study 15"
id: study15
---

# Tea App: Safety App Gone Security Nightmare

**The purpose of this session:** research the basic technical and legal aspects of launching a digital product that processes real user data

---

## Optional prep

Watch [this video](https://www.youtube.com/watch?v=Pii74I8qwIg) to get an overview of the case
If you watched the video, you can jump straight to the discussion.

---

## The Case

Tea is a dating safety app designed for women. Users can anonymously post photos of men they're dating and get feedback from other women. The app became very popular as women used it to share information and protect each other.

To make sure only women could join, Tea required ID verification. Users had to upload:

* A photo of their driver's license or government ID
* A selfie of their face

The app would match these to verify the person was a woman.

In return, users got access to:

* Background checks on the men they were dating
* Reverse image searches to catch fake profiles
* Phone number lookups
* Criminal record searches

---

## The Disaster

Tea was using Firebase (Google's database service) to store all images, but they never changed the default security settings.

The default Firebase rule says:

> "Allow read and write to anyone"
> with a big warning:
> "Your security rules are defined as public. Anyone with a link can read and write all the data in your database."

Coders discovered that Tea's entire database was open to the public. Anyone with an internet connection could access and download:

* User’s government ID scans
* All user personal verification images

---

## It Gets Worse

Tea also failed to remove metadata from uploaded images. Metadata includes:

* Exact location where each photo was taken (GPS coordinates)
* Date and time of each photo
* Device information

Someone downloaded all the leaked photos and created an interactive map showing exactly where 20,000+ selfies were taken. Users could click on any location and see the GPS coordinates.

One photo was taken at a secret military base.

---

## The Company Response

Tea's [official statement](https://www.teaforwomen.com/cyberincident) claimed:

* The breach only affected "legacy data" from before February 2024
* 72,000 images were exposed
* The problem has been fixed

However, security researchers found photos as recent as June 2024 in the leaked data, and the total data was 60 gigabytes - much larger than claimed.

---

## The Irony

Tea was designed to help women stay safe while dating. Instead, it exposed their:

* Real names and faces
* Home locations (from photo metadata)
* Personal verification document detail

This information could be used by stalkers, identity thieves, or the exact predators the app was meant to protect against.

---

## Discussion Questions

* If you were building an app that needed user verification, how would you do it? Do technical research in teams
* How should startups handle sensitive documents like driver's licenses with a minimum budget?
* What specific Firebase security rules should you use?
* How should apps handle EXIF data and image metadata?

---

## Regulatory Considerations

* How do laws like GDPR apply to this situation?
* What are the legal requirements for handling government ID documents?
* What are the legal requirements for handling app payments?

