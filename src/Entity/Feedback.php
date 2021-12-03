<?php

namespace App\Entity;

use App\Repository\FeedbackRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=FeedbackRepository::class)
 */
class Feedback
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=140, nullable=true)
     * @Assert\Length(max = 140)
     * @Assert\Email(mode="loose")
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=55, nullable=true)
     * @Assert\Length(max=55)
     */
    private $phone;

    /**
     * @ORM\Column(type="string", length=55, nullable=true)
     * @Assert\Length(max=55 )
     */
    private $theme;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Length(max=255)
     */
    private $text;

    /**
     * @ORM\Column(type="string", length=55, nullable=true)
     * @Assert\Length(max=55)
     */
    private $source;

    /**
     * @ORM\Column(type="string", length=55, nullable=true)
     * @Assert\Length(max=55)
     */
    private $callname;

    /**
     * @ORM\Column(type="boolean")
     * @Assert\NotNull
     */
    private $mailing;

    /**
     * @ORM\Column(type="datetime_immutable")
     */
    private $sendtime;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(?string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    public function getTheme(): ?string
    {
        return $this->theme;
    }

    public function setTheme(?string $theme): self
    {
        $this->theme = $theme;

        return $this;
    }

    public function getText(): ?string
    {
        return $this->text;
    }

    public function setText(?string $text): self
    {
        $this->text = $text;

        return $this;
    }

    public function getSource(): ?string
    {
        return $this->source;
    }

    public function setSource(?string $source): self
    {
        $this->source = $source;

        return $this;
    }

    public function getCallname(): ?string
    {
        return $this->callname;
    }

    public function setCallname(?string $callname): self
    {
        $this->callname = $callname;

        return $this;
    }

    public function getMailing(): ?bool
    {
        return $this->mailing;
    }

    public function setMailing(bool $mailing): self
    {
        $this->mailing = $mailing;

        return $this;
    }

    public function getSendtime(): ?\DateTimeImmutable
    {
        return $this->sendtime;
    }

    public function setSendtime(\DateTimeImmutable $sendtime): self
    {
        $this->sendtime = $sendtime;

        return $this;
    }
}
