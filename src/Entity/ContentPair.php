<?php

namespace App\Entity;

use App\Repository\ContentPairRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ContentPairRepository::class)
 */
class ContentPair
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $placement_key;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $content;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $pack;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $description;

    public function getFullValues() {
        return [
            'id'=>$this->getId(),
            'placement_key'=>$this->getPlacementKey(),
            'content'=>$this->getContent(),
            'pack'=>$this->getPack()
        ];
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPlacementKey(): ?string
    {
        return $this->placement_key;
    }

    public function setPlacementKey(string $placement_key): self
    {
        $this->placement_key = $placement_key;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(?string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getPack(): ?string
    {
        return $this->pack;
    }

    public function setPack(?string $pack): self
    {
        $this->pack = $pack;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }
}
