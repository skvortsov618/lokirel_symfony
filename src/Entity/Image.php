<?php

namespace App\Entity;

use App\Repository\ImageRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ImageRepository::class)
 */
class Image
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=250)
     */
    private $link;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $alt_text;

    public function getValues() {
        return [
            'id'=>$this->getId(),
            'link'=>$this->getLink(),
            'alt_text'=>$this->getAltText()
        ];
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLink(): ?string
    {
        return $this->link;
    }

    public function setLink(string $link): self
    {
        $this->link = $link;

        return $this;
    }

    public function getAltText(): ?string
    {
        return $this->alt_text;
    }

    public function setAltText(?string $alt_text): self
    {
        $this->alt_text = $alt_text;

        return $this;
    }
}
